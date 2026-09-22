# Plan 099: Lock NativeSelect aria-invalid after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 099 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/native-select.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`NativeSelect` maps Shark `invalid` → `aria-invalid={invalid}` **before** `{...rest}`. Rest can overwrite or clear `aria-invalid`, so invalid styling (`aria-invalid:` in variants) and AT disagree with the `invalid` prop.

## Current state

```tsx
// native-select.tsx:52-70
export const NativeSelect = (props: NativeSelectProps) => {
  const { size = "md", invalid, className, ...rest } = props;

  return (
    <ark.div /* wrapper */>
      <ArkField.Select
        aria-invalid={invalid}
        className={cn(nativeSelectVariants({ size }))}
        data-slot="native-select"
        {...rest}
      />
```

Exemplar (rest-then-lock): AlertDialog / ActionBar — `{...rest}` then contract props.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/native-select.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A12 'ArkField.Select' registry/react/components/native-select.tsx` | `{...rest}` then `aria-invalid` derived from `invalid` |
| Lint | `pnpm exec biome check registry/react/components/native-select.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/native-select.tsx` — `NativeSelect` `aria-invalid` order only; `plans/README.md` status only.

**Out of scope**: NativeSelectOption/OptGroup, Field wiring, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Rest then lock aria-invalid

```tsx
<ArkField.Select
  className={cn(nativeSelectVariants({ size }))}
  data-slot="native-select"
  {...rest}
  aria-invalid={invalid || undefined}
/>
```

If `invalid` is boolean `false`, prefer omitting/`undefined` so the attribute is not forced `false` unless the live API already relied on `aria-invalid={false}` — `invalid || undefined` is fine. Shark `invalid` must win over rest’s `aria-invalid`.

**Verify**: `aria-invalid` appears after `{...rest}`.

### Step 2: Lint and status

Lint; mark 099 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] NativeSelect locks `aria-invalid` from `invalid` after `{...rest}`
- [ ] `pnpm exec biome check registry/react/components/native-select.tsx` exits 0
- [ ] `plans/README.md` row 099 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- ArkField.Select no longer accepts `aria-invalid` — STOP and report

## Maintenance notes

- Same map-Shark-prop-to-ARIA-after-rest pattern as other Field-backed controls.
