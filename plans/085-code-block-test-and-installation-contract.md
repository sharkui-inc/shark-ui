# Plan 085: Lock CodeBlock behavior and installation docs

> **Executor instructions**: Modify only scoped files. Do not branch, stash,
> commit, push, or run tests/typecheck/build/browser without explicit operator
> authorization for that named command.

> **Drift check (run first)**: `git diff --stat 505ae60..HEAD -- test/code-block.test.tsx content/docs/ai-elements/code-block.mdx registry/react/components/code-block.tsx`

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: 081, 082, 083, 084
- **Category**: tests
- **Planned at**: commit `505ae60`, 2026-09-07

## Why this matters

The only CodeBlock test currently asserts a CSS variable that no longer exists
on the root and does not wait for the 160 ms streaming debounce or any Shiki
result. Public manual installation also omits the direct `shiki` dependency.
Without an honest regression suite and install instructions, this new client
component will be difficult for consumers to adopt safely.

## Current state

- `test/code-block.test.tsx:45-50` checks for
  `[--code-surface-line-height:--spacing(6)]`; no component source contains it.
- The test runner is `pnpm test`, using Node's test runner plus
  `test/setup-dom.ts`; model test structure after `test/icon-tile.test.tsx`.
- `content/docs/ai-elements/code-block.mdx` lists Clipboard, Button, and
  Scroll Area for manual installation, while the copied source also imports
  `shiki` and `@ark-ui/react`.

## Scope

**In scope**: `test/code-block.test.tsx`,
`content/docs/ai-elements/code-block.mdx`, and `plans/README.md` status only.

**Out of scope**: changing component behavior, registry generation, global test
setup, and browser visual regression tooling.

## Steps

1. Remove the stale root-class assertion. Replace it with observable DOM
   assertions for root-code fallback, content override, highlighted lines,
   decorative line numbers, owned scrollport, plain text, and LTR code.
2. Add focused async cases for streaming debounce/final highlight, error
   fallback/retry, and stale completion. Use controllable timers/mocks; do not
   sleep in tests or require network access.
3. Correct manual installation prose to name every direct dependency needed by
   pasted source, including `shiki`. Keep public docs in English and link to
   Shark primitives rather than documenting internal implementation details.
4. Run `pnpm test` and `pnpm lint:check` only after the operator explicitly
   asks for each command; otherwise report these as skipped.

## Verification

| Command | Expected result |
| --- | --- |
| `rg -n -- '\[--code-surface-line-height:--spacing\(6\)\]' test/code-block.test.tsx` | no output |
| `rg -n 'shiki' content/docs/ai-elements/code-block.mdx` | manual-install requirement found |
| `git diff --check -- test/code-block.test.tsx content/docs/ai-elements/code-block.mdx` | exit 0, no output |

## Done criteria

- [ ] Tests assert behavior instead of obsolete classes.
- [ ] Async highlighter paths have deterministic coverage.
- [ ] Manual install identifies all direct runtime dependencies.
- [ ] Test/lint execution state is accurately reported.

## STOP conditions

- Tests require changing global setup or package scripts.
- The component provides no viable seam for deterministic async tests.

## Maintenance notes

Any new CodeBlock prop that changes token rendering or scroll composition must
add one behavior-level test here.
