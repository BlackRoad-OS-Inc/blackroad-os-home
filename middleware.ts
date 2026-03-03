// © 2024-2026 BlackRoad OS, Inc. All Rights Reserved. PROPRIETARY AND CONFIDENTIAL.
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PROTECTED_PREFIXES = ['/dashboard', '/admin']

function hasSession(req: NextRequest): boolean {
  return req.cookies.has('br_session')
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  if (isProtected && !hasSession(req)) {
    const signinUrl = req.nextUrl.clone()
    signinUrl.pathname = '/api/auth/signin'
    return NextResponse.redirect(signinUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*']
}
