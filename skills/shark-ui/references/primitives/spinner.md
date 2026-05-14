# Shark Spinner

## When to use

- Indeterminate loading indicator for ongoing work.
- Inline pending state in buttons, forms, and async panels.

## Install

```bash
npx shadcn@latest add @shark/spinner
```

Manual deps from docs:

```bash
npm install lucide-react
```

## Canonical imports

```tsx
import { Spinner } from "@/components/ui/spinner"
```

## Minimal pattern

```tsx
<div className="flex items-center gap-2">
  <Spinner aria-label="Loading" />
  <span className="text-sm text-muted-foreground">Loading data…</span>
</div>
```

### Key patterns

Standalone spinner with label:

```tsx
<div className="flex items-center gap-2">
  <Spinner aria-label="Loading" />
  <span className="text-muted-foreground text-sm">Fetching data...</span>
</div>
```

Prefer button built-in loading UI where available over ad-hoc spinner wrappers.


## Common pitfalls

- Using spinner without accessible label/context for screen readers.
- Showing spinner with no cancel/retry pathway in long-running operations.
- Using spinner when determinate progress value is available.

## Registry example files

- [`example-badge.tsx`](/registry/react/examples/spinner/example-badge.tsx)
- [`example-default.tsx`](/registry/react/examples/spinner/example-default.tsx)
- [`example-input-group.tsx`](/registry/react/examples/spinner/example-input-group.tsx)
- [`example-size.tsx`](/registry/react/examples/spinner/example-size.tsx)
