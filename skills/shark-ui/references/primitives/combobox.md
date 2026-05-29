# Shark Combobox

## When to use

- Searchable selection combining text input and list selection.
- Rich option rows with filtering and custom trigger behavior.

## When NOT to use

- If options are few and fixed (no search needed) -> use Select instead.
- If you need free-form text suggestions without strict selection -> use Autocomplete instead.
- If the user picks from a simple short list -> use RadioGroup or Select.

## Install

```bash
npx shadcn@latest add @shark/combobox
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

Typical usage pulls Ark collection helpers plus combobox primitives from the registry:

```tsx
import { useFilter, useListCollection } from "@ark-ui/react"
import {
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxPositioner,
  ComboboxTrigger,
  ComboboxContext,
} from "@/components/ui/combobox"
```

`comboboxItemVariants` is also exported for advanced item styling.

## Minimal pattern

```tsx
const initialItems = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Date", value: "date" },
]

function Example() {
  const { contains } = useFilter({ sensitivity: "base" })
  const { collection, filter } = useListCollection({
    initialItems,
    filter: contains,
  })

  return (
    <Combobox
      className="max-w-xs"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <ComboboxInput placeholder="Select an option" />
      <ComboboxContent>
        <ComboboxList>
          {collection.items.map((item) => (
            <ComboboxItem item={item} key={item.value}>
              {item.label}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
```

For form-bound comboboxes, prefer `Field` composition (`Field` + `FieldLabel` + `FieldError`) instead of standalone controls.

### Key patterns

With Field:

```tsx
import { Field, FieldLabel, FieldHelper, FieldError } from "@/components/ui/field";

<Field className="w-full max-w-64">
  <FieldLabel>Country</FieldLabel>
  <Combobox
    collection={collection}
    onInputValueChange={({ inputValue }) => filter(inputValue)}
    required
  >
    <ComboboxInput placeholder="Select a country..." />
    <ComboboxContent>
      <ComboboxList>
        {collection.items.map((item) => (
          <ComboboxItem item={item} key={item.value}>
            {item.label}
          </ComboboxItem>
        ))}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
  <FieldHelper>We'll use this for shipping estimates</FieldHelper>
  <FieldError>Please select a valid country</FieldError>
</Field>
```

Grouped items:

```tsx
const { collection, filter } = useListCollection({
  filter: contains,
  groupBy: (item) => item.continent,
  initialItems,
})

// …

<ComboboxList>
  {collection.group().map(([heading, group]) => (
    <ComboboxGroup heading={heading} key={heading}>
      {group.map((item) => (
        <ComboboxItem item={item} key={item.value}>
          {item.label}
        </ComboboxItem>
      ))}
    </ComboboxGroup>
  ))}
</ComboboxList>
```

Multiple selection:

```tsx
<Combobox multiple>
  <ComboboxInput placeholder="Select items..." />
  <ComboboxContent>
    <ComboboxList>
      {collection.items.map((item) => (
        <ComboboxItem item={item} key={item.value}>
          {item.label}
        </ComboboxItem>
      ))}
    </ComboboxList>
  </ComboboxContent>
</Combobox>
```

Clear button:

```tsx
//...
<ComboboxInput showClear />
//...
```

Trigger button:

```tsx
//...
<ComboboxInput showTrigger />
//...
```

With start icon:

```tsx
import { SearchIcon } from "lucide-react";
import { InputGroupAddon } from "@/components/ui/input-group";

//...
 <ComboboxInput placeholder="Search...">
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
</ComboboxInput>
//...
```

## Common pitfalls

- Passing `items` or a render-prop on `ComboboxList`; Shark combobox expects a `collection` from `useListCollection` and `collection.items.map` (or `collection.group()` for groups).
- Using `value={item}` on `ComboboxItem`; use `item={item}` with the collection model.
- Mixing Select and Combobox wiring without checking Ark combobox props in source or MDX.
- Missing empty or loading feedback for remote or slow filters.
- Omitting `onInputValueChange` → `filter` so the typed query never updates the list.

## Registry example files

- [`example-autohighlight.tsx`](/registry/react/examples/combobox/example-autohighlight.tsx)
- [`example-controlled.tsx`](/registry/react/examples/combobox/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/combobox/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/combobox/example-disabled.tsx)
- [`example-group.tsx`](/registry/react/examples/combobox/example-group.tsx)
- [`example-invalid.tsx`](/registry/react/examples/combobox/example-invalid.tsx)
- [`example-multiple.tsx`](/registry/react/examples/combobox/example-multiple.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/combobox/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/combobox/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/combobox/example-size-sm.tsx)
- [`example-with-clear-button.tsx`](/registry/react/examples/combobox/example-with-clear-button.tsx)
- [`example-with-field.tsx`](/registry/react/examples/combobox/example-with-field.tsx)
- [`example-with-scroll.tsx`](/registry/react/examples/combobox/example-with-scroll.tsx)
- [`example-with-start-icon.tsx`](/registry/react/examples/combobox/example-with-start-icon.tsx)
