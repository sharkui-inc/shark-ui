# Plan 050: Make AlertDialogAction dismiss like Cancel

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 050 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/alert-dialog.tsx content/docs/components/alert-dialog.mdx registry/react/examples/alert-dialog plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`AlertDialogActionProps` extends `DialogClose`, but `AlertDialogAction` renders a bare `Button` and never closes the dialog. `AlertDialogCancel` correctly wraps `AlertDialogClose asChild`. Docs/examples either wrap Action in Close manually or show Action alone — consumers mirroring Cancel leave the dialog open after the primary action.

## Current state

```tsx
// registry/react/components/alert-dialog.tsx:87-111
interface AlertDialogActionProps
  extends React.ComponentProps<typeof DialogClose>,
    Omit<ButtonProps, "variant"> {
  variant?: "default" | "destructive";
}

export const AlertDialogAction = (props: AlertDialogActionProps) => {
  const { variant = "default", ...rest } = props;
  return <Button variant={variant} {...rest} />;
};

export const AlertDialogCancel = (props: AlertDialogCancelProps) => (
  <AlertDialogClose asChild data-slot="alert-dialog-cancel">
    <Button variant="outline" {...props} />
  </AlertDialogClose>
);
```

Registry examples wrap Action: `example-default.tsx:25-27` (`AlertDialogClose asChild` > `AlertDialogAction`). Docs snippet at `alert-dialog.mdx:108-110` does the same. After this fix, nested Close+Action still works; standalone Action must close.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/alert-dialog.tsx content/docs/components/alert-dialog.mdx plans/README.md` | Reviewed or STOP |
| Prove wrap | `rg -n 'AlertDialogAction' -A8 registry/react/components/alert-dialog.tsx` | Action wraps AlertDialogClose asChild + Button |
| Lint | `pnpm exec biome check registry/react/components/alert-dialog.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/alert-dialog.tsx`
- `content/docs/components/alert-dialog.mdx` — simplify snippets that double-wrap Close around Action (optional but preferred)
- `registry/react/examples/alert-dialog/*.tsx` — remove redundant `AlertDialogClose` wrappers around Action once Action closes itself
- `plans/README.md` — status only

**Out of scope**: Dialog/Sheet close behavior, AlertDialog layout, manifests, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Mirror Cancel for Action

```tsx
export const AlertDialogAction = (props: AlertDialogActionProps) => {
  const { variant = "default", ...rest } = props;

  return (
    <AlertDialogClose asChild data-slot="alert-dialog-action">
      <Button variant={variant} {...rest} />
    </AlertDialogClose>
  );
};
```

Keep extending `DialogClose` props. Do not change Cancel.

**Verify**: Action uses `AlertDialogClose asChild`; Cancel unchanged.

### Step 2: Simplify examples and docs (preferred)

In examples and MDX that use `<AlertDialogClose asChild><AlertDialogAction/></AlertDialogClose>`, replace with bare `<AlertDialogAction/>` so the public API is clear. Nested Close still OK if left, but prefer one Close.

**Verify**: `rg -n 'AlertDialogClose asChild' registry/react/examples/alert-dialog content/docs/components/alert-dialog.mdx` → no remaining Action wrappers (or only intentional non-Action closes).

### Step 3: Lint and status

Lint; mark 050 DONE in `plans/README.md`.

## Test plan

No component test authorized. If later approved: click Action without outer Close → dialog closes.

## Done criteria

- [ ] Action dismisses like Cancel
- [ ] `data-slot="alert-dialog-action"` present
- [ ] Examples/docs no longer require outer Close around Action (preferred)
- [ ] `plans/README.md` row 050 is DONE

## STOP conditions

- DialogClose / asChild API unavailable
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Reviewers: double Close (example left as-is) should still close once; prefer cleaning examples.
