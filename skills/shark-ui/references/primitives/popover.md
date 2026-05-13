# Shark Popover

## When to use

- Contextual floating content anchored to a trigger.
- Inline help or compact forms without full modal focus lock.

## When NOT to use

- If the content requires full modal focus and dismissal discipline → use `Dialog` instead.
- If the content is a single short hint → use `Tooltip` instead.
- If the overlay is a command/action list → use `Menu` instead.

## Install

```bash
npx shadcn@latest add @shark/popover
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
```

## Minimal pattern

```tsx
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverTitle>Title</PopoverTitle>
    <PopoverDescription>Description</PopoverDescription>
    <PopoverClose asChild>
      <Button variant="outline">Close</Button>
    </PopoverClose>
  </PopoverContent>
</Popover>
```

### Key patterns

- **Portal forwarding**: optional `portalProps` on `PopoverContent` → Ark `Popover.Portal` (`keepMounted`, `container`, …).
- **Forms**: `PopoverContent` can wrap short forms using native `<form>` plus `Field` primitives.
- **Dismiss controls**: use `PopoverClose` with `asChild` + `Button` (set `aria-label` on icon-only closes).

## Common pitfalls

- Using `Popover` as a full modal replacement.
- Forgetting `asChild` when composing triggers/closes with `Button` or links.
- Missing accessible names on icon-only triggers.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/popover/example-default.tsx)
- [`example-anchor.tsx`](/registry/react/examples/popover/example-anchor.tsx)
- [`example-close-button.tsx`](/registry/react/examples/popover/example-close-button.tsx)
- [`example-positioning.tsx`](/registry/react/examples/popover/example-positioning.tsx)
