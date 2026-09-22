# Plan 070: Give AttachmentRemove a default accessible name

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 070 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/attachment.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`AttachmentRemove` is an icon-only control (`XIcon` with `aria-hidden`) with no default `aria-label`. Screen readers get an unnamed button. Sibling `MessageAction` defaults a label for icon actions.

## Current state

```tsx
// attachment.tsx:248-265
export const AttachmentRemove = (props: ButtonProps) => {
  const { className, ...rest } = props;

  return (
    <AttachmentAction
      className={cn(/* ... */, className)}
      data-slot="attachment-remove"
      {...rest}
    >
      <XIcon aria-hidden="true" />
    </AttachmentAction>
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/attachment.tsx plans/README.md` | Reviewed or STOP |
| Prove label | `rg -n -A15 'export const AttachmentRemove' registry/react/components/attachment.tsx` | Default `aria-label` present; consumer override wins |
| Lint | `pnpm exec biome check registry/react/components/attachment.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/attachment.tsx` — `AttachmentRemove` only; `plans/README.md` status only.

**Out of scope**: Button isLoading (069), MessageAction, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Default aria-label, allow override

```tsx
export const AttachmentRemove = (props: ButtonProps) => {
  const { className, "aria-label": ariaLabel = "Remove", ...rest } = props;

  return (
    <AttachmentAction
      className={cn(/* unchanged */, className)}
      data-slot="attachment-remove"
      aria-label={ariaLabel}
      {...rest}
    >
      <XIcon aria-hidden="true" />
    </AttachmentAction>
  );
};
```

Critical: put `aria-label={ariaLabel}` **after** `{...rest}` **or** omit `aria-label` from rest via destructure (as above) so the default applies and consumer `aria-label` from props still wins through the destructure default pattern.

If `{...rest}` is after `aria-label`, a consumer label in rest would overwrite — prefer destructure as shown.

**Verify**: default `"Remove"`; passing `aria-label="Dismiss"` overrides.

### Step 2: Lint and status

Lint; mark 070 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Default accessible name on AttachmentRemove
- [ ] Consumer `aria-label` overrides default
- [ ] Icon remains `aria-hidden`
- [ ] `plans/README.md` row 070 is DONE

## STOP conditions

- AttachmentAction strips aria-label — STOP and report
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Match MessageAction labeling conventions if those change.
