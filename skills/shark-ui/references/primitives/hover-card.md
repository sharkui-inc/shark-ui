# Shark Hover Card

## When to use

- Rich preview cards on hover/focus (profiles, summaries, maps).
- Lightweight disclosure that is not interactive like a full popover surface.

## When NOT to use

- If the surface contains buttons, links that must receive clicks, or forms → use `Popover` instead.
- If the copy is a single short phrase → use `Tooltip` instead.

## Install

```bash
npx shadcn@latest add @shark/hover-card
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
  useHoverCard,
} from "@/components/ui/hover-card"
```

## Minimal pattern

```tsx
<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">Hover here</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <p className="text-sm">Preview content</p>
  </HoverCardContent>
</HoverCard>
```

Import `Button` from `@/components/ui/button` when using `HoverCardTrigger asChild` with a button.

### Key patterns

Tune `openDelay` / `closeDelay`, `positioning`, and `lazyMount` on `HoverCard` root; optional `portalProps` on `HoverCardContent` map to Ark’s portal (`keepMounted`, `container`, …); keep hover card content non-interactive or move to `Popover`.

## Common pitfalls

- Placing critical actions only inside hover content (keyboard/touch users may never open it reliably).
- Omitting `asChild` on `HoverCardTrigger` when wrapping `Button` or links.
- Expecting click-to-pin behavior—hover cards dismiss when pointer leaves.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/hover-card/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/hover-card/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/hover-card/example-disabled.tsx)
- [`example-positioning.tsx`](/registry/react/examples/hover-card/example-positioning.tsx)
- [`example-triggers-delays.tsx`](/registry/react/examples/hover-card/example-triggers-delays.tsx)
