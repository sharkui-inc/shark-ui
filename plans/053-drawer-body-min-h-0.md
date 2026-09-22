# Plan 053: Add min-h-0 to DrawerBody ScrollArea root

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 053 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/drawer.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

In a column flex drawer, `DrawerBody`’s `ScrollArea` uses `flex-1` but the root omits `min-h-0`. Flex items default to `min-height: auto`, so the body refuses to shrink below content height and the inner viewport never becomes the scroll container. Viewport already has `min-h-0`; the root does not.

## Current state

```tsx
// registry/react/components/drawer.tsx:823-848
export const DrawerBody = (props: DrawerBodyProps) => {
  const { scrollFade = true, className, ...rest } = props;

  return (
    <ScrollArea
      className={cn(
        "flex min-w-0 flex-1 touch-pan-y flex-col overflow-hidden",
        "[&>[data-slot=scroll-area-viewport]]:h-auto! [&>[data-slot=scroll-area-viewport]]:min-h-0 [&>[data-slot=scroll-area-viewport]]:flex-auto [&>[data-slot=scroll-area-viewport]]:touch-pan-y"
      )}
      // ...
    >
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/drawer.tsx plans/README.md` | Reviewed or STOP |
| Prove min-h-0 on root | `rg -n -A6 'export const DrawerBody' registry/react/components/drawer.tsx` | ScrollArea className includes `min-h-0` alongside `flex-1` |
| Lint | `pnpm exec biome check registry/react/components/drawer.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/drawer.tsx` — `DrawerBody` ScrollArea `className` only; `plans/README.md` status only.

**Out of scope**: DialogBody (plan 054), drawer layout variants, docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Add min-h-0 to the ScrollArea root

Change the ScrollArea root class string to include `min-h-0`:

```tsx
"flex min-h-0 min-w-0 flex-1 touch-pan-y flex-col overflow-hidden",
```

Do not remove existing viewport `min-h-0` selectors.

**Verify**: Root has `min-h-0`; viewport selectors unchanged.

### Step 2: Lint and status

Lint; mark 053 DONE in `plans/README.md`.

## Test plan

No component test authorized. If later approved: tall drawer with header+footer+long body scrolls inside body.

## Done criteria

- [ ] DrawerBody ScrollArea root includes `min-h-0`
- [ ] Viewport `min-h-0` selectors remain
- [ ] `plans/README.md` row 053 is DONE

## STOP conditions

- ScrollArea API / className prop drifted
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Pair with plan 054 (DialogBody) for the same flex scroll class of bugs.
