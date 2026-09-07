# Plan 084: Defer and share the Shiki highlighter

> **Executor instructions**: Touch only scoped files. Do not branch, stash,
> commit, push, or run tests/typecheck/build/browser without explicit operator
> authorization.

> **Drift check (run first)**: `git diff --stat 505ae60..HEAD -- registry/react/components/code-block.tsx registry/manifest/code-block.ts test/code-block.test.tsx package.json`

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: 082, 083
- **Category**: perf
- **Planned at**: commit `505ae60`, 2026-09-07

## Why this matters

The client component statically imports root `shiki`, whose entry resolves to
the full language/theme bundle. It also creates and retains an entire
highlighter per encountered language. An AI app that displays many languages
therefore loads highlight machinery before it is needed and duplicates engines
and themes in memory.

## Current state

- `code-block.tsx` imports `createHighlighter` at module scope.
- `highlighterCache` maps every `BundledLanguage` to
  `createHighlighter({ langs: [language], themes: [...] })` with no eviction.
- The initial render already has safe raw tokens and ignores stale async
  results through `currentRef.current.key === currentKey`.
- Broad Shiki language support is an explicit product requirement; do not use
  `shiki/bundle/web` or Sugar High.

## Scope

**In scope**: `registry/react/components/code-block.tsx`,
`test/code-block.test.tsx`, and any small test-only helper it needs.

**Out of scope**: `package.json`, Shiki versions, server-side
`lib/highlight-code.ts`, or restricting supported languages.

## Steps

1. Keep Shiki imports type-only at module scope. Load the root Shiki runtime
   only when a non-plain-text highlight is requested, caching the module
   promise and deleting it on rejection so transient loading failures retry.
2. Create one lazily initialized highlighter with the two GitHub themes. Load
   requested grammars on demand, deduplicating concurrent requests per
   language. Do not create one engine/highlighter per language.
3. Preserve raw-first rendering, current streaming debounce, stale-result
   suppression, and broad `BundledLanguage` support. Failures must retain raw
   code without crashing and be retryable later.
4. Add controllable tests for lazy runtime loading, concurrent same-language
   requests, retry after a rejected initialization, and stale completion. Do
   not execute them without named test authorization.

## Verification

| Command | Expected result |
| --- | --- |
| `rg -n '^import \{ createHighlighter \} from "shiki"' registry/react/components/code-block.tsx` | no output |
| `rg -n 'import\("shiki"\)|loadLanguage' registry/react/components/code-block.tsx` | lazy runtime and on-demand grammar paths found |
| `git diff --check -- registry/react/components/code-block.tsx test/code-block.test.tsx` | exit 0, no output |

## Done criteria

- [ ] Initial raw rendering does not statically import the Shiki runtime.
- [ ] One highlighter serves all loaded languages.
- [ ] A rejected runtime/language load can retry.
- [ ] No supported language is removed.

## STOP conditions

- Shiki cannot load all existing bundled languages through a singleton.
- A required Shiki API is unavailable at the pinned `4.4.3` version.
- Dynamic import changes the published dependency contract.

## Maintenance notes

Profile actual bundle output before replacing the full bundle with a curated
bundle; curated language lists would violate the broad-language contract.
