# Plan 065: Add min-h-0 flex-1 to PopoverBody ScrollArea root

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 065 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/popover.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`PopoverBody` puts `flex-1` on the inner `ark.div`, not the `ScrollArea` flex child. `PopoverContent` is a column flex. Fixed-height popovers (see `registry/react/examples/popover/example-scroll-area.tsx` with `h-80`) fail to scroll inside the body. Same flex `min-height: auto` class as DialogBody/DrawerBody (054/053).

## Current state

```tsx
// popover.tsx:188-204
export const PopoverBody = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ScrollArea overscrollContain scrollFade>
      <ark.div
        className={cn(
          "flex-1",
          "p-(--space)",
          "in-[[data-slot=popover-content]:has([data-slot=popover-header]:not(.sr-only))]:pt-1",
          className
        )}
        data-slot="popover-body"
        {...rest}
      />
    </ScrollArea>
  );
};
```

DialogBody exemplar: `className="min-h-0 min-w-0 flex-1"` on ScrollArea (`dialog.tsx` after 054).

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/popover.tsx plans/README.md` | Reviewed or STOP |
| Prove classes | `rg -n -A12 'export const PopoverBody' registry/react/components/popover.tsx` | ScrollArea has `min-h-0 min-w-0 flex-1` |
| Lint | `pnpm exec biome check registry/react/components/popover.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/popover.tsx` — `PopoverBody` only; `plans/README.md` status only.

**Out of scope**: PopoverContent variants (unless STOP requires a one-line `min-h-0` — report first), FloatingPanelBody (066), docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Move flex sizing to ScrollArea

```tsx
<ScrollArea
  className="min-h-0 min-w-0 flex-1"
  overscrollContain
  scrollFade
>
  <ark.div
    className={cn(
      "p-(--space)",
      "in-[[data-slot=popover-content]:has([data-slot=popover-header]:not(.sr-only))]:pt-1",
      className
    )}
    data-slot="popover-body"
    {...rest}
  />
</ScrollArea>
```

Drop the inner-only `flex-1` unless layout still needs it after the ScrollArea change.

**Verify**: ScrollArea root has `min-h-0` + `flex-1`.

### Step 2: Lint and status

Lint; mark 065 DONE.

## Test plan

No component test authorized. If later approved: `example-scroll-area` scrolls inside body.

## Done criteria

- [ ] PopoverBody ScrollArea includes `min-h-0 min-w-0 flex-1`
- [ ] `plans/README.md` row 065 is DONE

## STOP conditions

- ScrollArea still won’t shrink and PopoverContent needs `min-h-0`/`overflow-hidden` — STOP and report before expanding scope
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Pair with FloatingPanelBody (066).
