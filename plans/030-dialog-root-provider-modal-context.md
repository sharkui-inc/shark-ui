# Plan 030: Wrap DialogRootProvider with DialogModalProvider

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 030 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 99593e94..HEAD -- registry/react/components/dialog.tsx content/docs/components/dialog.mdx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `99593e94`, 2026-09-22

## Why this matters

`DialogOverlay` reads `modal` from Shark’s strict `DialogModalProvider` via `_useDialog()`. Only the composed `Dialog` root mounts that provider. Docs expose `DialogRootProvider` + `useDialog`, but `DialogRootProvider` is a raw Ark re-export — so `DialogContent`/`DialogOverlay` under RootProvider throw `ContextError`. This is the same bug class already fixed for Drawer (`DrawerRootProvider` wraps `DrawerModalProvider`).

## Current state

- `registry/react/components/dialog.tsx` — Dialog compound; modal context + Overlay gate.
- `content/docs/components/dialog.mdx` — `### DialogRootProvider` (~335) lists only `value`.
- Exemplar (already fixed): `registry/react/components/drawer.tsx` `DrawerRootProvider` (~61-68).

```tsx
// registry/react/components/dialog.tsx:20
export const DialogRootProvider = ArkDialog.RootProvider;

// dialog.tsx:31-34
const [DialogModalProvider, _useDialog] = createContext<DialogContextProps>({
  name: "DialogModalContext",
  providerName: "Dialog",
});

// dialog.tsx:47-59 — only Dialog mounts DialogModalProvider
// dialog.tsx:84 — DialogOverlay: const { modal } = _useDialog();
```

`CODE_STYLE.md`: keep `data-slot` conventions; do not hand-edit `public/r/*.json`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 99593e94..HEAD -- registry/react/components/dialog.tsx content/docs/components/dialog.mdx plans/README.md` | Reviewed; excerpts match or STOP |
| Prove re-export gone | `rg -n 'DialogRootProvider = ArkDialog.RootProvider' registry/react/components/dialog.tsx` | No matches |
| Lint | `pnpm exec biome check registry/react/components/dialog.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/dialog.tsx content/docs/components/dialog.mdx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless the operator names that action.

## Scope

**In scope**:

- `registry/react/components/dialog.tsx`
- `content/docs/components/dialog.mdx` — add optional `modal` on RootProvider (default `true`)
- `plans/README.md` — status row only

**Out of scope**:

- `sheet.tsx` (plan 031), drawer nesting, Dialog `data-slot` on Root/Trigger, examples, manifests, `public/r/*.json`, component tests

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Replace the RootProvider re-export

Move `DialogRootProvider` to **after** `DialogModalProvider` is created (same order as Drawer). Replace the re-export with a component that:

1. Extends `React.ComponentProps<typeof ArkDialog.RootProvider>` plus optional `modal?: boolean` (default `true`).
2. Renders:

```tsx
<DialogModalProvider value={{ modal }}>
  <ArkDialog.RootProvider {...rest}>{children}</ArkDialog.RootProvider>
</DialogModalProvider>
```

Do not change `Dialog`, `DialogOverlay`, or `_useDialog`. If the file uses `import type React`, switch to a value `import React from "react"` only if required by the new component (match file/JSX setup).

**Verify**: `rg -n 'DialogModalProvider' registry/react/components/dialog.tsx` → used by both `Dialog` and `DialogRootProvider`.

### Step 2: Document `modal` on DialogRootProvider

In `content/docs/components/dialog.mdx` under `### DialogRootProvider`, add row `modal` | `boolean` | `true` and one line that it gates `DialogOverlay` like `Dialog`.

**Verify**: RootProvider section mentions `modal`.

### Step 3: Lint and status

Lint; set plan 030 to DONE in `plans/README.md`.

## Test plan

No component test authorized. If later approved: `useDialog` + `DialogRootProvider` + `DialogOverlay` with `modal={false}` must not throw and must render no overlay.

## Done criteria

- [ ] `DialogRootProvider` wraps `DialogModalProvider` with default `modal: true`
- [ ] Docs list `modal` on RootProvider
- [ ] No out-of-scope files changed for this plan
- [ ] `plans/README.md` row 030 is DONE

## STOP conditions

- Excerpts no longer match live `dialog.tsx`
- Fix requires changing Ark machine modal wiring beyond Shark context
- Lint fails twice on the same in-scope diagnostic after a reasonable fix

## Maintenance notes

- Callers using RootProvider should pass the same `modal` they used in `useDialog` when non-default.
- Plan 031 should re-export this provider for Sheet rather than duplicating context.
