# Shark Progress

## When to use

- Task completion and async operation progress bars.
- Indeterminate or determinate status during loading pipelines.

## When NOT to use

- If displaying a bounded measurement (not task completion) -> use Meter instead.
- If the loading state is indeterminate with no percentage -> consider Spinner.

## Install

```bash
npx shadcn@latest add @shark/progress
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
```

## Minimal pattern

```tsx
<Progress value={40} />
```

### Key patterns

Progress with label and value display:

```tsx
<Progress value={60}>
  <div className="flex justify-between text-sm">
    <ProgressLabel>Uploading...</ProgressLabel>
    <ProgressValue />
  </div>
</Progress>
```

Determinate progress: bind a numeric `value` (0-100) for known completion states.
Indeterminate loading: omit `value` or pass `null` when progress cannot be measured.


## Common pitfalls

- Using progress without text/context for what operation is progressing.
- Using determinate values when state is actually unknown/indeterminate.
- Using progress for static score displays that should use `Meter`.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/progress/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/progress/example-default.tsx)
- [`example-indeterminate.tsx`](/registry/react/examples/progress/example-indeterminate.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/progress/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/progress/example-orientation-vertical.tsx)
- [`example-with-label.tsx`](/registry/react/examples/progress/example-with-label.tsx)
