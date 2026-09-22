# Plan 058: Merge InputGroupAddon onMouseDown; don’t let rest overwrite it

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 058 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/input-group.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`InputGroupAddon` sets an internal `onMouseDown` that focuses the sibling input/textarea, then spreads `{...rest}`. A consumer `onMouseDown` replaces focus-on-click entirely. Used by PromptInput header/footer and PasswordInputTrigger.

## Current state

```tsx
// registry/react/components/input-group.tsx:126-158
export const InputGroupAddon = (props: InputGroupAddonProps) => {
  const { className, align = "inline-start", ...rest } = props;

  return (
    <ark.div
      // ...
      onMouseDown={(event) => {
        if ((event.target as HTMLElement).closest("button, a, input, ...")) {
          return;
        }
        event.preventDefault();
        // ... focus sibling input/textarea
      }}
      role="group"
      {...rest}
    />
  );
};
```

Exemplar merge pattern: `CalendarTodayTrigger` after plan 051 — destructure handler, `{...rest}` first, call consumer then gate on `defaultPrevented`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/input-group.tsx plans/README.md` | Reviewed or STOP |
| Prove merge | `rg -n -A25 'export const InputGroupAddon' registry/react/components/input-group.tsx` | `onMouseDown` destructured; rest before handler; `defaultPrevented` gate |
| Lint | `pnpm exec biome check registry/react/components/input-group.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/input-group.tsx` — `InputGroupAddon` only; `plans/README.md` status only.

**Out of scope**: InputGroupInput, PasswordInput, PromptInput, docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Destructure and compose onMouseDown

```tsx
const { className, align = "inline-start", onMouseDown, ...rest } = props;
// ...
<ark.div
  className={cn(inputGroupAddonVariants({ align }), className)}
  data-align={align}
  data-inline={align.startsWith("inline") || undefined}
  data-slot="input-group-addon"
  role="group"
  {...rest}
  onMouseDown={(event) => {
    onMouseDown?.(event);
    if (event.defaultPrevented) {
      return;
    }
    if (
      (event.target as HTMLElement).closest(
        "button, a, input, select, textarea, [role=button], [role=combobox], [role=listbox], [data-slot=select-trigger]"
      )
    ) {
      return;
    }
    event.preventDefault();
    const parent = event.currentTarget.parentElement;
    const control = parent?.querySelector<
      HTMLInputElement | HTMLTextAreaElement
    >("input, textarea");
    if (control && !parent?.querySelector("input:focus, textarea:focus")) {
      control.focus();
    }
  }}
/>
```

Keep the interactive-descendant early return and focus logic identical; only change order/composition.

**Verify**: rest cannot overwrite `onMouseDown`; focus runs unless prevented.

### Step 2: Lint and status

Lint; mark 058 DONE in `plans/README.md`.

## Test plan

No component test authorized.

## Done criteria

- [ ] Consumer `onMouseDown` no longer disables focus-on-click
- [ ] `defaultPrevented` skips focus logic
- [ ] Interactive-descendant early return preserved
- [ ] `plans/README.md` row 058 is DONE

## STOP conditions

- Focus query / closest selector semantics drift and changing them is required for the merge
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Same class as SidebarRail / CalendarTodayTrigger handler merges.
