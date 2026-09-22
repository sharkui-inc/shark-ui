# Plan 043: Wire PaginationRootProvider to PaginationTypeContext

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 043 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/pagination.tsx content/docs/components/pagination.mdx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none (coordinate with 044 if both edit `pagination.tsx`)
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`PaginationButton` reads `PaginationTypeContext` to render `<a>` when `type === "link"`. Only composed `Pagination` sets that context. Raw `PaginationRootProvider` leaves the default `"button"`, so `usePagination({ type: "link", getPageUrl })` + RootProvider silently renders buttons instead of links — no throw, broken navigation/SEO contract.

## Current state

```tsx
// registry/react/components/pagination.tsx:22
export const PaginationRootProvider = ArkPagination.RootProvider;

// pagination.tsx:24
const PaginationTypeContext = React.createContext<"button" | "link">("button");

// pagination.tsx:29-45 — Pagination sets Provider value={type}
// pagination.tsx:49-61 — PaginationButton branches on type === "link"
```

Docs: `pagination.mdx` documents link mode and RootProvider (~108–148).

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/pagination.tsx content/docs/components/pagination.mdx plans/README.md` | Reviewed or STOP |
| Prove re-export gone | `rg -n 'PaginationRootProvider = ArkPagination.RootProvider' registry/react/components/pagination.tsx` | No matches |
| Lint | `pnpm exec biome check registry/react/components/pagination.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/pagination.tsx content/docs/components/pagination.mdx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/pagination.tsx` (RootProvider only for this plan); `content/docs/components/pagination.mdx`; `plans/README.md` status only.

**Out of scope**: `pagination-item s` typo (plan 044), examples, manifests, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Custom PaginationRootProvider

Replace the re-export with a component that:

1. Accepts Ark RootProvider props plus optional `type?: "button" | "link"` (default `"button"`).
2. Wraps:

```tsx
<PaginationTypeContext.Provider value={type}>
  <ArkPagination.RootProvider {...rest}>{children}</ArkPagination.RootProvider>
</PaginationTypeContext.Provider>
```

Callers should pass the same `type` used in `usePagination({ type })`. Do not invent reading `type` from the machine value unless it is clearly available and typed — prefer an explicit prop matching `Pagination`.

**Verify**: RootProvider and Pagination both provide `PaginationTypeContext`.

### Step 2: Document `type` on RootProvider

Default `"button"`. Note it must match `usePagination` options for link mode.

### Step 3: Lint and status

Lint; mark 043 DONE.

## Test plan

No component test authorized. If later approved: RootProvider `type="link"` + Item renders `<a>`.

## Done criteria

- [ ] RootProvider sets `PaginationTypeContext`
- [ ] Docs list `type`
- [ ] `plans/README.md` row 043 is DONE

## STOP conditions

- Type context removed / PaginationButton no longer reads it
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Prefer executing 044 after or in the same touch of `pagination.tsx` to avoid conflicts.
