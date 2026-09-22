# Plan 089: Merge Context positioning like Tooltip/Menu

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 089 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/context.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`Context` sets `positioning={{ placement: "top" }}` then `{...rest}` without destructuring `positioning`. Consumer `positioning` replaces the object and drops the default placement unless they re-specify it. Tooltip/Menu/HoverCard merge correctly.

## Current state

```tsx
// context.tsx:45-61
export const Context = (props: ContextProps) => {
  const { costLabel, maxTokens, usedTokens, modal = false, ...rest } = props;
  // ...
  return (
    <ContextValueProvider value={{ ... }}>
      <Popover
        data-slot="context"
        modal={modal}
        positioning={{ placement: "top" }}
        {...rest}
      />
    </ContextValueProvider>
  );
};
```

Exemplar (`tooltip.tsx`):

```tsx
positioning={{
  placement: "top",
  ...positioning,
}}
{...rest}
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/context.tsx plans/README.md` | Reviewed or STOP |
| Prove merge | `rg -n -A20 'export const Context =' registry/react/components/context.tsx` | `positioning` destructured and merged |
| Lint | `pnpm exec biome check registry/react/components/context.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/context.tsx` — `Context` root positioning only; `plans/README.md` status only.

**Out of scope**: ContextIcon/percent clamp (036), Popover, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Destructure and merge positioning

```tsx
const {
  costLabel,
  maxTokens,
  usedTokens,
  modal = false,
  positioning,
  ...rest
} = props;

<Popover
  data-slot="context"
  modal={modal}
  positioning={{
    placement: "top",
    ...positioning,
  }}
  {...rest}
/>
```

Ensure `ContextProps` already extends Popover props so `positioning` is typed (it should via existing Popover spread).

**Verify**: consumer `positioning` merges; default `placement: "top"` remains unless overridden.

### Step 2: Lint and status

Lint; mark 089 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Context merges positioning like Tooltip
- [ ] Default placement survives partial positioning objects
- [ ] `plans/README.md` row 089 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep Context/Tooltip/Menu positioning merge in lockstep.
