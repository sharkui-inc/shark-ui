# Shark Circular Progress

## When to use

- Compact determinate or indeterminate progress in dashboards, uploads, or timers.
- Circular gauge-style feedback around an icon or label.

## Install

```bash
npx shadcn@latest add @shark/circular-progress
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  CircularProgress,
  CircularProgressTrack,
  CircularProgressValue,
  useCircularProgress,
} from "@/components/ui/circular-progress"
```

## Minimal pattern

```tsx
<CircularProgress value={72}>
  <CircularProgressTrack />
  <CircularProgressValue />
</CircularProgress>
```

### Key patterns

`useCircularProgress` reads Ark progress context when building custom centers. Pair `CircularProgressTrack` with `CircularProgressValue` for default readouts; adjust `thickness` and sizes per MDX.

## Common pitfalls

- Passing invalid `value` ranges—keep within 0–100 unless docs define another scale.
- Omitting `CircularProgressTrack` and expecting a ring to render with no children.
- Treating it like `Progress` (linear); APIs differ—use the circular-specific parts.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/circular-progress/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/circular-progress/example-default.tsx)
- [`example-indeterminate.tsx`](/registry/react/examples/circular-progress/example-indeterminate.tsx)
- [`example-size.tsx`](/registry/react/examples/circular-progress/example-size.tsx)
- [`example-thickness.tsx`](/registry/react/examples/circular-progress/example-thickness.tsx)
- [`example-with-value.tsx`](/registry/react/examples/circular-progress/example-with-value.tsx)
