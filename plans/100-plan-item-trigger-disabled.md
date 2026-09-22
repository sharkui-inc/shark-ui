# Plan 100: Lock non-collapsible PlanItemTrigger disabled after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 100 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/plan.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

When `collapsible` is false, `PlanItemTrigger` renders a static `ark.button` with `disabled` then `{...rest}`. Consumer rest can set `disabled={false}` and make a non-collapsible row activatable — the branch exists specifically to keep the row inert.

## Current state

```tsx
// plan.tsx:263-280
if (!collapsible) {
  return (
    <ark.button
      className={cn(/* ... */, className)}
      data-slot="plan-item-trigger"
      disabled
      type="button"
      {...rest}
    >
      {content}
    </ark.button>
  );
}
```

Collapsible branch already spreads `{...rest}` without forcing `disabled` — leave it alone.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/plan.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A20 'if \(!collapsible\)' registry/react/components/plan.tsx` | `disabled` after `{...rest}` on non-collapsible button |
| Lint | `pnpm exec biome check registry/react/components/plan.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/plan.tsx` — non-collapsible `PlanItemTrigger` branch only; `plans/README.md` status only.

**Out of scope**: CollapsibleTrigger branch, PlanItemDetailFile (094 DONE), docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: disabled after rest

```tsx
<ark.button
  className={cn(/* unchanged */, className)}
  data-slot="plan-item-trigger"
  type="button"
  {...rest}
  disabled
>
  {content}
</ark.button>
```

Optional: also lock `type="button"` after rest for the same inert contract; required is `disabled` after rest.

**Verify**: rest cannot enable the non-collapsible trigger.

### Step 2: Lint and status

Lint; mark 100 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Non-collapsible PlanItemTrigger locks `disabled` after `{...rest}`
- [ ] Collapsible branch unchanged
- [ ] `pnpm exec biome check registry/react/components/plan.tsx` exits 0
- [ ] `plans/README.md` row 100 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- Non-collapsible branch no longer uses `ark.button` — STOP and report

## Maintenance notes

- Inert plan rows must stay non-interactive; keep disabled as a hard lock.
