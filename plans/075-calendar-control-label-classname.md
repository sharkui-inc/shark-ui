# Plan 075: Merge CalendarControl/Label className; don’t let props overwrite it

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 075 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/calendar.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (coordinate with 076 if both edit `calendar.tsx`)
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`CalendarControl` and `CalendarLabel` set default `className` then `{...props}`. Consumer `className` replaces defaults (same class as Progress/TreeView before 061/062). `DatePickerLabel` forwards into `CalendarLabel`.

## Current state

```tsx
// calendar.tsx:52-69
export const CalendarControl = (
  props: React.ComponentProps<typeof ArkCalendar.Control>
) => (
  <ArkCalendar.Control
    className="inline-flex items-center gap-2"
    data-slot="calendar-control"
    {...props}
  />
);

export const CalendarLabel = (
  props: React.ComponentProps<typeof ArkCalendar.Label>
) => (
  <ArkCalendar.Label
    className="font-medium text-sm"
    data-slot="calendar-label"
    {...props}
  />
);
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/calendar.tsx plans/README.md` | Reviewed or STOP |
| Prove merge | `rg -n -A12 'export const CalendarControl|export const CalendarLabel' registry/react/components/calendar.tsx` | Both destructure `className` + `cn(defaults, className)` |
| Lint | `pnpm exec biome check registry/react/components/calendar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/calendar.tsx` — Control and Label only; `plans/README.md` status only.

**Out of scope**: YearSelect (076), TodayTrigger (051), docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Destructure and merge

```tsx
export const CalendarControl = (
  props: React.ComponentProps<typeof ArkCalendar.Control>
) => {
  const { className, ...rest } = props;
  return (
    <ArkCalendar.Control
      className={cn("inline-flex items-center gap-2", className)}
      data-slot="calendar-control"
      {...rest}
    />
  );
};
```

Same for Label with `"font-medium text-sm"`.

**Verify**: defaults survive consumer `className`.

### Step 2: Lint and status

Lint; mark 075 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Control merges `className`
- [ ] Label merges `className`
- [ ] `plans/README.md` row 075 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Pair with 076 in the same file when executing both.
