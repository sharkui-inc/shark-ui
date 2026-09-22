# Plan 057: Honor defaultPrevented before DrawerContent stopPropagation

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 057 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/drawer.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: MED
- **Depends on**: none (coordinate with 053 if both edit `drawer.tsx`)
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`DrawerContent` always calls `event.stopPropagation()` after the consumer `onPointerDown`, even when the consumer called `preventDefault()`. That blocks opting out of the nested-drawer / pointer trap behavior. Same pattern class as SidebarTrigger / TourTrigger `defaultPrevented` (046/047). Also `{...rest}` is spread **after** the merged `onPointerDown`, which is safe only because `onPointerDown` is destructured — still prefer rest-then-handler for consistency with other overlays.

## Current state

```tsx
// drawer.tsx:614-679
export const DrawerContent = (props: DrawerContentProps) => {
  const {
    // ...
    onPointerDown,
    ...rest
  } = props;
  // ...
              <ArkDrawer.Content
                // ...
                data-slot="drawer-content"
                onPointerDown={(event) => {
                  onPointerDown?.(event);
                  event.stopPropagation();
                }}
                ref={setContentRef}
                {...rest}
              >
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/drawer.tsx plans/README.md` | Reviewed or STOP |
| Prove gate | `rg -n -A12 'onPointerDown=\{\(event\)' registry/react/components/drawer.tsx` | `defaultPrevented` check before `stopPropagation` |
| Prove order | `rg -n -A20 'data-slot="drawer-content"' registry/react/components/drawer.tsx` | `{...rest}` before `onPointerDown` (and `ref` not clobbered) |
| Lint | `pnpm exec biome check registry/react/components/drawer.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/drawer.tsx` — `DrawerContent` pointer handler / prop order only; `plans/README.md` status only.

**Out of scope**: Nested drawer stack logic, swipe, DrawerBody (053), docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Gate stopPropagation; fix spread order

```tsx
<ArkDrawer.Content
  className={cn(/* unchanged */)}
  data-slot="drawer-content"
  {...rest}
  onPointerDown={(event) => {
    onPointerDown?.(event);
    if (event.defaultPrevented) {
      return;
    }
    event.stopPropagation();
  }}
  ref={setContentRef}
>
```

Keep `ref={setContentRef}` **after** `{...rest}` so a consumer `ref` in rest cannot replace the nested-stack ref callback (compose only via the existing `setContentRef` + forwarded ref logic). If `rest` historically included ref, it was already a footgun — do not reintroduce rest-after-ref.

**Verify**: `defaultPrevented` skips `stopPropagation`; `setContentRef` still wins; consumer `onPointerDown` still runs first.

### Step 2: Lint and status

Lint; mark 057 DONE. If 053 also edits this file, keep diffs separable.

## Test plan

No component test authorized. If later approved: nested drawer; content `onPointerDown` with `preventDefault()` allows parent to receive the event.

## Done criteria

- [ ] `stopPropagation` skipped when `defaultPrevented`
- [ ] Consumer `onPointerDown` still invoked first
- [ ] Nested drawer `setContentRef` still applied
- [ ] `plans/README.md` row 057 is DONE

## STOP conditions

- Changing stopPropagation breaks documented nested-drawer pointer isolation with no `defaultPrevented` path — report before removing the call entirely
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Align with SidebarTrigger / TourTrigger preventDefault conventions.
