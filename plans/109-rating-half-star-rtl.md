# Plan 109: Mirror Rating half-star clip for RTL

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 109 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/rating.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

With `allowHalf`, Rating paints the half-filled star using physical `clip-path: inset(0 50% 0 0)` (left half only). Zag’s half-hit testing is already `dir`-aware, so in RTL the painted half is the wrong physical side relative to pointer/value. Peers already flip fill origin for RTL (`slider.tsx`: `origin-left` + `rtl:origin-right`).

## Current state

```tsx
// rating.tsx:57-64
<span
  className={cn(
    "relative inline-flex",
    "**:data-fg:text-current **:data-fg:[clip-path:inset(0_0_0_0)]",
    "[&[data-half]_[data-fg]]:[clip-path:inset(0_50%_0_0)]",
    "[&:not([data-highlighted])_[data-fg]]:[clip-path:inset(0_100%_0_0)]",
    "[&_svg]:absolute [&_svg]:inset-0 [&_svg]:size-full [&_svg]:text-current"
  )}
  data-half={half ? "" : undefined}
  data-highlighted={highlighted ? "" : undefined}
  data-slot="rating-item-indicator"
>
```

CSS `inset()` order is **top right bottom left**. `inset(0 50% 0 0)` keeps the physical **left** half. RTL needs the physical **right** half: `inset(0 0 0 50%)`.

Exemplar (`slider.tsx:125`):

```tsx
"origin-left data-[orientation=vertical]:origin-bottom rtl:origin-right"
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/rating.tsx plans/README.md` | Reviewed or STOP |
| Prove RTL half | `rg -n 'data-half|clip-path' registry/react/components/rating.tsx` | LTR half clip kept; RTL override present for half fill |
| Lint | `pnpm exec biome check registry/react/components/rating.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/rating.tsx` — half-star `clip-path` classes on the item indicator only; `plans/README.md` status only.

**Out of scope**: Zag rating-group, Icon API, docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Add RTL half clip override

Keep the existing LTR half rule. Add an RTL counterpart that shows the right half:

```tsx
className={cn(
  "relative inline-flex",
  "**:data-fg:text-current **:data-fg:[clip-path:inset(0_0_0_0)]",
  "[&[data-half]_[data-fg]]:[clip-path:inset(0_50%_0_0)]",
  "rtl:[&[data-half]_[data-fg]]:[clip-path:inset(0_0_0_50%)]",
  "[&:not([data-highlighted])_[data-fg]]:[clip-path:inset(0_100%_0_0)]",
  "[&_svg]:absolute [&_svg]:inset-0 [&_svg]:size-full [&_svg]:text-current"
)}
```

Do **not** change the full / empty clip rules unless required for RTL parity (empty `inset(0_100%_0_0)` and full `inset(0_0_0_0)` are direction-agnostic).

**Verify**: half rule has LTR + `rtl:` override; LTR string unchanged.

### Step 2: Lint and status

Lint; mark 109 DONE.

## Test plan

No component test authorized. Do not open browsers unless named.

## Done criteria

- [ ] Half-star clip has RTL override `inset(0_0_0_50%)` (or equivalent that shows the physical right half)
- [ ] LTR half clip `inset(0_50%_0_0)` remains
- [ ] `pnpm exec biome check registry/react/components/rating.tsx` exits 0
- [ ] `plans/README.md` row 109 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- Live markup no longer uses `data-half` / `data-fg` — STOP and report

## Maintenance notes

- Reviewer: if browsers are authorized later, check `allowHalf` under `dir="rtl"` — painted half should match hover/click half.
- Prefer logical fill approaches later if Ark/Zag expose them; this CSS mirror matches Slider’s RTL origin flip.
