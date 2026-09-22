# Plan 061: Merge ProgressTrack/Range className; don’t let props overwrite it

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 061 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/progress.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`ProgressTrack` and `ProgressRange` set `className={cn(...defaults)}` then `{...props}`. Consumer `className` replaces all track/range styling. `CircularProgressTrack` correctly destructures and merges — match that pattern.

## Current state

```tsx
// progress.tsx:64-95
export const ProgressTrack = (
  props: React.ComponentProps<typeof ArkProgress.Track>
) => (
  <ArkProgress.Track
    className={cn(
      "bg-input",
      "rounded-full",
      // ...
    )}
    data-slot="progress-track"
    {...props}
  />
);

export const ProgressRange = (
  props: React.ComponentProps<typeof ArkProgress.Range>
) => (
  <ArkProgress.Range
    className={cn(/* defaults */)}
    data-slot="progress-range"
    {...props}
  />
);
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/progress.tsx plans/README.md` | Reviewed or STOP |
| Prove merge | `rg -n -A15 'export const ProgressTrack|export const ProgressRange' registry/react/components/progress.tsx` | Both destructure `className`; `cn(defaults, className)`; rest after |
| Lint | `pnpm exec biome check registry/react/components/progress.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/progress.tsx` — Track and Range only; `plans/README.md` status only.

**Out of scope**: CircularProgress, ProgressLabel/ValueText, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Destructure className on Track and Range

```tsx
export const ProgressTrack = (
  props: React.ComponentProps<typeof ArkProgress.Track>
) => {
  const { className, ...rest } = props;

  return (
    <ArkProgress.Track
      className={cn(
        "bg-input",
        "rounded-full",
        "overflow-x-hidden",
        "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2",
        className
      )}
      data-slot="progress-track"
      {...rest}
    />
  );
};
```

Same for `ProgressRange` — keep existing default class strings, append `className` last in `cn()`.

**Verify**: no `{...props}` after a hardcoded `className` that omits consumer merge.

### Step 2: Lint and status

Lint; mark 061 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Track merges consumer `className`
- [ ] Range merges consumer `className`
- [ ] Default visual classes remain
- [ ] `plans/README.md` row 061 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Align any future Progress parts with CircularProgress merge style.
