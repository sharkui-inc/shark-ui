# Plan 067: Point Tabs underline hover at tabs-trigger

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 067 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/tabs.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

Underline `TabsList` variant uses `*:data-[slot=tabs-tab]:hover:bg-accent`, but `TabsTrigger` sets `data-slot="tabs-trigger"`. No `tabs-tab` slot exists in the repo — underline hover never applies.

## Current state

```tsx
// tabs.tsx:83-88
underline: {
  base: [
    "data-[orientation=vertical]:px-1",
    "data-[orientation=horizontal]:py-1",
    "*:data-[slot=tabs-tab]:hover:bg-accent",
  ],
```

```tsx
// tabs.tsx:156
data-slot="tabs-trigger"
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/tabs.tsx plans/README.md` | Reviewed or STOP |
| Prove fix | `rg -n 'tabs-tab' registry/react/components/tabs.tsx` | No matches |
| Prove selector | `rg -n 'tabs-trigger.*hover|hover:bg-accent' registry/react/components/tabs.tsx` | Uses `tabs-trigger` |
| Lint | `pnpm exec biome check registry/react/components/tabs.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/tabs.tsx` — underline variant selector string only; `plans/README.md` status only.

**Out of scope**: Renaming other slots, docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Fix the selector

Replace:

`*:data-[slot=tabs-tab]:hover:bg-accent`

with:

`*:data-[slot=tabs-trigger]:hover:bg-accent`

Do not change `TabsTrigger`’s `data-slot`.

**Verify**: no `tabs-tab` in `tabs.tsx`.

### Step 2: Lint and status

Lint; mark 067 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Underline hover targets `tabs-trigger`
- [ ] No remaining `tabs-tab` in `tabs.tsx`
- [ ] `plans/README.md` row 067 is DONE

## STOP conditions

- A real `tabs-tab` slot appears elsewhere and was intentional — STOP and report
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Optional later: align indicator slot naming; out of scope.
