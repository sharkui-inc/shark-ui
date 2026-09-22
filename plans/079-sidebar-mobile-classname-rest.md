# Plan 079: Honor Sidebar className/rest on the mobile Sheet path

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 079 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/sidebar.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

Desktop `Sidebar` applies `className` / `{...rest}` on the container. The `isMobile` path renders `SheetContent` with a fixed class list and omits both — `<Sidebar className=… id=…>` only works on desktop.

## Current state

```tsx
// sidebar.tsx:174-182 — destructures className, children, ...rest
// sidebar.tsx:205-239 — mobile:
<SheetContent
  className={cn(
    "w-(--sidebar-width)",
    "p-0",
    "bg-sidebar",
    "text-sidebar-foreground",
    "[&>button]:hidden"
  )}
  data-mobile="true"
  data-sidebar="sidebar"
  data-slot="sidebar"
  placement={...}
  style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE }}
>
  ...
  <ark.div className="flex size-full flex-col">{children}</ark.div>
</SheetContent>

// Desktop container ~267-282 applies className + {...rest}
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/sidebar.tsx plans/README.md` | Reviewed or STOP |
| Prove merge | `rg -n -A25 'if \(isMobile\)' registry/react/components/sidebar.tsx` | `className`/`rest` applied on mobile path |
| Lint | `pnpm exec biome check registry/react/components/sidebar.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/sidebar.tsx` — mobile `Sidebar` branch only; `plans/README.md` status only.

**Out of scope**: Rail/Trigger/open sync (045/046/049), Sheet peer overlay (083), docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Merge className and rest on mobile

Prefer applying to the inner full-size wrapper if SheetContent layout classes must stay locked:

```tsx
<SheetContent
  className={cn(
    "w-(--sidebar-width)",
    "p-0",
    "bg-sidebar",
    "text-sidebar-foreground",
    "[&>button]:hidden"
  )}
  // keep placement/style/data-* 
>
  <SheetHeader ... />
  <ark.div
    className={cn("flex size-full flex-col", className)}
    data-slot="sidebar-inner"
    {...rest}
  >
    {children}
  </ark.div>
</SheetContent>
```

Or merge onto `SheetContent` with `cn(..., className)` and `{...rest}` **after** locked props so placement/width/style win. Do not let rest overwrite `open`/`placement`/`style` width token — destructure colliding keys if needed.

**Verify**: mobile path uses `className` and `rest`.

### Step 2: Lint and status

Lint; mark 079 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Mobile Sidebar honors consumer `className`
- [ ] Mobile Sidebar forwards remaining DOM props via rest (without breaking Sheet placement)
- [ ] `plans/README.md` row 079 is DONE

## STOP conditions

- Spreading rest onto SheetContent breaks mobile open/placement — use inner wrapper and STOP only if both fail
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep desktop and mobile prop surface aligned.
