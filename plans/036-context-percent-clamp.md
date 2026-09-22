# Plan 036: Clamp Context usage percent at 100%

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 036 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 99593e94..HEAD -- registry/react/components/context.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (coordinate with 035 if both edit `context.tsx`)
- **Category**: bug
- **Planned at**: commit `99593e94`, 2026-09-22

## Why this matters

When `usedTokens > maxTokens`, `usedPercent = usedTokens / maxTokens` exceeds `1`. That value feeds `FormatNumber style="percent"` (trigger + meter) and `Progress value={usedPercent * 100}`, so the UI can show e.g. `150%` and drive Progress above 100. Token overflow is a normal AI context case; percent UI should stay ≤ 100% while raw compact counts can stay unclamped.

## Current state

Three call sites in `registry/react/components/context.tsx`:

```tsx
// ~62 ContextIcon
const usedPercent = maxTokens > 0 ? usedTokens / maxTokens : 0;
// value={usedPercent * 100} on CircularProgress

// ~90 ContextTrigger
const usedPercent = maxTokens > 0 ? usedTokens / maxTokens : 0;
// FormatNumber style="percent" value={usedPercent}

// ~204 ContextMeter
const usedPercent = maxTokens > 0 ? usedTokens / maxTokens : 0;
// FormatNumber percent + Progress value={usedPercent * 100}
```

`CircularProgress` may clamp internally; labels and linear `Progress` do not. Keep `usedTokens` / `maxTokens` compact fraction unclamped.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 99593e94..HEAD -- registry/react/components/context.tsx plans/README.md` | Reviewed; excerpts match or STOP |
| Prove clamp | `rg -n 'usedPercent|Math.min' registry/react/components/context.tsx` | Percent math uses an upper bound of 1 |
| Lint | `pnpm exec biome check registry/react/components/context.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/context.tsx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/context.tsx`
- `plans/README.md` — status row only

**Out of scope**:

- ContextTrigger asChild (plan 035), CircularProgress internals, docs rewrite, examples, manifests, tests

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Shared clamped percent helper

Add a private helper in `context.tsx` (module scope):

```tsx
const getUsedPercent = (usedTokens: number, maxTokens: number) =>
  maxTokens > 0 ? Math.min(1, usedTokens / maxTokens) : 0;
```

Replace the three duplicated `usedPercent` calculations with `getUsedPercent(usedTokens, maxTokens)`.

Do **not** clamp the compact `usedTokens` / `maxTokens` display numbers.

**Verify**: `rg -n 'usedTokens / maxTokens' registry/react/components/context.tsx` → only inside the helper (with `Math.min`).

### Step 2: Lint and status

Lint; mark 036 DONE in `plans/README.md`.

## Test plan

No component test authorized. If later approved: `usedTokens={150}` `maxTokens={100}` → percent label ≤ 100%, Progress value ≤ 100, compact fraction still shows 150 / 100.

## Done criteria

- [ ] All three percent consumers use a ≤1 clamp
- [ ] Compact token counts remain unclamped
- [ ] `plans/README.md` row 036 is DONE

## STOP conditions

- Percent is computed elsewhere / Context API reshaped
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Reviewers: overflow remaining visible via compact counts is intentional.
- Merge carefully with plan 035 if both touch Trigger.
