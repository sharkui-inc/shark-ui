# Plan 108: Lock SkipNavLink href after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 108 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/skip-nav.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`SkipNavLink` builds `href={`#${id}`}` from the shared skip target id, then spreads `{...rest}`. A consumer `href` overwrites the skip destination. Plan 102 locked only `SkipNavContent` `tabIndex={-1}`; the Link href contract was left open.

## Current state

```tsx
// skip-nav.tsx:18-39
export const SkipNavLink = (props: SkipNavLinkProps) => {
  const { id = SKIP_NAV_ID, className, children, ...rest } = props;

  return (
    <ark.a
      className={cn(/* ... */, className)}
      data-slot="skip-nav-link"
      href={`#${id}`}
      {...rest}
    >
      {children ?? "Skip to content"}
    </ark.a>
  );
};
```

`id` is already destructured (not in rest). Only `href` must move after rest.

Exemplar (Content after plan 102): `{...rest}` then `tabIndex={-1}`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/skip-nav.tsx plans/README.md` | Reviewed or STOP |
| Prove lock | `rg -n -A20 'export const SkipNavLink' registry/react/components/skip-nav.tsx` | `href={`#${id}`}` after `{...rest}` |
| Lint | `pnpm exec biome check registry/react/components/skip-nav.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/skip-nav.tsx` — `SkipNavLink` `href` order only; `plans/README.md` status only.

**Out of scope**: `SkipNavContent` (tabIndex already locked), docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: href after rest

```tsx
<ark.a
  className={cn(/* unchanged */, className)}
  data-slot="skip-nav-link"
  {...rest}
  href={`#${id}`}
>
  {children ?? "Skip to content"}
</ark.a>
```

**Verify**: computed `#${id}` wins over consumer `href`.

### Step 2: Lint and status

Lint; mark 108 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] SkipNavLink locks `href={`#${id}`}` after `{...rest}`
- [ ] `pnpm exec biome check registry/react/components/skip-nav.tsx` exits 0
- [ ] `plans/README.md` row 108 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- `id` is no longer destructured and ends up in rest — STOP and report (keep destructure)

## Maintenance notes

- SkipNavLink `id` prop is the **target** fragment id, not the link element’s HTML id — keep that API; lock only `href`.
