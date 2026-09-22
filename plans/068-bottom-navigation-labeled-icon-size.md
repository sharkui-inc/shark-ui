# Plan 068: Size BottomNavigationItem icons when labeled, not the item

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 068 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/bottom-navigation.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`BottomNavigationItem` applies `has-[data-slot=bottom-navigation-item-label]:size-4` to the **item** (width/height 1rem), not the icon. Default/docs composition always includes a label — icon shrink-on-label never happens; the trigger gets an erroneous size instead.

## Current state

```tsx
// bottom-navigation.tsx:103-104
"[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
"has-[data-slot=bottom-navigation-item-label]:size-4",
```

`BottomNavigationItemIcon` uses `data-slot="bottom-navigation-item-icon"` (~123).

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/bottom-navigation.tsx plans/README.md` | Reviewed or STOP |
| Prove target | `rg -n 'bottom-navigation-item-label|size-4|size-5' registry/react/components/bottom-navigation.tsx` | Label presence sizes svg/icon, not the item root |
| Lint | `pnpm exec biome check registry/react/components/bottom-navigation.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/bottom-navigation.tsx` — item class string only; `plans/README.md` status only.

**Out of scope**: Docs/examples layout, other nav components, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Retarget size-4 to icons

Replace the item-level rule with an icon/svg rule, e.g.:

```tsx
"[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
"has-[data-slot=bottom-navigation-item-label]:[&_svg:not([class*='size-'])]:size-4",
```

or, if icons always use `BottomNavigationItemIcon`:

```tsx
"has-[data-slot=bottom-navigation-item-label]:[&_[data-slot=bottom-navigation-item-icon]_svg:not([class*='size-'])]:size-4",
```

Prefer the first (matches existing `[&_svg…]` pattern). Remove the bare `has-…:size-4` on the item.

**Verify**: no item-level `has-[data-slot=bottom-navigation-item-label]:size-4`.

### Step 2: Lint and status

Lint; mark 068 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Labeled items no longer force `size-4` on the trigger root
- [ ] Icons shrink when a label is present
- [ ] `plans/README.md` row 068 is DONE

## STOP conditions

- Icon-only items regress sizing — STOP and adjust selector
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Docs always use label + icon; keep both compositions valid.
