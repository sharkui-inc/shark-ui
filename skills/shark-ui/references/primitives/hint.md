# Shark Hint

## When to use

- Minimal contextual help on **hover or focus**—lighter than a full `Tooltip` in some layouts.
- Icon or text triggers that need a small popper without heavy chrome.

## Install

```bash
npx shadcn@latest add @shark/hint
```

Manual deps from docs:

The MDX manual flow is copy-only; the implementation uses Ark factory + `tailwind-variants`. Install:

```bash
npm install @ark-ui/react tailwind-variants
```

## Canonical imports

```tsx
import { Hint, HintArrow, HintContent, HintTrigger } from "@/components/ui/hint"
```

## Minimal pattern

```tsx
<Hint>
  <HintTrigger asChild>
    <Button aria-label="Help" size="icon-sm" variant="ghost">
      <InfoIcon />
    </Button>
  </HintTrigger>
  <HintContent>Short hint text.</HintContent>
</Hint>
```

### Key patterns

Add `HintArrow` when you want a pointer; tune `positioning` / `gutter` per docs. For richer tooltip behavior, compare with Shark `Tooltip` in docs.

## Common pitfalls

- Using `Hint` for large rich content—keep copy short.
- Missing `aria-label` on icon-only `HintTrigger` children.
- Confusing `Hint` with `ToggleTooltip` (click/toggle popover semantics differ).

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/hint/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/hint/example-default.tsx)
- [`example-positions.tsx`](/registry/react/examples/hint/example-positions.tsx)
