# Shark Circular Slider

## When to use

- Angular value picking (dial, knob) with optional markers and value readout.
- Compact alternatives to linear sliders when circular affordance fits the UI.

## Install

```bash
npx shadcn@latest add @shark/circular-slider
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  CircularSlider,
  CircularSliderMarker,
  CircularSliderMarkerGroup,
  CircularSliderThumb,
  CircularSliderValue,
  useCircularSlider,
} from "@/components/ui/circular-slider"
```

## Minimal pattern

```tsx
<CircularSlider defaultValue={45}>
  <CircularSliderThumb />
  <CircularSliderValue />
</CircularSlider>
```

### Key patterns

Add `CircularSliderMarkerGroup` + `CircularSliderMarker` for tick marks; use `useCircularSlider` for custom thumb/value UI. Control `step`, `thickness`, and `markers` per docs.

## Common pitfalls

- Missing `CircularSliderThumb`—the dial is not draggable without a thumb part.
- Confusing degrees vs normalized values—confirm `value` units with Ark `angle-slider` docs.
- Styling the track without using provided parts; prefer composition over ad hoc SVG.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/circular-slider/example-controlled.tsx)
- [`example-custom-markers.tsx`](/registry/react/examples/circular-slider/example-custom-markers.tsx)
- [`example-default.tsx`](/registry/react/examples/circular-slider/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/circular-slider/example-disabled.tsx)
- [`example-size.tsx`](/registry/react/examples/circular-slider/example-size.tsx)
- [`example-step.tsx`](/registry/react/examples/circular-slider/example-step.tsx)
- [`example-thickness.tsx`](/registry/react/examples/circular-slider/example-thickness.tsx)
- [`example-with-markers.tsx`](/registry/react/examples/circular-slider/example-with-markers.tsx)
- [`example-with-value.tsx`](/registry/react/examples/circular-slider/example-with-value.tsx)
