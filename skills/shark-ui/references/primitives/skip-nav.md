# Shark Skip navigation

## When to use

- Providing the first focusable **skip link** on every page for keyboard and screen-reader users.
- Pairing a link target with the main content landmark to bypass repetitive chrome.

## Install

```bash
npx shadcn@latest add @shark/skip-nav
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { SkipNavContent, SkipNavLink } from "@/components/ui/skip-nav"
```

## Minimal pattern

```tsx
<SkipNavLink href="#main">Skip to content</SkipNavLink>
<SkipNavContent id="main">{/* page */}</SkipNavContent>
```

### Key patterns

Place `SkipNavLink` early in the document (before header). Ensure the `href` matches the `id` passed to `SkipNavContent` / your main landmark.

## Common pitfalls

- Linking to an `id` that does not exist or is not focusable—verify the target receives focus.
- Hiding the skip link in a way that removes it from tab order—use visually hidden styles, not `display: none`.
- Duplicating multiple skip links without clear labels—keep one primary “skip to content”.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/skip-nav/example-default.tsx)
