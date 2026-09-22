# Plan 110: Add rtl:rotate-180 on DrawerMenuTrigger chevron

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 110 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/drawer.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`DrawerMenuTrigger` shows a nested-menu affordance with `ChevronRightIcon` but no RTL flip. Peer `MenuTriggerItem` uses `rtl:rotate-180` on its right chevron. Plan 107 maintenance notes: directional Left/Right chevrons **should** flip in RTL; only expand (down) chevrons must not.

## Current state

```tsx
// drawer.tsx:940-958
export const DrawerMenuTrigger = (
  props: React.ComponentProps<typeof DrawerTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <DrawerTrigger
      className={cn(
        menuItemVariants(),
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="drawer-menu-trigger"
      {...rest}
    >
      {children}
      <ChevronRightIcon className="ms-auto size-3.5" />
    </DrawerTrigger>
  );
};
```

Exemplar (`menu.tsx:396-397`):

```tsx
<ChevronRight className="size-3.5 rtl:rotate-180" />
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/drawer.tsx plans/README.md` | Reviewed or STOP |
| Prove flip | `rg -n 'ChevronRightIcon' registry/react/components/drawer.tsx` | Class includes `rtl:rotate-180` |
| Peer check | `rg -n 'rtl:rotate-180' registry/react/components/menu.tsx` | Menu submenu chevron still has it |
| Lint | `pnpm exec biome check registry/react/components/drawer.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/drawer.tsx` — `DrawerMenuTrigger` chevron className only; `plans/README.md` status only.

**Out of scope**: Other Drawer parts, Menu (already correct), examples, docs, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Add rtl:rotate-180

```tsx
<ChevronRightIcon className="ms-auto size-3.5 rtl:rotate-180" />
```

Keep `ms-auto` and `size-3.5`.

**Verify**: className matches Menu’s directional flip pattern.

### Step 2: Lint and status

Lint; mark 110 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] DrawerMenuTrigger ChevronRightIcon has `rtl:rotate-180`
- [ ] `pnpm exec biome check registry/react/components/drawer.tsx` exits 0
- [ ] `plans/README.md` row 110 is DONE

## STOP conditions

- Lint fails twice on the same in-scope issue after a reasonable fix
- DrawerMenuTrigger no longer uses ChevronRight — STOP and report

## Maintenance notes

- Keep DrawerMenuTrigger and MenuTriggerItem chevron RTL behavior in lockstep.
- Do not add `rtl:rotate-180` to down/expand CollapsibleIndicators (see plan 107).
