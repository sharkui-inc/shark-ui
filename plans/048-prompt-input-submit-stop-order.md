# Plan 048: Call PromptInputSubmit onClick before onStop

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 048 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/prompt-input.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

While streaming, `PromptInputSubmit` calls `event.preventDefault()` and `onStop?.()` **before** the consumer `onClick`. Callers cannot intercept or cancel stop (confirm dialogs, unsaved guards). Peer convention is consumer-first + gate on `defaultPrevented`.

## Current state

```tsx
// registry/react/components/prompt-input.tsx:268-274
onClick={(event) => {
  if (isStreaming) {
    event.preventDefault();
    onStop?.();
  }
  onClick?.(event);
}}
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/prompt-input.tsx plans/README.md` | Reviewed or STOP |
| Prove order | `rg -n -A12 'data-slot="prompt-input-submit"' registry/react/components/prompt-input.tsx` | onClick first; onStop only if streaming and !defaultPrevented |
| Lint | `pnpm exec biome check registry/react/components/prompt-input.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/prompt-input.tsx` — `PromptInputSubmit` onClick only; `plans/README.md` status only.

**Out of scope**: PromptInput `child.type` partitioning (direction), docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Reorder click handling

Target shape:

```tsx
onClick={(event) => {
  onClick?.(event);

  if (!isStreaming) {
    return;
  }

  event.preventDefault();

  if (event.defaultPrevented) {
    // Consumer may have called preventDefault in onClick; still prevent
    // native submit when streaming. Only skip onStop when they prevented
    // *after* we need a clear cancel signal — use a dedicated check:
  }
}}
```

**Precise required behavior** (match peers):

1. Call `onClick?.(event)` first.
2. If `isStreaming` and `!event.defaultPrevented`, call `event.preventDefault()` (avoid accidental form submit) then `onStop?.()`.
3. If `isStreaming` and `event.defaultPrevented` (consumer canceled), do **not** call `onStop`.
4. If not streaming, do not call `onStop` (submit proceeds via `type="submit"`).

Recommended implementation:

```tsx
onClick={(event) => {
  onClick?.(event);

  if (!isStreaming || event.defaultPrevented) {
    return;
  }

  event.preventDefault();
  onStop?.();
}}
```

Note: calling `preventDefault` after the consumer check means a consumer who did **not** preventDefault still gets submit suppressed when streaming. Good.

**Verify**: `onStop` is never called before consumer `onClick`; gated by `defaultPrevented`.

### Step 2: Lint and status

Lint; mark 048 DONE.

## Test plan

No component test authorized. If later approved: streaming + `onClick={(e) => e.preventDefault()}` must not call `onStop`.

## Done criteria

- [ ] Consumer `onClick` runs first
- [ ] `onStop` skipped when `defaultPrevented`
- [ ] Streaming still prevents submit / calls `onStop` when not canceled
- [ ] `plans/README.md` row 048 is DONE

## STOP conditions

- Submit button no longer distinguishes streaming
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Do not tackle `child.type` identity in this plan.
