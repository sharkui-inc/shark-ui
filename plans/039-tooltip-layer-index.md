# Plan 039: Align Tooltip stacking with layer-index

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 039 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 99593e94..HEAD -- registry/react/components/tooltip.tsx registry/react/components/hover-card.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `99593e94`, 2026-09-22

## Why this matters

Tooltip content uses hard-coded `z-50`. Peer overlays (hover-card, popover, menu, dialog positioner patterns) use Ark’s `--layer-index`: `z-[calc(50+var(--layer-index,0))]`. Portaled tooltips under nested / higher-layer overlays can paint underneath after multi-trigger / stacking work.

## Current state

```tsx
// registry/react/components/tooltip.tsx:17-19
export const tooltipContentVariants = tv({
  base: [
    "z-50 w-fit",
```

Peer:

```tsx
// registry/react/components/hover-card.tsx:67
"z-[calc(50+var(--layer-index,0))]",
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 99593e94..HEAD -- registry/react/components/tooltip.tsx plans/README.md` | Reviewed; excerpts match or STOP |
| Prove layer-index | `rg -n 'layer-index|z-50' registry/react/components/tooltip.tsx` | Content uses layer-index formula; no lone content `z-50` (unless another intentional surface) |
| Lint | `pnpm exec biome check registry/react/components/tooltip.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/tooltip.tsx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/tooltip.tsx` — `tooltipContentVariants` z-index only
- `plans/README.md` — status row only

**Out of scope**:

- Rewriting all repo `z-50` usages, docs, examples, manifests, tests
- Changing TooltipRootProvider / trigger behavior

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Replace z-50 with layer-index formula

In `tooltipContentVariants` base, replace `"z-50 w-fit"` with `"z-[calc(50+var(--layer-index,0))] w-fit"` (or split tokens equivalently). Match hover-card’s exact utility string.

Do not change animation / color / padding classes.

**Verify**: `rg -n 'z-\[calc\(50\+var\(--layer-index,0\)\)\]' registry/react/components/tooltip.tsx` → match. `rg -n '"z-50' registry/react/components/tooltip.tsx` → no matches in content variants.

### Step 2: Lint and status

Lint; mark 039 DONE in `plans/README.md`.

## Test plan

No component test authorized. Manual (if operator allows): tooltip inside a nested popover/dialog stacks above the overlay peer, not under it.

## Done criteria

- [ ] Tooltip content uses `z-[calc(50+var(--layer-index,0))]`
- [ ] No other tooltip behavior changed
- [ ] `plans/README.md` row 039 is DONE

## STOP conditions

- Tooltip no longer uses `tooltipContentVariants` for Content
- Ark stops publishing `--layer-index` — stop and report
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep Tooltip aligned with hover-card/popover when stacking conventions change.
