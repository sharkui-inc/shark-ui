# Plan 096: Restore document direction on FloatingPanel Content

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 096 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/floating-panel.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`FloatingPanelContent` forces `dir="ltr"` on the **Positioner** so physical `--x` / `--y` work with `inset-s-(--x)`. `Content` inherits that direction, so the whole panel chrome (title `flex-1 truncate`, `ms-auto` controls, form fields) stays LTR even when the app / `LocaleProvider` is RTL. The RTL example (`registry/react/examples/floating-panel/example-rtl.tsx`) expects Arabic/Hebrew layout inside the panel.

## Current state

```tsx
// floating-panel.tsx:49-81
export const FloatingPanelContent = (props: FloatingPanelContentProps) => {
  const { resizable = true, className, children, ...rest } = props;

  return (
    <Portal>
      <ArkFloatingPanel.Positioner
        className="inset-s-(--x) top-(--y)"
        data-slot="floating-panel-positioner"
        // Position coordinates are physical, so the portal geometry stays LTR.
        dir="ltr"
        style={{ zIndex: "calc(50 + var(--z-index))" }}
      >
        <ArkFloatingPanel.Content
          className={cn(/* ... */, className)}
          data-slot="floating-panel-content"
          {...rest}
        >
```

`FloatingPanelTitle` (`:204-220`) is `min-w-0 flex-1` + `truncate` under that inherited LTR ancestor.

Exemplar for reading locale dir (`circular-slider.tsx`):

```tsx
import { useLocale } from "@/registry/react/components/locale";
const { dir } = useLocale();
```

`locale.tsx` re-exports Ark `useLocaleContext` as `useLocale`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/floating-panel.tsx plans/README.md` | Reviewed or STOP |
| Prove Content dir | `rg -n -A25 'export const FloatingPanelContent' registry/react/components/floating-panel.tsx` | Positioner still `dir="ltr"`; Content sets `dir` from `useLocale()` **after** `{...rest}` (or equivalent that wins) |
| Lint | `pnpm exec biome check registry/react/components/floating-panel.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named. Do **not** open browsers to check the RTL example unless the operator asks.

## Scope

**In scope**: `registry/react/components/floating-panel.tsx` — `FloatingPanelContent` (Positioner stays LTR; Content gets document/locale dir); `plans/README.md` status only.

**Out of scope**: Resize triggers, Header/Title classNames, examples (including `example-rtl.tsx`), docs, tests, browsers, replacing `inset-s` with physical `left` (acceptable alternative only if `useLocale` is unavailable — prefer Content `dir` reset).

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Import useLocale and set Content dir

1. Add: `import { useLocale } from "@/registry/react/components/locale";`
2. Inside `FloatingPanelContent`, call `const { dir } = useLocale();`
3. Keep Positioner `dir="ltr"` and the geometry comment unchanged.
4. On `ArkFloatingPanel.Content`, spread `{...rest}` then lock `dir={dir}` so consumer rest cannot force LTR back unless you intentionally allow override — **prefer locking locale `dir` after rest** so geometry stays on Positioner and chrome follows locale.

Target shape:

```tsx
export const FloatingPanelContent = (props: FloatingPanelContentProps) => {
  const { resizable = true, className, children, ...rest } = props;
  const { dir } = useLocale();

  return (
    <Portal>
      <ArkFloatingPanel.Positioner
        className="inset-s-(--x) top-(--y)"
        data-slot="floating-panel-positioner"
        // Position coordinates are physical, so the portal geometry stays LTR.
        dir="ltr"
        style={{ zIndex: "calc(50 + var(--z-index))" }}
      >
        <ArkFloatingPanel.Content
          className={cn(/* unchanged */, className)}
          data-slot="floating-panel-content"
          {...rest}
          dir={dir}
        >
```

If Content already receives `dir` via rest and you must allow explicit consumer override, STOP and report — default intent is locale wins for chrome.

**Verify**: Positioner LTR preserved; Content has `dir={dir}` from `useLocale` after rest.

### Step 2: Lint and status

Lint; mark 096 DONE.

## Test plan

No component test authorized. Do not run browsers for `example-rtl.tsx` unless named.

## Done criteria

- [ ] Positioner still forces `dir="ltr"` for coordinates
- [ ] Content sets `dir` from `useLocale()` after `{...rest}`
- [ ] `pnpm exec biome check registry/react/components/floating-panel.tsx` exits 0
- [ ] `plans/README.md` row 096 is DONE

## STOP conditions

- `useLocale` / LocaleProvider is missing from the component tree in a way that throws — STOP and report (do not invent a fallback `dir="ltr"` on Content that reintroduces the bug)
- Lint fails twice on the same in-scope issue after a reasonable fix
- Fix appears to require changing resize axis classes or Positioner geometry beyond the Content `dir` reset — STOP and report

## Maintenance notes

- Reviewer: confirm RTL panel title/controls flip while drag position still tracks `--x`/`--y`.
- Any future portal that uses physical coords + logical inset must isolate geometry `dir` from chrome `dir` the same way.
