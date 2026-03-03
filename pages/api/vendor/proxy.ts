// © 2024-2026 BlackRoad OS, Inc. All Rights Reserved. PROPRIETARY AND CONFIDENTIAL.
//
// Contributor Converter API — all external API consumers and contributors
// MUST present a valid X-BlackRoad-Api-Key header. Without it, access is denied.
//
// Keys are issued by BlackRoad OS, Inc. at https://api.blackroad.io/keys

import type { NextApiRequest, NextApiResponse } from 'next'
import { timingSafeEqual } from 'crypto'

interface ProxyResponse {
  error?: string
  message?: string
  data?: unknown
}

function isValidApiKey(provided: string, master: string): boolean {
  if (provided.length !== master.length) return false
  try {
    return timingSafeEqual(Buffer.from(provided), Buffer.from(master))
  } catch {
    return false
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProxyResponse>
) {
  const masterKey = process.env.BLACKROAD_API_KEY
  if (!masterKey) {
    return res.status(503).json({ error: 'Vendor API not configured' })
  }

  const providedKey = req.headers['x-blackroad-api-key']
  if (!providedKey || typeof providedKey !== 'string') {
    return res.status(401).json({
      error: 'Unauthorized',
      message:
        'A valid X-BlackRoad-Api-Key header is required to access this API. ' +
        'Obtain your key at https://api.blackroad.io/keys'
    })
  }

  if (!isValidApiKey(providedKey, masterKey)) {
    return res.status(401).json({ error: 'Unauthorized', message: 'Invalid API key' })
  }

  // Authenticated — route to internal BlackRoad service mesh
  const target = process.env.SERVICE_REGISTRY_URL ?? 'https://api.blackroad.io/registry'
  const upstreamPath = (req.query['path'] as string | undefined) ?? ''
  const upstreamUrl = `${target}/${upstreamPath}`.replace(/\/+$/, '')

  const upstream = await fetch(upstreamUrl, {
    method: req.method,
    headers: {
      'Content-Type': 'application/json',
      'X-BlackRoad-Service': process.env.SERVICE_NAME ?? 'blackroad-os-home',
      'X-BlackRoad-Org': process.env.SERVICE_ORG ?? 'BlackRoad-OS'
    },
    body: req.method !== 'GET' && req.method !== 'HEAD' ? JSON.stringify(req.body) : undefined
  })

  const data = (await upstream.json().catch(() => ({}))) as unknown
  res.status(upstream.status).json({ data })
}
