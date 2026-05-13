# Shark Marquee

## When to use

- Continuously scrolling logos, tickers, or announcement strips.
- Horizontal or vertical loops with pause-on-hover, fade edges, or variable speed.

## Install

```bash
npx shadcn@latest add @shark/marquee
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Marquee, MarqueeContent, MarqueeEdge, MarqueeItem } from "@/components/ui/marquee"
```

## Minimal pattern

```tsx
<Marquee>
  <MarqueeContent>
    <MarqueeItem>Item A</MarqueeItem>
    <MarqueeItem>Item B</MarqueeItem>
    <MarqueeItem>Item C</MarqueeItem>
  </MarqueeContent>
</Marquee>
```

### Key patterns

Use `MarqueeEdge` for fade masks; toggle `orientation`, `reverse`, `pauseOnHover`, and speed-related props per examples. Duplicate items (`example-autofill`) when you need seamless infinite width.

## Common pitfalls

- Too few children for a wide viewport—content may not fill; use autofill or repeat items.
- Animating heavy DOM (large images) without sizing constraints—set explicit heights/widths.
- Ignoring reduced-motion preferences if your product requires them—test accessibility.

## Registry example files

- [`example-autofill.tsx`](/registry/react/examples/marquee/example-autofill.tsx)
- [`example-custom-speed.tsx`](/registry/react/examples/marquee/example-custom-speed.tsx)
- [`example-default.tsx`](/registry/react/examples/marquee/example-default.tsx)
- [`example-fade.tsx`](/registry/react/examples/marquee/example-fade.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/marquee/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/marquee/example-orientation-vertical.tsx)
- [`example-pause-on-hover.tsx`](/registry/react/examples/marquee/example-pause-on-hover.tsx)
- [`example-reverse.tsx`](/registry/react/examples/marquee/example-reverse.tsx)
- [`example-spacing.tsx`](/registry/react/examples/marquee/example-spacing.tsx)
