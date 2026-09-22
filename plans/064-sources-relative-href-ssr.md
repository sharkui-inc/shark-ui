# Plan 064: Keep Source/InlineCitation relative hrefs without a fake SSR origin

> **Executor instructions**: Follow this plan step by step. Run every verification command and confirm the expected result before moving on. If a STOP condition occurs, stop and report — do not improvise. Do not change branches, use `git stash`, commit, push, or modify unrelated existing work unless the operator says otherwise. When complete, update Plan 064 in `plans/README.md`.
>
> **Drift check (run first)**: `git diff --stat 55ee337c..HEAD -- registry/react/components/sources.tsx plans/README.md`
> If an in-scope source file changed since this plan was written, compare the Current state excerpts with live code. A mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: bug
- **Planned at**: commit `55ee337c`, 2026-09-22

## Why this matters

`toSafeHref` builds `new URL(href, "https://example.com")` on the server, then returns `url.href`. Relative paths like `/docs` become `https://example.com/docs` in SSR HTML and the real origin on the client — wrong links and hydration mismatches. Absolute `http:`/`https:`/`mailto:` should stay allowlisted.

## Current state

```tsx
// sources.tsx:82-102
const ALLOWED_HREF_PROTOCOLS = new Set(["http:", "https:", "mailto:"]);

const toSafeHref = (href: string | undefined): string | undefined => {
  if (!href) {
    return undefined;
  }
  try {
    const url = new URL(
      href,
      typeof window === "undefined"
        ? "https://example.com"
        : window.location.href
    );
    if (!ALLOWED_HREF_PROTOCOLS.has(url.protocol)) {
      return undefined;
    }
    return url.href;
  } catch {
    return undefined;
  }
};
```

Used by `Source` and `InlineCitation` in the same file.

## Commands you will need

| Purpose | Command | Expected on success |
| --- | --- | --- |
| Drift check | `git diff --stat 55ee337c..HEAD -- registry/react/components/sources.tsx plans/README.md` | Reviewed or STOP |
| Prove no fake base | `rg -n 'example.com|toSafeHref' registry/react/components/sources.tsx` | No `example.com`; relative paths returned unchanged |
| Lint | `pnpm exec biome check registry/react/components/sources.tsx` | Exit 0 |

Per `AGENTS.md`: do **not** run `pnpm test`, `pnpm typecheck`, `pnpm registry:build`, or browsers unless named.

## Scope

**In scope**: `registry/react/components/sources.tsx` — `toSafeHref` only; `plans/README.md` status only.

**Out of scope**: Citation UI, docs, examples, tests, browsers.

## Git workflow

- Stay on the current branch; preserve the dirty worktree.
- Do **not** stash, switch branch, commit, push, or open a PR unless asked.

## Steps

### Step 1: Rewrite toSafeHref

Behavior contract:

1. Empty/`undefined` → `undefined`.
2. Reject protocol-relative `//…` and disallowed schemes (`javascript:`, `data:`, etc.).
3. Path-absolute or relative same-origin hrefs (`/docs`, `./x`, `?q=1`, `#hash`) → return the original string unchanged (still safe for `<a href>`).
4. Absolute URLs with allowlisted protocols → return a normalized absolute `url.href` (or the original if preferred — keep protocol allowlist).

Suggested shape:

```tsx
const toSafeHref = (href: string | undefined): string | undefined => {
  if (!href) {
    return undefined;
  }

  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith("//")) {
    return undefined;
  }

  // Same-document / relative / path-absolute: keep as-is (no SSR fake base).
  if (
    trimmed.startsWith("/") ||
    trimmed.startsWith("./") ||
    trimmed.startsWith("../") ||
    trimmed.startsWith("?") ||
    trimmed.startsWith("#")
  ) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);
    if (!ALLOWED_HREF_PROTOCOLS.has(url.protocol)) {
      return undefined;
    }
    return url.href;
  } catch {
    return undefined;
  }
};
```

Do **not** use `https://example.com` as a base. Do **not** weaken the protocol allowlist for absolute URLs.

**Verify**: no `example.com`; relative `/…` preserved; `javascript:` still rejected.

### Step 2: Lint and status

Lint; mark 064 DONE.

## Test plan

No component test authorized. If later approved: `/docs` SSR equals client; `javascript:alert(1)` → undefined.

## Done criteria

- [ ] Relative/path-absolute hrefs unchanged across SSR/client
- [ ] Allowlisted absolute URLs still work
- [ ] Dangerous schemes still rejected
- [ ] `plans/README.md` row 064 is DONE

## STOP conditions

- Changing relative handling would break an intentional absolute-only API documented in MDX — STOP and report
- Lint fails twice on the same in-scope issue after a reasonable fix

## Maintenance notes

- Plan 011 introduced allowlisting; this plan only fixes relative SSR behavior.
