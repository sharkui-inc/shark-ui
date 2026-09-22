# Plan 102: Lock SkipNavContent and SidebarRail tabIndex={-1} after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 102 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/skip-nav.tsx registry/react/components/sidebar.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`SkipNavContent` and `SidebarRail` force `tabIndex={-1}` (programmatic focus / keep rail out of sequential tab order) then spread `{...rest}`. Rest can set `tabIndex={0}` (or other) and break skip-nav landing or put the rail in the tab ring.

## Current state

```tsx
// skip-nav.tsx:52-63
export const SkipNavContent = (props: SkipNavContentProps) => {
  const { id = SKIP_NAV_ID, className, ...rest } = props;

  return (
    <ark.div
      className={cn("outline-hidden", className)}
      data-slot="skip-nav-content"
      id={id}
      tabIndex={-1}
      {...rest}
    />
  );
};

// sidebar.tsx:332-360 SidebarRail
<ark.button
  aria-label="Toggle Sidebar"
  className={cn(/* ... */, className)}
  data-sidebar="rail"
  data-slot="sidebar-rail"
  tabIndex={-1}
  title="Toggle Sidebar"
  type="button"
  {...rest}
  onClick={/* defaultPrevented gate — keep */}
/>
```

SidebarRail already locks `onClick` after rest (plan 045/046 class) — do **not** move `onClick` back before rest.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/skip-nav.tsx registry/react/components/sidebar.tsx plans/README.md` | Reviewed or STOP |
| Prove SkipNav | `rg -n -A12 'export const SkipNavContent' registry/react/components/skip-nav.tsx` | `tabIndex={-1}` after `{...rest}` |
| Prove Rail | `rg -n -A25 'export const SidebarRail' registry/react/components/sidebar.tsx` | `tabIndex={-1}` after `{...rest}`; `onClick` still after rest |
| Lint | `pnpm exec biome check registry/react/components/skip-nav.tsx registry/react/components/sidebar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/skip-nav.tsx` — `SkipNavContent` `tabIndex`
- `registry/react/components/sidebar.tsx` — `SidebarRail` `tabIndex` only
- `plans/README.md` — status only

**Out of scope**: SkipNavLink, other Sidebar parts, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: SkipNavContent tabIndex after rest

```tsx
<ark.div
  className={cn("outline-hidden", className)}
  data-slot="skip-nav-content"
  id={id}
  {...rest}
  tabIndex={-1}
/>
```

### Step 2: SidebarRail tabIndex after rest

Keep `onClick` after rest. Put `tabIndex={-1}` after `{...rest}` as well (order among post-rest locks: `tabIndex` then `onClick`, or `tabIndex` immediately after rest before `onClick` — both fine as long as both win over rest):

```tsx
{...rest}
tabIndex={-1}
onClick={(event) => {
  onClick?.(event);
  if (event.defaultPrevented) {
    return;
  }
  toggleSidebar();
}}
```

Leave soft `type="button"` / `title` before rest unless you already move them after for consistency — **required** is `tabIndex={-1}` after rest.

**Verify**: both sites lock `tabIndex={-1}` after rest; Rail `onClick` gate intact.

### Step 3: Lint and status

Lint both files; mark 102 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] SkipNavContent locks `tabIndex={-1}` after rest
- [ ] SidebarRail locks `tabIndex={-1}` after rest; `onClick` still after rest
- [ ] `pnpm exec biome check` on both files exits 0
- [ ] `plans/README.md` row 102 is DONE

## STOP conditions

- Moving `tabIndex` would require changing SkipNavLink / rail geometry — STOP and report
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Programmatic-focus targets and non-tabbable rails must keep `tabIndex={-1}` as a hard lock.
