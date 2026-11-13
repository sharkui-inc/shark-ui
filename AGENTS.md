# Shark UI

Ark UI, Tailwind CSS v4, Next.js. https://shark-ui.com. Product: [`PRODUCT.md`](PRODUCT.md). Visual: [`DESIGN.md`](DESIGN.md) / [`public/design.md`](public/design.md). Style: [`CODE_STYLE.md`](CODE_STYLE.md). Composition: [`skills/shark-ui/SKILL.md`](skills/shark-ui/SKILL.md). Lint: `biome.json`.

## Map

- Docs: `content/docs/{components,ai-components,helpers,utilities,hooks}/<name>.mdx`
- Examples: `registry/react/examples/<name>/example-*.tsx`
- Components: `registry/react/components/<name>.tsx`
- Manifests: `registry/manifest/<name>.ts` (`registryDependencies`: full registry JSON URLs)
- LLM: `app/(llms)/`, `lib/llms.ts`

## Do not

- Hand-edit generated files: `public/r/*.json` (from manifests), `styles/themes.css` (from `scripts/build-themes.mts`).
- Add component `*.test.tsx` / `*.spec.tsx` unless asked. Helper tests: `test/` (mirror source); harness: `test/setup-dom.ts`.
- Run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, `pnpm theme:build`, or any browser (Playwright, MCP, screenshots, localhost) unless the user names that action. `ok` / `implement` is not approval.
- Lint is allowed: `pnpm lint:fix`, `pnpm lint:check`. `pnpm typecheck` runs `next build`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
