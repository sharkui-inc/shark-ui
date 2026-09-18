# Plan 003: Keep the pre-hydration row gap aligned

> **Executor instructions**: Execute sequentially and verify each step. Stop rather than improvising on STOP conditions. Stay on the current branch; do not use `git stash`, commit, push, or alter unrelated work. Update Plan 003 in `plans/README.md` when done.
>
> **Drift check (run first)**: `git diff --stat e38b7195..HEAD -- registry/react/components/masonry.tsx content/docs/components/masonry.mdx registry/react/examples/masonry public/r/masonry.json plans/README.md`

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: MED
- **Depends on**: `plans/002-observe-root-layout-style-changes.md`
- **Category**: bug
- **Planned at**: commit `e38b7195`, 2026-09-17

## Why this matters

Before the client layout effect runs, Masonry is a CSS multi-column list. Its vertical fallback spacing comes from `MasonryItem`’s bottom margin, while hydrated placement uses the computed `rowGap`. The docs and every current example use `gap-x-4 gap-y-6`, so the server/pre-hydration state has a 4-unit vertical gap and the hydrated state has a 6-unit gap. This plan makes independent axes explicit CSS custom properties instead of claiming that Tailwind `gap-y-*` can control a sibling item’s fallback margin.

## Current state

- `registry/react/components/masonry.tsx` owns CSS fallback classes and the client layout algorithm.
- `content/docs/components/masonry.mdx` documents `gap-*`, `gap-x-*`, and `gap-y-*` as the public spacing API.
- Current examples use separate x/y gaps.

```tsx
// registry/react/components/masonry.tsx:102-107, 223-225, 242-247
columnHeights[column] +=
  item.getBoundingClientRect().height + metrics.rowGap;

className={cn(
  "[--gap:--spacing(4)]",
  "relative columns-1 gap-x-(--gap) gap-y-(--gap)",
  className
)}

className={cn(
  "mb-(--gap) break-inside-avoid",
  "data-[masonry-layout=ready]:absolute ...",
)}
```

```mdx
// content/docs/components/masonry.mdx:78-85
Use Tailwind `gap-*` utilities to control spacing. `gap-*` applies the same
value to both axes; use `gap-x-*` and `gap-y-*` when the horizontal and
vertical gaps differ.
```

Preserve semantic `ul > li`, direct-child placement, responsive columns, and the existing default `--gap: --spacing(4)`. Do not introduce a global CSS token or hand-edit generated registry JSON. The target public contract is: `--gap` controls both axes by default; `--masonry-column-gap` and `--masonry-row-gap` may override them independently.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Inspect affected uses | `rg -n 'gap-y-|--gap' registry/react/examples/masonry content/docs/components/masonry.mdx registry/react/components/masonry.tsx` | Every intended public spacing path is reviewed |
| Lint check | `pnpm lint:check` | No new Masonry/docs diagnostic |
| Typecheck | `pnpm typecheck` | Exit 0 |
| Generated registry | `pnpm registry:build` | Exit 0; `public/r/masonry.json` is regenerated |

## Scope

**In scope**:

- `registry/react/components/masonry.tsx`
- `content/docs/components/masonry.mdx`
- `registry/react/examples/masonry/example-default.tsx`
- `registry/react/examples/masonry/example-editorial.tsx`
- `registry/react/examples/masonry/example-accordion.tsx`
- `registry/react/examples/masonry/example-collapsible.tsx`
- `registry/react/examples/masonry/example-rtl.tsx`
- `public/r/masonry.json` — generator output only
- `plans/README.md` — status only

**Out of scope**:

- `styles/globals.css`, `styles/themes.css`, and unrelated layout components.
- Changing the semantic API from a list to generic containers.
- New component test files without explicit approval.

## Git workflow

Keep the active branch and all current uncommitted user changes. Do not stash, switch, reset, commit, push, or open a PR.

## Steps

### Step 1: Define derived axis variables at the root

Keep `[--gap:--spacing(4)]` as the default. Add root-local derived variables so `--masonry-column-gap` and `--masonry-row-gap` each default to `var(--gap)`. Make the root’s `gap-x` and `gap-y` utilities consume these derived variables. This gives the fallback item margin and hydrated `rowGap` a shared value while allowing intentional independent axes through custom properties.

Do not keep `gap-y-*` as the documented independent-row-gap API: it changes the root computed row gap but cannot alter the pre-hydration margin of direct child items.

**Verify**: `rg -n 'gap-y-|--masonry-(column|row)-gap|--gap' registry/react/examples/masonry content/docs/components/masonry.mdx registry/react/components/masonry.tsx` → the source contains the three-variable contract and no scoped example relies on `gap-y-*`.

### Step 2: Implement the single source of truth

Update `Masonry`, `MasonryItem`, and `getMetrics()` only as required by that contract. `MasonryItem`’s fallback `margin-bottom` must consume `--masonry-row-gap`; hydrated `metrics.rowGap` must read the root `gap-y` set from that same variable. `metrics.columnGap` must similarly read root `gap-x` set from `--masonry-column-gap`. Preserve class ordering from `CODE_STYLE.md` and logical RTL positioning.

**Verify**: `pnpm lint:check` → no newly introduced Masonry/docs diagnostics.

### Step 3: Align examples and reference docs

Modify only the scoped examples and docs so they demonstrate the hydration-stable API. Replace `gap-x-4 gap-y-6` with `[--masonry-column-gap:--spacing(4)] [--masonry-row-gap:--spacing(6)]` where distinct axes are desired. In the Spacing section, state that `--gap` controls both axes and name both overrides; remove the claim that `gap-y-*` supports independent vertical spacing. Update the API reference to list the custom properties. Do not change unrelated editorial text or example content.

**Verify**: `rg -n 'gap-y-' registry/react/examples/masonry content/docs/components/masonry.mdx` → no stale scoped example or documentation claim remains.

### Step 4: Generate and validate

Regenerate the registry JSON through the existing script and run strict typechecking.

**Verify**: `pnpm registry:build && pnpm typecheck` → both exit 0.

## Test plan

No component test is authorized now. With explicit approval, add a deterministic DOM test that reads the fallback item margin before the first RAF, then flushes layout and verifies consecutive item y-offsets use the identical documented row gap. Include default spacing, any retained distinct x/y configuration, RTL, and dynamic root style change coverage. Mock geometry and both observer types using the existing `test/setup-dom.ts` environment.

## Done criteria

- [ ] The documented vertical gap equals the fallback item gap before hydration and the calculated `rowGap` after hydration.
- [ ] Docs and all scoped examples use the `--gap` / `--masonry-column-gap` / `--masonry-row-gap` contract.
- [ ] RTL positioning and semantic list markup remain unchanged.
- [ ] `pnpm typecheck` and `pnpm registry:build` exit 0.
- [ ] No generated files were hand-edited and no out-of-scope files changed.
- [ ] Plan 003 status is updated.

## STOP conditions

- A root-local custom-property implementation cannot make fallback margin and hydrated `rowGap` share the same value.
- Keeping the present `gap-y-*` documentation is required for backwards compatibility.
- The live excerpts no longer match.

## Maintenance notes

Future spacing variants must update fallback and measured modes together. Review source and generated registry output for the same public contract; never use examples alone as proof that a Tailwind gap utility controls the pre-hydration multi-column margin.
