# Plan 031: Point SheetRootProvider at DialogRootProvider

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 031 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 99593e94..HEAD -- registry/react/components/sheet.tsx registry/react/components/dialog.tsx content/docs/components/sheet.mdx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: plans/030-dialog-root-provider-modal-context.md
- **Category**: bug
- **Planned at**: commit `99593e94`, 2026-09-22

## Why this matters

`Sheet` is built on Dialog. `SheetOverlay` is `DialogOverlay`, which calls `_useDialog()` and requires `DialogModalProvider`. Composed `Sheet` goes through `Dialog` (provider present), but `SheetRootProvider` is still a raw `ArkDialog.RootProvider` re-export. Documented `useSheet` + `SheetRootProvider` + `SheetContent` therefore throws the same ContextError as unfixed Dialog RootProvider.

## Current state

```tsx
// registry/react/components/sheet.tsx:26
export const SheetRootProvider = ArkDialog.RootProvider;

// sheet.tsx:28-29
export const Sheet = (props: React.ComponentProps<typeof Dialog>) => (
  <Dialog data-slot="sheet" {...props} />
);

// sheet.tsx:36-38
export const SheetOverlay = (
  props: React.ComponentProps<typeof DialogOverlay>
) => <DialogOverlay data-slot="sheet-overlay" {...props} />;
```

`SheetContent` renders `<SheetOverlay />` (~165). Docs: `content/docs/components/sheet.mdx` `### SheetRootProvider` (~282) lists only `value`.

After plan 030, `DialogRootProvider` wraps `DialogModalProvider` and accepts optional `modal`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift / dependency | Confirm plan 030 is DONE and `DialogRootProvider` wraps `DialogModalProvider` | `rg -n 'DialogModalProvider' registry/react/components/dialog.tsx` shows RootProvider usage |
| Prove raw re-export gone | `rg -n 'SheetRootProvider = ArkDialog.RootProvider' registry/react/components/sheet.tsx` | No matches |
| Lint | `pnpm exec biome check registry/react/components/sheet.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/sheet.tsx content/docs/components/sheet.mdx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/sheet.tsx`
- `content/docs/components/sheet.mdx` — document `modal` on SheetRootProvider
- `plans/README.md` — status row only

**Out of scope**:

- Re-implementing Dialog modal context inside sheet.tsx
- Sheet spacing selectors (already fixed)
- Examples, manifests, `public/r/*.json`, tests

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 0: Confirm dependency

If `DialogRootProvider` is still `ArkDialog.RootProvider`, STOP and execute/finish plan 030 first.

### Step 1: Re-export DialogRootProvider as SheetRootProvider

1. Import `DialogRootProvider` from `@/registry/react/components/dialog` (alongside existing Dialog imports).
2. Replace `export const SheetRootProvider = ArkDialog.RootProvider` with `export const SheetRootProvider = DialogRootProvider` (or a thin alias that preserves the name).
3. Keep `useSheet` / `useSheetContext` as Ark dialog hooks.

Do **not** create a second Shark modal context in sheet.tsx.

**Verify**: `rg -n 'SheetRootProvider' registry/react/components/sheet.tsx` → aliases/re-exports `DialogRootProvider`. `rg -n 'ArkDialog.RootProvider' registry/react/components/sheet.tsx` → no matches.

### Step 2: Document `modal` on SheetRootProvider

In `content/docs/components/sheet.mdx` under `### SheetRootProvider`, add `modal` | `boolean` | `true` (gates overlay like `Sheet` / `Dialog`).

**Verify**: section mentions `modal`.

### Step 3: Lint and status

Lint; mark 031 DONE in `plans/README.md`.

## Test plan

No component test authorized. If later approved: `useSheet` + `SheetRootProvider` + content/overlay with `modal={false}` must not throw.

## Done criteria

- [ ] `SheetRootProvider` uses Dialog’s wrapped RootProvider (modal context present)
- [ ] Docs list `modal` on SheetRootProvider
- [ ] No duplicate modal context invented in sheet.tsx
- [ ] `plans/README.md` row 031 is DONE

## STOP conditions

- Plan 030 not landed / DialogRootProvider still raw
- Fix appears to require exporting private `_useDialog` — use public `DialogRootProvider` instead
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Sheet and Dialog share one modal context by design; keep it that way.
- If DialogRootProvider props type is exported, Sheet docs can reference the same `modal` contract.
