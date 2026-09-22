# Plan 085: Lock ActionBar Root non-modal props after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 085 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/action-bar.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`ActionBar` sets `autoFocus={false}`, `closeOnEscape={false}`, `closeOnInteractOutside={false}`, `modal={false}` then `{...rest}`. Rest can re-enable modal focus trap or dismiss-on-escape/outside — bulk action bar steals focus or closes while selecting rows. Separator/Value already lock after rest (082); Root does not.

## Current state

```tsx
// action-bar.tsx:43-68
export const ActionBar = (props: ActionBarProps) => {
  const {
    positioning,
    lazyMount = true,
    unmountOnExit = true,
    ...rest
  } = props;
  // ...
  return (
    <ActionBarProvider value={context}>
      <ArkPopover.Root
        autoFocus={false}
        closeOnEscape={false}
        closeOnInteractOutside={false}
        lazyMount={lazyMount}
        modal={false}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </ActionBarProvider>
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/action-bar.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A25 'export const ActionBar =' registry/react/components/action-bar.tsx` | Four chrome props after `{...rest}` |
| Lint | `pnpm exec biome check registry/react/components/action-bar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/action-bar.tsx` — `ActionBar` root only; `plans/README.md` status only.

**Out of scope**: Separator/Value (082), Trigger/Content, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Rest then lock

```tsx
<ArkPopover.Root
  lazyMount={lazyMount}
  unmountOnExit={unmountOnExit}
  {...rest}
  autoFocus={false}
  closeOnEscape={false}
  closeOnInteractOutside={false}
  modal={false}
/>
```

**Verify**: rest cannot re-enable modal/autoFocus/close-on-*.

### Step 2: Lint and status

Lint; mark 085 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Non-modal ActionBar contract survives rest
- [ ] `plans/README.md` row 085 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep Root chrome lock aligned with Separator/Value (082).
