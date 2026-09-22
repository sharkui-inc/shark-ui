# Plan 092: Lock AlertDialog role and showCloseButton after props

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 092 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/alert-dialog.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`AlertDialog` forces `role="alertdialog"` and `AlertDialogContent` forces `showCloseButton={false}`, then spreads `{...props}`. A consumer can pass `role` or `showCloseButton` and undo the alert-dialog contract (lose alertdialog semantics; re-enable Dialog’s close chrome). Same lock-after-spread class as Command / ActionBar (plans 084–085).

## Current state

```tsx
// alert-dialog.tsx:19-21
export const AlertDialog = (props: React.ComponentProps<typeof Dialog>) => (
  <Dialog data-slot="alert-dialog-root" role="alertdialog" {...props} />
);

// alert-dialog.tsx:27-35
export const AlertDialogContent = (
  props: React.ComponentProps<typeof DialogContent>
) => (
  <DialogContent
    data-slot="alert-dialog-content"
    showCloseButton={false}
    {...props}
  />
);
```

Exemplar (ActionBar Root after plan 085): `{...rest}` then locked `autoFocus` / `closeOn*` / `modal`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/alert-dialog.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A6 'export const AlertDialog|export const AlertDialogContent' registry/react/components/alert-dialog.tsx` | `role` / `showCloseButton` appear **after** `{...props}` |
| Lint | `pnpm exec biome check registry/react/components/alert-dialog.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/alert-dialog.tsx` — `AlertDialog` and `AlertDialogContent` only; `plans/README.md` status only.

**Out of scope**: `AlertDialogCancel` / `AlertDialogAction` soft `variant` defaults, Dialog/Sheet/Drawer, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Rest then lock on Root and Content

```tsx
export const AlertDialog = (props: React.ComponentProps<typeof Dialog>) => (
  <Dialog data-slot="alert-dialog-root" {...props} role="alertdialog" />
);

export const AlertDialogContent = (
  props: React.ComponentProps<typeof DialogContent>
) => (
  <DialogContent
    data-slot="alert-dialog-content"
    {...props}
    showCloseButton={false}
  />
);
```

Keep `data-slot` before or after rest as long as the locked contract props win after `{...props}`. Prefer: slot attribute, then `{...props}`, then locks (matches ActionBar).

**Verify**: `rg` shows locks after spread; consumer `role` / `showCloseButton` cannot win.

### Step 2: Lint and status

Lint; mark 092 DONE in `plans/README.md`.

## Test plan

No component test authorized (`AGENTS.md`).

## Done criteria

- [ ] `AlertDialog` locks `role="alertdialog"` after `{...props}`
- [ ] `AlertDialogContent` locks `showCloseButton={false}` after `{...props}`
- [ ] `pnpm exec biome check registry/react/components/alert-dialog.tsx` exits 0
- [ ] `plans/README.md` row 092 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- Live code no longer matches Current state excerpts (drift)

## Maintenance notes

- Keep AlertDialog contract locks in the same rest-then-lock family as Command / ActionBar.
- Do not “fix” Cancel/Action `variant` soft defaults in the same change unless a follow-up plan asks for it.
