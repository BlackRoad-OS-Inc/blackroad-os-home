// © 2024-2026 BlackRoad OS, Inc. All Rights Reserved. PROPRIETARY AND CONFIDENTIAL.
import type { NextApiRequest, NextApiResponse } from 'next'
import { randomBytes } from 'crypto'
import { signHmac } from '../../../lib/auth'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const clientId = process.env.GITHUB_CLIENT_ID
  const secret = process.env.SESSION_SECRET
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''

  if (!clientId || !secret) {
    return res.status(500).json({ error: 'OAuth not configured' })
  }

  const state = randomBytes(16).toString('hex')
  const sig = signHmac(state, secret)
  const stateCookie = `${state}.${sig}`

  res.setHeader(
    'Set-Cookie',
    `oauth_state=${stateCookie}; HttpOnly; Path=/; SameSite=Lax; Max-Age=300; Secure`
  )

  const url = new URL('https://github.com/login/oauth/authorize')
  url.searchParams.set('client_id', clientId)
  url.searchParams.set('redirect_uri', `${baseUrl}/api/auth/callback`)
  url.searchParams.set('state', stateCookie)
  url.searchParams.set('scope', 'read:user user:email')

  res.redirect(302, url.toString())
}
