# Shark Popover

## When to use

- Non-modal contextual panels anchored to a trigger (filters, icon pickers, inline forms).
- When content should not use full-screen sheet/dialog metaphors.

## When not to use

- Modal / focus-trap workflows → [`dialog.md`](./dialog.md) or [`sheet.md`](./sheet.md).
- Hover-only transient hints → **Tooltip** (`tooltip.md` stub / docs).

## Install

```bash
npx shadcn@latest add @shark/popover
```

## Canonical imports (shark-ui repo)

```tsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/registry/react/components/popover";
```

Use **`asChild`** on `PopoverTrigger` when composing with `Button` (see MDX).

## Ark / portal

`PopoverContent` is portaled via `@ark-ui/react/portal` in the implementation—see [`../portal.md`](../portal.md).

## Registry examples

[`../../registry/react/examples/popover/`](../../registry/react/examples/popover/) — controlled `open`, placement, and content layouts.

## Pitfalls

- Nesting interactive widgets without checking focus behavior—validate against MDX + examples.
- Omitting anchor props (`side`, `align`, offsets) then fighting CSS—prefer documented positioning props first.

## Further reading

- [Ark UI Popover](https://ark-ui.com/docs/components/popover)
- [`../../registry/react/components/popover.tsx`](../../registry/react/components/popover.tsx)
- [`../../content/docs/components/popover.mdx`](../../content/docs/components/popover.mdx)
