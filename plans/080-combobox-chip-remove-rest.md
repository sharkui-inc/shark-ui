# Plan 080: Keep ComboboxChip remove type/onClick after removeRest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 080 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/combobox.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`ComboboxChip` sets `type="button"` and a merged `onClick` (consumer then `clearValue` unless prevented), then spreads `{...removeRest}`. `removeProps={{ type: "submit" }}` (or a raw `onClick`) can turn the remove control into a form submit or drop `clearValue`.

## Current state

```tsx
// combobox.tsx:318-358
const {
  className: removeClassName,
  onClick,
  ...removeRest
} = removeProps ?? {};
// ...
<InputGroupButton
  // ...
  onClick={(event) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      clearValue(value);
    }
  }}
  size="icon-xs"
  type="button"
  {...removeRest}
>
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/combobox.tsx plans/README.md` | Reviewed or STOP |
| Prove order | `rg -n -A30 'removeProps' registry/react/components/combobox.tsx` | `{...removeRest}` before `type` and composed `onClick` |
| Lint | `pnpm exec biome check registry/react/components/combobox.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/combobox.tsx` — `ComboboxChip` remove button only; `plans/README.md` status only.

**Out of scope**: TagsInput chip remove (unless identical and in-file — stay out), docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Destructure type; rest then locked handlers

```tsx
const {
  className: removeClassName,
  onClick,
  type = "button",
  ...removeRest
} = removeProps ?? {};

<InputGroupButton
  aria-label={`Remove ${value}`}
  className={cn(/* unchanged */, removeClassName)}
  size="icon-xs"
  {...removeRest}
  type={type}
  onClick={(event) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      clearValue(value);
    }
  }}
>
```

Default `type` to `"button"`. Composed `onClick` must win over rest.

**Verify**: rest cannot overwrite `onClick`/`type` unless intentionally via destructured `type` (still defaults to button).

### Step 2: Lint and status

Lint; mark 080 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Remove control stays `type="button"` by default after rest
- [ ] `clearValue` still runs unless `defaultPrevented`
- [ ] `plans/README.md` row 080 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Same class as InputGroupAddon / CalendarToday handler merges.
