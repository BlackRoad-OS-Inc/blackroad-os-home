// © 2024-2026 BlackRoad OS, Inc. All Rights Reserved. PROPRIETARY AND CONFIDENTIAL.
import { createHmac } from 'crypto'

/** HMAC-SHA256 hex digest of value using secret. */
export function signHmac(value: string, secret: string): string {
  return createHmac('sha256', secret).update(value).digest('hex')
}

export interface SessionPayload {
  login: string
  name: string
  exp: number
}

/**
 * Build a signed session token: base64(payload).signature
 * The signature covers the raw base64 payload string.
 */
export function buildSession(data: Omit<SessionPayload, 'exp'>, secret: string): string {
  const payload: SessionPayload = { ...data, exp: Date.now() + 86_400_000 }
  const encoded = Buffer.from(JSON.stringify(payload)).toString('base64url')
  const sig = signHmac(encoded, secret)
  return `${encoded}.${sig}`
}

/**
 * Verify and decode a session token.
 * Returns null if the token is missing, tampered, or expired.
 */
export function verifySession(token: string, secret: string): SessionPayload | null {
  const dot = token.lastIndexOf('.')
  if (dot < 0) return null
  const encoded = token.slice(0, dot)
  const sig = token.slice(dot + 1)
  const expectedSig = signHmac(encoded, secret)
  if (sig !== expectedSig) return null
  try {
    const payload = JSON.parse(Buffer.from(encoded, 'base64url').toString()) as SessionPayload
    if (payload.exp < Date.now()) return null
    return payload
  } catch {
    return null
  }
}
