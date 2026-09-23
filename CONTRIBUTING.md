# Contributing

How to set up the repo and submit changes.

## Setup

Requires **Node.js 24+** (`engines` in `package.json`) and [pnpm](https://pnpm.io).

```bash
git clone https://github.com/sharkui-inc/shark-ui.git
cd shark-ui
pnpm install
pnpm dev
```

Docs run at http://localhost:3000.

## Commands

| Command               | Description                                                         |
| --------------------- | ------------------------------------------------------------------- |
| `pnpm dev`            | Docs site (`next dev`)                                              |
| `pnpm build`          | `registry:build` + `theme:build` + production Next.js build         |
| `pnpm typecheck`      | Production Next.js build (typecheck). Slow.                         |
| `pnpm test`           | Node test runner for files under `test/`                            |
| `pnpm lint:check`     | Lint (Ultracite/Biome)                                              |
| `pnpm lint:fix`       | Auto-fix lint issues                                                |
| `pnpm registry:build` | Rebuild `public/r/*.json` from manifests                            |
| `pnpm theme:build`    | Generate `styles/themes.css` from `scripts/build-themes.mts`        |

## Before a PR

- Run `pnpm lint:fix`. CI does not gate on `pnpm lint:check` yet.
- Run `pnpm test`.
- Run `pnpm build` (covers registry, theme, and typecheck). If you did not touch registry or theme sources, `pnpm typecheck` is enough.
- If you changed registry source or `registry/manifest`, run `pnpm registry:build` and commit `public/r` so the drift check passes. Vercel regenerates JSON on deploy regardless.
- If you changed `lib/theme/catalog.ts` or `scripts/build-themes.mts`, run `pnpm theme:build` and commit `styles/themes.css` so the theme drift check passes. Vercel regenerates the CSS on deploy regardless.
- Do not hand-edit `public/r/*.json` or `styles/themes.css`.

## Layout

- `registry/react/components/`: component implementations
- `registry/manifest/`: build metadata (`registryDependencies` use full registry JSON URLs)
- `registry/react/examples/<name>/example-*.tsx`: usage examples shown in docs
- `content/docs/{components,ai-components,helpers,utilities,hooks}/`: MDX docs
- `public/r/`: built registry JSON (generated)
- `test/`: helper tests mirroring source (`lib/foo.ts` → `test/lib/foo.test.ts`)
- `app/(llms)/`, `lib/llms.ts`: LLM-oriented surfaces

## Changing components

Typical path for a registry item:

1. Implement or edit `registry/react/components/<name>.tsx`
2. Update `registry/manifest/<name>.ts`
3. Add or update `registry/react/examples/<name>/example-*.tsx`
4. Document in `content/docs/.../<name>.mdx`
5. Run `pnpm registry:build` and commit `public/r`

Style and conventions: [CODE_STYLE.md](CODE_STYLE.md). Shark composition (Ark patterns, forms, collections): [skills/shark-ui/SKILL.md](skills/shark-ui/SKILL.md).

## Pull requests

Open an issue first for substantial changes. Use a focused branch and describe what changed and why. Checklist above before opening the PR.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
