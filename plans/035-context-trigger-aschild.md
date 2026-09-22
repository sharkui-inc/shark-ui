# Plan 035: Honor ContextTrigger asChild

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 035 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 99593e94..HEAD -- registry/react/components/context.tsx content/docs/ai-components/context.mdx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `99593e94`, 2026-09-22

## Why this matters

`ContextTrigger` documents and types `asChild` (via `PopoverTrigger` props) but destructures `asChild: _` and always forces an internal `Button` under `PopoverTrigger asChild`. Callers cannot substitute a custom trigger element — the public prop is a silent no-op.

## Current state

```tsx
// registry/react/components/context.tsx:79-116
export const ContextTrigger = (props: ContextButtonProps) => {
  const {
    size = "sm",
    variant = "ghost",
    asChild: _,
    children,
    ...rest
  } = props;
  // ...
  return (
    <PopoverTrigger asChild data-slot="context-trigger" {...rest}>
      <Button
        className="font-normal text-muted-foreground"
        size={size}
        variant={variant}
      >
        {children ?? content}
      </Button>
    </PopoverTrigger>
  );
};
```

Docs: `content/docs/ai-components/context.mdx` lists `asChild` on ContextTrigger (~191).

`CODE_STYLE.md`: host triggers use `asChild` with exactly one child.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 99593e94..HEAD -- registry/react/components/context.tsx content/docs/ai-components/context.mdx plans/README.md` | Reviewed; excerpts match or STOP |
| Prove no discard | `rg -n 'asChild: _' registry/react/components/context.tsx` | No matches |
| Lint | `pnpm exec biome check registry/react/components/context.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/context.tsx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/context.tsx` — `ContextTrigger` only (plan 036 may touch the same file for percent clamp — coordinate if both land)
- `content/docs/ai-components/context.mdx` — optional one-liner: default Button shell; `asChild` uses children as the trigger
- `plans/README.md` — status row only

**Out of scope**:

- Percent clamp (plan 036), Popover internals, examples unless broken, manifests, tests

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Branch on asChild

1. Destructure `asChild = false` (do **not** discard into `_`).
2. Keep building default `content` (percent + `ContextIcon`) as today.
3. Behavior:
   - **`asChild === false` (default)**: keep current `PopoverTrigger asChild` + `Button` wrapping `children ?? content`.
   - **`asChild === true`**: render `PopoverTrigger asChild` with **exactly one** child — the caller’s `children` (required). Do not wrap in `Button`. If `children` is missing when `asChild` is true, STOP and report — do not invent a fallback Button.

Keep `data-slot="context-trigger"` on `PopoverTrigger`. Forward `size`/`variant` only on the default Button path.

**Verify**: `rg -n 'asChild' registry/react/components/context.tsx` → used in a conditional, not discarded.

### Step 2: Optional docs note

If the API table already lists `asChild`, add a short sentence that default renders a ghost Button; with `asChild`, pass a single custom child.

### Step 3: Lint and status

Lint; mark 035 DONE in `plans/README.md`.

## Test plan

No component test authorized. If later approved: `asChild` with a custom `<button>` must be the DOM trigger; default path still renders Button.

## Done criteria

- [ ] `asChild` is not discarded
- [ ] Default path still uses Button shell
- [ ] `asChild` path uses caller children without forced Button
- [ ] `plans/README.md` row 035 is DONE

## STOP conditions

- PopoverTrigger no longer supports asChild
- Honoring asChild appears to require removing the Button default entirely — stop; keep both paths
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- If plan 036 edits the same file, avoid merge conflicts on the Trigger block; percent helper can live above Trigger.
