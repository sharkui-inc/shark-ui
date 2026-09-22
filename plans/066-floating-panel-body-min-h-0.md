# Plan 066: Add min-h-0 flex-1 to FloatingPanelBody ScrollArea root

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 066 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/floating-panel.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`FloatingPanelContent` is `flex flex-col` with `h-(--height) min-h-0`. `FloatingPanelBody` wraps content in `ScrollArea` without `flex-1` / `min-h-0`, so the body won’t claim remaining height between header and footer — long content fails to scroll. Same fix as DialogBody/DrawerBody (054/053).

## Current state

```tsx
// floating-panel.tsx:90-97 — content: flex flex-col, h-(--height) min-h-0
// floating-panel.tsx:331-344
export const FloatingPanelBody = (props: FloatingPanelBodyProps) => {
  const { scrollFade = true, className, children, ...rest } = props;

  return (
    <ScrollArea overscrollContain scrollFade={scrollFade}>
      <ArkFloatingPanel.Body
        className={cn("flex flex-col gap-4", "p-(--space)", className)}
        data-slot="floating-panel-body"
        {...rest}
      >
        {children}
      </ArkFloatingPanel.Body>
    </ScrollArea>
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/floating-panel.tsx plans/README.md` | Reviewed or STOP |
| Prove classes | `rg -n -A12 'export const FloatingPanelBody' registry/react/components/floating-panel.tsx` | ScrollArea has `min-h-0 min-w-0 flex-1` |
| Lint | `pnpm exec biome check registry/react/components/floating-panel.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/floating-panel.tsx` — `FloatingPanelBody` ScrollArea `className` only; `plans/README.md` status only.

**Out of scope**: Header/Control slots (056), PopoverBody (065), docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Size the ScrollArea root

```tsx
<ScrollArea
  className="min-h-0 min-w-0 flex-1"
  overscrollContain
  scrollFade={scrollFade}
>
```

Leave Body inner classes unchanged unless a one-line tweak is clearly required after the ScrollArea change.

**Verify**: ScrollArea root has `min-h-0` + `flex-1`.

### Step 2: Lint and status

Lint; mark 066 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] FloatingPanelBody ScrollArea includes `min-h-0 min-w-0 flex-1`
- [ ] `plans/README.md` row 066 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep parity with Dialog/Drawer/Popover body ScrollArea sizing.
