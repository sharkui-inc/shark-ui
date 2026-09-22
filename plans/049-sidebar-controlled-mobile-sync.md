# Plan 049: Sync controlled Sidebar open with mobile sheet

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 049 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/sidebar.tsx content/docs/components/sidebar.mdx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: none (coordinate with 045/046 if they edit `sidebar.tsx`)
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

Docs say `open` / `onOpenChange` control sidebar open state. On mobile, the Sheet is bound only to `openMobile`, and `toggleSidebar` flips `openMobile` without calling `setOpen` / `onOpenChange`. Controlled `open={false}` therefore cannot close the mobile sheet; mobile toggles never update parent `open`. Desktop and mobile diverge from the documented controlled API.

## Current state

```tsx
// registry/react/components/sidebar.tsx:85-110
const [openMobile, setOpenMobile] = React.useState(false);
const open = openProp ?? _open;
const setOpen = React.useCallback(/* updates openProp / _open + cookie */, ...);

const toggleSidebar = React.useCallback(() => {
  if (isMobile) {
    setOpenMobile((prev) => !prev);
  } else {
    setOpen((prev) => !prev);
  }
}, [isMobile, setOpen]);

// sidebar.tsx:197
<Sheet onOpenChange={({ open }) => setOpenMobile(open)} open={openMobile}>
```

Docs: `content/docs/components/sidebar.mdx` ## Controlled (~173-188) show only `open` / `onOpenChange`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/sidebar.tsx content/docs/components/sidebar.mdx plans/README.md` | Reviewed or STOP |
| Lint | `pnpm exec biome check registry/react/components/sidebar.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/sidebar.tsx content/docs/components/sidebar.mdx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/sidebar.tsx` — Provider open/mobile sync and Sheet wiring
- `content/docs/components/sidebar.mdx` — Controlled section honesty
- `plans/README.md` — status only

**Out of scope**: Rail/Trigger click fixes (045/046), theming, examples beyond docs snippet, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Decide and implement a single controlled contract

**Required outcome** (minimal, high-confidence):

1. When controlled `open` becomes `false`, also `setOpenMobile(false)` so programmatic close works on mobile.
2. When the mobile Sheet requests open-change, also call `setOpen` / `onOpenChange` so parent state tracks mobile toggles (or document a dedicated `openMobile` API — prefer routing through `setOpen` for the Controlled docs to stay true).
3. `toggleSidebar` on mobile should update the same controlled surface the docs describe (`setOpen`), not only `openMobile` — e.g. `setOpen((prev) => !prev)` and keep `openMobile` in sync, **or** call both.

Recommended approach (keep dual internal state for animation/sheet, but sync):

- Effect: if `openProp === false`, `setOpenMobile(false)`.
- Effect or Sheet `onOpenChange`: when mobile sheet opens/closes, call `setOpen(next)` so cookie + `onOpenChange` fire.
- `toggleSidebar` on mobile: `setOpen((prev) => !prev)` and let sync drive `openMobile`, **or** set both atomically.

Do **not** remove offcanvas desktop behavior. Do **not** invent a breaking rename of props without updating docs.

If the cleanest fix is larger than syncing (full redesign of mobile API), STOP and report rather than inventing a new public prop without docs approval.

**Verify**: reading Provider shows controlled `open={false}` forces mobile sheet closed; mobile toggle invokes `onOpenChange` / `setOpen`.

### Step 2: Update Controlled docs

Revise `sidebar.mdx` Controlled section to match the implemented contract (mention that mobile sheet follows `open` / `onOpenChange`). Remove any implication that only desktop is controlled if that was the old reality.

### Step 3: Lint and status

Lint; mark 049 DONE.

## Test plan

No component test authorized. If later approved: controlled close on mobile; toggle fires `onOpenChange` on mobile.

## Done criteria

- [ ] Controlled `open={false}` closes mobile Sheet
- [ ] Mobile open/close notifies `onOpenChange` / updates controlled `open`
- [ ] Docs match behavior
- [ ] `plans/README.md` row 049 is DONE

## STOP conditions

- Fix requires a new public prop surface without operator approval
- Desktop collapse / cookie persistence would break — stop and report the conflict
- Lint fails twice on the same in-scope issue after a reasonable fix
- Excerpts no longer match (Provider reshaped)

## Maintenance notes

- Reviewers: scrutinize cookie writes on mobile toggles and SSR hydration of `open`.
- Prefer one PR with 045/046 if they are still TODO to reduce merge pain.
