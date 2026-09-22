# Plan 051: Merge CalendarTodayTrigger onClick; don’t let rest overwrite it

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 051 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/calendar.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`CalendarTodayTrigger` sets `onClick={() => calendar.selectToday()}` then spreads `{...rest}`. A consumer `onClick` replaces `selectToday` entirely. Same class as SidebarRail (plan 045).

## Current state

```tsx
// registry/react/components/calendar.tsx:96-115
export const CalendarTodayTrigger = (
  props: React.ComponentProps<typeof Button>
) => {
  const { variant = "outline", size = "lg", ...rest } = props;

  return (
    <CalendarContext>
      {(calendar) => (
        <Button
          data-slot="calendar-today-trigger"
          onClick={() => calendar.selectToday()}
          size={size}
          variant={variant}
          {...rest}
        >
          Today
        </Button>
      )}
    </CalendarContext>
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/calendar.tsx plans/README.md` | Reviewed or STOP |
| Prove merge | `rg -n -A15 'CalendarTodayTrigger' registry/react/components/calendar.tsx` | onClick destructured; rest before handler; defaultPrevented gate |
| Lint | `pnpm exec biome check registry/react/components/calendar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/calendar.tsx` — `CalendarTodayTrigger` only; `plans/README.md` status only.

**Out of scope**: ClearTrigger, other calendar parts, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Destructure onClick and protect the handler

```tsx
const { variant = "outline", size = "lg", onClick, ...rest } = props;
// ...
<Button
  data-slot="calendar-today-trigger"
  size={size}
  variant={variant}
  {...rest}
  onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }
    calendar.selectToday();
  }}
>
  Today
</Button>
```

**Verify**: `{...rest}` cannot overwrite `onClick`; `selectToday` runs unless prevented.

### Step 2: Lint and status

Lint; mark 051 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Consumer `onClick` no longer disables Today
- [ ] `defaultPrevented` skips `selectToday`
- [ ] `plans/README.md` row 051 is DONE

## STOP conditions

- `selectToday` / CalendarContext API drifted
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep parity with Sidebar/Tour click merge patterns.
