# Shark Prose

## When to use

- Rendering long-form or CMS HTML with consistent typography (headings, lists, tables, code).
- Article bodies, docs previews, or changelog entries that need `.prose` styling.

## Install

```bash
npx shadcn@latest add @shark/prose
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

Follow the MDX **CSS variables / selectors** section when wiring manual install—`Prose` expects the companion `.prose` rules in your stylesheet.

## Canonical imports

```tsx
import { Prose } from "@/components/ui/prose"
```

## Minimal pattern

```tsx
<Prose>
  <h1>Title</h1>
  <p>Paragraph copy with default typographic scale.</p>
</Prose>
```

### Key patterns

Use `not-prose` islands (see `example-not-prose`) when embedding cards or components that should opt out of typography rules. Combine with `ScrollArea` in docs demos for long content.

## Common pitfalls

- Installing only the component without copying the **CSS rules** from the manual tab—styles will be incomplete.
- Nesting interactive widgets without `not-prose` where typography overrides break layout.
- Expecting automatic sanitization of remote HTML—sanitize upstream if content is untrusted.

## Registry example files

- [`example-a.tsx`](/registry/react/examples/prose/example-a.tsx)
- [`example-blockquote.tsx`](/registry/react/examples/prose/example-blockquote.tsx)
- [`example-default.tsx`](/registry/react/examples/prose/example-default.tsx)
- [`example-details.tsx`](/registry/react/examples/prose/example-details.tsx)
- [`example-dl.tsx`](/registry/react/examples/prose/example-dl.tsx)
- [`example-h1.tsx`](/registry/react/examples/prose/example-h1.tsx)
- [`example-h2.tsx`](/registry/react/examples/prose/example-h2.tsx)
- [`example-h3.tsx`](/registry/react/examples/prose/example-h3.tsx)
- [`example-h4.tsx`](/registry/react/examples/prose/example-h4.tsx)
- [`example-h5.tsx`](/registry/react/examples/prose/example-h5.tsx)
- [`example-h6.tsx`](/registry/react/examples/prose/example-h6.tsx)
- [`example-inline-code.tsx`](/registry/react/examples/prose/example-inline-code.tsx)
- [`example-kbd.tsx`](/registry/react/examples/prose/example-kbd.tsx)
- [`example-list.tsx`](/registry/react/examples/prose/example-list.tsx)
- [`example-mark.tsx`](/registry/react/examples/prose/example-mark.tsx)
- [`example-media.tsx`](/registry/react/examples/prose/example-media.tsx)
- [`example-not-prose.tsx`](/registry/react/examples/prose/example-not-prose.tsx)
- [`example-ol.tsx`](/registry/react/examples/prose/example-ol.tsx)
- [`example-p.tsx`](/registry/react/examples/prose/example-p.tsx)
- [`example-separator.tsx`](/registry/react/examples/prose/example-separator.tsx)
- [`example-small.tsx`](/registry/react/examples/prose/example-small.tsx)
- [`example-table.tsx`](/registry/react/examples/prose/example-table.tsx)
