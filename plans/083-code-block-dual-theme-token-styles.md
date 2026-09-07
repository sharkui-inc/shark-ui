# Plan 083: Render Shiki dual-theme token typography faithfully

> **Executor instructions**: Modify only the scoped files. Do not branch,
> stash, commit, push, or run tests/typecheck/build/browser without explicit
> authorization.

> **Drift check (run first)**: `git diff --stat 505ae60..HEAD -- registry/react/components/code-block.tsx test/code-block.test.tsx`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: 082
- **Category**: bug
- **Planned at**: commit `505ae60`, 2026-09-07

## Why this matters

The component asks Shiki for light and dark themes simultaneously. In that
mode Shiki returns typography through `htmlStyle` CSS variables such as
`--shiki-light-font-style`, but `CodeToken` only checks `token.fontStyle`.
That value is absent for dual-theme tokens, so bold, italic, underline, and
strike-through theme rules do not render.

## Current state

- `CodeToken` at `registry/react/components/code-block.tsx` sets `color`,
  `backgroundColor`, and derives typography from `token.fontStyle`, then spreads
  `token.htmlStyle`.
- The Shiki call uses `themes: { dark: "github-dark", light: "github-light" }`.
- Shiki's `ThemedToken.htmlStyle` is its HTML-rendering override and wins over
  `fontStyle`; a Markdown heading/italic token supplies CSS variables but no
  direct `fontStyle` field.

## Scope

**In scope**: `registry/react/components/code-block.tsx` and
`test/code-block.test.tsx`.

**Out of scope**: theme selection, semantic color tokens, global docs-code CSS,
or a new highlighting library.

## Steps

1. Preserve Shiki's multi-theme HTML-style contract when mapping a token to
   React CSS. Resolve light/dark font style, weight, and decoration using the
   same CSS-variable switching approach already used for color; do not depend
   on `token.fontStyle` when `htmlStyle` is present.
2. Retain direct `fontStyle` support for raw/single-theme tokens and avoid
   overriding Shiki's color/background rules with unrelated Tailwind colors.
3. Add characterization coverage for Markdown heading, italic, and bold token
   output in both light and dark modes. Run only after explicit test approval.

## Verification

| Command | Expected result |
| --- | --- |
| `rg -n 'fontStyle|fontWeight|textDecoration|--shiki-dark' registry/react/components/code-block.tsx` | dual-theme typography path present |
| `git diff --check -- registry/react/components/code-block.tsx test/code-block.test.tsx` | exit 0, no output |

## Done criteria

- [ ] Multi-theme token typography uses the Shiki style payload.
- [ ] Raw fallback tokens remain readable.
- [ ] No raw color palette is introduced.

## STOP conditions

- Shiki's current token payload differs from the dual-theme contract above.
- Correct typography needs a global stylesheet change outside scope.

## Maintenance notes

Keep the React renderer aligned with Shiki `codeToTokens` output when changing
themes or adding text decorations.
