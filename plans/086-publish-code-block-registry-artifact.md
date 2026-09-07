# Plan 086: Publish the current CodeBlock registry artifact

> **Executor instructions**: Touch only the generated artifact and this plan's
> index row after all dependencies are complete. Do not branch, stash, commit,
> push, test, typecheck, build, or browse without explicit authorization.

> **Drift check (run first)**: `git diff --stat 505ae60..HEAD -- registry/react/components/code-block.tsx registry/manifest/code-block.ts public/r/code-block.json`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: 081, 082, 083, 084, 085
- **Category**: dx
- **Planned at**: commit `505ae60`, 2026-09-07

## Why this matters

The manifest now declares `shiki`, `select`, and `scroll-area`, but the
committed `public/r/code-block.json` still contains the pre-Shiki component and
only old dependencies. CLI consumers would install a different component from
the one documented and tested.

## Current state

- `registry/manifest/code-block.ts` is the source of registry metadata.
- `public/r/code-block.json` is generated and must never be edited manually.
- `package.json` exposes `pnpm registry:build`; repository policy requires an
  explicit operator authorization naming that command before it may run.

## Scope

**In scope**: generated `public/r/code-block.json` and `plans/README.md` status
only.

**Out of scope**: any source/manifests, unrelated `public/r/*.json`, and manual
JSON editing.

## Steps

1. Confirm plans 081–085 are DONE and source/manifest diffs contain the final
   intended component.
2. Obtain explicit authorization to run `pnpm registry:build`. Do not infer it
   from general implementation approval.
3. Run the authorized command once. Review the resulting CodeBlock artifact:
   it must contain current source imports and declare `shiki`, `select`, and
   `scroll-area` dependencies. Do not edit its JSON by hand.

## Verification

| Command | Expected result |
| --- | --- |
| `rg -n '"shiki"|select.json|scroll-area.json' public/r/code-block.json` | current dependencies found after authorized generation |
| `git diff --check -- public/r/code-block.json` | exit 0, no output |

## Done criteria

- [ ] Generated artifact matches the final source/manifest contract.
- [ ] No generated JSON was manually edited.
- [ ] Registry build authorization and outcome are recorded.

## STOP conditions

- Any dependency plan is not DONE.
- `pnpm registry:build` was not explicitly authorized.
- Generation changes unrelated artifact files; report their paths before
  deciding whether they belong in this release.

## Maintenance notes

Every future CodeBlock source or manifest release must regenerate this artifact
as part of the normal registry publication flow.
