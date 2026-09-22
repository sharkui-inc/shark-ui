# Plan 060: Merge CircularSlider Root/Thumb style; don’t let rest overwrite it

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 060 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/circular-slider.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`CircularSlider` Root sets `height`/`width`/`--thickness` via `style`, then `{...rest}` (which may include `style`) overwrites them. Thumb sets `--size` the same way. Consumer `style` silently breaks dimensions. `CircularSliderMarker` in the same file already merges style correctly — match it.

## Current state

```tsx
// circular-slider.tsx:105-112 (Root)
style={
  {
    "--thickness": `${thickness}px`,
    height: size,
    width: size,
  } as React.CSSProperties
}
{...rest}

// circular-slider.tsx:221-226 (Thumb)
style={
  {
    "--size": `${thumbSize}px`,
  } as React.CSSProperties
}
{...rest}
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/circular-slider.tsx plans/README.md` | Reviewed or STOP |
| Prove merge | `rg -n -A8 'style=\{' registry/react/components/circular-slider.tsx` | Root and Thumb merge consumer `style`; internal keys last |
| Lint | `pnpm exec biome check registry/react/components/circular-slider.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/circular-slider.tsx` — Root and Thumb style merge only; `plans/README.md` status only.

**Out of scope**: Marker (already OK), CircularSliderRootProvider, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Destructure style and merge last

On Root (and Thumb):

```tsx
const { className, style, ...rest } = props; // plus existing destructures
// ...
{...rest}
style={
  {
    ...style,
    "--thickness": `${thickness}px`,
    height: size,
    width: size,
  } as React.CSSProperties
}
```

Thumb:

```tsx
style={
  {
    ...style,
    "--size": `${thumbSize}px`,
  } as React.CSSProperties
}
```

Internal keys must win over consumer for size/thickness/`--size`. Put `{...rest}` before `style`.

**Verify**: `style` destructured from props; no bare `{...rest}` after `style`.

### Step 2: Lint and status

Lint; mark 060 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Root size/thickness CSS vars survive consumer `style`
- [ ] Thumb `--size` survives consumer `style`
- [ ] `plans/README.md` row 060 is DONE

## STOP conditions

- Marker merge pattern unavailable as reference and Root/Thumb APIs drifted
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Reviewers: ensure consumer custom properties still work via spread-first merge.
