# Shark Badge

## When to use

- Short status/category labels and counts.
- Inline metadata chips paired with buttons, tables, and cards.

## Install

```bash
npx shadcn@latest add @shark/badge
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Badge } from "@/components/ui/badge"
```

## Minimal pattern

```tsx
<Badge>Badge</Badge>
```

### Key patterns

Variants via the `variant` prop:

```tsx
<Badge>Default</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
```

Badge with decorative icon:

```tsx
<Badge variant="outline">
  <CheckIcon />
  Verified
</Badge>
```

Badge inside a button (use negative margin for alignment):

```tsx
<Button variant="outline">
  Messages
  <Badge className="-me-1" variant="outline">18</Badge>
</Button>
```

## Common pitfalls

- Using badge as interactive button without proper button semantics.
- Applying raw palette classes instead of semantic tokens/variants for status.
- Overloading badge content with long text that should be normal body copy.

## Registry example files

- [`example-custom-color.tsx`](/registry/react/examples/badge/example-custom-color.tsx)
- [`example-default.tsx`](/registry/react/examples/badge/example-default.tsx)
- [`example-pill.tsx`](/registry/react/examples/badge/example-pill.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/badge/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/badge/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/badge/example-size-sm.tsx)
- [`example-variant-default.tsx`](/registry/react/examples/badge/example-variant-default.tsx)
- [`example-variant-destructive.tsx`](/registry/react/examples/badge/example-variant-destructive.tsx)
- [`example-variant-info.tsx`](/registry/react/examples/badge/example-variant-info.tsx)
- [`example-variant-outline.tsx`](/registry/react/examples/badge/example-variant-outline.tsx)
- [`example-variant-secondary.tsx`](/registry/react/examples/badge/example-variant-secondary.tsx)
- [`example-variant-success.tsx`](/registry/react/examples/badge/example-variant-success.tsx)
