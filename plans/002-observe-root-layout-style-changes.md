# Plan 002: Recalculate when root layout styling changes

> **Executor instructions**: Follow this plan step by step and verify each step. Stop and report on STOP conditions. Do not switch branches, use `git stash`, commit, push, or disturb unrelated changes. Update Plan 002 in `plans/README.md` when complete.
>
> **Drift check (run first)**: `git diff --stat e38b7195..HEAD -- registry/react/components/masonry.tsx public/r/masonry.json plans/README.md`
> Compare the Current state excerpt with the live file if committed drift exists; a mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/001-guard-masonry-root-ref.md`
- **Category**: bug
- **Planned at**: commit `e38b7195`, 2026-09-17

## Why this matters

`columns-*` is the documented Masonry configuration API, but the layout effect only reruns when `reflow` changes. A React update to the root `className`, inline `style`, or `dir` can leave absolute-positioned children with old width and offsets if neither the root nor children resize. The component needs one dependable invalidation path for root attributes that affect its measured metrics.

## Current state

- `registry/react/components/masonry.tsx` reads `columnCount`, direction, gaps, and padding from computed root styles.
- `content/docs/components/masonry.mdx:68-76` tells consumers to set columns with Tailwind `columns-*` utilities.

```tsx
// registry/react/components/masonry.tsx:125-155, 192-200, 219
React.useLayoutEffect(() => {
  const masonry = masonryRef.current;
  // observers and layout are created here
  const layout = () => {
    const metrics = getMetrics(masonry);
    // ... uses metrics.columnCount, itemWidth, rowGap, and direction
  };

  const mutationObserver = new MutationObserver(() => {
    observeItems();
    scheduleLayout();
  });

  resizeObserver.observe(masonry);
  mutationObserver.observe(masonry, { childList: true });
  scheduleLayout();
}, [reflow]);
```

Use React namespace APIs and preserve the existing `ResizeObserver`/RAF coalescing model. Do not poll or install a document-wide observer. Shark UI must preserve responsive and RTL-safe layout behavior (`DESIGN.md`, “Responsive and bidirectional layout”).

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat e38b7195..HEAD -- registry/react/components/masonry.tsx public/r/masonry.json plans/README.md` | Reviewed state |
| Lint check | `pnpm lint:check` | No Masonry-specific failures |
| Typecheck | `pnpm typecheck` | Exit 0 |
| Generated registry | `pnpm registry:build` | Exit 0; output is current |

## Scope

**In scope**:

- `registry/react/components/masonry.tsx`
- `public/r/masonry.json` — generator output only
- `plans/README.md` — status only

**Out of scope**:

- Documentation wording, visual examples, other observers, and global CSS.
- New component tests without a separate approval.
- Existing user changes outside this plan.

## Git workflow

Remain on the current branch. Do not use `git stash` or any branch-changing/reset command. Do not commit or push.

## Steps

### Step 1: Choose a root-local invalidation mechanism

Extend the effect so an update to the Masonry root’s layout-relevant attributes schedules the existing RAF-coalesced `layout()`. The mechanism must cover React updates to root `className`, inline `style`, and `dir` without relying on the element’s dimensions changing. Observe only the root and only the relevant attributes; continue observing direct child-list changes exactly as today. Disconnect any new observer in cleanup. Container-query changes on an ancestor are deliberately out of scope: they do not mutate the root and have no generic DOM notification path.

Do not add `className` or the `style` object itself to the effect dependency array as a substitute: inherited direction remains unaddressed and object identity can cause unnecessary observer teardown.

**Verify**: `pnpm lint:check` → no new Masonry diagnostic.

### Step 2: Preserve reflow semantics and cleanup

Keep `stable` behavior (retaining an existing element’s column until column count changes) and `balanced` behavior (clearing assignments on every layout). Ensure root layout-style mutations use the existing `scheduleLayout`, so only one layout runs per animation frame. Confirm cleanup disconnects every observer and cancels the pending frame.

**Verify**: `pnpm typecheck` → exit 0.

### Step 3: Regenerate the registry artifact

Build the registry output after source changes; do not hand-edit generated JSON.

**Verify**: `pnpm registry:build` → exit 0; `git diff -- public/r/masonry.json` contains only generated reflection of the source change.

## Test plan

Component tests are not authorized by the current repository rule. If explicitly approved, create a DOM characterization test under the mirrored `test/` path using `test/setup-dom.ts`, mocked `ResizeObserver`, and controllable RAF. Render Masonry at a fixed width, change only its root class from one to two columns, flush the root observer/RAF, and assert changed item width/offset. Add an equivalent `dir` change assertion and an unmount assertion proving all observers disconnect.

## Done criteria

- [ ] Root `class`, `style`, and `dir` updates schedule the existing layout without a resize or child mutation.
- [ ] Layout work remains RAF-coalesced and observers disconnect on cleanup.
- [ ] Stable and balanced column assignment rules remain unchanged.
- [ ] `pnpm typecheck` and `pnpm registry:build` exit 0.
- [ ] No files outside scope changed apart from pre-existing work.
- [ ] Plan 002 status is updated.

## STOP conditions

- The component already has a root-attribute invalidation path.
- The proposed mechanism requires a document-wide observer, polling, or a global stylesheet change.
- The Ark `asChild` implementation prevents observing the actual root element with this ref.
- Any test or typecheck failure needs unrelated changes to pass.

## Maintenance notes

Any future CSS-derived metric (for example, a custom column width API) must enter through this same root-local invalidation path. Reviewers should test a styling update with unchanged root dimensions, not only a browser resize.
