# Plan 072: Keep Masonry layout ref after rest (compose if needed)

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 072 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/masonry.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (distinct from blocked Masonry plans 001–004)
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`Masonry` sets `ref={masonryRef}` then `{...rest}`. A consumer `ref` in rest replaces the layout ref, so `useLayoutEffect` never sees the live node — no column layout, height, or observers. Same class as DrawerContent ref ordering (057).

## Current state

```tsx
// masonry.tsx:225-238
return (
  <ark.ul
    className={cn(/* ... */, className)}
    data-slot="masonry"
    ref={masonryRef}
    {...rest}
  />
);
```

There is no shared `composeRefs` helper in this repo. Drawer uses a local callback that forwards to a consumer ref — match that idea if composing.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/masonry.tsx plans/README.md` | Reviewed or STOP |
| Prove order | `rg -n -A12 'data-slot="masonry"' registry/react/components/masonry.tsx` | Internal layout ref applied after rest, or composed so both run |
| Lint | `pnpm exec biome check registry/react/components/masonry.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/masonry.tsx` — root `Masonry` ref wiring only; `plans/README.md` status only.

**Out of scope**: MasonryItem, plans 001–004 (missing root / layout recalc), docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Prefer composed ref (best) or internal-after-rest

Read how `masonryRef` is declared (callback vs object). Then:

**Preferred**: Destructure `ref` from props (React 19), spread `{...rest}`, set `ref` to a callback that assigns `masonryRef` **and** forwards to the consumer ref (function or `.current`).

**Acceptable minimum**: `{...rest}` then `ref={masonryRef}` so layout always wins (consumer ref dropped — mention in maintenance notes).

Do not leave `ref` before `{...rest}`.

**Verify**: layout ref cannot be overwritten by rest.

### Step 2: Lint and status

Lint; mark 072 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Consumer `ref` cannot disable masonry layout measurement
- [ ] Prefer both refs working when composed
- [ ] `plans/README.md` row 072 is DONE

## STOP conditions

- `masonryRef` API drifted such that layout no longer needs a DOM ref — STOP and report
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Distinct from blocked 001–004; do not reopen those here.
