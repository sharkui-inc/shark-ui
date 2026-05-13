# Shark Slider

## When to use

- Continuous or ranged numeric tuning interactions.
- Volume/brightness/threshold controls with immediate feedback.

## Install

```bash
npx shadcn@latest add @shark/slider
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import { Slider, SliderValue } from "@/components/ui/slider"
```

## Minimal pattern

```tsx
<Slider aria-label="Volume" defaultValue={40} max={100} min={0} />
```

### Key patterns

Slider with label and live value display:

```tsx
<div className="flex flex-col gap-2">
  <div className="flex justify-between text-sm">
    <Label>Volume</Label>
    <SliderValue />
  </div>
  <Slider aria-label="Volume" defaultValue={50} min={0} max={100} />
</div>
```

Range slider (two thumbs):

```tsx
<Slider aria-label="Price range" defaultValue={[20, 80]} min={0} max={100} />
```


## Common pitfalls

- Using slider for discrete option labels where select/radio is clearer.
- Not exposing current value context in nearby UI text when needed.
- Confusing single-value vs range value shapes in controlled mode.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/slider/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/slider/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/slider/example-disabled.tsx)
- [`example-marks.tsx`](/registry/react/examples/slider/example-marks.tsx)
- [`example-min-max.tsx`](/registry/react/examples/slider/example-min-max.tsx)
- [`example-range.tsx`](/registry/react/examples/slider/example-range.tsx)
- [`example-step.tsx`](/registry/react/examples/slider/example-step.tsx)
- [`example-vertical.tsx`](/registry/react/examples/slider/example-vertical.tsx)
- [`example-with-label.tsx`](/registry/react/examples/slider/example-with-label.tsx)
