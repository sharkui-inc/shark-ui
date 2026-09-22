# Plan 073: Guard SignaturePad getDataUrl with generation + catch

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 073 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/signature-pad.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Status**: REJECTED — HiddenInput PNG sync / generation guard was invented; SignaturePad now follows Ark composition only (no internal `getDataUrl` → `HiddenInput` wiring).
- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

On `onDrawEnd`, SignaturePad calls `details.getDataUrl("image/png").then(...)` with only an `emptyRef` guard. Overlapping stroke-end promises can write a stale PNG into `HiddenInput`; a rejected `getDataUrl` becomes an unhandled rejection and can leave the form value empty after a successful draw.

## Current state

```tsx
// signature-pad.tsx:21-41
const [value, setValue] = React.useState("");
const emptyRef = React.useRef<boolean>(true);
// ...
onDrawEnd={(details) => {
  emptyRef.current = false;
  details.getDataUrl("image/png").then((url) => {
    if (emptyRef.current) {
      return;
    }
    setValue(url);
  });
  onDrawEnd?.(details);
}}
```

Clear path sets `emptyRef.current = true` and `setValue("")` via `SignaturePadEmptyReset`.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/signature-pad.tsx plans/README.md` | Reviewed or STOP |
| Prove guard | `rg -n -A20 'onDrawEnd=' registry/react/components/signature-pad.tsx` | Generation/token check + `.catch` |
| Lint | `pnpm exec biome check registry/react/components/signature-pad.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/signature-pad.tsx` — `onDrawEnd` / clear coordination only; `plans/README.md` status only.

**Out of scope**: Control/Segment styling, docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Add draw generation + catch

```tsx
const drawGenerationRef = React.useRef(0);
// in onDrawEnd:
emptyRef.current = false;
const generation = ++drawGenerationRef.current;
details
  .getDataUrl("image/png")
  .then((url) => {
    if (emptyRef.current || generation !== drawGenerationRef.current) {
      return;
    }
    setValue(url);
  })
  .catch(() => {
    // Ignore failed export; keep prior value unless cleared.
  });
onDrawEnd?.(details);
```

On clear/empty path, also bump `drawGenerationRef` (or rely on `emptyRef`) so in-flight resolves are ignored. Keep calling consumer `onDrawEnd` after starting the export (current order).

**Verify**: stale generations ignored; rejection handled.

### Step 2: Lint and status

Lint; mark 073 DONE. Biome may flag empty catch — use a one-line comment inside catch (match ColorPicker `safeParseColor` style) if needed.

## Test plan

No component test authorized.

## Done criteria

- [ ] Stale `getDataUrl` results do not overwrite newer strokes
- [ ] Rejected exports do not throw unhandled
- [ ] Clear still empties HiddenInput
- [ ] `plans/README.md` row 073 is DONE

## STOP conditions

- `getDataUrl` is sync / API changed — adapt or STOP
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Reviewers: ensure clear still races correctly against in-flight export.
