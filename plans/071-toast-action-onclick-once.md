# Plan 071: Stop double-firing Toast action onClick

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 071 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/toast.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

Shark sets `onClick={toastData.action.onClick}` on `ArkToast.ActionTrigger`. Zag’s `getActionTriggerProps()` already calls `action?.onClick?.()` then dismisses. Ark `mergeProps(zagProps, consumerProps)` composes both handlers → the action runs twice per click (undo/retry fires twice).

## Current state

```tsx
// registry/react/components/toast.tsx:145-154
{!!toastData.action && (
  <ArkToast.ActionTrigger
    asChild
    data-slot="toast-action-trigger"
    onClick={toastData.action.onClick}
  >
    <Button size="sm" variant="secondary">
      {toastData.action.label}
    </Button>
  </ArkToast.ActionTrigger>
)}
```

Zag (`@zag-js/toast` `toast.connect.mjs` ~98-106): `getActionTriggerProps().onClick` → `action?.onClick?.()` then `DISMISS`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/toast.tsx plans/README.md` | Reviewed or STOP |
| Prove no duplicate | `rg -n 'ActionTrigger|action\.onClick' registry/react/components/toast.tsx` | No `onClick={toastData.action.onClick}` |
| Lint | `pnpm exec biome check registry/react/components/toast.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/toast.tsx` — ActionTrigger only; `plans/README.md` status only.

**Out of scope**: CloseTrigger, toaster store, docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Remove redundant onClick

```tsx
<ArkToast.ActionTrigger asChild data-slot="toast-action-trigger">
  <Button size="sm" variant="secondary">
    {toastData.action.label}
  </Button>
</ArkToast.ActionTrigger>
```

Zag still invokes `action.onClick` and dismisses. Keep label rendering.

**Verify**: no Shark-level `onClick` wired to `action.onClick` on ActionTrigger.

### Step 2: Lint and status

Lint; mark 071 DONE.

## Test plan

No component test authorized. If later approved: action toast click runs handler once and dismisses.

## Done criteria

- [ ] ActionTrigger does not set `onClick={toastData.action.onClick}`
- [ ] Label still rendered from `toastData.action.label`
- [ ] `plans/README.md` row 071 is DONE

## STOP conditions

- Zag no longer calls `action.onClick` in getActionTriggerProps — STOP and report (would need a single composed call instead)
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Do not re-add consumer onClick that re-invokes the same action callback.
