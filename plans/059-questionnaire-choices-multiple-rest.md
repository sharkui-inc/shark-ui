# Plan 059: Keep QuestionnaireChoices (multiple) controlled props after rest

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 059 in `plans/README.md`.
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

For `definition.multiple`, `QuestionnaireChoices` sets merged `aria-describedby`, `name`, `onValueChange`, and `value` on `CheckboxGroup`, then spreads `{...rest}`. Rest can replace those bindings. The single-select path puts `rest` on an outer wrapper only — multi-select must match that contract.

## Current state

```tsx
// registry/react/components/questionnaire.tsx:889-911
if (definition.multiple) {
  return (
    <CheckboxGroup
      aria-describedby={getDescribedBy(
        hasDescription && descriptionId,
        rest["aria-describedby"]
      )}
      className={cn("flex flex-col gap-2", className)}
      data-slot="questionnaire-choices"
      invalid={invalid}
      name={definition.name}
      onValueChange={(values) => { setAnswer(...); }}
      value={answer.values}
      {...rest}
    >
      {content}
    </CheckboxGroup>
  );
}

// Single path (~914+): {...rest} on outer ark.div; RadioGroup keeps locked props
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/questionnaire.tsx plans/README.md` | Reviewed or STOP |
| Prove order | `rg -n -A30 'if \(definition\.multiple\)' registry/react/components/questionnaire.tsx` | Locked props after rest, or rest on wrapper only |
| Lint | `pnpm exec biome check registry/react/components/questionnaire.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/questionnaire.tsx` — `QuestionnaireChoices` multiple branch only; `plans/README.md` status only.

**Out of scope**: Choice shortcut injection (052), ApprovalCard, single-select branch (already correct), docs, examples, tests.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Mirror single-select structure (preferred)

```tsx
if (definition.multiple) {
  return (
    <ark.div
      {...rest}
      className={cn("flex flex-col gap-2", className)}
      data-slot="questionnaire-choices"
    >
      <CheckboxGroup
        aria-describedby={getDescribedBy(
          hasDescription && descriptionId,
          rest["aria-describedby"]
        )}
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
        {content}
      </CheckboxGroup>
    </ark.div>
  );
}
```

Alternative acceptable: keep a single `CheckboxGroup` but put `{...rest}` **first**, then locked `aria-describedby` / `name` / `onValueChange` / `value` / `data-slot` last. Prefer the wrapper approach for parity with the radio branch.

When using the wrapper, strip or avoid double-applying layout classes that break styling — match the single-select outer/`RadioGroup` class split.

**Verify**: `value` / `onValueChange` / `name` cannot be overwritten by consumer rest; `aria-describedby` merge still includes description id.

### Step 2: Lint and status

Lint; mark 059 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Multiple path keeps controlled answer binding
- [ ] Merged `aria-describedby` wins over raw rest
- [ ] Single-select path unchanged in behavior
- [ ] `plans/README.md` row 059 is DONE

## STOP conditions

- CheckboxGroup API no longer accepts `value` / `onValueChange` as used
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Keep multiple and single branches structurally aligned when either changes again.
