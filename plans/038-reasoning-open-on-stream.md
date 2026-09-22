# Plan 038: Open Reasoning when streaming starts (uncontrolled)

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 038 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 99593e94..HEAD -- registry/react/components/reasoning.tsx registry/react/components/plan.tsx content/docs/ai-components/reasoning.mdx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `99593e94`, 2026-09-22

## Why this matters

`Reasoning` sets `defaultOpen={defaultOpen ?? isStreaming}` only at mount. If `isStreaming` becomes `true` later, the panel stays closed while the trigger shows shimmer “Thinking”, hiding streamed tokens until the user opens it. `PlanItem` already syncs uncontrolled open when status becomes `"in-progress"`. Reasoning should open when streaming **starts**, but must **not** force-close when streaming ends (users often read the finished thought).

## Current state

```tsx
// registry/react/components/reasoning.tsx:54-79
export const Reasoning = (props: ReasoningProps) => {
  const {
    defaultOpen,
    duration,
    isStreaming = false,
    translations,
    className,
    ...rest
  } = props;

  return (
    <ReasoningProvider value={{ duration, isStreaming, translations }}>
      <Collapsible
        className={cn("w-full min-w-0 text-sm", className)}
        data-duration={duration}
        data-slot="reasoning"
        data-streaming={isStreaming ? "" : undefined}
        defaultOpen={defaultOpen ?? isStreaming}
        {...rest}
      />
    </ReasoningProvider>
  );
};
```

Exemplar sync (open on enter progress; also closes on leave — **do not copy the close**):

```tsx
// registry/react/components/plan.tsx:172-187
const isOpenControlled = open !== undefined;
const [uncontrolledOpen, setUncontrolledOpen] = React.useState(
  () => defaultOpen ?? status === "in-progress"
);
// effect: if (!isOpenControlled) setUncontrolledOpen(status === "in-progress");
```

`ReasoningProps` extends `Collapsible` props, so `open` / `onOpenChange` may arrive via `...rest`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 99593e94..HEAD -- registry/react/components/reasoning.tsx plans/README.md` | Reviewed; excerpts match or STOP |
| Prove controlled open | `rg -n 'uncontrolledOpen|isStreaming|isOpenControlled' registry/react/components/reasoning.tsx` | Uncontrolled sync present; open-on-stream without force-close |
| Lint | `pnpm exec biome check registry/react/components/reasoning.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/reasoning.tsx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/reasoning.tsx`
- `content/docs/ai-components/reasoning.mdx` — one sentence that uncontrolled Reasoning opens when streaming starts and stays open when streaming ends (optional but preferred)
- `plans/README.md` — status row only

**Out of scope**:

- Changing PlanItem close-on-leave-progress behavior
- Forced close when `isStreaming` becomes false
- Examples, manifests, `public/r/*.json`, tests

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Uncontrolled open state with stream-start sync

1. Switch to a value `import React from "react"` if hooks are needed (file currently uses `import type React`).
2. Destructure `defaultOpen`, `open`, `onOpenChange` from props (alongside existing fields) so they are not blindly spread in a conflicting way.
3. `isOpenControlled = open !== undefined`.
4. `useState(() => defaultOpen ?? isStreaming)` for uncontrolled open.
5. `useEffect` on `isStreaming`: when **not** controlled and `isStreaming` becomes true, `setUncontrolledOpen(true)`. Track previous streaming with a ref if needed to avoid redundant sets. **Do not** set open to false when streaming ends.
6. Pass `open={isOpenControlled ? open : uncontrolledOpen}` and an `onOpenChange` that updates uncontrolled state when uncontrolled, then calls user `onOpenChange`.
7. Remove mount-only `defaultOpen={defaultOpen ?? isStreaming}` once controlled/uncontrolled `open` is wired (keep initial state from step 4).

Preserve `ReasoningProvider`, `data-slot`, `data-streaming`, and className behavior.

**Verify**: no sole reliance on Collapsible `defaultOpen` for stream sync; effect opens on stream start only.

### Step 2: Docs note (preferred)

In reasoning.mdx API/usage, note uncontrolled open-on-stream-start and no auto-close on stream end.

### Step 3: Lint and status

Lint; mark 038 DONE in `plans/README.md`.

## Test plan

No component test authorized. If later approved: mount with `isStreaming={false}`, flip to true → open; flip back to false → remains open unless user closes; controlled `open={false}` ignores stream.

## Done criteria

- [ ] Uncontrolled Reasoning opens when `isStreaming` becomes true after mount
- [ ] Streaming end does not force-close
- [ ] Controlled `open` is respected
- [ ] `plans/README.md` row 038 is DONE

## STOP conditions

- Collapsible API no longer supports controlled `open` / `onOpenChange`
- Fix seems to require closing on stream end to “match Plan” — stop; that is explicitly out of scope
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Reviewers: asymmetry vs PlanItem close-on-complete is intentional for Reasoning UX.
