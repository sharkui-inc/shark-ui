# Plan 093: Lock DiffContent dir="ltr" after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 093 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/diff.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

Plan 091 locked `dir="ltr"` after rest on CodeBlock / JsonTreeView / ToolResult / Resizable. `DiffContent` still sets `dir="ltr"` **before** `{...rest}`, so a consumer `dir` (or RTL passthrough) undoes the forced-LTR mono diff body. Sibling `DiffFile` / `DiffStats` already lock after rest.

## Current state

```tsx
// diff.tsx:147-158 DiffContent — wrong order
<ark.div
  className={cn(/* ... */, className)}
  data-slot="diff-content"
  dir="ltr"
  {...rest}
>
  <ScrollArea className="flex-1" dir="ltr" overscrollContain>
```

Exemplar (`resizable.tsx:22-27`):

```tsx
{...rest}
dir="ltr"
```

`DiffFile` on the same file already uses `{...rest}` then `dir="ltr"` — match that.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/diff.tsx plans/README.md` | Reviewed or STOP |
| Prove order | `rg -n -A8 'data-slot="diff-content"' registry/react/components/diff.tsx` | `dir="ltr"` appears after `{...rest}` on DiffContent |
| Lint | `pnpm exec biome check registry/react/components/diff.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/diff.tsx` — `DiffContent` root `dir` order only; `plans/README.md` status only.

**Out of scope**: DiffFile / DiffStats / DiffLine gutter geometry, ScrollArea `dir` prop (hardcoded child, not rest), docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Move DiffContent dir after rest

```tsx
<ark.div
  className={cn(/* unchanged */, className)}
  data-slot="diff-content"
  {...rest}
  dir="ltr"
>
  <ScrollArea className="flex-1" dir="ltr" overscrollContain>
```

Leave the inner `ScrollArea` `dir="ltr"` as-is (not a rest overwrite).

**Verify**: DiffContent root has `{...rest}` then `dir="ltr"`.

### Step 2: Lint and status

Lint; mark 093 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] DiffContent locks `dir="ltr"` after `{...rest}`
- [ ] `pnpm exec biome check registry/react/components/diff.tsx` exits 0
- [ ] `plans/README.md` row 093 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- DiffFile / DiffStats order was also broken and fixing them seems required — STOP and report (they should already be correct; do not expand scope without operator OK)

## Maintenance notes

- Keep Diff LTR surfaces aligned with Resizable / DiffFile rest-then-`dir` order.
