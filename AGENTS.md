# Shark UI

Component registry: Ark UI, Tailwind CSS v4, Next.js. https://shark.vini.one

Read [`CODE_STYLE.md`](CODE_STYLE.md) before editing source, examples, docs, or manifests. Shark composition: [`skills/shark-ui/SKILL.md`](skills/shark-ui/SKILL.md). Format/lint: `biome.json`.

## Layout

- Docs: `content/docs/{components,ai-elements,helpers,utilities,hooks}/<name>.mdx`
- Examples: `registry/react/examples/<name>/example-*.tsx`
- Components: `registry/react/components/<name>.tsx`
- Manifests: `registry/manifest/<name>.ts` (`registryDependencies`: full registry JSON URLs)
- LLM: `app/(llms)/`, `lib/llms.ts`

## Boundaries

- Do not hand-edit `public/r/*.json` (from manifests) or `styles/themes.css` (from `lib/theme/catalog.ts`).
- Do not add component `*.test.tsx` / `*.spec.tsx` unless asked. Helper tests live in `test/` (mirror source); harness is `test/setup-dom.ts`.
- Do not run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, `pnpm theme:build`, or any browser (Playwright, MCP, screenshots, localhost) unless the user names that action. `ok` / `implement` is not approval.
- Lint is allowed: `pnpm lint:fix`, `pnpm lint:check`.
- `pnpm typecheck` runs `next build`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes: APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev`: verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
