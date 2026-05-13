# Shark Listbox

## When to use

- Single or multi-select lists with rich items (icons, descriptions, groups) inside a popover or inline surface.
- Patterns that overlap `Select` but need listbox-specific composition or transfer lists.

## Install

```bash
npx shadcn@latest add @shark/listbox
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import {
  Listbox,
  ListboxContent,
  ListboxEmpty,
  ListboxItem,
  ListboxItemGroup,
  ListboxItemGroupLabel,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxShortcut,
  ListboxValueText,
  useListbox,
} from "@/components/ui/listbox"
```

## Minimal pattern

```tsx
import { createListCollection } from "@ark-ui/react"

const collection = createListCollection({
  items: [
    { label: "Brazil", value: "br" },
    { label: "Mexico", value: "mx" },
  ],
})

<Listbox collection={collection} defaultValue={["br"]}>
  <ListboxContent>
    {collection.items.map((item) => (
      <ListboxItem item={item} key={item.value}>
        <ListboxItemText>{item.label}</ListboxItemText>
        <ListboxItemIndicator />
      </ListboxItem>
    ))}
  </ListboxContent>
</Listbox>
```

### Key patterns

Follow **collection** APIs from docs (`createListCollection`, `useListCollection`, filtering) like combobox—do not assume a bare `items` array when examples use collections. `useListbox` helps with custom triggers/value UI.

## Common pitfalls

- Rendering items without a `collection` object when the example uses Ark collection patterns.
- Omitting `ListboxItemIndicator` in multi-select UX where users expect a checkmark.
- Treating like native `<select>`—listbox is composable; verify focus and typeahead from Ark docs.

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/listbox/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/listbox/example-default.tsx)
- [`example-disabled-item.tsx`](/registry/react/examples/listbox/example-disabled-item.tsx)
- [`example-disabled.tsx`](/registry/react/examples/listbox/example-disabled.tsx)
- [`example-grid.tsx`](/registry/react/examples/listbox/example-grid.tsx)
- [`example-grouping.tsx`](/registry/react/examples/listbox/example-grouping.tsx)
- [`example-horizontal.tsx`](/registry/react/examples/listbox/example-horizontal.tsx)
- [`example-image-explorer.tsx`](/registry/react/examples/listbox/example-image-explorer.tsx)
- [`example-selection-extended.tsx`](/registry/react/examples/listbox/example-selection-extended.tsx)
- [`example-selection-multiple.tsx`](/registry/react/examples/listbox/example-selection-multiple.tsx)
- [`example-selection-none.tsx`](/registry/react/examples/listbox/example-selection-none.tsx)
- [`example-transfer-list.tsx`](/registry/react/examples/listbox/example-transfer-list.tsx)
- [`example-with-description.tsx`](/registry/react/examples/listbox/example-with-description.tsx)
- [`example-with-filter.tsx`](/registry/react/examples/listbox/example-with-filter.tsx)
- [`example-with-icon.tsx`](/registry/react/examples/listbox/example-with-icon.tsx)
- [`example-with-popover.tsx`](/registry/react/examples/listbox/example-with-popover.tsx)
