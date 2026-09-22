# Plan 107: Remove mistaken RTL flip on Sources CollapsibleIndicator

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 107 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/sources.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`SourcesTrigger` adds `rtl:rotate-180` on `CollapsibleIndicator`. The indicator already uses a **ChevronDown** and rotates 180° when open (`data-[state=open]:[&_svg]:rotate-180`). The extra RTL flip inverts open/closed affordance in RTL. Peers omit it: Reasoning, Plan, ToolResult.

## Current state

```tsx
// sources.tsx:61-63
{showTrigger ? (
  <CollapsibleIndicator className="size-3.5 rtl:rotate-180" />
) : null}

// collapsible.tsx:93-96 — open rotation already handled
className={cn(
  "inline-flex size-4 items-center justify-center",
  "data-[state=open]:[&_svg]:rotate-180",
  className
)}

// reasoning.tsx:159 — correct peer
<CollapsibleIndicator className="size-3.5" />

// tool-result.tsx:146 — correct peer
<CollapsibleIndicator className="size-3.5 shrink-0 text-muted-foreground" />
```

`rtl:rotate-180` on **directional** chevrons (Left/Right, Menu submenu) is correct — do not remove those. Only the Sources **expand** indicator is wrong.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/sources.tsx plans/README.md` | Reviewed or STOP |
| Prove fix | `rg -n 'CollapsibleIndicator' registry/react/components/sources.tsx` | No `rtl:rotate-180` on that line |
| Peer check | `rg -n 'CollapsibleIndicator className=' registry/react/components/reasoning.tsx registry/react/components/plan.tsx registry/react/components/tool-result.tsx registry/react/components/sources.tsx` | Sources matches peers (no RTL flip on expand chevron) |
| Lint | `pnpm exec biome check registry/react/components/sources.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/sources.tsx` — `SourcesTrigger` `CollapsibleIndicator` className only; `plans/README.md` status only.

**Out of scope**: CollapsibleIndicator itself, Reasoning/Plan/ToolResult, carousel/calendar directional `rtl:rotate-180`, docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Drop rtl:rotate-180

```tsx
{showTrigger ? (
  <CollapsibleIndicator className="size-3.5" />
) : null}
```

**Verify**: Sources indicator matches Reasoning (`size-3.5` only).

### Step 2: Lint and status

Lint; mark 107 DONE.

## Test plan

No component test authorized. Do not open browsers unless named.

## Done criteria

- [ ] Sources CollapsibleIndicator has no `rtl:rotate-180`
- [ ] `pnpm exec biome check registry/react/components/sources.tsx` exits 0
- [ ] `plans/README.md` row 107 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- CollapsibleIndicator no longer uses ChevronDown / open rotate — STOP and report (fix may differ)

## Maintenance notes

- Expand/collapse chevrons (down) must not get `rtl:rotate-180`; directional chevrons (left/right) should.
- Reviewer: quick RTL glance on Sources open/closed if operator names browsers later.
