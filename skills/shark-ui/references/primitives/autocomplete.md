# Shark Autocomplete

## When to use

- Search-driven suggestion pickers with free typing.
- Assisted text entry over a known option space with keyboard navigation.

## When NOT to use

- If options are predefined and don't need search -> use Select instead.
- If the user must pick from a strict set (no free text) -> use Combobox instead.
- If you need action commands, not data selection -> use Command instead.

## Install

```bash
npx shadcn@latest add @shark/autocomplete
```

Manual deps from docs:

```bash
npm install @ark-ui/react
```

## Canonical imports

Minimal setup: Ark collection + filter, Shark autocomplete.

```tsx
import { useFilter, useListCollection } from "@ark-ui/react"
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteGroup
} from "@/components/ui/autocomplete"
```

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
    <Autocomplete
      className="w-full max-w-64"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <AutocompleteInput />
      <AutocompleteContent>
        <AutocompleteEmpty />
        <AutocompleteList>
          {collection.items.map((item) => (
            <AutocompleteItem item={item} key={item.value}>
              {item.label}
            </AutocompleteItem>
          ))}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  )
}
```

For form-bound autocomplete controls, prefer `Field` wrappers so label, required state, and error output remain tied to the same control.

### Key patterns

Autocomplete with input group:

```tsx
 <Autocomplete
      className="w-full max-w-64"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
  >
  <AutocompleteInput placeholder="Search fruits...">
    <InputGroupAddon align="inline-start">
      <AppleIcon />
    </InputGroupAddon>
  </AutocompleteInput>
  <AutocompleteContent>
    <AutocompleteEmpty />
    <AutocompleteList>
      {collection.items.map((item) => (
        <AutocompleteItem item={item} key={item.value}>
          {item.label}
        </AutocompleteItem>
      ))}
    </AutocompleteList>
  </AutocompleteContent>
</Autocomplete>
```

Grouped items:

```tsx
const { collection, filter } = useListCollection({
  initialItems,
  filter: contains,
  groupBy: (item) => item.continent,
})

// …

<AutocompleteList>
  {collection.group().map(([heading, group]) => (
    <AutocompleteGroup heading={heading} key={heading}>
      {group.map((item) => (
        <AutocompleteItem item={item} key={item.value}>
          {item.label}
        </AutocompleteItem>
      ))}
    </AutocompleteGroup>
  ))}
</AutocompleteList>
```

Clear button:

```tsx
//...
<AutocompleteInput showClear />
//...
```

Trigger button:

```tsx
//...
<AutocompleteInput showTrigger />
//...
```

With start icon:

```tsx
import { SearchIcon } from "lucide-react";
import { InputGroupAddon } from "@/components/ui/input-group";

//...
<AutocompleteInput placeholder="Search...">
  <InputGroupAddon align="inline-start">
    <SearchIcon />
  </InputGroupAddon>
</AutocompleteInput>
//...
```

## Common pitfalls

- Omitting `AutocompleteEmpty`, leaving blank popups with no user feedback.
- Using object items in async/custom flows without `itemToStringValue`, which breaks stable string mapping.
- Mixing combobox/select assumptions into autocomplete APIs without checking docs.
- Missing explicit labels (`FieldLabel` or `aria-label`) on the input.
- Not handling async race/error states (`loading`, `error`, stale response cancellation).

## Registry example files

- [`example-controlled.tsx`](/registry/react/examples/autocomplete/example-controlled.tsx)
- [`example-default.tsx`](/registry/react/examples/autocomplete/example-default.tsx)
- [`example-disabled.tsx`](/registry/react/examples/autocomplete/example-disabled.tsx)
- [`example-group.tsx`](/registry/react/examples/autocomplete/example-group.tsx)
- [`example-invalid.tsx`](/registry/react/examples/autocomplete/example-invalid.tsx)
- [`example-size-lg.tsx`](/registry/react/examples/autocomplete/example-size-lg.tsx)
- [`example-size-md.tsx`](/registry/react/examples/autocomplete/example-size-md.tsx)
- [`example-size-sm.tsx`](/registry/react/examples/autocomplete/example-size-sm.tsx)
- [`example-with-clear-button.tsx`](/registry/react/examples/autocomplete/example-with-clear-button.tsx)
- [`example-with-field.tsx`](/registry/react/examples/autocomplete/example-with-field.tsx)
- [`example-with-start-icon.tsx`](/registry/react/examples/autocomplete/example-with-start-icon.tsx)
