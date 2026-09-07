# Plan 082: Make plain text a valid CodeBlock language

> **Executor instructions**: Work only on the files in scope. Do not branch,
> stash, commit, push, run tests, typecheck, builds, or a browser without
> explicit authorization for that named action.

> **Drift check (run first)**: `git diff --stat 505ae60..HEAD -- registry/react/components/code-block.tsx registry/react/examples/code-block/example-content-override.tsx content/docs/ai-elements/code-block.mdx`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: 081
- **Category**: bug
- **Planned at**: commit `505ae60`, 2026-09-07

## Why this matters

The public prop type is Shiki's `BundledLanguage`, but an official example
passes `language="text"`. `text` is a Shiki special language, not a bundled
language, so TypeScript rejects the example and the runtime relies on a caught
Shiki failure to render plain code.

## Current state

- `CodeBlockProps` and `CodeBlockContentProps` use `BundledLanguage`.
- `example-content-override.tsx` passes `language="text"`.
- `createRawTokens()` already renders raw lines safely and is the desired
  behavior for plain text.

## Scope

**In scope**: `registry/react/components/code-block.tsx`, all CodeBlock docs
and examples that name a language, and `test/code-block.test.tsx`.

**Out of scope**: changing Shiki's supported-language set, alias normalization,
or replacing Shiki.

## Steps

1. Export a public `CodeBlockLanguage` type consisting of `BundledLanguage`
   plus a plain-text sentinel (`"text"`). Use it for root context and both
   public `language` props.
2. Treat the sentinel before highlighter creation: return raw tokens directly,
   never call Shiki and never use the error path as normal control flow.
3. Keep unsupported runtime strings on the existing safe raw-token fallback;
   document `text` as the plain-text option and retain Shiki's broad language
   contract for all other values.
4. Add a DOM test proving `language="text"` renders lines and does not need an
   async highlight result. Do not run it until `pnpm test` is explicitly
   authorized.

## Verification

| Command | Expected result |
| --- | --- |
| `rg -n 'CodeBlockLanguage|language="text"' registry/react/components/code-block.tsx content/docs/ai-elements/code-block.mdx registry/react/examples/code-block` | public type and documented example found |
| `git diff --check -- registry/react/components/code-block.tsx test/code-block.test.tsx` | exit 0, no output |

## Done criteria

- [ ] `"text"` is accepted by the public TypeScript API.
- [ ] Plain text never initializes a Shiki highlighter.
- [ ] Docs distinguish plain text from syntax-highlighted languages.

## STOP conditions

- Shiki's current types already expose a safe public plain-text union that is
  preferable to a local public type.
- Supporting text requires a breaking rename of `language`.

## Maintenance notes

Any future language aliases must be normalized separately; do not expand the
plain-text sentinel into a silent catch-all for misspelled languages.
