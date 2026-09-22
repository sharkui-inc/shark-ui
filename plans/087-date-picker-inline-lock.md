# Plan 087: Lock DatePicker inline={false} after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 087 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/date-picker.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`DatePicker` wraps `Calendar` with `inline={false}` then `{...rest}`. Rest (or Calendar props) can set `inline` and flip the popover DatePicker into inline Calendar mode — trigger/input composition breaks. Inline calendars should use `Calendar` directly.

## Current state

```tsx
// date-picker.tsx:30-43
export const DatePicker = (props: React.ComponentProps<typeof Calendar>) => {
  const { positioning, ...rest } = props;

  return (
    <Calendar
      data-slot="date-picker"
      inline={false}
      positioning={{
        placement: "top",
        ...positioning,
      }}
      {...rest}
    />
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/date-picker.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A20 'export const DatePicker =' registry/react/components/date-picker.tsx` | `inline={false}` after `{...rest}` |
| Lint | `pnpm exec biome check registry/react/components/date-picker.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/date-picker.tsx` — `DatePicker` root only; `plans/README.md` status only.

**Out of scope**: DatePickerInput (077), Calendar, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Rest then force inline false

```tsx
export const DatePicker = (
  props: Omit<React.ComponentProps<typeof Calendar>, "inline">
) => {
  const { positioning, ...rest } = props;

  return (
    <Calendar
      data-slot="date-picker"
      positioning={{
        placement: "top",
        ...positioning,
      }}
      {...rest}
      inline={false}
    />
  );
};
```

Prefer `Omit<..., "inline">` so callers cannot type `inline`. Behavioral lock (`inline={false}` after rest) is required either way.

**Verify**: rest cannot set `inline`.

### Step 2: Lint and status

Lint; mark 087 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] DatePicker always non-inline
- [ ] Positioning merge preserved
- [ ] `plans/README.md` row 087 is DONE

## STOP conditions

- Public API intentionally allows DatePicker inline — STOP and report (use Calendar instead then)
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Inline date UI → `Calendar`; popover date UI → `DatePicker`.
