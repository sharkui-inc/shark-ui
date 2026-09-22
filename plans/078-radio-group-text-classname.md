# Plan 078: Apply RadioGroupText className (do not discard)

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 078 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/radio-group.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`RadioGroupText` destructures `className` and never applies it to `ItemText`. Docs document `className`. `RadioGroupLabel` leaves `className` in `rest` so it flows.

## Current state

```tsx
// radio-group.tsx:80-91
export const RadioGroupText = (
  props: React.ComponentProps<typeof ArkRadioGroup.ItemText>
) => {
  const { className, children, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkRadioGroup.ItemText data-slot="radio-group-item-text" {...rest}>
        {children}
      </ArkRadioGroup.ItemText>
    </FieldLabel>
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/radio-group.tsx plans/README.md` | Reviewed or STOP |
| Prove apply | `rg -n -A15 'export const RadioGroupText' registry/react/components/radio-group.tsx` | `className` on ItemText |
| Lint | `pnpm exec biome check registry/react/components/radio-group.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/radio-group.tsx` — `RadioGroupText` only; `plans/README.md` status only.

**Out of scope**: RadioGroupItem, Label, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Apply className

```tsx
<ArkRadioGroup.ItemText
  className={className}
  data-slot="radio-group-item-text"
  {...rest}
>
```

Or omit `className` from destructure so it stays in `rest` (like Label). Prefer explicit `className={className}` for clarity.

**Verify**: `className` is used.

### Step 2: Lint and status

Lint; mark 078 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] RadioGroupText forwards/merges consumer `className`
- [ ] `plans/README.md` row 078 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep Label/Text prop-forwarding consistent.
