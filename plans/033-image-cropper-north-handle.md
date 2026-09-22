# Plan 033: Fix ImageCropper north edge handle styles

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 033 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 99593e94..HEAD -- registry/react/components/image-cropper.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `99593e94`, 2026-09-22

## Why this matters

The north edge handle utility string is truncated (`[&[data-position=n]_*]:` with nothing after the colon) and lacks the `bg-(--cropper-accent)` fill that south/east/west edges have. North handles therefore diverge visually from the other edge handles (copy-paste truncation, not intentional design).

## Current state

```tsx
// registry/react/components/image-cropper.tsx:140-143
"[&[data-position=n]_*]: data-[position=n]:hover:**:opacity-100 [&[data-position=n]_*]:size-1.5 [&[data-position=n]_*]:opacity-0",
"data-[position=s]:hover:**:opacity-100 [&[data-position=s]_*]:size-1.5 [&[data-position=s]_*]:bg-(--cropper-accent) [&[data-position=s]_*]:opacity-0",
"data-[position=e]:hover:**:opacity-100 [&[data-position=e]_*]:size-1.5 [&[data-position=e]_*]:bg-(--cropper-accent) [&[data-position=e]_*]:opacity-0",
"data-[position=w]:hover:**:opacity-100 [&[data-position=w]_*]:size-1.5 [&[data-position=w]_*]:bg-(--cropper-accent) [&[data-position=w]_*]:opacity-0",
```

Mirror the **south** line’s structure for north (size + accent fill + opacity-0 + hover opacity-100). Keep corner (nw/ne/se/sw) rules unchanged.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 99593e94..HEAD -- registry/react/components/image-cropper.tsx plans/README.md` | Reviewed; excerpts match or STOP |
| Prove n has fill | `rg -n 'data-position=n' registry/react/components/image-cropper.tsx` | North line includes `bg-(--cropper-accent)` and no empty `_*]: ` fragment |
| Lint | `pnpm exec biome check registry/react/components/image-cropper.tsx` | Exit 0 |
| Diff sanity | `git diff --check -- registry/react/components/image-cropper.tsx` | Clean |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**:

- `registry/react/components/image-cropper.tsx` — north handle class string only
- `plans/README.md` — status row only

**Out of scope**:

- Corner handle redesign, docs/examples, manifests, `public/r/*.json`, tests

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Align north edge utilities with south

Replace the north class string so it matches south’s pattern, e.g.:

```txt
data-[position=n]:hover:**:opacity-100 [&[data-position=n]_*]:size-1.5 [&[data-position=n]_*]:bg-(--cropper-accent) [&[data-position=n]_*]:opacity-0
```

Remove the truncated empty `[&[data-position=n]_*]:` token. Do not change s/e/w/corners unless required for consistency of attribute selector style (`data-[position=n]` vs `[&[data-position=n]_*]` — follow south’s mix exactly).

**Verify**: `rg -n '\[&\[data-position=n\]_\*\]:\s' registry/react/components/image-cropper.tsx` → no empty truncated selector. North includes `bg-(--cropper-accent)`.

### Step 2: Lint and status

Lint; mark 033 DONE in `plans/README.md`.

## Test plan

No component test authorized. Manual (if operator allows browser later): north edge handle fill matches south on hover.

## Done criteria

- [ ] North edge handle has accent fill and no truncated empty utility
- [ ] s/e/w and corners unchanged in intent
- [ ] `plans/README.md` row 033 is DONE

## STOP conditions

- Handle markup no longer uses `data-position` / inner `span` (API drift)
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- When adding new edge positions, copy a complete edge line (s/e/w/n), never a truncated fragment.
