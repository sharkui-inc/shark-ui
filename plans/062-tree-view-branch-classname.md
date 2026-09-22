# Plan 062: Merge TreeViewBranch className; keep relative

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 062 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/tree-view.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`TreeViewBranch` sets `className={cn("relative")}` then `{...props}`. Consumer `className` removes `relative`, breaking absolute indent-guide / positioned branch chrome. Sibling parts merge `className` correctly.

## Current state

```tsx
// tree-view.tsx:143-151
export const TreeViewBranch = (
  props: React.ComponentProps<typeof ArkTreeView.Branch>
) => (
  <ArkTreeView.Branch
    className={cn("relative")}
    data-slot="tree-view-branch"
    {...props}
  />
);
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/tree-view.tsx plans/README.md` | Reviewed or STOP |
| Prove merge | `rg -n -A12 'export const TreeViewBranch' registry/react/components/tree-view.tsx` | `className={cn("relative", className)}` + `{...rest}` |
| Lint | `pnpm exec biome check registry/react/components/tree-view.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/tree-view.tsx` — `TreeViewBranch` only; `plans/README.md` status only.

**Out of scope**: Other tree parts, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Destructure and merge className

```tsx
export const TreeViewBranch = (
  props: React.ComponentProps<typeof ArkTreeView.Branch>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTreeView.Branch
      className={cn("relative", className)}
      data-slot="tree-view-branch"
      {...rest}
    />
  );
};
```

**Verify**: `relative` always present; consumer classes merge.

### Step 2: Lint and status

Lint; mark 062 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] `relative` survives consumer `className`
- [ ] `plans/README.md` row 062 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Same bug class as ProgressTrack (061).
