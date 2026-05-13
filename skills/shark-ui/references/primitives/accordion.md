# Shark Accordion

## When to use

- Expandable multi-section content regions.
- FAQs and settings pages with progressive disclosure.

## Install

```bash
npx shadcn@latest add @shark/accordion
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion"
```

## Minimal pattern

```tsx
<Accordion defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Base UI?</AccordionTrigger>
    <AccordionPanel>
      Base UI is a library of high-quality unstyled React components.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
```

### Key patterns

Multiple panels open simultaneously:

```tsx
<Accordion multiple defaultValue={["item-1", "item-2"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionPanel>Content 1</AccordionPanel>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionPanel>Content 2</AccordionPanel>
  </AccordionItem>
</Accordion>
```

Controlled mode with external state:

```tsx
const [value, setValue] = useState<string[]>(["item-1"])

<Accordion value={value} onValueChange={setValue}>
  ...
</Accordion>
```

Each `AccordionItem` needs a stable `value`; trigger and panel must be children of the same item.

## Common pitfalls

- Placing `AccordionTrigger`/`AccordionPanel` outside `AccordionItem`.
- Omitting `value` on `AccordionItem`, which breaks item identity and controlled behavior.
- Applying Radix mental models like `type="single" | "multiple"` instead of `multiple` prop + array values.
- Treating controlled `value` as scalar instead of `string[]`.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/accordion/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/accordion/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/accordion/example-disabled.tsx)
- [`example-multiple.tsx`](/registry/react/examples/accordion/example-multiple.tsx)
- [`example-non-collapsible.tsx`](/registry/react/examples/accordion/example-non-collapsible.tsx)