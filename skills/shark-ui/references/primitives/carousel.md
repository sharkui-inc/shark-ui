# Shark Carousel

## When to use

- Rotating discrete slides (hero, product gallery, testimonials) where one or a few items are visible at a time and users move with prev/next, swipe/drag, or indicators.
- Thumbnail or dot indicators when you want explicit slide affordances alongside the track.

## When NOT to use

- Static grids of cards or media that should all stay visible without paging -> use a responsive grid or masonry, not a carousel.
- Primary navigation or settings with labeled sections -> use Tabs, Menu, or Sidebar instead of slide metaphors.
- Long feeds or “load more” lists -> use virtualization, pagination, or infinite scroll; carousels hide most items by default.
- Single continuous horizontal scroll (no fixed slides, no snap-to-page semantics) -> prefer `ScrollArea` or native overflow scrolling.
- When critical content would live only off-screen without strong cues (indicators, labels, reduced motion) -> reconsider or redesign so discovery and accessibility stay clear.

## Install

```bash
npx shadcn@latest add @shark/carousel
```

## Canonical imports

```tsx
import {
  Carousel,
  CarouselControl,
  CarouselItem,
  CarouselContent,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
```

## Minimal pattern

```tsx
<Carousel>
  <CarouselControl>
    <CarouselPrevious>Previous</CarouselPrevious>
    <CarouselNext>Next</CarouselNext>
  </CarouselControl>
  <CarouselContent>
    <CarouselItem>Item 1</CarouselItem>
  </CarouselContent>
</Carousel>
```

### Key patterns

Orientation via the `orientation` prop (`horizontal`|`vertical`):

```tsx
<Carousel orientation="vertical">
  <CarouselContent>
    <CarouselItem>Item 1</CarouselItem>
  </CarouselContent>
</Carousel>
```

Slides per page via the `slidesPerPage` prop:

```tsx
<Carousel slidesPerPage={2}>
  <CarouselContent>
    <CarouselItem>Item 1</CarouselItem>
  </CarouselContent>
</Carousel>
```

## Pitfalls

- Do not assume Radix-only APIs; confirm Ark/Shark props in MDX and source.
- Prefer registry examples over inventing markup.

## Registry example files

- [`example-autoplay.tsx`](/registry/react/examples/carousel/example-autoplay.tsx)
- [`example-controlled.tsx`](/registry/react/examples/carousel/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/carousel/example-default.tsx)
- [`example-loop.tsx`](/registry/react/examples/carousel/example-loop.tsx)
- [`example-mouse-drag.tsx`](/registry/react/examples/carousel/example-mouse-drag.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/carousel/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/carousel/example-orientation-vertical.tsx)
- [`example-slides-per-page.tsx`](/registry/react/examples/carousel/example-slides-per-page.tsx)
- [`example-spacing.tsx`](/registry/react/examples/carousel/example-spacing.tsx)
- [`example-thumbnail-indicator-vertical.tsx`](/registry/react/examples/carousel/example-thumbnail-indicator-vertical.tsx)
- [`example-thumbnail-indicator.tsx`](/registry/react/examples/carousel/example-thumbnail-indicator.tsx)