// © 2024-2026 BlackRoad OS, Inc. All Rights Reserved. PROPRIETARY AND CONFIDENTIAL.
import type { NextApiRequest, NextApiResponse } from 'next'
import { signHmac, buildSession } from '../../../lib/auth'

interface GitHubTokenResponse {
  access_token?: string
  error?: string
  error_description?: string
}

interface GitHubUser {
  login: string
  name?: string
  avatar_url?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code, state } = req.query
  const cookieState = req.cookies?.oauth_state

  if (!code || !state || !cookieState || state !== cookieState) {
    return res.status(400).json({ error: 'Invalid OAuth state' })
  }

  const clientId = process.env.GITHUB_CLIENT_ID
  const clientSecret = process.env.GITHUB_CLIENT_SECRET
  const secret = process.env.SESSION_SECRET

  if (!clientId || !clientSecret || !secret) {
    return res.status(500).json({ error: 'OAuth not configured' })
  }

  // Verify state signature
  const [rawState, sig] = cookieState.split('.')
  if (!rawState || !sig || signHmac(rawState, secret) !== sig) {
    return res.status(400).json({ error: 'Invalid OAuth state signature' })
  }

  // Exchange code for access token
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code })
  })
  const tokenData = (await tokenRes.json()) as GitHubTokenResponse

  if (!tokenData.access_token) {
    return res.status(400).json({ error: tokenData.error_description ?? 'OAuth token exchange failed' })
  }

  // Fetch GitHub user profile
  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
      'User-Agent': 'blackroad-os-home/1.0'
    }
  })
  const user = (await userRes.json()) as GitHubUser

  const session = buildSession({ login: user.login, name: user.name ?? user.login }, secret)

  res.setHeader('Set-Cookie', [
    `oauth_state=; HttpOnly; Path=/; Max-Age=0; Secure`,
    `br_session=${session}; HttpOnly; Path=/; SameSite=Lax; Max-Age=86400; Secure`
  ])

  res.redirect(302, '/')
}
