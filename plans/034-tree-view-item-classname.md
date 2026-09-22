# Plan 034: Forward TreeViewItem className to TreeViewItemTitle

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 034 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 99593e94..HEAD -- registry/react/components/tree-view.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `99593e94`, 2026-09-22

## Why this matters

`TreeViewItem` extends `TreeViewItemTitle` props and destructures `className`, but never passes it to `TreeViewItemTitle`. Callers’ `className` is a silent no-op. Other tree parts correctly use `cn(..., className)`.

## Current state

```tsx
// registry/react/components/tree-view.tsx:350-380
export const TreeViewItem = (props: TreeViewItemProps) => {
  const { icon: Icon = null, className, children, ...rest } = props;
  // ...
              <TreeViewItemTitle {...rest}>{children}</TreeViewItemTitle>
```

`TreeViewItemTitle` (~404-419) already applies `className` via `cn(...)` when provided.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 99593e94..HEAD -- registry/react/components/tree-view.tsx plans/README.md` | Reviewed; excerpts match or STOP |
| Prove forward | `rg -n 'TreeViewItemTitle' -A2 registry/react/components/tree-view.tsx` | Title receives `className={className}` or `className` in props |
| Lint | `pnpm exec biome check registry/react/components/tree-view.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/tree-view.tsx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/tree-view.tsx` — TreeViewItem only
- `plans/README.md` — status row only

**Out of scope**:

- BranchItem / other tree parts, docs, examples, manifests, `public/r/*.json`, tests

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Pass className to TreeViewItemTitle

Change the leaf title render to forward `className`, e.g.:

```tsx
<TreeViewItemTitle className={className} {...rest}>
  {children}
</TreeViewItemTitle>
```

Do not put `className` on the icon wrapper unless the type/docs say so — the props interface extends `TreeViewItemTitle`. Keep renaming / icon branches unchanged.

**Verify**: `className` is no longer discarded-only; it appears on `TreeViewItemTitle`.

### Step 2: Lint and status

Lint; mark 034 DONE in `plans/README.md`.

## Test plan

No component test authorized. If later approved: render `TreeViewItem className="text-red-500"` and assert the title node receives the class.

## Done criteria

- [ ] `TreeViewItem` `className` reaches `TreeViewItemTitle`
- [ ] Icon / renaming paths unchanged in behavior
- [ ] `plans/README.md` row 034 is DONE

## STOP conditions

- `TreeViewItem` no longer destructures `className` / structure drifted
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Prefer forwarding to the typed title surface; don’t invent a second className target without a docs change.
