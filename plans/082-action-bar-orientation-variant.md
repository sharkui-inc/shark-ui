# Plan 082: Keep ActionBar Separator orientation and Value variant after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 082 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/action-bar.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`ActionBarSeparator` sets `orientation="vertical"` then `{...rest}`. `ActionBarValue` sets `variant="secondary"` then `{...rest}`. Consumer rest can strip the ActionBar chrome contract (vertical rule / secondary count badge). Same class as Progress/CircularSlider overwrite bugs.

## Current state

```tsx
// action-bar.tsx:143-152
<Separator
  className={cn("mx-1 h-1/2", className)}
  data-slot="action-bar-separator"
  orientation="vertical"
  {...rest}
/>

// action-bar.tsx:189-201
<Badge
  className={cn("shrink-0 font-medium text-sm tabular-nums", className)}
  data-slot="action-bar-value"
  variant="secondary"
  {...rest}
>
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/action-bar.tsx plans/README.md` | Reviewed or STOP |
| Prove order | `rg -n -A15 'ActionBarSeparator|ActionBarValue' registry/react/components/action-bar.tsx` | Locked props after rest (or destructured defaults) |
| Lint | `pnpm exec biome check registry/react/components/action-bar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/action-bar.tsx` — Separator and Value only; `plans/README.md` status only.

**Out of scope**: ActionBarBody `data-slot` (style, not planned), docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Rest first, locked props last

Separator:

```tsx
const { className, orientation = "vertical", ...rest } = props;
<Separator
  className={cn("mx-1 h-1/2", className)}
  data-slot="action-bar-separator"
  {...rest}
  orientation={orientation}
/>
```

Value:

```tsx
const { label, count = 0, className, children, variant = "secondary", ...rest } = props;
<Badge
  className={cn("shrink-0 font-medium text-sm tabular-nums", className)}
  data-slot="action-bar-value"
  {...rest}
  variant={variant}
>
```

**Verify**: defaults survive rest; consumers can still override via explicit props.

### Step 2: Lint and status

Lint; mark 082 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Separator defaults to vertical after rest
- [ ] Value defaults to secondary after rest
- [ ] `plans/README.md` row 082 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Optional later: ActionBarBody `data-slot` (rejected as STYLE this batch).
