# Plan 032: Wrap FloatingPanelRootProvider with FloatingPanelProvider

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 032 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 99593e94..HEAD -- registry/react/components/floating-panel.tsx content/docs/components/floating-panel.mdx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `99593e94`, 2026-09-22

## Why this matters

`FloatingPanelContent` always calls `_useFloatingPanelConfig()` for `persistRect` (exit animation variant). That Shark context is only provided by the composed `FloatingPanel` root. `FloatingPanelRootProvider` is a raw Ark re-export, so the documented `useFloatingPanel` + RootProvider + Content path throws a strict ContextError — same class as Drawer/Dialog RootProvider fixes.

## Current state

```tsx
// registry/react/components/floating-panel.tsx:20
export const FloatingPanelRootProvider = ArkFloatingPanel.RootProvider;

// floating-panel.tsx:22-27
const [FloatingPanelProvider, _useFloatingPanelConfig] = createContext<
  Pick<React.ComponentProps<typeof ArkFloatingPanel.Root>, "persistRect">
>({
  name: "FloatingPanelContext",
  providerName: "FloatingPanel",
});

// floating-panel.tsx:40-48 — only FloatingPanel mounts FloatingPanelProvider
// floating-panel.tsx:100 — Content: const { persistRect } = _useFloatingPanelConfig();
```

Exemplar: `registry/react/components/drawer.tsx` `DrawerRootProvider` wrapping Shark context (~61-68).

Docs: `content/docs/components/floating-panel.mdx` `### FloatingPanelRootProvider` (~224) lists only `value`. Root documents `persistRect` default `true` (~157).

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 99593e94..HEAD -- registry/react/components/floating-panel.tsx content/docs/components/floating-panel.mdx plans/README.md` | Reviewed; excerpts match or STOP |
| Prove re-export gone | `rg -n 'FloatingPanelRootProvider = ArkFloatingPanel.RootProvider' registry/react/components/floating-panel.tsx` | No matches |
| Lint | `pnpm exec biome check registry/react/components/floating-panel.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/floating-panel.tsx content/docs/components/floating-panel.mdx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/floating-panel.tsx`
- `content/docs/components/floating-panel.mdx` — optional `persistRect` on RootProvider
- `plans/README.md` — status row only

**Out of scope**:

- FloatingPanelRestore Zag `hidden` behavior (by-design)
- Adding missing `data-slot` on Header/Control (separate STYLE finding)
- Examples, manifests, `public/r/*.json`, tests

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Replace the RootProvider re-export

After `FloatingPanelProvider` is created, replace the raw re-export with a component that:

1. Accepts Ark RootProvider props plus optional `persistRect?: boolean` (default `true`, matching `FloatingPanel`).
2. Renders:

```tsx
<FloatingPanelProvider value={{ persistRect }}>
  <ArkFloatingPanel.RootProvider {...rest}>{children}</ArkFloatingPanel.RootProvider>
</FloatingPanelProvider>
```

Do not change `FloatingPanel`, `FloatingPanelContent`, or Restore controls.

**Verify**: `rg -n 'FloatingPanelProvider' registry/react/components/floating-panel.tsx` → used by both root and RootProvider.

### Step 2: Document `persistRect` on RootProvider

In `floating-panel.mdx` under `### FloatingPanelRootProvider`, add `persistRect` | `boolean` | `true` (drives Content exit animation variant; match `useFloatingPanel` / Root).

**Verify**: section mentions `persistRect`.

### Step 3: Lint and status

Lint; mark 032 DONE in `plans/README.md`.

## Test plan

No component test authorized. If later approved: RootProvider + Content must not throw; `persistRect={false}` should omit the closed-state zoom/fade variant classes.

## Done criteria

- [ ] `FloatingPanelRootProvider` wraps `FloatingPanelProvider` with default `persistRect: true`
- [ ] Docs list `persistRect` on RootProvider
- [ ] No out-of-scope files changed for this plan
- [ ] `plans/README.md` row 032 is DONE

## STOP conditions

- Excerpts no longer match
- Content no longer uses `_useFloatingPanelConfig` (drift) — reassess
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Reviewers: confirm callers pass the same `persistRect` used in `useFloatingPanel` when non-default.
- Do not “fix” Restore icon visibility in this plan.
