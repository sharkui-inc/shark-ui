# Plan 084: Lock Command palette contract props after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 084 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/command.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`Command` sets palette contract props (`closeOnSelect={false}`, `disableLayer`, `inputBehavior="autohighlight"`, `loopFocus={false}`, `open`, `selectionBehavior="clear"`) then spreads `{...rest}`. Rest can close the always-open palette, re-enable select-to-close, or change highlight/selection semantics.

## Current state

```tsx
// command.tsx:152-176
export const Command: ArkCombobox.RootComponent = (props) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <Combobox
      className={cn(/* ... */, className)}
      closeOnSelect={false}
      data-slot="command"
      disableLayer
      inputBehavior="autohighlight"
      lazyMount={lazyMount}
      loopFocus={false}
      open
      selectionBehavior="clear"
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/command.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A25 'export const Command' registry/react/components/command.tsx` | Contract props after `{...rest}` (or omitted from rest) |
| Lint | `pnpm exec biome check registry/react/components/command.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/command.tsx` — `Command` root only; `plans/README.md` status only.

**Out of scope**: CommandInput/List, Combobox itself, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Rest first, contract last

```tsx
<Combobox
  className={cn(/* unchanged */, className)}
  data-slot="command"
  lazyMount={lazyMount}
  unmountOnExit={unmountOnExit}
  {...rest}
  closeOnSelect={false}
  disableLayer
  inputBehavior="autohighlight"
  loopFocus={false}
  open
  selectionBehavior="clear"
/>
```

Optional: `Omit` those keys from the public props type so TypeScript discourages overrides. Prefer behavioral lock even if types stay wide.

**Verify**: `{...rest}` cannot override the locked props.

### Step 2: Lint and status

Lint; mark 084 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Palette contract props win over rest
- [ ] `plans/README.md` row 084 is DONE

## STOP conditions

- Combobox API no longer accepts these props — STOP and report
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Same class as Autocomplete/ActionBar Root locks (085/086).
