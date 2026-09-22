# Plan 083: Extend overlay peer-hide to sheet-overlay (and dialog-overlay)

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 083 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/dialog.tsx registry/react/components/sheet.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: MED
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`dialogOverlayVariants` includes `peer peer-data-[slot=dialog-overlay]:hidden` so nested Dialog overlays don’t double-dim. `SheetOverlay` overrides `data-slot` to `sheet-overlay`, so:

1. Nested Sheets don’t peer-hide each other (double scrim).
2. A Sheet overlay still has the Dialog peer-hide class — an earlier open Dialog overlay (`dialog-overlay`) as a previous peer can hide the Sheet scrim entirely.

## Current state

```tsx
// dialog.tsx:88-97
export const dialogOverlayVariants = tv({
  base: [
    // ...
    "peer peer-data-[slot=dialog-overlay]:hidden",
    // ...
  ],
});

// sheet.tsx:37-39
export const SheetOverlay = (
  props: React.ComponentProps<typeof DialogOverlay>
) => <DialogOverlay data-slot="sheet-overlay" {...props} />;
```

Sheet reuses `DialogOverlay` / `dialogOverlayVariants`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/dialog.tsx registry/react/components/sheet.tsx plans/README.md` | Reviewed or STOP |
| Prove peers | `rg -n 'peer-data-\[slot=' registry/react/components/dialog.tsx registry/react/components/sheet.tsx` | Hides for both `dialog-overlay` and `sheet-overlay` |
| Lint | `pnpm exec biome check registry/react/components/dialog.tsx registry/react/components/sheet.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/dialog.tsx` — overlay variants peer selector(s); optionally `sheet.tsx` if a Sheet-specific overlay class is cleaner; `plans/README.md` status only.

**Out of scope**: Drawer overlay, Sidebar mobile (079), docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Extend peer-hide selectors

In `dialogOverlayVariants` base, replace or extend:

```tsx
"peer peer-data-[slot=dialog-overlay]:hidden peer-data-[slot=sheet-overlay]:hidden",
```

That way:

- Nested Dialogs still dedupe.
- Nested Sheets dedupe.
- Sheet over Dialog: Sheet overlay won’t be forced `hidden` solely because a dialog overlay peer exists… **Wait**: with both selectors, a Sheet overlay that is a *later* peer of a Dialog overlay would still match `peer-data-[slot=dialog-overlay]:hidden` and hide.

Re-read the CSS: `peer-data-[slot=X]:hidden` means “if a previous sibling with class `peer` has data-slot=X, hide me”. So Sheet after Dialog **would** hide with the extended selector — that’s the Sheet-over-Dialog bug!

**Correct fix sketch (pick one):**

- **A (preferred for Sheet-over-Dialog):** SheetOverlay should **not** use the dialog peer-hide rule against `dialog-overlay`. Give Sheet its own overlay className that only peer-hides on `sheet-overlay`, e.g. override in `SheetOverlay`:

  ```tsx
  <DialogOverlay
    className={cn(
      "peer-data-[slot=dialog-overlay]:block!", // or remove dialog peer hide
      "peer-data-[slot=sheet-overlay]:hidden",
      className
    )}
    data-slot="sheet-overlay"
    {...props}
  />
  ```

  Tailwind may not easily “undo” a variant from `tv()`. Cleaner: split variants — Dialog keeps dialog-only peer hide; SheetOverlay does not use `dialogOverlayVariants` peer line, or uses a `sheetOverlayVariants` without dialog peer hide but with sheet peer hide.

- **B:** Change Dialog peer hide to only apply when both overlays share the same slot (already true for Dialog). Sheet uses independent stacking without peer-hide from Dialog.

**Required outcome:**

1. Nested Dialogs: only topmost overlay visible (or existing Dialog behavior preserved).
2. Nested Sheets: same for sheets.
3. Sheet opened while Dialog is open: Sheet scrim remains visible.

Implement the minimal change that satisfies all three. Prefer Sheet-specific overlay classes over breaking Dialog nesting.

**Verify**: selectors cover the three cases above (reason in the PR/status note if only code-level verify).

### Step 2: Lint and status

Lint both files if touched; mark 083 DONE.

## Test plan

No component test / browsers authorized. If later approved: Dialog→Sheet stack shows sheet scrim; nested sheets single scrim; nested dialogs unchanged.

## Done criteria

- [ ] Sheet-over-Dialog keeps a visible Sheet scrim
- [ ] Nested same-type overlays still avoid double-dim where previously intended
- [ ] `plans/README.md` row 083 is DONE

## STOP conditions

- Cannot satisfy all three stacking cases without a larger overlay redesign — STOP and report options
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Reviewers: peer/`data-slot` stacking is fragile; document the intended Dialog vs Sheet overlay contract in a one-line comment near the variants.
