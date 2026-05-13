# Shark Collapsible

## When to use

- Progressive disclosure of optional content.
- Expandable help/settings sections without leaving the page.

## Install

```bash
npx shadcn@latest add @shark/collapsible
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
```

## Minimal pattern

```tsx
<Collapsible>
  <CollapsibleTrigger>Can I access the file in the cloud?</CollapsibleTrigger>
  <CollapsiblePanel>
    Yes, you can access the file in the cloud.
  </CollapsiblePanel>
</Collapsible>
```

### Key patterns

Controlled collapsible:

```tsx
const [open, setOpen] = useState(false)

<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger>
    {open ? "Hide details" : "Show details"}
  </CollapsibleTrigger>
  <CollapsiblePanel>Hidden content here.</CollapsiblePanel>
</Collapsible>
```

Partial collapse:
```tsx
<Collapsible collapsedHeight="100px">
  <CollapsibleTrigger>
    {open ? "Hide details" : "Show details"}
  </CollapsibleTrigger>
  <CollapsiblePanel>Hidden content here.</CollapsiblePanel>
</Collapsible>
```

## Common pitfalls

- Placing trigger/panel outside the same collapsible root.
- Assuming panel content is always visible/mounted for dependent logic.
- Using modal-like interactions where collapsible disclosure is more appropriate.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/collapsible/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/collapsible/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/collapsible/example-disabled.tsx)
- [`example-nested.tsx`](/registry/react/examples/collapsible/example-nested.tsx)
- [`example-partial-collapse.tsx`](/registry/react/examples/collapsible/example-partial-collapse.tsx)
