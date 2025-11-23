# blackroad-os-home

Marketing/landing hub for BlackRoad OS.

## Development

```bash
npm install
npm run dev
```

## Production build (static export)

```bash
npm run build
npm run start  # serves /out on the configured PORT (default 3000)
```

A health payload is available at `/health.json` returning `{ "status": "ok", "service": "home" }`.
