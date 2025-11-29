# 🏠 BlackRoad OS · Home Handbook

> **Company Home 🏠📚** – handbook, meeting templates, governance, and "how we work" operating system.

An operating-handbook & governance portal for the BlackRoad OS. Built with Nextra Docs on Next.js 14.

## 🎯 Mission

Be the **home base** for BlackRoad OS, Inc. – the place every human/agent lands first.

For the full system specification including ownership, design principles, and success criteria, see **[SYSTEM.md](./SYSTEM.md)**.

## Quickstart

```bash
pnpm i
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start:home   # start production server on PORT (default 3000)
```

## Deployment

### Railway Deployment

This service is configured for Railway deployment using Nixpacks.

Configuration files:
- `railway.toml` - Railway build and deploy settings

Environment variables (set automatically via railway.toml):
- `SERVICE_NAME` - blackroad-os-home
- `PORT` - 3000
- `ENVIRONMENT` - production

### Healthcheck

The service exposes a health endpoint at `/api/health/` that returns:
```json
{
  "status": "ok",
  "service": "blackroad-os-home"
}
```

### GitHub Pages (Static Export)

For static export deployment (gh-pages), temporarily add `output: 'export'` to `next.config.mjs`:

```bash
GIT_USER=github-actions pnpm run deploy
```

## Project Layout

- `pages/` — MDX handbook sections and templates.
- `pages/api/` — API routes (health endpoint).
- `lib/` — helpers for signing builds and client-side search.
- `scripts/` — post-build hooks and TOC generation utilities.
- `docs/` — contributor guidance.
- `public/` — static assets, generated beacon, and exported site.

## Development Notes

- Content files use front-matter (`--- title: ... ---`). Keep pages under 120 lines.
- `npm run build` triggers TOC generation and build signature writing.
- FlexSearch powers the client-side index; see `lib/search.ts` and `components/SearchPanel`.
- Auth is read-only; GitHub SSO is stubbed for future integration.
- Use the TODO markers (`<!-- TODO(home-next): ... -->`) to track deferred components.

## Start Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm start:home` | Start production server (Railway compatible) |
| `pnpm lint` | Run ESLint |

## Linting & Formatting

- ESLint (with `eslint-mdx`) and Prettier are configured. Run `pnpm lint`.
- Tailwind config is present for future styling needs.

## Environment

Copy `home.env.example` to `.env.local` if you need to experiment with feature flags or future auth keys. No secrets are required for local dev.
