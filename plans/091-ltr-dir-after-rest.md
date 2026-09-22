# Plan 091: Keep forced dir="ltr" after rest on LTR-only surfaces

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 091 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/json-tree-view.tsx registry/react/components/code-block.tsx registry/react/components/tool-result.tsx registry/react/components/resizable.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`Resizable` correctly does `{...rest}` then `dir="ltr"`. Several LTR-only surfaces set `dir="ltr"` then `{...rest}`, so a `dir` from parent RTL props undoes forced LTR — mono/tree indent and isolate styling break.

## Current state

```tsx
// resizable.tsx:22-27 — correct
{...rest}
dir="ltr"

// json-tree-view.tsx:56-59 — wrong order
dir="ltr"
{...rest}

// code-block.tsx:155-157 CodeBlockFilename — wrong
dir="ltr"
style={{ unicodeBidi: "isolate", ...style }}
{...rest}

// code-block.tsx:535-536 CodeBlockPre / content — wrong
dir="ltr"
{...rest}

// tool-result.tsx:197-199 ToolResultName — wrong
dir="ltr"
style={{ unicodeBidi: "isolate", ...style }}
{...rest}
```

Confirm exact symbol names for the code-block `pre` part when editing (Filename + content/pre).

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/json-tree-view.tsx registry/react/components/code-block.tsx registry/react/components/tool-result.tsx plans/README.md` | Reviewed or STOP |
| Prove order | `rg -n 'dir="ltr"' -A3 -B3 registry/react/components/json-tree-view.tsx registry/react/components/code-block.tsx registry/react/components/tool-result.tsx` | Each `dir="ltr"` appears after `{...rest}` |
| Lint | `pnpm exec biome check registry/react/components/json-tree-view.tsx registry/react/components/code-block.tsx registry/react/components/tool-result.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/json-tree-view.tsx` — Root `dir`
- `registry/react/components/code-block.tsx` — Filename + Pre/content `dir` (and keep `unicodeBidi` merge)
- `registry/react/components/tool-result.tsx` — `ToolResultName` `dir`
- `plans/README.md` — status only

**Out of scope**: Resizable (already correct), other components with intentional consumer `dir`, docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Match Resizable order everywhere listed

Pattern:

```tsx
{...rest}
dir="ltr"
```

Where `style` + `unicodeBidi` exist:

```tsx
{...rest}
dir="ltr"
style={{ unicodeBidi: "isolate", ...style }}
```

If `style` was destructured from props, keep that destructure; ensure consumer `style` still merges and `unicodeBidi: "isolate"` wins or stays present.

**Verify**: no `dir="ltr"` before `{...rest}` in the three in-scope files (except comments).

### Step 2: Lint and status

Lint all three files; mark 091 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] JsonTreeView Root locks `dir="ltr"` after rest
- [ ] CodeBlock Filename and Pre/content lock `dir="ltr"` after rest
- [ ] ToolResultName locks `dir="ltr"` after rest
- [ ] `plans/README.md` row 091 is DONE

## STOP conditions

- A site intentionally allows consumer `dir` for a11y — STOP and report that site
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Use Resizable as the exemplar for forced-LTR parts.
