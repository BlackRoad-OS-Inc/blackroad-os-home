# 🏠 BlackRoad OS Home

Operating handbook, governance portal, and templates for teams, humans, and agents.

## What lives here

- **Source of truth** — Decisions, expectations, and rituals in one place.
- **Composable templates** — Copy/paste agendas and review checklists.
- **Search-first** — FlexSearch-powered client index across pages.

## Request intake (issues welcomed)

Use GitHub issues to capture all requests:

- **Feature Request** – For new pages, form flows, or status components. Clearly state the problem and acceptance criteria.
- **Doc Update** – For edits to the handbook, governance, or templates. Include the impacted pages and desired outcomes.
- **Task / Agent Task** – For small chores or agent-executable work. Add constraints and "definition of done" so automation can safely run.

Questions that are not actionable yet belong in [Discussions](https://github.com/BlackRoad-OS/blackroad-os-home/discussions).

## Making changes to core content

Core here means the policies, rituals, and templates that define how BlackRoad OS operates. To change them:

1. Open a **Doc Update** or **Feature Request** issue describing the change, owner, and success criteria.
2. Note any linked upstream specs (emoji workflow language, work card template) from `BlackRoad-OS/blackroad-os` so updates stay in sync.
3. Submit a PR that summarizes the change, updates navigation metadata, and lists any tests run.
4. For high-impact governance edits, include a short "why we changed this" note in the PR description.

## Contributing

- Add pages under `pages/` with front-matter.
- Keep content lean (under 120 lines) and prefer bullets over long prose.
- Run `pnpm lint` before opening a PR.
