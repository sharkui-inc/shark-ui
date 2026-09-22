# Plan 054: Add min-h-0 to DialogBody ScrollArea root

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 054 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/dialog.tsx registry/react/components/sheet.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (independent of 053; same pattern)
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`DialogBody` wraps content in `ScrollArea` with `flex-1` but without `min-h-0` on the root. In a column flex dialog (header + body + footer), the body will not shrink, so overflow scroll fails. `SheetBody` reuses `DialogBody`, so Sheet inherits the fix.

## Current state

```tsx
// registry/react/components/dialog.tsx:266-286
export const DialogBody = (props: DialogBodyProps) => {
  const { scrollFade = true, className, ...rest } = props;

  return (
    <ScrollArea
      className="min-w-0 flex-1"
      orientation="vertical"
      overscrollContain
      scrollFade={scrollFade}
    >
      <ark.div
        className={cn(
          "p-(--space)",
          "in-[[data-slot=dialog-content]:has([data-slot=dialog-header]:not(.sr-only))]:pt-1",
          className
        )}
        data-slot="dialog-body"
        {...rest}
      />
    </ScrollArea>
  );
};
```

`SheetBody` (`sheet.tsx:223-235`) renders `DialogBody` with sheet padding/`data-slot` — no separate ScrollArea.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/dialog.tsx plans/README.md` | Reviewed or STOP |
| Prove min-h-0 | `rg -n -A8 'export const DialogBody' registry/react/components/dialog.tsx` | ScrollArea `className` includes `min-h-0` |
| Lint | `pnpm exec biome check registry/react/components/dialog.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/dialog.tsx` — `DialogBody` ScrollArea `className` only; `plans/README.md` status only.

**Out of scope**: DrawerBody (053), SheetBody source (inherits), dialog content variants, docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Add min-h-0 to DialogBody ScrollArea

```tsx
<ScrollArea
  className="min-h-0 min-w-0 flex-1"
  orientation="vertical"
  overscrollContain
  scrollFade={scrollFade}
>
```

Optional: align closer to DrawerBody (`flex flex-col overflow-hidden` + viewport selectors) only if a short dialog repro still fails after `min-h-0` alone. Prefer the minimal class change first.

**Verify**: `min-h-0` present on ScrollArea root.

### Step 2: Lint and status

Lint; mark 054 DONE.

## Test plan

No component test authorized. If later approved: dialog/sheet with long body between header and footer scrolls inside body.

## Done criteria

- [ ] DialogBody ScrollArea root includes `min-h-0`
- [ ] SheetBody still composes DialogBody (no regression needed in sheet.tsx)
- [ ] `plans/README.md` row 054 is DONE

## STOP conditions

- DialogBody no longer uses ScrollArea
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Same flex `min-height: auto` class as DrawerBody (053).
