# Shark Tooltip

## When to use

- Short helper text on hover or keyboard focus.
- Non-blocking hints for controls and icon buttons.

## When NOT to use

- If the content is interactive (links, buttons) → use `Popover` instead.
- If the content is rich (forms, media) → use `Popover` instead.
- If the hint must stay open until explicitly dismissed → use `Popover` instead.

## Install

```bash
npx shadcn@latest add @shark/tooltip
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
```

## Minimal pattern

```tsx
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover</Button>
  </TooltipTrigger>
  <TooltipContent>Helpful hint</TooltipContent>
</Tooltip>
```

### Key patterns

- **Portal forwarding**: optional `portalProps` on `TooltipContent` → Ark `Tooltip.Portal` (`keepMounted`, `container`, …).
- **Icon-only triggers**: always set `aria-label` on the trigger `Button` and mark decorative icons `aria-hidden`.

## Common pitfalls

- Putting interactive content inside a tooltip.
- Missing `aria-label` on icon-only triggers.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/tooltip/example-default.tsx)
- [`example-positioning.tsx`](/registry/react/examples/tooltip/example-positioning.tsx)
