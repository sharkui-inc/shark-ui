# Plan 076: Apply CalendarYearSelect className (match MonthSelect)

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 076 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/calendar.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (coordinate with 075 if both edit `calendar.tsx`)
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`CalendarYearSelect` destructures `className` then never applies it (`cn(nativeSelectVariants())` only). `CalendarMonthSelect` correctly uses `cn(nativeSelectVariants(), className)`.

## Current state

```tsx
// calendar.tsx:128-142
const { className, ...rest } = props;
<ArkCalendar.YearSelect
  className={cn(nativeSelectVariants())}
  data-slot="calendar-year-select"
  {...rest}
/>

// MonthSelect ~161-164
className={cn(nativeSelectVariants(), className)}
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/calendar.tsx plans/README.md` | Reviewed or STOP |
| Prove merge | `rg -n -A10 'ArkCalendar.YearSelect' registry/react/components/calendar.tsx` | `cn(nativeSelectVariants(), className)` |
| Lint | `pnpm exec biome check registry/react/components/calendar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/calendar.tsx` — YearSelect only; `plans/README.md` status only.

**Out of scope**: Control/Label (075), MonthSelect (already correct), docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Mirror MonthSelect

```tsx
className={cn(nativeSelectVariants(), className)}
```

**Verify**: YearSelect applies consumer `className`.

### Step 2: Lint and status

Lint; mark 076 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] YearSelect merges `className` like MonthSelect
- [ ] `plans/README.md` row 076 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep Year/Month select chrome in lockstep.
