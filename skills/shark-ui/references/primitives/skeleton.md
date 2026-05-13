# Shark Skeleton

## When to use

- Loading placeholders matching final layout density.
- Perceived-performance improvement during fetch/render latency.

## Install

```bash
npx shadcn@latest add @shark/skeleton
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Skeleton } from "@/components/ui/skeleton"
```

## Minimal pattern

```tsx
<Skeleton className="size-10 rounded-full" />
```

### Key patterns

Card skeleton composition (match the final layout geometry):

```tsx
<div className="flex items-center gap-4">
  <Skeleton className="size-10 rounded-full" />
  <div className="flex flex-1 flex-col">
    <Skeleton className="my-0.5 h-4 max-w-54" />
    <Skeleton className="my-0.5 h-4 w-1/2" />
  </div>
  <Skeleton className="h-7 w-19" />
</div>
```

Shape matching: mirror final text/image/button geometry to reduce content shift.
State handoff: remove skeleton immediately when data is ready to avoid double-render.


## Common pitfalls

- Mismatch between skeleton layout and final content layout causing jarring swap.
- Leaving skeleton visible after load completion due missing state transition.
- Using skeleton for very short operations where spinner/text is clearer.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/skeleton/example-default.tsx)
- [`example-loading-card.tsx`](/registry/react/examples/skeleton/example-loading-card.tsx)
- [`example-skeleton-circle.tsx`](/registry/react/examples/skeleton/example-skeleton-circle.tsx)
- [`example-skeleton-text.tsx`](/registry/react/examples/skeleton/example-skeleton-text.tsx)
- [`example-skeleton.tsx`](/registry/react/examples/skeleton/example-skeleton.tsx)
