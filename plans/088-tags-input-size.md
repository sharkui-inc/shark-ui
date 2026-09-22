# Plan 088: Forward TagsInput size into TagsInputControl

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 088 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/tags-input.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`TagsInput` accepts `size` and sets `data-size={size}`, but renders `<TagsInputControl showClear={showClear}>` without `size`. `TagsInputControl` passes `size={size}` to `InputGroup`, so with no prop InputGroup always defaults to `md`. Same failure mode as PasswordInput (074). Docs/examples advertise `size="sm"|"lg"`.

## Current state

```tsx
// tags-input.tsx:46-76
const { size = "md", showClear, /* ... */, ...rest } = props;
<ArkTagsInput.Root data-size={size} ...>
  <TagsInputControl showClear={showClear}>
    {children}
    <TagsInputInput placeholder={placeholder} />
  </TagsInputControl>
</ArkTagsInput.Root>

// tags-input.tsx:94-111
export const TagsInputControl = (props: TagsInputControlProps) => {
  const { size, showClear = true, className, children, ...rest } = props;
  // ...
  <InputGroup size={size} ...>
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/tags-input.tsx plans/README.md` | Reviewed or STOP |
| Prove size | `rg -n 'TagsInputControl|size=' registry/react/components/tags-input.tsx` | Root passes `size={size}` into Control |
| Lint | `pnpm exec biome check registry/react/components/tags-input.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/tags-input.tsx` — Root → Control size plumbing only; `plans/README.md` status only.

**Out of scope**: TagsInputControl rest-on-InputGroup (MED), PasswordInput (074), docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Pass size into Control

```tsx
<TagsInputControl showClear={showClear} size={size}>
```

Keep Root `data-size={size}`. Control already forwards to InputGroup.

**Verify**: `size={size}` on the Control call site.

### Step 2: Lint and status

Lint; mark 088 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Root `size` reaches InputGroup via Control
- [ ] `plans/README.md` row 088 is DONE

## STOP conditions

- TagsInputControl no longer accepts `size` — STOP and report
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Mirror PasswordInput (074) / ComboboxChips size plumbing.
