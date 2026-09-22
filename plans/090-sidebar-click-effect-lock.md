# Plan 090: Lock Sidebar GroupAction/MenuButton clickEffect after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 090 in `plans/README.md`.
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

`SidebarGroupAction` and `SidebarMenuButton` set `clickEffect={false}` then `{...rest}`. Consumer `clickEffect` re-enables the press ripple on sidebar chrome where the design locks it off.

## Current state

```tsx
// sidebar.tsx:524-548 SidebarGroupAction
const { className, ...rest } = props;
<Button
  className={cn(/* ... */, className)}
  clickEffect={false}
  // ...
  {...rest}
/>

// sidebar.tsx:628-658 SidebarMenuButton
<Button
  className={cn(/* ... */, className)}
  clickEffect={false}
  // ...
  {...rest}
  {...(tooltip ? { id: triggerId } : {})}
/>
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/sidebar.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A20 'SidebarGroupAction|SidebarMenuButton' registry/react/components/sidebar.tsx` | `clickEffect={false}` after `{...rest}` on both |
| Lint | `pnpm exec biome check registry/react/components/sidebar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/sidebar.tsx` — `SidebarGroupAction` and `SidebarMenuButton` only; `plans/README.md` status only.

**Out of scope**: Rail/Trigger/mobile (045/046/049/079), other sidebar parts, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: clickEffect after rest on both buttons

GroupAction:

```tsx
<Button
  className={cn(/* unchanged */, className)}
  data-sidebar="group-action"
  data-slot="sidebar-group-action"
  size="icon-xs"
  variant="ghost"
  {...rest}
  clickEffect={false}
/>
```

MenuButton: put `clickEffect={false}` **after** `{...rest}` and keep the tooltip `id` spread working (id after rest is fine; clickEffect must still win):

```tsx
{...rest}
{...(tooltip ? { id: triggerId } : {})}
clickEffect={false}
```

**Verify**: rest cannot enable clickEffect on either control.

### Step 2: Lint and status

Lint; mark 090 DONE. Scan for other Sidebar `Button`s with the same pattern; only fix GroupAction and MenuButton unless an identical one-liner is adjacent and obvious — stay in scope.

## Test plan

No component test authorized.

## Done criteria

- [ ] GroupAction locks `clickEffect={false}` after rest
- [ ] MenuButton locks `clickEffect={false}` after rest
- [ ] `plans/README.md` row 090 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Same lock-after-rest class as Command/ActionBar Roots.
