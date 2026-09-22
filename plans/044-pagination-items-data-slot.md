# Plan 044: Fix PaginationItems data-slot typo

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 044 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/pagination.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (coordinate with 043 if both edit `pagination.tsx`)
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`PaginationItems` sets `data-slot="pagination-item s"` (space before `s`). Slot-based CSS / selectors expecting `pagination-items` miss the node. Other pagination slots use hyphenated names without typos (`pagination-item`, etc.).

## Current state

```tsx
// registry/react/components/pagination.tsx:189-190
export const PaginationItems = (props: PaginationItemsProps) => (
  <ArkPagination.Context data-slot="pagination-item s" {...props}>
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/pagination.tsx plans/README.md` | Reviewed or STOP |
| Prove typo gone | `rg -n 'pagination-item s' registry/react/components/pagination.tsx` | No matches |
| Prove correct slot | `rg -n 'data-slot="pagination-items"' registry/react/components/pagination.tsx` | Match |
| Lint | `pnpm exec biome check registry/react/components/pagination.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/pagination.tsx` — the `data-slot` string on `PaginationItems` only; `plans/README.md` status only.

**Out of scope**: RootProvider type (043), docs (unless they mention the typo string — unlikely), examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Rename the slot

Change `data-slot="pagination-item s"` → `data-slot="pagination-items"`.

**Verify**: typo string gone; `pagination-items` present.

### Step 2: Lint and status

Lint; mark 044 DONE. Grep the repo for the typo string in docs/examples — if any consumer matched the typo, update them (still in scope only if found under docs/examples referencing this slot).

## Test plan

No component test authorized.

## Done criteria

- [ ] Slot is `pagination-items`
- [ ] `plans/README.md` row 044 is DONE

## STOP conditions

- `PaginationItems` structure removed
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Breaking for anyone who targeted the typo string — extremely unlikely; call out in PR if such selectors exist.
