# Contributing to BlackRoad OS Home

## Adding Handbook Pages

1. Create a new `.mdx` file under `pages/` with front-matter:
   ```mdx
   ---
   title: Your Page Title
   description: One-line summary
   ---
   ```
2. Keep pages under 120 lines and use concise section headings.
3. Update the relevant `_meta.json` to surface the page in navigation.
4. Run `pnpm lint` to catch formatting issues.

## Content Conventions

- Prefer short paragraphs and bulleted checklists for runbooks.
- Use `<!-- TODO(home-next): ... -->` markers for deferred features.
- Reference related governance or templates using relative links.

## Build Hooks

- `pnpm build` triggers TOC generation (`scripts/generate-toc.ts`) and writes a build signature (`lib/sig.ts`).
- If you add new directories under `pages/`, ensure the generator includes them.

## Requesting work

- Use the **Feature Request** template for new flows, components, or navigation changes.
- Use **Doc Update** for handbook, governance, or template edits and include owners plus acceptance criteria.
- Use **Task** for small chores and **Agent Task** when work should be executable by an agent; include constraints and a clear definition of done.

## Changing core content

For updates to core policies, rituals, or templates:

1. Open a tracking issue (Feature Request or Doc Update) describing the scope, owner, and success criteria.
2. Cross-check any upstream specifications in `BlackRoad-OS/blackroad-os` (emoji workflow language, work card template) and note any required sync steps.
3. Keep diffs small and update any navigation or index files alongside content changes.
4. Summarize the "why" for high-impact changes in the PR description and list the tests or checks you ran.

## Reviewing

Pull requests should include a summary of changes, test commands run, and any screenshots for UI changes.
