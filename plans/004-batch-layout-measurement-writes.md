# Plan 004: Batch Masonry measurements and writes

> **Executor instructions**: Follow each step and its verification gate. On STOP conditions, report instead of improvising. Remain on the current branch; do not use `git stash`, switch branches, commit, push, or overwrite unrelated changes. Update Plan 004 in `plans/README.md` when complete.
>
> **Drift check (run first)**: `git diff --stat e38b7195..HEAD -- registry/react/components/masonry.tsx public/r/masonry.json plans/README.md`

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: MED
- **Depends on**: `plans/001-guard-masonry-root-ref.md`, `plans/002-observe-root-layout-style-changes.md`, `plans/003-align-ssr-row-gap.md`
- **Category**: perf
- **Planned at**: commit `e38b7195`, 2026-09-17

## Why this matters

The layout loop writes data attributes and width/translate CSS custom properties, then immediately reads `getBoundingClientRect().height` for each item. This read-after-write pattern can force layout repeatedly in one animation frame. Masonry intentionally supports height-changing Accordion and Collapsible content, so the hot path must scale without degrading those interactions. The result should read geometry in a dedicated phase and apply positions in a dedicated write phase without changing stable/balanced assignment semantics.

## Current state

- `registry/react/components/masonry.tsx` owns all item measurement, column assignment, CSS writes, and container height.
- `registry/react/examples/masonry/example-accordion.tsx` and `example-collapsible.tsx` exercise dynamic-height items.

```tsx
// registry/react/components/masonry.tsx:86-107
for (const item of items) {
  let column = columns.get(item);
  if (column === undefined) {
    column = columnHeights.indexOf(Math.min(...columnHeights));
    columns.set(item, column);
  }

  item.dataset.masonryLayout = "ready";
  item.style.setProperty("--masonry-item-width", `${metrics.itemWidth}px`);
  item.style.setProperty("--masonry-item-x", `${getHorizontalOffset(column, metrics)}px`);
  item.style.setProperty("--masonry-item-y", `${columnHeights[column]}px`);
  columnHeights[column] += item.getBoundingClientRect().height + metrics.rowGap;
}
```

The component already coalesces observer events through `requestAnimationFrame` (`masonry.tsx:160-169`). Preserve that approach, local motion classes, reduced-motion handling, list semantics, and `reflow` modes. Do not add React state, timers, polling, or global styles.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Inspect loop | `nl -ba registry/react/components/masonry.tsx | sed -n '75,120p'` | Current layout loop is reviewed |
| Lint check | `pnpm lint:check` | No new Masonry-specific diagnostics |
| Typecheck | `pnpm typecheck` | Exit 0 |
| Generated registry | `pnpm registry:build` | Exit 0; output reflects source |

## Scope

**In scope**:

- `registry/react/components/masonry.tsx`
- `public/r/masonry.json` — generator output only
- `plans/README.md` — status only

**Out of scope**:

- Public prop names, docs, examples, global CSS, and dependencies.
- Replacing the algorithm with CSS masonry or a third-party library.
- New component tests unless explicitly authorized.

## Git workflow

Stay on the current branch and preserve current dirty files. Do not run `git stash`, branch switching, reset, commit, push, or PR commands.

## Steps

### Step 1: Establish all item widths before height measurement

Refactor the layout helper into explicit phases. First ensure every item has the final width required for this layout pass, with no per-item geometric read interleaved. Then obtain every item height in a read-only pass. If an item’s computed height depends on its absolute positioning, confirm the existing CSS makes its width available before the measurement phase; otherwise stop rather than guessing.

**Verify**: `pnpm lint:check` → no new Masonry diagnostic.

### Step 2: Assign columns from measured heights, then write positions

Use the collected heights to calculate column assignments and y offsets. Preserve these rules exactly: a new item selects the currently shortest column; `stable` retains an assigned element’s column until a column-count change; `balanced` clears assignments on each layout. After calculations, perform a write-only pass that sets data attributes, width, x/y properties, animation flag, and the root height. Do not call `getBoundingClientRect`, computed style APIs, or other geometric reads during that write pass.

**Verify**: `pnpm typecheck` → exit 0.

### Step 3: Preserve observer and cleanup behavior

Keep RAF cancellation, ResizeObserver coverage for root/direct items, MutationObserver child management, and cleanup that removes all inline Masonry properties. The refactor must not retain detached elements in the column map or observed-items set.

**Verify**: `pnpm registry:build` → exit 0 and generated Masonry output is current.

## Test plan

Component tests require separate authorization under `AGENTS.md`. When authorized, add deterministic characterization tests that mock item heights and assert: (1) stable retains columns after one item grows, (2) balanced may reassign on relayout, (3) a column-count change clears assignments, (4) the root height includes the documented row gap/padding, and (5) unmount removes inline properties and disconnects observers. Structure the environment after `test/setup-dom.ts`; use mocked geometry rather than browser screenshots.

## Done criteria

- [ ] No geometry read is interleaved with per-item positional style writes.
- [ ] Item widths are final before heights are measured.
- [ ] Stable, balanced, RTL, animation, cleanup, and root-height semantics match the current component.
- [ ] `pnpm typecheck` and `pnpm registry:build` exit 0.
- [ ] Only in-scope files changed apart from pre-existing work.
- [ ] Plan 004 status is updated.

## STOP conditions

- The existing CSS cannot produce correct item heights until a position is written.
- The refactor would require changing the public `reflow` contract or visual motion policy.
- A measured regression shows changed column assignment for an unchanged stable/balanced fixture.
- The live code has drifted from the excerpt.

## Maintenance notes

Future layout features must maintain the read/calculate/write separation. PR review should focus on an item whose height changes after first layout and on a narrow-to-wide column-count transition; those paths protect the stable assignment contract.
