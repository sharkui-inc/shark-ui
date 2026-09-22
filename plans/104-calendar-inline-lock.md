# Plan 104: Lock Calendar inline after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 104 in `plans/README.md`.
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

Shark `Calendar` is the always-inline surface. It sets bare `inline` then `{...rest}`, so a consumer can pass `inline={false}` and flip it into popover mode. `DatePicker` (plan 087) already locks the opposite contract with `{...rest}` then `inline={false}` and `Omit<…, "inline">`.

## Current state

```tsx
// calendar.tsx:23-37
export const Calendar = (
  props: React.ComponentProps<typeof ArkCalendar.Root>
) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <ArkCalendar.Root
      className={cn("[--cell-size:--spacing(9)]", "w-fit", className)}
      data-slot="calendar"
      inline
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};
```

Exemplar (`date-picker.tsx:30-45`):

```tsx
export const DatePicker = (
  props: Omit<React.ComponentProps<typeof Calendar>, "inline">
) => {
  // ...
  return (
    <Calendar
      {...rest}
      inline={false}
    />
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/calendar.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A15 'export const Calendar =' registry/react/components/calendar.tsx` | `{...rest}` then `inline` (or `inline={true}`); ideally `Omit<…, "inline">` on props |
| Lint | `pnpm exec biome check registry/react/components/calendar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/calendar.tsx` — `Calendar` root `inline` lock (+ optional Omit on props type); `plans/README.md` status only.

**Out of scope**: DatePicker (already locked), Calendar cell/trigger parts, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Rest then lock inline

Prefer matching DatePicker’s Omit + post-rest lock:

```tsx
export const Calendar = (
  props: Omit<React.ComponentProps<typeof ArkCalendar.Root>, "inline">
) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <ArkCalendar.Root
      className={cn("[--cell-size:--spacing(9)]", "w-fit", className)}
      data-slot="calendar"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
      inline
    />
  );
};
```

If Omit causes awkward call sites for DatePicker (which wraps Calendar), keep the public props as today but still put `inline` **after** `{...rest}` so rest cannot win. DatePicker already `Omit`s `inline` from its own props and forces `inline={false}` — verify DatePicker still typechecks conceptually (do not run typecheck unless named).

**Verify**: `inline` after `{...rest}`.

### Step 2: Lint and status

Lint; mark 104 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Calendar locks `inline` after `{...rest}`
- [ ] `pnpm exec biome check registry/react/components/calendar.tsx` exits 0
- [ ] `plans/README.md` row 104 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- Omit breaks DatePicker’s use of Calendar in a way that requires DatePicker edits — STOP and report (DatePicker is out of scope unless a one-line type adjust is unavoidable; then STOP)

## Maintenance notes

- Calendar = always inline; DatePicker = always not inline. Keep both locks after rest.
