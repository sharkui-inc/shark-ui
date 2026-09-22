# Plan 101: Lock ToolResult aria-busy after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 101 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/tool-result.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`ToolResult` derives `aria-busy={status === "running"}` then spreads `{...rest}`. Consumers can clear busy while `status === "running"`, breaking AT “in progress” signaling that Shark ties to `status`.

## Current state

```tsx
// tool-result.tsx:82-96
export const ToolResult = (props: ToolResultProps) => {
  const { defaultOpen, status = "success", className, ...rest } = props;

  const value = React.useMemo(() => ({ status }), [status]);

  return (
    <ToolResultProvider value={value}>
      <Collapsible
        aria-busy={status === "running"}
        className={cn("w-full min-w-0 text-sm", className)}
        data-slot="tool-result"
        data-status={status}
        defaultOpen={defaultOpen ?? status === "running"}
        {...rest}
      />
    </ToolResultProvider>
  );
};
```

`status` / `defaultOpen` / `className` are already destructured out of rest.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/tool-result.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A20 'export const ToolResult =' registry/react/components/tool-result.tsx` | `aria-busy={status === "running"}` after `{...rest}` |
| Lint | `pnpm exec biome check registry/react/components/tool-result.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/tool-result.tsx` — `ToolResult` root `aria-busy` order only; `plans/README.md` status only.

**Out of scope**: ToolResultName/Trigger, open-on-running behavior, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: aria-busy after rest

```tsx
<Collapsible
  className={cn("w-full min-w-0 text-sm", className)}
  data-slot="tool-result"
  data-status={status}
  defaultOpen={defaultOpen ?? status === "running"}
  {...rest}
  aria-busy={status === "running"}
/>
```

Leave `defaultOpen` before rest (already destructured; not in rest). Only move `aria-busy`.

**Verify**: `aria-busy` after `{...rest}` and still tied to `status === "running"`.

### Step 2: Lint and status

Lint; mark 101 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] ToolResult locks `aria-busy` from `status` after `{...rest}`
- [ ] `pnpm exec biome check registry/react/components/tool-result.tsx` exits 0
- [ ] `plans/README.md` row 101 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep `data-status` and `aria-busy` derived from the same `status` prop.
