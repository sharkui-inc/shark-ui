# Plan 098: Label multi-select QuestionnaireChoices with titleId

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 098 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/questionnaire.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`QuestionnaireChoices` single-select `RadioGroup` sets `aria-labelledby={titleId}` so AT names the group with the question title. The multiple-select `CheckboxGroup` path sets `aria-describedby` but **omits** `aria-labelledby`, so multi-choice questions are unnamed relative to the title.

## Current state

```tsx
// questionnaire.tsx:823-824 — titleId already from item context
const { answer, definition, describedBy, invalid, titleId } =
  _useQuestionnaireItem();

// questionnaire.tsx:868-880 — multiple (missing labelledby)
<CheckboxGroup
  aria-describedby={groupDescribedBy}
  className="flex flex-col gap-2"
  invalid={invalid}
  name={definition.name}
  onValueChange={/* ... */}
  value={answer.values}
>

// questionnaire.tsx:895-908 — single (correct)
<RadioGroup
  aria-describedby={groupDescribedBy}
  aria-labelledby={titleId}
  className="flex flex-col gap-2"
  /* ... */
>
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/questionnaire.tsx plans/README.md` | Reviewed or STOP |
| Prove parity | `rg -n -A15 'CheckboxGroup|aria-labelledby' registry/react/components/questionnaire.tsx` | CheckboxGroup has `aria-labelledby={titleId}` like RadioGroup |
| Lint | `pnpm exec biome check registry/react/components/questionnaire.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/questionnaire.tsx` — multiple `CheckboxGroup` `aria-labelledby` only; `plans/README.md` status only.

**Out of scope**: ApprovalCard wrappers, single-select RadioGroup (already correct), docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Add aria-labelledby to CheckboxGroup

On the `definition.multiple` branch only:

```tsx
<CheckboxGroup
  aria-describedby={groupDescribedBy}
  aria-labelledby={titleId}
  className="flex flex-col gap-2"
  invalid={invalid}
  name={definition.name}
  onValueChange={(values) => {
    setAnswer(definition.name, {
      input: answer.input,
      values,
    });
  }}
  value={answer.values}
>
```

Do not change the wrapper `ark.div` or rest order from plan 059.

**Verify**: both CheckboxGroup and RadioGroup expose `aria-labelledby={titleId}`.

### Step 2: Lint and status

Lint; mark 098 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Multiple CheckboxGroup has `aria-labelledby={titleId}`
- [ ] `pnpm exec biome check registry/react/components/questionnaire.tsx` exits 0
- [ ] `plans/README.md` row 098 is DONE

## STOP conditions

- `titleId` is undefined / missing from `_useQuestionnaireItem` on the multiple path — STOP and report
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep RadioGroup / CheckboxGroup a11y props in lockstep when adding describedby/labelledby.
