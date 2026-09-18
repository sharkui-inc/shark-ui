# Plan 001: Safely handle a missing Masonry root ref

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report; do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work. When complete, update Plan 001 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat e38b7195..HEAD -- registry/react/components/masonry.tsx public/r/masonry.json plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpt with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `e38b7195`, 2026-09-17

## Why this matters

The project enables `strict` and `strictNullChecks`, while `useRef<HTMLUListElement>(null)` exposes a nullable current value. The layout effect immediately dereferences it. The effect normally runs after React attaches the node, but the type contract is still violated and prevents a strict build from accepting this component. A small early return makes the lifecycle assumption explicit and protects future ref/asChild changes.

## Current state

- `registry/react/components/masonry.tsx` contains the client-side list layout and owns the root ref.
- `tsconfig.json:7,27` enables `strict` and `strictNullChecks`.
- `package.json:37,39` defines `pnpm test` and `pnpm typecheck`; note that typecheck is a Next production build.

```tsx
// registry/react/components/masonry.tsx:121-130
export const Masonry = (props: MasonryProps) => {
  const { className, reflow = "stable", ...rest } = props;
  const masonryRef = React.useRef<HTMLUListElement>(null);

  React.useLayoutEffect(() => {
    const masonry = masonryRef.current;
    const columns = new Map<HTMLElement, number>();
    const observedItems = new Set<HTMLElement>();
    const previousHeight = masonry.style.height;
```

Follow the repository convention to use the React namespace (`React.useLayoutEffect`) and preserve the existing `data-slot` and Ark factory API. `CODE_STYLE.md` also requires generated registry JSON never be hand-edited.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat e38b7195..HEAD -- registry/react/components/masonry.tsx public/r/masonry.json plans/README.md` | No unexpected committed drift, or reviewed identical context |
| Lint check | `pnpm lint:check` | Exit 0; if the known repository-wide backlog fails, report the unrelated output |
| Typecheck | `pnpm typecheck` | Exit 0 with no nullability error for Masonry |
| Generated registry | `pnpm registry:build` | Exit 0; generated `public/r/masonry.json` matches the source |

## Scope

**In scope**:

- `registry/react/components/masonry.tsx`
- `public/r/masonry.json` — generated only by `pnpm registry:build`; never hand-edit
- `plans/README.md` — status only

**Out of scope**:

- All docs and examples.
- `styles/themes.css`, manifests, other components, and any pre-existing user modifications.
- New component tests. `AGENTS.md` explicitly prohibits `*.test.tsx` / `*.spec.tsx` for components unless separately requested.

## Git workflow

- Stay on the current branch and preserve the existing dirty worktree.
- Do not use `git stash`, checkout/switch/rebase/reset, commit, push, or open a PR.
- Inspect `git diff -- registry/react/components/masonry.tsx` before and after; do not overwrite changes not made for this plan.

## Steps

### Step 1: Add an effect-entry null guard

Immediately after `const masonry = masonryRef.current`, return from the layout effect if `masonry` is null. Place this before constructing observers, accessing `.style`, or registering cleanup. Do not use a non-null assertion, cast, optional chaining that silently skips only individual statements, or change the ref type to hide the nullable value.

**Verify**: `pnpm lint:check` → no new lint diagnostic from `registry/react/components/masonry.tsx` (report unrelated baseline failures rather than fixing them).

### Step 2: Regenerate and typecheck

Run the registry generator so the published artifact reflects the source. Then run the strict typecheck. Do not manually modify `public/r/masonry.json`.

**Verify**: `pnpm registry:build && pnpm typecheck` → both exit 0; no `possibly 'null'` diagnostic for `masonry`.

## Test plan

No component test is authorized in this plan. If the operator separately authorizes component tests, add a characterization case under the repository's mirrored `test/` convention that renders then unmounts Masonry with a callback ref absent; it should prove the effect setup does not throw. Use `test/setup-dom.ts` as the environment reference.

## Done criteria

- [ ] `masonryRef.current` is guarded before `.style` is accessed.
- [ ] `pnpm typecheck` exits 0.
- [ ] `pnpm registry:build` exits 0 and only updates generated Masonry output as expected.
- [ ] No hand edits exist in `public/r/masonry.json`.
- [ ] No files outside scope changed, apart from pre-existing work.
- [ ] Plan 001 status is updated in `plans/README.md`.

## STOP conditions

- The excerpt above no longer matches live Masonry code.
- The source already has an equivalent guard.
- Typecheck still reports a nullable Masonry ref after the guard.
- Fixing verification requires modifying unrelated user changes or a file outside scope.

## Maintenance notes

Keep this guard whenever the root changes between an Ark `ul` and an `asChild` host. Reviewers should reject non-null assertions here: the guard documents the lifecycle boundary more accurately.
