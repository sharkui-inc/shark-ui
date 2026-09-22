# Implementation Plans

Generated / refreshed by the `improve` skill on 2026-09-22. Plans **108–110** executed. Each executor: read the plan fully before starting, honor its STOP conditions, and update your row when done.

## Execution order & status

| Plan | Title | Priority | Effort | Depends on | Status |
| --- | --- | --- | --- | --- | --- |
| 030–107 | (prior batches) | — | — | — | DONE |
| 108 | Lock SkipNavLink href after rest | P1 | S | — | DONE |
| 109 | Mirror Rating half-star clip for RTL | P1 | S | — | DONE |
| 110 | Add rtl:rotate-180 on DrawerMenuTrigger chevron | P2 | S | — | DONE |

Status values: TODO | IN PROGRESS | DONE | BLOCKED (with one-line reason) | REJECTED (with one-line rationale)

## Dependency notes

- **108–110** are independent; execute in number order for predictable review.
- Component tests remain deferred: `AGENTS.md` prohibits component `*.test.tsx` / `*.spec.tsx` unless requested. Prefer `pnpm exec biome check <file>`; do not run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless the operator names that action.

## Operator execution constraints (current worktree)

When executing in this repository’s main worktree (unless the operator says otherwise):

- No branch switch, no `git stash`, no commit, no push, no PR.
- Do not overwrite unrelated dirty files.

## Findings considered and rejected (batch 108–110)

- Soft `role` / `type` / `aria-label` locks — overridable defaults.
- PromptInput `child.type` — direction.
- MessageScroller `content-visibility` — measure first.
- CodeBlock highlight cancel — MED.
- ColorPicker bare `parseColor` — 063 CANCELLED.
- Expand CollapsibleIndicator `rtl:rotate-180` — 107 DONE (Sources fixed; peers clean).
- FloatingPanel Positioner LTR chrome leak — 096 DONE.
- Plans 005–107 already DONE.

## Direction (not planned)

- PromptInput: replace `child.type` with `data-slot` / `sharkPart` when a wrapper appears.
- MessageScroller: measure scroll vs `content-visibility` before changing.
