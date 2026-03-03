// © 2024-2026 BlackRoad OS, Inc. All Rights Reserved. PROPRIETARY AND CONFIDENTIAL.
import type { NextApiRequest, NextApiResponse } from 'next'
import stripeConfig from '../../../stripe-config.json'

interface CheckoutRequest {
  tier: 'Basic' | 'Pro' | 'Enterprise'
  successUrl?: string
  cancelUrl?: string
}

interface CheckoutResponse {
  url?: string
  error?: string
}

type StripeSessionResponse = {
  url: string
  id: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CheckoutResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY
  if (!stripeKey) {
    return res.status(500).json({ error: 'Stripe not configured' })
  }

  const { tier, successUrl, cancelUrl } = req.body as CheckoutRequest
  const product = stripeConfig.products.find((p) => p.name.endsWith(tier))
  if (!product) {
    return res.status(400).json({ error: `Unknown tier: ${tier}` })
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''

  const body = new URLSearchParams({
    'mode': 'subscription',
    'payment_method_types[0]': 'card',
    'line_items[0][price_data][currency]': 'usd',
    'line_items[0][price_data][product_data][name]': product.name,
    'line_items[0][price_data][recurring][interval]': product.interval,
    'line_items[0][price_data][unit_amount]': String(product.price),
    'line_items[0][quantity]': '1',
    'success_url': successUrl ?? `${baseUrl}/?checkout=success`,
    'cancel_url': cancelUrl ?? `${baseUrl}/?checkout=cancel`
  })

  const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${stripeKey}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body.toString()
  })

  if (!response.ok) {
    const err = (await response.json()) as { error?: { message?: string } }
    return res.status(502).json({ error: err.error?.message ?? 'Stripe request failed' })
  }

  const session = (await response.json()) as StripeSessionResponse
  res.status(200).json({ url: session.url })
}
