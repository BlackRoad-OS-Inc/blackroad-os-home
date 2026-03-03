// © 2024-2026 BlackRoad OS, Inc. All Rights Reserved. PROPRIETARY AND CONFIDENTIAL.
import type { NextApiRequest, NextApiResponse } from 'next'
import { createHmac, timingSafeEqual } from 'crypto'

interface StripeWebhookEvent {
  type: string
  data: { object: Record<string, unknown> }
}

export const config = { api: { bodyParser: false } }

function readRawBody(req: NextApiRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = []
    req.on('data', (chunk: Buffer) => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

function verifyStripeSignature(rawBody: Buffer, header: string, secret: string): boolean {
  const parts = Object.fromEntries(
    header.split(',').map((p) => {
      const [k, v] = p.split('=')
      return [k, v]
    })
  )
  const timestamp = parts['t']
  const signatures: string[] = header
    .split(',')
    .filter((p) => p.startsWith('v1='))
    .map((p) => p.slice(3))

  if (!timestamp || signatures.length === 0) return false

  const signedPayload = `${timestamp}.${rawBody.toString('utf8')}`
  const expected = createHmac('sha256', secret).update(signedPayload).digest('hex')

  return signatures.some((sig) => {
    try {
      return timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'))
    } catch {
      return false
    }
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) {
    return res.status(500).json({ error: 'Stripe webhook secret not configured' })
  }

  const signature = req.headers['stripe-signature']
  if (!signature || typeof signature !== 'string') {
    return res.status(400).json({ error: 'Missing Stripe signature' })
  }

  const rawBody = await readRawBody(req)
  if (!verifyStripeSignature(rawBody, signature, webhookSecret)) {
    return res.status(400).json({ error: 'Webhook signature verification failed' })
  }

  const event = JSON.parse(rawBody.toString('utf8')) as StripeWebhookEvent

  switch (event.type) {
    case 'checkout.session.completed':
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'invoice.paid':
      // TODO: persist subscription state to database
      break
    default:
      // Unhandled event type — acknowledge receipt
      break
  }

  res.status(200).json({ received: true })
}
