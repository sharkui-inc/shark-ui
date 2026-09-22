# Plan 086: Lock Autocomplete identity props after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 086 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/autocomplete.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`Autocomplete` sets `allowCustomValue` and `inputBehavior="autocomplete"` then `{...rest}`. Spreading Combobox props or passing those keys silently turns Autocomplete into a plain Combobox (no free-text / wrong filter behavior).

## Current state

```tsx
// autocomplete.tsx:28-39
export const Autocomplete: ArkCombobox.RootComponent = (props) => {
  const { openOnClick = false, ...rest } = props;

  return (
    <Combobox
      allowCustomValue
      data-slot="autocomplete"
      inputBehavior="autocomplete"
      openOnClick={openOnClick}
      {...rest}
    />
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/autocomplete.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A15 'export const Autocomplete' registry/react/components/autocomplete.tsx` | Identity props after `{...rest}` |
| Lint | `pnpm exec biome check registry/react/components/autocomplete.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/autocomplete.tsx` — `Autocomplete` root only; `plans/README.md` status only.

**Out of scope**: Combobox, AutocompleteInput defaults, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Rest then identity

```tsx
<Combobox
  data-slot="autocomplete"
  openOnClick={openOnClick}
  {...rest}
  allowCustomValue
  inputBehavior="autocomplete"
/>
```

**Verify**: rest cannot clear `allowCustomValue` or change `inputBehavior`.

### Step 2: Lint and status

Lint; mark 086 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Autocomplete identity survives rest
- [ ] `plans/README.md` row 086 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Callers who need Combobox semantics should use `Combobox`, not Autocomplete overrides.
