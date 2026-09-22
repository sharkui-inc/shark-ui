# Plan 055: Add data-slot on Dialog root and DialogTrigger

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 055 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/dialog.tsx registry/react/components/sheet.tsx registry/react/components/popover.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: style
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

Every other Dialog part sets `data-slot` (`dialog-overlay`, `dialog-content`, …). Root and Trigger omit it. Sheet and Popover set `data-slot` on root and trigger (`sheet` / `sheet-trigger`, `popover` / `popover-trigger`). Consumers and `in-*` selectors cannot target Dialog root/trigger consistently. Sheet already passes `data-slot="sheet"` into `Dialog`, so Dialog must spread consumer `data-slot` (rest) **after** the default so Sheet wins.

## Current state

```tsx
// dialog.tsx:59-85
export const Dialog = (props: DialogProps) => {
  // ...
  return (
    <DialogModalProvider value={{ modal }}>
      <ArkDialog.Root
        lazyMount={lazyMount}
        modal={modal}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </DialogModalProvider>
  );
};

export const DialogTrigger = (
  props: React.ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger {...props} />;
```

Sheet: `<Dialog data-slot="sheet" {...props} />` and `SheetTrigger` → `data-slot="sheet-trigger"`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/dialog.tsx plans/README.md` | Reviewed or STOP |
| Prove slots | `rg -n 'data-slot="dialog"' registry/react/components/dialog.tsx` and `rg -n 'data-slot="dialog-trigger"' registry/react/components/dialog.tsx` | Both match |
| Prove Sheet override | `rg -n 'data-slot="sheet"' registry/react/components/sheet.tsx` | Still present on Sheet root |
| Lint | `pnpm exec biome check registry/react/components/dialog.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/dialog.tsx` — `Dialog` and `DialogTrigger` only; `plans/README.md` status only.

**Out of scope**: Sheet/Popover changes (already slotted), FloatingPanel (056), docs, examples, manifests, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Default slots; let rest override

```tsx
<ArkDialog.Root
  data-slot="dialog"
  lazyMount={lazyMount}
  modal={modal}
  unmountOnExit={unmountOnExit}
  {...rest}
/>

export const DialogTrigger = (
  props: React.ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger data-slot="dialog-trigger" {...props} />;
```

Critical: `{...rest}` / `{...props}` **after** `data-slot` so Sheet’s `data-slot="sheet"` and any consumer override win.

**Verify**: defaults present; Sheet still sets `sheet` / `sheet-trigger`.

### Step 2: Lint and status

Lint; mark 055 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] `Dialog` defaults `data-slot="dialog"` (overridable)
- [ ] `DialogTrigger` defaults `data-slot="dialog-trigger"` (overridable)
- [ ] Sheet overrides still work
- [ ] `plans/README.md` row 055 is DONE

## STOP conditions

- Putting `data-slot` after `{...rest}` (would break Sheet) — STOP and reorder
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Match Popover/Sheet slot naming: `<name>` and `<name>-trigger`.
