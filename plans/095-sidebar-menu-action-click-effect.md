# Plan 095: Lock SidebarMenuAction clickEffect after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 095 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/sidebar.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

Plan 090 locked `clickEffect={false}` after rest on `SidebarGroupAction` and `SidebarMenuButton`. `SidebarMenuAction` still sets `clickEffect={false}` **before** `{...rest}`, so consumers can re-enable the press ripple on menu-action chrome.

## Current state

```tsx
// sidebar.tsx:684-710 SidebarMenuAction — wrong order
export const SidebarMenuAction = (props: SidebarMenuActionProps) => {
  const { className, showOnHover = false, ...rest } = props;

  return (
    <Button
      className={cn(/* ... */, className)}
      clickEffect={false}
      data-sidebar="menu-action"
      data-slot="sidebar-menu-action"
      size="icon-xs"
      variant="ghost"
      {...rest}
    />
  );
};
```

Exemplar (GroupAction after plan 090):

```tsx
{...rest}
clickEffect={false}
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/sidebar.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A25 'export const SidebarMenuAction' registry/react/components/sidebar.tsx` | `clickEffect={false}` after `{...rest}` |
| Confirm siblings | `rg -n 'clickEffect=\{false\}' -B3 -A1 registry/react/components/sidebar.tsx` | GroupAction, MenuButton, and MenuAction all lock after rest |
| Lint | `pnpm exec biome check registry/react/components/sidebar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/sidebar.tsx` — `SidebarMenuAction` only; `plans/README.md` status only.

**Out of scope**: GroupAction / MenuButton (already fixed in 090), Rail/Trigger/mobile, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: clickEffect after rest

```tsx
<Button
  className={cn(/* unchanged */, className)}
  data-sidebar="menu-action"
  data-slot="sidebar-menu-action"
  size="icon-xs"
  variant="ghost"
  {...rest}
  clickEffect={false}
/>
```

Leave `size` / `variant` before rest as today (soft defaults) unless you already see them locked after rest on GroupAction — then match GroupAction for consistency on this one control only. **Required**: `clickEffect={false}` after `{...rest}`.

**Verify**: MenuAction locks clickEffect after rest.

### Step 2: Lint and status

Lint; mark 095 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] SidebarMenuAction locks `clickEffect={false}` after `{...rest}`
- [ ] `pnpm exec biome check registry/react/components/sidebar.tsx` exits 0
- [ ] `plans/README.md` row 095 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- GroupAction / MenuButton lost their plan-090 locks — STOP and report (do not silently re-break them)

## Maintenance notes

- All Sidebar chrome Buttons that force `clickEffect={false}` should use rest-then-lock.
