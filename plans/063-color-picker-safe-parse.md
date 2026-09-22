# Plan 063: Guard ColorPicker parseColor so invalid strings don’t crash render

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 063 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/color-picker.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22
- **Outcome**: CANCELLED — operator rejected `safeParseColor`; keep bare `parseColor` on Root value/defaultValue.

## Why this matters

`ColorPicker` passes string `value` / `defaultValue` through `parseColor(...)` during render. Zag’s parse throws on invalid color strings, hard-crashing the React tree (typos, partial input, bad API data).

## Current state

```tsx
// color-picker.tsx:49-62
<ArkColorPicker.Root
  // ...
  defaultValue={defaultValue ? parseColor(defaultValue) : undefined}
  // ...
  value={value ? parseColor(value) : undefined}
  {...rest}
>
```

Confirm `parseColor` import at top of file (from `@ark-ui/react/color-picker` or similar) before editing.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/color-picker.tsx plans/README.md` | Reviewed or STOP |
| Prove safe parse | `rg -n 'parseColor|safeParse|try' registry/react/components/color-picker.tsx` | Helper used; no bare `parseColor(value)` in render without catch |
| Lint | `pnpm exec biome check registry/react/components/color-picker.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/color-picker.tsx` — parsing of string `value`/`defaultValue` only; `plans/README.md` status only.

**Out of scope**: ColorPicker swatches/UI, Field invalid wiring (optional follow-up), docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Add a safe parse helper

Near the top of the file (after imports):

```tsx
const safeParseColor = (color: string) => {
  try {
    return parseColor(color);
  } catch {
    return undefined;
  }
};
```

Use it:

```tsx
defaultValue={defaultValue ? safeParseColor(defaultValue) : undefined}
value={value ? safeParseColor(value) : undefined}
```

Valid colors unchanged. Invalid → `undefined` (uncontrolled/empty) instead of throw. Do not change other ColorPicker behavior.

**Verify**: no unguarded `parseColor(` on Root value/defaultValue.

### Step 2: Lint and status

Lint; mark 063 DONE.

## Test plan

No component test authorized. If later approved: mount with `value="not-a-color"` → no throw.

## Done criteria

- [ ] Invalid color strings do not throw during render
- [ ] Valid colors still parse
- [ ] `plans/README.md` row 063 is DONE

## STOP conditions

- `parseColor` is not the throw source (API changed) — re-read Ark ColorPicker docs and STOP
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Optional later: surface invalid via `invalid` / Field; out of scope here.
