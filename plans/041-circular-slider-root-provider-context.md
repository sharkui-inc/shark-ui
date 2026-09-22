# Plan 041: Wrap CircularSliderRootProvider with CircularSliderContextProvider

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 041 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/circular-slider.tsx content/docs/components/circular-slider.mdx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`CircularSliderThumb`, markers, and the progress ring call `_useCircularSlider()` for `size` / `thickness` / `ringRadius` / `thumbSize`. That context is only provided by the composed `CircularSlider` root. Raw `CircularSliderRootProvider` makes the documented headless path throw.

## Current state

```tsx
// registry/react/components/circular-slider.tsx:17
export const CircularSliderRootProvider = ArkAngleSlider.RootProvider;

// circular-slider.tsx:26-30 — CircularSliderContextProvider / _useCircularSlider
// circular-slider.tsx:43-44 — defaults size = 100, thickness = 6
// circular-slider.tsx:63-70 — values: ringRadius, size, thickness, thumbSize
// circular-slider.tsx:120, 183, 286 — consumers call _useCircularSlider()
```

Exemplar: `drawer.tsx` `DrawerRootProvider`. Docs: `circular-slider.mdx` `### CircularSliderRootProvider` (~153).

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/circular-slider.tsx content/docs/components/circular-slider.mdx plans/README.md` | Reviewed or STOP |
| Prove re-export gone | `rg -n 'CircularSliderRootProvider = ArkAngleSlider.RootProvider' registry/react/components/circular-slider.tsx` | No matches |
| Lint | `pnpm exec biome check registry/react/components/circular-slider.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/circular-slider.tsx content/docs/components/circular-slider.mdx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/circular-slider.tsx`; `content/docs/components/circular-slider.mdx` (document `size`/`thickness` on RootProvider); `plans/README.md` status only.

**Out of scope**: Marker generation, examples, manifests, `public/r/*.json`, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Replace the RootProvider re-export

1. Accept Ark RootProvider props plus optional `size = 100`, `thickness = 6`.
2. Compute the same `values` object as `CircularSlider` (`ringRadius`, `thumbSize = Math.max(thickness + 8, 16)`).
3. Wrap:

```tsx
<CircularSliderContextProvider value={values}>
  <ArkAngleSlider.RootProvider {...rest}>{children}</ArkAngleSlider.RootProvider>
</CircularSliderContextProvider>
```

Do not change the composed `CircularSlider` tree (Control/Thumb still live under composed Root for typical usage). RootProvider path is for external machine + Shark-styled descendants.

**Verify**: RootProvider and CircularSlider both mount `CircularSliderContextProvider`.

### Step 2: Document `size` / `thickness` on RootProvider

Defaults `100` / `6`. Note they must match the visual CSS you apply on the consumer tree.

### Step 3: Lint and status

Lint; mark 041 DONE.

## Test plan

No component test authorized. If later approved: RootProvider + Thumb must not throw.

## Done criteria

- [ ] RootProvider wraps Shark circular context with size/thickness defaults
- [ ] Docs updated
- [ ] `plans/README.md` row 041 is DONE

## STOP conditions

- Context shape / `_useCircularSlider` consumers drifted
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep value computation shared with `CircularSlider` if duplication becomes painful (optional private helper — only if you touch both sites cleanly).
