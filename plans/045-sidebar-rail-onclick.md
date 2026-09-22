# Plan 045: Preserve SidebarRail toggle when consumer passes onClick

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 045 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/sidebar.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (coordinate with 046/049 if they edit `sidebar.tsx`)
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`SidebarRail` sets `onClick={toggleSidebar}` then spreads `{...rest}` afterward. A consumer `onClick` completely replaces the toggle — rail stops collapsing/expanding. `SidebarTrigger` already destructures and merges `onClick`.

## Current state

```tsx
// registry/react/components/sidebar.tsx:311-341
export const SidebarRail = (props: React.ComponentProps<typeof ark.button>) => {
  const { className, ...rest } = props;
  // ...
      onClick={toggleSidebar}
      // ...
      {...rest}
    />
};

// Contrast SidebarTrigger:288-299 — destructures onClick, merges then toggleSidebar
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/sidebar.tsx plans/README.md` | Reviewed or STOP |
| Prove merge | `rg -n -A8 'SidebarRail' registry/react/components/sidebar.tsx` | onClick destructured; toggle after consumer; onClick not overwritten by rest |
| Lint | `pnpm exec biome check registry/react/components/sidebar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/sidebar.tsx` — `SidebarRail` only; `plans/README.md` status only.

**Out of scope**: SidebarTrigger defaultPrevented (046), open/openMobile (049), docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Merge onClick like SidebarTrigger

1. Destructure `onClick` from props (with `className`).
2. Put `{...rest}` **before** the merged `onClick` handler (so rest cannot overwrite it).
3. Handler:

```tsx
onClick={(event) => {
  onClick?.(event);
  if (event.defaultPrevented) {
    return;
  }
  toggleSidebar();
}}
```

Including `defaultPrevented` here aligns Rail with plan 046’s Trigger contract in one shot (acceptable and preferred).

**Verify**: `onClick={toggleSidebar}` alone is gone; rest cannot clobber the handler.

### Step 2: Lint and status

Lint; mark 045 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Consumer `onClick` no longer disables toggle
- [ ] `defaultPrevented` skips toggle
- [ ] `plans/README.md` row 045 is DONE

## STOP conditions

- Rail API removed / no longer a button
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- If 046 lands separately, keep Trigger/Rail handlers consistent.
