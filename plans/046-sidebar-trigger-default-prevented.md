# Plan 046: Honor defaultPrevented in SidebarTrigger

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 046 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/sidebar.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (coordinate with 045/049)
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`SidebarTrigger` calls consumer `onClick` then always `toggleSidebar()`. Peers (MessageScrollerButton plan 037, ApprovalCard) gate on `event.defaultPrevented`. Consumers cannot cancel the toggle.

## Current state

```tsx
// registry/react/components/sidebar.tsx:297-300
onClick={(event) => {
  onClick?.(event);
  toggleSidebar();
}}
```

Also note `{...rest}` is after `onClick` on Trigger (`303`) — same overwrite class as Rail. Fix both: move `{...rest}` before the merged `onClick`, and gate on `defaultPrevented`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/sidebar.tsx plans/README.md` | Reviewed or STOP |
| Prove gate | `rg -n 'defaultPrevented' registry/react/components/sidebar.tsx` | Present in SidebarTrigger (and Rail if 045 landed) |
| Lint | `pnpm exec biome check registry/react/components/sidebar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/sidebar.tsx` — `SidebarTrigger` onClick/`rest` order; `plans/README.md` status only.

**Out of scope**: Rail (045), open/openMobile (049), docs, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Gate toggle and protect onClick from rest

```tsx
<Button
  // ...
  {...rest}
  onClick={(event) => {
    onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }
    toggleSidebar();
  }}
>
```

Keep size/variant/data-slot as today. Ensure `onClick` is not in `rest`.

**Verify**: `defaultPrevented` check exists; `{...rest}` precedes the handler.

### Step 2: Lint and status

Lint; mark 046 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] `preventDefault` cancels toggle
- [ ] Consumer onClick cannot be clobbered by rest
- [ ] `plans/README.md` row 046 is DONE

## STOP conditions

- Trigger no longer uses Button / toggleSidebar
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep Trigger and Rail handler shape identical after 045+046.
