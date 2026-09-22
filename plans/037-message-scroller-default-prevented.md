# Plan 037: Honor defaultPrevented in MessageScrollerButton

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 037 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 99593e94..HEAD -- registry/react/components/message-scroller.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `99593e94`, 2026-09-22

## Why this matters

`MessageScrollerButton` always calls `scrollToEdge` after the consumer `onClick`, ignoring `event.preventDefault()`. Peer Shark controls (`prompt-input.tsx`, `approval-card.tsx`) gate built-in behavior on `event.defaultPrevented`. Consumers cannot cancel the scroll action.

## Current state

```tsx
// registry/react/components/message-scroller.tsx:134-139
onClick={(event) => {
  onClick?.(event);
  scrollArea.scrollToEdge({
    behavior: "smooth",
    edge: direction === "end" ? "bottom" : "top",
  });
```

Exemplar:

```tsx
// registry/react/components/prompt-input.tsx:195-197
if (event.defaultPrevented) {
  return;
}
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 99593e94..HEAD -- registry/react/components/message-scroller.tsx plans/README.md` | Reviewed; excerpts match or STOP |
| Prove gate | `rg -n 'defaultPrevented' registry/react/components/message-scroller.tsx` | Match in MessageScrollerButton onClick |
| Lint | `pnpm exec biome check registry/react/components/message-scroller.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/message-scroller.tsx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/message-scroller.tsx` — `MessageScrollerButton` onClick only
- `plans/README.md` — status row only

**Out of scope**:

- `content-visibility` on MessageScrollerItem (direction / measure-first)
- Docs, examples, manifests, tests

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Gate scrollToEdge on defaultPrevented

After `onClick?.(event)`, if `event.defaultPrevented`, return before `scrollToEdge`. Do not change direction/edge mapping or button visibility logic.

**Verify**: `rg -n -A6 'onClick=\{\(event\)' registry/react/components/message-scroller.tsx` → includes `defaultPrevented` check before `scrollToEdge`.

### Step 2: Lint and status

Lint; mark 037 DONE in `plans/README.md`.

## Test plan

No component test authorized. If later approved: `onClick={(e) => e.preventDefault()}` must not call scroll.

## Done criteria

- [ ] `scrollToEdge` skipped when `defaultPrevented`
- [ ] Default click still scrolls
- [ ] `plans/README.md` row 037 is DONE

## STOP conditions

- Button no longer owns scroll (API drift)
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Do not remove `content-visibility` in this plan.
