# Plan 077: Forward DatePickerInput className onto the input

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 077 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/date-picker.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`DatePickerInput` destructures `className` and never uses it. Docs list `className` on the part. `DatePickerTimer` correctly merges `className` onto `InputGroupInput`.

## Current state

```tsx
// date-picker.tsx:88-107
export const DatePickerInput = (props: DatePickerInputProps) => {
  const { size, className, ...rest } = props;

  return (
    <ArkDatePicker.Control data-slot="date-picker-control">
      <InputGroup size={size}>
        <ArkDatePicker.Input asChild data-slot="date-picker-input" {...rest}>
          <InputGroupInput />
        </ArkDatePicker.Input>
        {/* trigger addon */}
      </InputGroup>
    </ArkDatePicker.Control>
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/date-picker.tsx plans/README.md` | Reviewed or STOP |
| Prove apply | `rg -n -A20 'export const DatePickerInput' registry/react/components/date-picker.tsx` | `className` on `InputGroupInput` (or InputGroup) |
| Lint | `pnpm exec biome check registry/react/components/date-picker.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/date-picker.tsx` — `DatePickerInput` only; `plans/README.md` status only.

**Out of scope**: DatePickerTimer (already OK), Calendar, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Pass className to InputGroupInput

```tsx
<ArkDatePicker.Input asChild data-slot="date-picker-input" {...rest}>
  <InputGroupInput className={className} />
</ArkDatePicker.Input>
```

Prefer the visible input (asChild merge) over the group unless layout-only classes clearly belong on `InputGroup`.

**Verify**: `className` is no longer unused.

### Step 2: Lint and status

Lint; mark 077 DONE. Unused `className` must not remain.

## Test plan

No component test authorized.

## Done criteria

- [ ] Consumer `className` applies to the date input control
- [ ] `plans/README.md` row 077 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Match DatePickerTimer’s InputGroupInput className merge.
