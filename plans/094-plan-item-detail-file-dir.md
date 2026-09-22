# Plan 094: Lock PlanItemDetailFile dir="ltr" after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 094 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/plan.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`PlanItemDetailFile` is an LTR path badge (`dir="ltr"` + `unicodeBidi: isolate`) but sets those **before** `{...rest}`. Consumer `dir` / `style` undoes forced LTR on mono file paths inside Plan details — same class as plan 091 gaps.

## Current state

```tsx
// plan.tsx:333-351
export const PlanItemDetailFile = (
  props: React.ComponentProps<typeof Badge>
) => {
  const { variant = "outline", className, style, ...rest } = props;

  return (
    <Badge
      className={cn(
        "mx-1 w-fit max-w-full truncate align-baseline font-mono text-xs",
        className
      )}
      data-slot="plan-item-detail-file"
      dir="ltr"
      size="sm"
      style={{ unicodeBidi: "isolate", ...style }}
      variant={variant}
      {...rest}
    />
  );
};
```

Exemplar (`diff.tsx` DiffFile / plan 091):

```tsx
{...rest}
dir="ltr"
style={{ unicodeBidi: "isolate", ...style }}
```

`variant` is already destructured (safe). Keep `size="sm"` as a Shark default locked after rest so rest cannot drop it.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/plan.tsx plans/README.md` | Reviewed or STOP |
| Prove order | `rg -n -A20 'export const PlanItemDetailFile' registry/react/components/plan.tsx` | `{...rest}` then `dir="ltr"` and isolate `style` |
| Lint | `pnpm exec biome check registry/react/components/plan.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/plan.tsx` — `PlanItemDetailFile` only; `plans/README.md` status only.

**Out of scope**: Other Plan parts, Badge defaults elsewhere, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Rest then lock dir / size / style / variant

```tsx
<Badge
  className={cn(
    "mx-1 w-fit max-w-full truncate align-baseline font-mono text-xs",
    className
  )}
  data-slot="plan-item-detail-file"
  {...rest}
  dir="ltr"
  size="sm"
  style={{ unicodeBidi: "isolate", ...style }}
  variant={variant}
/>
```

Keep destructuring `variant` / `style` / `className` as today. `unicodeBidi: "isolate"` must remain present; consumer `style` merges underneath it (or keep isolate first so it wins — match DiffFile: `unicodeBidi` first, then `...style` only if DiffFile does that; DiffFile uses `{ unicodeBidi: "isolate", ...style }` so consumer can override isolate — **match DiffFile exactly**).

**Verify**: `dir="ltr"` and isolate `style` after `{...rest}`.

### Step 2: Lint and status

Lint; mark 094 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] PlanItemDetailFile locks `dir="ltr"` (and isolate style) after `{...rest}`
- [ ] `pnpm exec biome check registry/react/components/plan.tsx` exits 0
- [ ] `plans/README.md` row 094 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- Badge API no longer accepts `dir` — STOP and report

## Maintenance notes

- Keep path/filename LTR isolates (DiffFile, CodeBlockFilename, ToolResultName, PlanItemDetailFile) on the same rest-then-`dir` pattern.
