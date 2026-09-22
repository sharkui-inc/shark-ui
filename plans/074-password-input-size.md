# Plan 074: Forward PasswordInput size into InputGroup

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 074 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/password-input.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`PasswordInput` accepts `size` and sets `data-size` on Root, but `PasswordInputGroup` never passes `size` to `InputGroup` (defaults `md`). Only height is patched with `in-data-[size=lg]:h-9 in-data-[size=sm]:h-7`. Padding, radius, and `--input-group-height` / addon insets stay `md`. `DateInput` correctly plumbs `size` into its control/`InputGroup`.

## Current state

```tsx
// password-input.tsx:27-40
const { size = "md", className, ...rest } = props;
<ArkPasswordInput.Root data-size={size} ... />

// password-input.tsx:45-60
export const PasswordInputGroup = (...) => (
  <ArkPasswordInput.Control asChild>
    <InputGroup
      className={cn(
        "in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
        // ...
      )}
      {...rest}
    />
  </ArkPasswordInput.Control>
);
```

Exemplar: `date-input.tsx` passes `size={size}` into control/`InputGroup`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/password-input.tsx plans/README.md` | Reviewed or STOP |
| Prove size | `rg -n 'size' registry/react/components/password-input.tsx` | InputGroup receives `size` from Root |
| Lint | `pnpm exec biome check registry/react/components/password-input.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/password-input.tsx` only; `plans/README.md` status only.

**Out of scope**: InputGroup variants, docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Plumb size via context or prop

**Preferred (match DateInput style):** create a tiny Shark context (or use Ark context if size is available) from `PasswordInput` Root value `{ size }`, read it in `PasswordInputGroup`, pass `size={size}` to `InputGroup`.

**Minimal alternative:** if composition always nests Group under Root, read `data-size` from a parent via React context you add — do **not** use DOM `closest` for sizing.

After `InputGroup` gets `size`, remove redundant `in-data-[size=*]:h-*` overrides **only if** InputGroup variants already set the correct height for sm/md/lg. If height still wrong without them, keep the overrides.

Also set `data-size={size}` on Root as today (examples/CSS may depend on it).

**Verify**: `PasswordInputGroup` → `<InputGroup size={…} />` with Root’s size.

### Step 2: Lint and status

Lint; mark 074 DONE. Prefer existing `createContext` from `@ark-ui/react/utils` like other Shark components.

## Test plan

No component test authorized.

## Done criteria

- [ ] Root `size="sm"|"lg"` reaches InputGroup
- [ ] Addon/height tokens match size
- [ ] `plans/README.md` row 074 is DONE

## STOP conditions

- Password composition allows Group outside Root with no way to pass size — STOP and report
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Align with DateInput size plumbing when either changes.
