# Plan 081: Only auto-open PlanItem when status becomes in-progress

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 081 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/plan.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: MED
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

When uncontrolled, every `status` change sets `uncontrolledOpen` to `status === "in-progress"`. Opening a `pending` item to read detail, then status → `completed`/`error`, forces close. Expanding then leaving `in-progress` also collapses.

## Current state

```tsx
// plan.tsx:172-188
const [uncontrolledOpen, setUncontrolledOpen] = React.useState(
  () => defaultOpen ?? status === "in-progress"
);
const previousStatus = React.useRef(status);

React.useEffect(() => {
  if (previousStatus.current === status) {
    return;
  }
  previousStatus.current = status;
  if (!isOpenControlled) {
    setUncontrolledOpen(status === "in-progress");
  }
}, [isOpenControlled, status]);
```

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/plan.tsx plans/README.md` | Reviewed or STOP |
| Prove gate | `rg -n -A20 'previousStatus' registry/react/components/plan.tsx` | Auto-open only on transition into `in-progress`; no forced close on other statuses |
| Lint | `pnpm exec biome check registry/react/components/plan.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/plan.tsx` — `PlanItem` open sync effect only; `plans/README.md` status only.

**Out of scope**: Controlled `open` API changes, docs rewrite, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Auto-open on enter in-progress only

```tsx
React.useEffect(() => {
  if (previousStatus.current === status) {
    return;
  }

  const was = previousStatus.current;
  previousStatus.current = status;

  if (!isOpenControlled && status === "in-progress" && was !== "in-progress") {
    setUncontrolledOpen(true);
  }
}, [isOpenControlled, status]);
```

Do **not** force `setUncontrolledOpen(false)` when leaving `in-progress`. Initial state may still default open when `status === "in-progress"`.

**Verify**: status → completed does not force close; becoming in-progress still opens.

### Step 2: Lint and status

Lint; mark 081 DONE.

## Test plan

No component test authorized.

## Done criteria

- [ ] Transition into `in-progress` opens uncontrolled items
- [ ] Other status transitions do not force close
- [ ] Controlled `open` path unchanged
- [ ] `plans/README.md` row 081 is DONE

## STOP conditions

- Product docs require auto-collapse on complete — STOP and report before forcing close again
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Reviewers: confirm streaming plan UIs still auto-expand the active step.
