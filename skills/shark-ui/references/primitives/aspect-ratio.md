# Shark Aspect Ratio

## When to use

- Lock width/height ratio for media (video, maps) or thumbnails.
- Responsive boxes where the inner content should letterbox inside a fixed ratio.

## Install

```bash
npx shadcn@latest add @shark/aspect-ratio
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { AspectRatio } from "@/components/ui/aspect-ratio"
```

## Minimal pattern

```tsx
<AspectRatio ratio={16 / 9}>
  <img alt="" className="size-full object-cover" src="…" />
</AspectRatio>
```

### Key patterns

Use the `ratio` prop (width ÷ height). When docs expose CSS variables such as `[--ratio:…]` for tuning, document them in product MDX and mirror spacing/ratio examples from the registry.

## Common pitfalls

- Forgetting `object-cover` (or similar) on media so the ratio box clips predictably.
- Confusing `ratio` with height-in-pixels; it is a **numeric ratio**, not a length.
- Nesting interactive controls only inside the ratio slot without reserving space—test overflow.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/aspect-ratio/example-default.tsx)
- [`example-portrait.tsx`](/registry/react/examples/aspect-ratio/example-portrait.tsx)
- [`example-responsive.tsx`](/registry/react/examples/aspect-ratio/example-responsive.tsx)
- [`example-square.tsx`](/registry/react/examples/aspect-ratio/example-square.tsx)
- [`example-video.tsx`](/registry/react/examples/aspect-ratio/example-video.tsx)
