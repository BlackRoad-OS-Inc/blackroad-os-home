# BlackRoad OS · Home Handbook

An operating-handbook & governance portal for the BlackRoad OS. Built with Nextra Docs on Next.js 14.

## Quickstart

```bash
pnpm i
pnpm dev          # http://localhost:3000
pnpm build        # static export to out/ (gh-pages ready)
```

Deploy (handled by CI):

```bash
GIT_USER=github-actions pnpm run deploy
```

## Project Layout

- `pages/` — MDX handbook sections and templates.
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

## Linting & Formatting

- ESLint (with `eslint-mdx`) and Prettier are configured. Run `pnpm lint`.
- Tailwind config is present for future styling needs.

## Environment

Copy `home.env.example` to `.env.local` if you need to experiment with feature flags or future auth keys. No secrets are required for local dev.
