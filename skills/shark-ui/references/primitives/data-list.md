# Shark Data List

## When to use

- Key/value rows (settings summaries, invoice lines, metadata blocks).
- Horizontal or vertical orientation with optional separators and info tips.

## Install

```bash
npx shadcn@latest add @shark/data-list
```

Manual deps from docs:

```bash
npm install @ark-ui/react tailwind-variants
```

## Canonical imports

```tsx
import {
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
} from "@/components/ui/data-list"
```

## Minimal pattern

```tsx
<DataList>
  <DataListItem>
    <DataListItemLabel>Status</DataListItemLabel>
    <DataListItemValue>Active</DataListItemValue>
  </DataListItem>
</DataList>
```

### Key patterns

Switch `orientation` for horizontal label/value layouts. Use separators or info tips from examples when you need grouped sections or helper copy.

## Common pitfalls

- Using `DataList` as a generic `<dl>` replacement without `DataListItem` rows—each row should be an item with label + value parts.
- Misaligned columns across items—prefer shared width utilities from examples.
- Skipping `tailwind-variants` install when copying styled variants from source.

## Registry example files

- [`example-default.tsx`](/registry/react/examples/data-list/example-default.tsx)
- [`example-info-tip.tsx`](/registry/react/examples/data-list/example-info-tip.tsx)
- [`example-orientation-horizontal.tsx`](/registry/react/examples/data-list/example-orientation-horizontal.tsx)
- [`example-orientation-vertical.tsx`](/registry/react/examples/data-list/example-orientation-vertical.tsx)
- [`example-separator.tsx`](/registry/react/examples/data-list/example-separator.tsx)
