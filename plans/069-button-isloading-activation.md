# Plan 069: Make Button isLoading non-activatable (match aria-disabled)

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 069 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/button.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: MED
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`Button` with `isLoading` sets `aria-disabled` and CSS `pointer-events-none` / `data-[state=loading]:pointer-events-none`, but does not set native `disabled` or block keyboard activation. AT announces disabled while Enter/Space can still fire `onClick`. Loading examples use `<Button isLoading>` without `disabled`.

## Current state

```tsx
// button.tsx:22-25 — CSS:
"aria-disabled:pointer-events-none aria-disabled:opacity-64",
"data-[state=loading]:pointer-events-none",

// button.tsx:160-174
<data-state={isLoading ? "loading" : "idle"}
{...rest}
aria-busy={isLoading}
aria-disabled={isLoading}
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/button.tsx plans/README.md` | Reviewed or STOP |
| Prove guard | `rg -n -A25 'isLoading' registry/react/components/button.tsx` | Loading blocks activation (disabled and/or click/key guards) |
| Lint | `pnpm exec biome check registry/react/components/button.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/button.tsx` — loading activation behavior only; `plans/README.md` status only.

**Out of scope**: Spinner visuals, docs rewrite, AttachmentRemove (070), tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Choose one approach (prefer A)

**A (preferred — native disabled):**

```tsx
const { disabled, isLoading = false, onClick, ...rest } = props;
// ...
disabled={disabled || isLoading}
{...rest}
aria-busy={isLoading}
// Keep aria-disabled={isLoading} only if still needed for styling; native disabled already implies a11y disabled.
```

Note: native `disabled` removes focusability. If product wants focus retained while loading, use **B**.

**B (keep focus, block activation):**

```tsx
const { isLoading = false, onClick, onKeyDown, disabled, ...rest } = props;
// ...
disabled={disabled}
aria-disabled={isLoading || disabled}
aria-busy={isLoading}
onClick={(event) => {
  if (isLoading) {
    event.preventDefault();
    return;
  }
  onClick?.(event);
}}
onKeyDown={(event) => {
  if (isLoading && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    return;
  }
  onKeyDown?.(event);
}}
```

Put composed handlers after `{...rest}`. Prefer A unless MDX/examples document focus-while-loading.

**Verify**: keyboard cannot activate a loading button; pointer already blocked by CSS.

### Step 2: Lint and status

Lint; mark 069 DONE. Note in the README status which approach (A/B) landed if useful.

## Test plan

No component test authorized.

## Done criteria

- [ ] Loading button cannot be activated via keyboard
- [ ] Pointer path remains non-interactive
- [ ] Non-loading buttons unchanged
- [ ] `plans/README.md` row 069 is DONE

## STOP conditions

- Docs explicitly require focusable loading buttons and A would break that — use B or STOP and report
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Reviewers: confirm `disabled || isLoading` does not break async submit patterns that keep focus.
