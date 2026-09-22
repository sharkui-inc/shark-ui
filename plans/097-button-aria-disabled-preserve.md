# Plan 097: Preserve consumer aria-disabled on idle Button

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 097 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/button.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`Button` spreads `{...rest}` then always sets `aria-disabled={isLoading || undefined}`. When idle (`isLoading` false), that becomes `undefined` and **clears** any consumer `aria-disabled` from rest. Soft-disabled buttons (keep focus, no native `disabled`) cannot work, even though `buttonVariants` already styles `aria-disabled:` (`button.tsx` base classes).

## Current state

```tsx
// button.tsx:161-176
<ark.button
  className={cn(buttonVariants({ clickEffect, pill, size, variant }), className)}
  data-size={size}
  data-slot="button"
  data-state={isLoading ? "loading" : "idle"}
  data-variant={variant}
  disabled={disabled || isLoading}
  type="button"
  {...rest}
  aria-busy={isLoading}
  aria-disabled={isLoading || undefined}
>
```

Base variants already include `aria-disabled:pointer-events-none aria-disabled:opacity-64`.

`disabled` and `isLoading` are destructured from props; `aria-disabled` is **not** and rides in `rest`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/button.tsx plans/README.md` | Reviewed or STOP |
| Prove merge | `rg -n -A25 'aria-disabled|aria-busy' registry/react/components/button.tsx` | Idle path preserves consumer `aria-disabled`; loading still forces busy/disabled semantics |
| Lint | `pnpm exec biome check registry/react/components/button.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/button.tsx` — `Button` `aria-disabled` / `aria-busy` after rest only; `plans/README.md` status only.

**Out of scope**: `asChild` compositions, docs, examples, tests, changing native `disabled={disabled || isLoading}`.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Destructure and merge aria-disabled

Destructure consumer `aria-disabled` from props (alongside `disabled` / `isLoading`). After `{...rest}`, set:

```tsx
aria-busy={isLoading || undefined}
aria-disabled={isLoading || ariaDisabled}
```

Notes:

- When `isLoading` is true, force `aria-disabled` true (and keep `aria-busy` true) regardless of consumer.
- When idle, pass through consumer `ariaDisabled` unchanged (including `undefined` / omitted).
- Do **not** write `isLoading || undefined` for `aria-disabled` — that is the bug.
- Prefer `aria-busy={isLoading || undefined}` (or `aria-busy={isLoading ? true : undefined}`) so idle does not leave a stale `aria-busy={false}` unless the live code already relied on boolean false — match existing `aria-busy={isLoading}` only if Biome/types require a boolean; otherwise omit when idle.

Suggested destructure addition:

```tsx
const {
  // ...existing
  disabled,
  "aria-disabled": ariaDisabled,
  ...rest
} = props;
```

**Verify**: soft-disable via `aria-disabled` survives when not loading; loading still overrides.

### Step 2: Lint and status

Lint; mark 097 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Idle Button preserves consumer `aria-disabled`
- [ ] Loading Button still forces `aria-disabled` / `aria-busy` after rest
- [ ] `pnpm exec biome check registry/react/components/button.tsx` exits 0
- [ ] `plans/README.md` row 097 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- Fix appears to require changing `asChild` / Slot path — STOP and report

## Maintenance notes

- Soft-disable is `aria-disabled` without native `disabled`; keep CSS `aria-disabled:` in sync.
- Reviewer: confirm loading path still wins over consumer soft-disable.
