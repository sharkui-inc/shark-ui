# Plan 047: Honor defaultPrevented in TourTrigger

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 047 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/tour.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`TourTrigger` always calls `tour.start()` after consumer `onClick`, ignoring `defaultPrevented`. Consumers cannot cancel starting a tour (confirm dialogs, guards). Same contract as MessageScrollerButton / ApprovalCard.

## Current state

```tsx
// registry/react/components/tour.tsx:123-137
export const TourTrigger = (props: React.ComponentProps<typeof ark.button>) => {
  const { onClick, ...rest } = props;
  const tour = useArkTourContext();
  return (
    <ark.button
      data-slot="tour-trigger"
      type="button"
      {...rest}
      onClick={(event) => {
        onClick?.(event);
        tour.start();
      }}
    />
  );
};
```

`{...rest}` is already before `onClick` — keep that.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/tour.tsx plans/README.md` | Reviewed or STOP |
| Prove gate | `rg -n 'defaultPrevented' registry/react/components/tour.tsx` | Match in TourTrigger |
| Lint | `pnpm exec biome check registry/react/components/tour.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/tour.tsx` — `TourTrigger` onClick only; `plans/README.md` status only.

**Out of scope**: Tour overlay/body lock, ActionTrigger, docs, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Gate tour.start

```tsx
onClick={(event) => {
  onClick?.(event);
  if (event.defaultPrevented) {
    return;
  }
  tour.start();
}}
```

**Verify**: `defaultPrevented` precedes `tour.start()`.

### Step 2: Lint and status

Lint; mark 047 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] `preventDefault` cancels `tour.start()`
- [ ] Default click still starts the tour
- [ ] `plans/README.md` row 047 is DONE

## STOP conditions

- TourTrigger no longer uses `tour.start`
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Do not change ActionTrigger in this plan.
