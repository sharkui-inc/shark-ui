# Plan 106: Lock decorative aria-hidden after rest (six parts)

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 106 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/field.tsx registry/react/components/clipboard.tsx registry/react/components/marker.tsx registry/react/components/bottom-navigation.tsx registry/react/components/status.tsx registry/react/components/circular-progress.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

These parts are decorative (required asterisk, clipboard glyph, marker icon, nav icon, status pip, circular progress SVG). They set `aria-hidden` **before** `{...rest}`, so consumers can clear hiding and expose chrome to AT — same lock-after-spread class as Breadcrumb Separator/Ellipsis (plan 103).

## Current state

```tsx
// field.tsx:184-192 FieldRequiredIndicator
<ArkField.RequiredIndicator
  aria-hidden
  className={cn(/* ... */, className)}
  data-slot="field-required-indicator"
  {...rest}
>

// clipboard.tsx:113-118 ClipboardIndicator
<ArkClipboard.Indicator
  aria-hidden="true"
  className={cn("pointer-events-none", className)}
  copied={copied}
  data-slot="clipboard-indicator"
  {...rest}
>

// marker.tsx:51-58 MarkerIcon
<ark.span
  aria-hidden="true"
  className={cn(/* ... */, className)}
  data-slot="marker-icon"
  {...rest}
/>

// bottom-navigation.tsx:120-125 BottomNavigationItemIcon
<ark.span
  aria-hidden
  className={cn("flex items-center justify-center", className)}
  data-slot="bottom-navigation-item-icon"
  {...rest}
/>

// status.tsx:43-48 Status
<ark.span
  aria-hidden="true"
  className={cn(statusVariants({ size, variant }), className)}
  data-size={size}
  data-slot="status-indicator"
  {...rest}
/>

// circular-progress.tsx:88-103 CircularProgressTrack (svg)
<ark.svg
  aria-hidden="true"
  className={cn(/* ... */, className)}
  data-slot="circular-progress-circle"
  height={size}
  viewBox={`0 0 ${size} ${size}`}
  width={size}
  {...rest}
>
```

Keep each site’s existing boolean form (`aria-hidden` vs `aria-hidden="true"`).

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/field.tsx registry/react/components/clipboard.tsx registry/react/components/marker.tsx registry/react/components/bottom-navigation.tsx registry/react/components/status.tsx registry/react/components/circular-progress.tsx plans/README.md` | Reviewed or STOP |
| Prove locks | `rg -n -B2 -A6 'aria-hidden' registry/react/components/field.tsx registry/react/components/clipboard.tsx registry/react/components/marker.tsx registry/react/components/bottom-navigation.tsx registry/react/components/status.tsx registry/react/components/circular-progress.tsx` | On each in-scope part, `aria-hidden` appears **after** `{...rest}` |
| Lint | `pnpm exec biome check registry/react/components/field.tsx registry/react/components/clipboard.tsx registry/react/components/marker.tsx registry/react/components/bottom-navigation.tsx registry/react/components/status.tsx registry/react/components/circular-progress.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope** (only the six parts named above):

- `registry/react/components/field.tsx` — `FieldRequiredIndicator`
- `registry/react/components/clipboard.tsx` — `ClipboardIndicator`
- `registry/react/components/marker.tsx` — `MarkerIcon`
- `registry/react/components/bottom-navigation.tsx` — `BottomNavigationItemIcon`
- `registry/react/components/status.tsx` — `Status`
- `registry/react/components/circular-progress.tsx` — `CircularProgressTrack` svg
- `plans/README.md` — status only

**Out of scope**: Blanket `aria-hidden` locks elsewhere, soft `role` locks, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Move aria-hidden after rest on all six

Pattern:

```tsx
{...rest}
aria-hidden
// or
aria-hidden="true"
```

Preserve each file’s existing `aria-hidden` spelling. For ClipboardIndicator, keep `copied={copied}` wherever it already sits relative to className/data-slot; only the `aria-hidden` vs rest order is required.

**Verify**: `rg` shows `aria-hidden` after `{...rest}` on all six.

### Step 2: Lint and status

Lint all six files; mark 106 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] All six parts lock `aria-hidden` after `{...rest}`
- [ ] Biome check on all six files exits 0
- [ ] `plans/README.md` row 106 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- Tempted to lock every `aria-hidden` in the registry — STOP; stay on the six named parts

## Maintenance notes

- Decorative Shark parts that exist only as visual chrome should lock `aria-hidden` after rest (Breadcrumb 103 pattern).
