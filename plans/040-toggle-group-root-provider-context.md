# Plan 040: Wrap ToggleGroupRootProvider with ToggleGroupProvider

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 040 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/toggle-group.tsx content/docs/components/toggle-group.mdx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`ToggleGroupItem` always calls `_useToggleGroup()` for pill/size/spacing/variant. That Shark context is only mounted by the composed `ToggleGroup` root. `ToggleGroupRootProvider` is a raw Ark re-export, so the documented `useToggleGroup` + RootProvider + Item path throws a strict ContextError — same class as Dialog/Drawer RootProvider fixes.

## Current state

```tsx
// registry/react/components/toggle-group.tsx:16
export const ToggleGroupRootProvider = ArkToggleGroup.RootProvider;

// toggle-group.tsx:30-34 — ToggleGroupProvider / _useToggleGroup
// toggle-group.tsx:72 — only ToggleGroup mounts ToggleGroupProvider
// toggle-group.tsx:96 — Item: const { pill, variant, size, spacing } = _useToggleGroup();
```

Exemplar: `registry/react/components/drawer.tsx` `DrawerRootProvider` (~61-68).

Docs: `content/docs/components/toggle-group.mdx` `### ToggleGroupRootProvider` (~186).

Defaults from `ToggleGroup`: `variant = "ghost"`, `size = "md"`, `spacing = 0`, `pill = false`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/toggle-group.tsx content/docs/components/toggle-group.mdx plans/README.md` | Reviewed; excerpts match or STOP |
| Prove re-export gone | `rg -n 'ToggleGroupRootProvider = ArkToggleGroup.RootProvider' registry/react/components/toggle-group.tsx` | No matches |
| Lint | `pnpm exec biome check registry/react/components/toggle-group.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/toggle-group.tsx content/docs/components/toggle-group.mdx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/toggle-group.tsx`; `content/docs/components/toggle-group.mdx` (document Shark styling props on RootProvider); `plans/README.md` status only.

**Out of scope**: Toggle visual redesign, examples, manifests, `public/r/*.json`, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Replace the RootProvider re-export

After `ToggleGroupProvider` is created, replace the raw re-export with a component that:

1. Extends Ark RootProvider props plus optional `pill`, `size`, `variant`, `spacing` (same defaults as `ToggleGroup`).
2. Renders:

```tsx
<ToggleGroupProvider value={{ pill, size, spacing, variant }}>
  <ArkToggleGroup.RootProvider {...rest}>{children}</ArkToggleGroup.RootProvider>
</ToggleGroupProvider>
```

Do not change `ToggleGroup` or `ToggleGroupItem`.

**Verify**: `rg -n 'ToggleGroupProvider' registry/react/components/toggle-group.tsx` → used by both root and RootProvider.

### Step 2: Document RootProvider Shark props

In `toggle-group.mdx` under RootProvider, add rows for `pill`, `size`, `variant`, `spacing` with the same defaults as `ToggleGroup`.

### Step 3: Lint and status

Lint; mark 040 DONE in `plans/README.md`.

## Test plan

No component test authorized. If later approved: RootProvider + Item must not throw; styling props apply.

## Done criteria

- [ ] `ToggleGroupRootProvider` wraps `ToggleGroupProvider` with ToggleGroup defaults
- [ ] Docs list Shark styling props on RootProvider
- [ ] `plans/README.md` row 040 is DONE

## STOP conditions

- Excerpts no longer match; Item no longer uses `_useToggleGroup`
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Callers using RootProvider should pass the same styling props they would pass to `ToggleGroup`.
