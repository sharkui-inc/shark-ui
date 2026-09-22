# Plan 103: Lock Breadcrumb page / separator / ellipsis a11y attrs after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 103 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/breadcrumb.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`BreadcrumbPage` exists to mark the current page (`aria-current="page"`). `BreadcrumbSeparator` / `BreadcrumbEllipsis` are decorative (`aria-hidden` + `role="presentation"`). Those attrs are set **before** `{...rest}` / `{...props}`, so consumers can drop current-page marking or expose decorative nodes to AT — same lock-after-spread class as AlertDialog (092).

## Current state

```tsx
// breadcrumb.tsx:75-87 BreadcrumbPage
<ark.span
  aria-current="page"
  className={cn("font-normal text-foreground", className)}
  data-slot="breadcrumb-page"
  {...rest}
/>

// breadcrumb.tsx:90-105 BreadcrumbSeparator
<ark.li
  aria-hidden="true"
  className={cn("opacity-64 [&_svg]:size-4", className)}
  data-slot="breadcrumb-separator"
  role="presentation"
  {...rest}
>

// breadcrumb.tsx:108-119 BreadcrumbEllipsis
<ark.span
  aria-hidden="true"
  data-slot="breadcrumb-ellipsis"
  role="presentation"
  {...props}
>
```

Do **not** expand into BreadcrumbList `role="list"` or other soft roles — this plan is only Page / Separator / Ellipsis contracts.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/breadcrumb.tsx plans/README.md` | Reviewed or STOP |
| Prove locks | `rg -n -A15 'BreadcrumbPage|BreadcrumbSeparator|BreadcrumbEllipsis' registry/react/components/breadcrumb.tsx` | a11y attrs after `{...rest}` / `{...props}` on all three |
| Lint | `pnpm exec biome check registry/react/components/breadcrumb.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/breadcrumb.tsx` — `BreadcrumbPage`, `BreadcrumbSeparator`, `BreadcrumbEllipsis` only; `plans/README.md` status only.

**Out of scope**: BreadcrumbList/Item/Link roles, docs, examples, tests, locking every `role` in the design system.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Page — aria-current after rest

```tsx
<ark.span
  className={cn("font-normal text-foreground", className)}
  data-slot="breadcrumb-page"
  {...rest}
  aria-current="page"
/>
```

### Step 2: Separator — aria-hidden + role after rest

```tsx
<ark.li
  className={cn("opacity-64 [&_svg]:size-4", className)}
  data-slot="breadcrumb-separator"
  {...rest}
  aria-hidden="true"
  role="presentation"
>
```

### Step 3: Ellipsis — aria-hidden + role after props

```tsx
<ark.span
  data-slot="breadcrumb-ellipsis"
  {...props}
  aria-hidden="true"
  role="presentation"
>
```

**Verify**: all three lock a11y attrs after spread.

### Step 4: Lint and status

Lint; mark 103 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] BreadcrumbPage locks `aria-current="page"` after rest
- [ ] Separator and Ellipsis lock `aria-hidden` + `role="presentation"` after spread
- [ ] `pnpm exec biome check registry/react/components/breadcrumb.tsx` exits 0
- [ ] `plans/README.md` row 103 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- Tempted to “fix” BreadcrumbList `role="list"` in the same change — STOP; that is out of scope (soft default, previously rejected)

## Maintenance notes

- BreadcrumbPage’s identity is `aria-current="page"` — keep it locked.
- Decorative Separator/Ellipsis must stay hidden from AT.
