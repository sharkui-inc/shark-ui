# Shark Rating

## When to use

- Star (or custom icon) ratings for reviews, feedback, and testimonials.
- Optional half-star precision and read-only display modes.

## When NOT to use

- If the choice is a single option from a short list → use RadioGroup instead.
- If you need numeric entry with exact decimals → use NumberInput instead.

## Install

```bash
npx shadcn@latest add @shark/rating
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import { Rating, RatingItem } from "@/components/ui/rating"
```

## Minimal pattern

```tsx
<Rating />
```

### Key patterns

Controlled value with `value` / `onValueChange`; `allowHalf` for half steps; `count` for non-five scales; `readOnly` for display-only; custom `icon` node (defaults to `StarIcon`).

## Common pitfalls

- Treating the control as uncontrolled when the parent needs the score for submit—wire `value` explicitly.
- Using `RatingItem` manually unless you are customizing the default control composition from examples.
- Missing accessible labeling for the group when no visible text explains the scale.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/rating/example-controlled.tsx)
- [`example-count.tsx`](/registry/react/examples/rating/example-count.tsx)
- [`example-custom-color.tsx`](/registry/react/examples/rating/example-custom-color.tsx)
- [`example-custom-icon.tsx`](/registry/react/examples/rating/example-custom-icon.tsx)
- [`example-custom-size.tsx`](/registry/react/examples/rating/example-custom-size.tsx)
- [`example-default.tsx`](/registry/react/examples/rating/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/rating/example-disabled.tsx)
- [`example-half-star.tsx`](/registry/react/examples/rating/example-half-star.tsx)
- [`example-readonly.tsx`](/registry/react/examples/rating/example-readonly.tsx)
- [`example-testimonial.tsx`](/registry/react/examples/rating/example-testimonial.tsx)
