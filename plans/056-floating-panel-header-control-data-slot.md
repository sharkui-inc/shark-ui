# Plan 056: Add data-slot on FloatingPanel Header and Control

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 056 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/floating-panel.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: style
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

Most FloatingPanel parts set `data-slot` (`floating-panel`, `floating-panel-content`, `floating-panel-title`, …). `FloatingPanelHeader` and `FloatingPanelControl` omit it, so slot-based styling/`in-*` selectors cannot target them.

## Current state

```tsx
// floating-panel.tsx:177-212
export const FloatingPanelHeader = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Header>
) => {
  const { className, ...rest } = props;

  return (
    <FloatingPanelDragTrigger>
      <ArkFloatingPanel.Header
        className={cn(/* ... */, className)}
        {...rest}
      />
    </FloatingPanelDragTrigger>
  );
};

export const FloatingPanelControl = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFloatingPanel.Control
      className={cn("ms-auto flex items-center gap-2", className)}
      {...rest}
    />
  );
};
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/floating-panel.tsx plans/README.md` | Reviewed or STOP |
| Prove slots | `rg -n 'data-slot="floating-panel-header"|data-slot="floating-panel-control"' registry/react/components/floating-panel.tsx` | Both match |
| Lint | `pnpm exec biome check registry/react/components/floating-panel.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/floating-panel.tsx` — Header and Control only; `plans/README.md` status only.

**Out of scope**: Dialog slots (055), other FloatingPanel parts, docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Add default data-slots (overridable)

```tsx
<ArkFloatingPanel.Header
  className={cn(/* unchanged */, className)}
  data-slot="floating-panel-header"
  {...rest}
/>

<ArkFloatingPanel.Control
  className={cn("ms-auto flex items-center gap-2", className)}
  data-slot="floating-panel-control"
  {...rest}
/>
```

Put `data-slot` **before** `{...rest}` so consumers can override.

**Verify**: both slots present; DragTrigger wrapper untouched.

### Step 2: Lint and status

Lint; mark 056 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Header has `data-slot="floating-panel-header"` (overridable)
- [ ] Control has `data-slot="floating-panel-control"` (overridable)
- [ ] `plans/README.md` row 056 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Naming matches existing `floating-panel-*` slots.
