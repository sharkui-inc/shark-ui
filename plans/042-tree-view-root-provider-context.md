# Plan 042: Wrap TreeViewRootProvider with TreeViewContextProvider

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 042 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/tree-view.tsx content/docs/components/tree-view.mdx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`TreeViewItem` always calls `_useTreeView()` (for `fileIcons`). Shark context is only mounted by composed `TreeView`. Raw `TreeViewRootProvider` makes any Item under the headless path throw.

## Current state

```tsx
// registry/react/components/tree-view.tsx:20
export const TreeViewRootProvider = ArkTreeView.RootProvider;

// tree-view.tsx:48-52 — TreeViewContextProvider / _useTreeView
// tree-view.tsx:68 — only TreeView mounts provider with { fileIcons }
// tree-view.tsx:353 — Item: const { fileIcons } = _useTreeView();
```

Exemplar: `drawer.tsx` `DrawerRootProvider`. Docs: `tree-view.mdx` `### TreeViewRootProvider` (~376).

Note: plan 034 already forwards Item `className` — do not regress that.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/tree-view.tsx content/docs/components/tree-view.mdx plans/README.md` | Reviewed or STOP |
| Prove re-export gone | `rg -n 'TreeViewRootProvider = ArkTreeView.RootProvider' registry/react/components/tree-view.tsx` | No matches |
| Lint | `pnpm exec biome check registry/react/components/tree-view.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/tree-view.tsx content/docs/components/tree-view.mdx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/tree-view.tsx`; `content/docs/components/tree-view.mdx` (optional `fileIcons` on RootProvider); `plans/README.md` status only.

**Out of scope**: TreeViewItem className (already fixed), examples, manifests, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Replace the RootProvider re-export

Accept Ark RootProvider props plus optional `fileIcons`. Wrap:

```tsx
<TreeViewContextProvider value={{ fileIcons }}>
  <ArkTreeView.RootProvider {...rest}>{children}</ArkTreeView.RootProvider>
</TreeViewContextProvider>
```

**Verify**: both `TreeView` and `TreeViewRootProvider` mount `TreeViewContextProvider`.

### Step 2: Document `fileIcons` on RootProvider

### Step 3: Lint and status

Lint; mark 042 DONE. Confirm `TreeViewItemTitle className={className}` still present.

## Test plan

No component test authorized.

## Done criteria

- [ ] RootProvider wraps Shark tree context
- [ ] Item className forward from 034 intact
- [ ] `plans/README.md` row 042 is DONE

## STOP conditions

- Item no longer uses `_useTreeView`; className forward regresses
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- `fileIcons` optional; undefined is fine for Item resolution.
