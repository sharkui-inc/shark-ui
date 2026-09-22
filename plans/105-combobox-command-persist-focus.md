# Plan 105: Lock ComboboxItem and CommandItem persistFocus after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 105 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/combobox.tsx registry/react/components/command.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

Shark forces `persistFocus` on combobox/command items so keyboard selection keeps focus in the list/palette. Both set `persistFocus` **before** `{...rest}`, so `persistFocus={false}` undoes the contract. `CommandItem` re-implements `ArkCombobox.Item` (it does **not** go through `ComboboxItem`), so both sites must be fixed.

## Current state

```tsx
// combobox.tsx:467-477
export const ComboboxItem = (props: ComboboxItemProps) => {
  const { showIndicator = true, className, children, ...rest } = props;
  // ...
  return (
    <ArkCombobox.Item
      className={cn(comboboxItemVariants(), className, showIndicator && item())}
      data-slot="combobox-item"
      persistFocus
      {...rest}
    >
```

```tsx
// command.tsx:282-294
export const CommandItem = (
  props: React.ComponentProps<typeof ComboboxItem>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.Item
      className={cn(comboboxItemVariants(), className)}
      data-slot="command-item"
      persistFocus
      {...rest}
    />
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/combobox.tsx registry/react/components/command.tsx plans/README.md` | Reviewed or STOP |
| Prove locks | `rg -n -A12 'persistFocus' registry/react/components/combobox.tsx registry/react/components/command.tsx` | Both have `persistFocus` **after** `{...rest}` |
| Lint | `pnpm exec biome check registry/react/components/combobox.tsx registry/react/components/command.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/combobox.tsx` — `ComboboxItem` `persistFocus` order
- `registry/react/components/command.tsx` — `CommandItem` `persistFocus` order
- `plans/README.md` — status only

**Out of scope**: Refactoring CommandItem to render `ComboboxItem` (nice-to-have, not required), AutocompleteItem if separate, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: ComboboxItem — persistFocus after rest

```tsx
<ArkCombobox.Item
  className={cn(comboboxItemVariants(), className, showIndicator && item())}
  data-slot="combobox-item"
  {...rest}
  persistFocus
>
```

### Step 2: CommandItem — persistFocus after rest

```tsx
<ArkCombobox.Item
  className={cn(comboboxItemVariants(), className)}
  data-slot="command-item"
  {...rest}
  persistFocus
/>
```

Do **not** only fix ComboboxItem and assume Command inherits — it does not.

**Verify**: both `persistFocus` sites after `{...rest}`.

### Step 3: Lint and status

Lint both files; mark 105 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] ComboboxItem locks `persistFocus` after rest
- [ ] CommandItem locks `persistFocus` after rest
- [ ] `pnpm exec biome check` on both files exits 0
- [ ] `plans/README.md` row 105 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- A third `persistFocus` site appears that is in-scope sibling — fix it only if it is another Item part with the same bug; otherwise STOP and report

## Maintenance notes

- Keep CommandItem and ComboboxItem focus contract in lockstep until CommandItem reuses ComboboxItem.
