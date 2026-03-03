# BlackRoad OS Home

**© 2024–2026 BlackRoad OS, Inc. All Rights Reserved.**
Founder, CEO & Sole Stockholder: Alexa Louise Amundson

> PROPRIETARY AND CONFIDENTIAL — NOT FOR PUBLIC USE.
> Access requires a valid BlackRoad Contributor API key. See [Access & Contributor Gate](#access--contributor-gate).

---

## Overview

BlackRoad OS Home is the operating handbook, governance portal, and API gateway for the BlackRoad OS platform. It is built on Next.js 14 + Nextra and runs in production on Railway/Cloudflare.

### Products

| Tier | Price | Interval |
|------|-------|----------|
| Basic | $9/mo | Monthly |
| Pro | $29/mo | Monthly |
| Enterprise | $99/mo | Monthly |

---

## Quick Start

```bash
pnpm install
cp .env.example .env.local   # fill in all required values
pnpm dev
```

---

## Authentication (OAuth)

BlackRoad OS Home uses **GitHub OAuth** for authentication. All dashboard and admin routes require a valid session.

### Flow

1. User navigates to `/api/auth/signin` → redirected to GitHub OAuth
2. GitHub redirects to `/api/auth/callback?code=…&state=…`
3. Server exchanges code for token, fetches user profile, sets `br_session` cookie
4. User is redirected to `/`

### Sign out

`GET /api/auth/signout` — clears the session cookie and redirects to `/`.

### Required environment variables

```
GITHUB_CLIENT_ID=        # GitHub OAuth App Client ID
GITHUB_CLIENT_SECRET=    # GitHub OAuth App Client Secret
SESSION_SECRET=          # Random 32-byte hex string for HMAC signing
NEXT_PUBLIC_BASE_URL=    # e.g. https://home.blackroad.io
```

---

## Stripe

Subscriptions are managed through Stripe. Three tiers match `stripe-config.json`.

### Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/api/stripe/checkout` | Create a Stripe Checkout Session |
| `POST` | `/api/stripe/webhook` | Receive and verify Stripe webhook events |

### Required environment variables

```
STRIPE_SECRET_KEY=
STRIPE_PUBLISHABLE_KEY=
STRIPE_WEBHOOK_SECRET=
```

---

## Access & Contributor Gate

Every external API consumer and contributor **must** present a `X-BlackRoad-Api-Key` header on requests to `/api/vendor/proxy`.

```
X-BlackRoad-Api-Key: <your-key>
```

Keys are issued by BlackRoad OS, Inc. at `https://api.blackroad.io/keys`. Without a valid key, all requests return `401 Unauthorized`.

### Required environment variables

```
BLACKROAD_API_KEY=       # Master key (server-side only — never expose publicly)
```

---

## Infrastructure

| Service | Purpose |
|---------|---------|
| Railway | Primary hosting / container runtime |
| Cloudflare | CDN, Workers, DNS, DDoS protection |
| Tailscale | Private mesh network for internal services |

### Cloudflare Workers (wrangler)

```bash
wrangler dev    # local
wrangler deploy # production (requires CLOUDFLARE_API_TOKEN)
```

### Required environment variables

```
CLOUDFLARE_API_TOKEN=
CLOUDFLARE_ACCOUNT_ID=
TAILSCALE_AUTH_KEY=
TAILSCALE_DOMAIN=
```

---

## Development

```bash
pnpm dev          # start dev server on :3000
pnpm build        # production build (generates TOC + beacon)
pnpm lint         # ESLint
```

### API health check

```
GET /api/health  →  { "status": "ok", "service": "blackroad-os-home" }
```

---

## Contributing

1. Obtain a BlackRoad Contributor API key from `https://api.blackroad.io/keys`.
2. Fork → branch → PR against `main`.
3. All PRs must pass `pnpm lint` and include a summary of changes.
4. See `docs/CONTRIBUTING.md` for full guidelines.

---

## License

PROPRIETARY — BlackRoad OS, Inc. All rights reserved. See `LICENSE` for full terms.
No AI systems, third-party tools, or external contributors may use, copy, modify,
or distribute this software without explicit written permission from BlackRoad OS, Inc.
