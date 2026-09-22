# Plan 052: Detect questionnaire parts by data-slot (fix ApprovalCard)

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 052 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/questionnaire.tsx registry/react/components/approval-card.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`QuestionnaireChoices` injects shortcuts only when `child.type === QuestionnaireChoice`. `ApprovalCardChoice` is a thin wrapper component, so identity never matches — shortcut badges/`aria-keyshortcuts`/`pe-12` never apply in ApprovalCard demos. Likewise `hasQuestionnairePart(..., QuestionnaireDescription|Error)` misses `ApprovalCardItemDescription` / `ApprovalCardError`, so `aria-describedby` omits those ids. Keyboard letter handlers still work via DOM queries, so the UI promises shortcuts that never appear.

## Current state

```tsx
// questionnaire.tsx:124-137 — hasQuestionnairePart uses child.type === part (+ Fragment recurse)
// questionnaire.tsx:741-745 — hasDescription / hasError via hasQuestionnairePart
// questionnaire.tsx:852-867 — Choices map: child.type !== QuestionnaireChoice → no shortcut clone
// questionnaire.tsx:1002 — QuestionnaireChoice sets data-slot="questionnaire-choice"

// approval-card.tsx:202-221
export const ApprovalCardItemDescription = (...) => (
  <QuestionnaireDescription {...props} data-slot="approval-card-item-description" />
);
export const ApprovalCardChoice = (...) => (
  <QuestionnaireChoice {...props} data-slot="approval-card-choice" />
);
```

`ApprovalCardError` sets `data-slot="approval-card-error"` (~236-238).

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/questionnaire.tsx registry/react/components/approval-card.tsx plans/README.md` | Reviewed or STOP |
| Prove no type identity for parts | `rg -n 'child\.type === Questionnaire' registry/react/components/questionnaire.tsx` | No matches for Choice/Description/Error detection (helper may remain unused) |
| Prove slot detection | `rg -n 'data-slot|questionnaire-choice|approval-card-choice' registry/react/components/questionnaire.tsx` | Slot-based matching present |
| Lint | `pnpm exec biome check registry/react/components/questionnaire.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/questionnaire.tsx` — `hasQuestionnairePart` and Choices shortcut injection
- `plans/README.md` — status only

**Out of scope**: Rewriting ApprovalCard wrappers, PromptInput `child.type`, examples (should start working without changes), manifests, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Slot-based part detection helper

Replace or extend `hasQuestionnairePart` to detect by `props["data-slot"]` (and recurse Fragments), accepting one or more slot strings:

- Description: `questionnaire-description`, `approval-card-item-description`
- Error: `questionnaire-error`, `approval-card-error`

Confirm the actual Description/Error `data-slot` values on `QuestionnaireDescription` / `QuestionnaireError` by reading those components — use the live strings.

Update `hasDescription` / `hasError` call sites to use slot detection.

**Verify**: ApprovalCard description/error wrappers count as present for `aria-describedby`.

### Step 2: Slot-based choice shortcut injection

In `QuestionnaireChoices` `Children.map`, treat a child as a choice when it is a valid element whose `data-slot` is `questionnaire-choice` **or** `approval-card-choice` (read from `child.props`).

Important: `ApprovalCardChoice` renders `<QuestionnaireChoice data-slot="approval-card-choice" />`, but the **parent** Choices map sees `ApprovalCardChoice` elements whose props may not include `data-slot` (slot is set inside the wrapper). Detecting only props on the outer wrapper fails.

**Required approach** (pick one, prefer A):

- **A (recommended)**: Change `ApprovalCardChoice` to forward identity — e.g. re-export `QuestionnaireChoice` with a default `data-slot`, or make Detection also accept `child.type === ApprovalCardChoice` by exporting a shared marker (`QuestionnaireChoice.displayName` / `$$typeof` static `questionnairePart = "choice"`) set on both components.
- **B**: Detect via `child.type` being either `QuestionnaireChoice` or `ApprovalCardChoice` **and** migrate Description/Error similarly — worse long-term than slots/markers.
- **C**: Shared static: `QuestionnaireChoice.sharkPart = "choice"`; ApprovalCardChoice assigns the same reference or sets `ApprovalCardChoice.sharkPart = "choice"`; detection checks `(child.type as { sharkPart?: string }).sharkPart === "choice"`.

Do **not** leave ApprovalCard broken. If you choose A with slots only, ApprovalCardChoice must put `data-slot` on the element that Choices maps (the outer component’s props), e.g.:

```tsx
export const ApprovalCardChoice = (props) => (
  <QuestionnaireChoice data-slot="approval-card-choice" {...props} />
);
```

…and Choices must read `child.props["data-slot"]` **or** recurse into single-child wrappers. Simplest reliable fix: **static marker on both function components** + keep Fragment recursion.

Also keep injecting `shortcut` via `cloneElement` for matching choices.

**Verify**: With ApprovalCard composition, choices receive `shortcut` prop; Description/Error wrappers set `hasDescription`/`hasError`.

### Step 3: Lint and status

Lint `questionnaire.tsx` (and `approval-card.tsx` if touched). Mark 052 DONE.

## Test plan

No component test authorized. If later approved: ApprovalCard example with `shortcuts="letters"` shows visible shortcut badges; invalid item wires `aria-describedby` to error id.

## Done criteria

- [ ] ApprovalCardChoice gets shortcut injection
- [ ] ApprovalCard description/error affect `aria-describedby`
- [ ] Bare QuestionnaireChoice/Description/Error still work
- [ ] Fragment-wrapped parts still recurse
- [ ] `plans/README.md` row 052 is DONE

## STOP conditions

- Cannot find a detection approach that works for both Questionnaire and ApprovalCard without breaking composition — report options
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Prefer a small shared marker (`sharkPart` / `data-slot` on the mapped element) documented in a one-line comment.
- PromptInput `child.type` remains out of scope (separate direction item).
