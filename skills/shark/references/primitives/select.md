# Shark Select

## When to use

- Choosing one (or more, per MDX) options from a finite list with a closed trigger + listbox pattern.
- When you want Ark collection semantics (`createListCollection`, `collection` prop) as implemented in Shark.

## When not to use

- Free text with suggestions / typeahead → [`combobox.md`](./combobox.md) or **Autocomplete** docs.
- Native platform picker without custom listbox → **Native Select** (`native-select` stub / docs).

## Install

```bash
npx shadcn@latest add @shark/select
```

## Collection-first pattern

Shark examples commonly use **`createListCollection`** from `@ark-ui/react` and pass **`collection`** to `Select`:

```tsx
import { createListCollection } from "@ark-ui/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const collection = createListCollection({
  items: ["Banana", "Apple", "Orange"],
});

export function FruitSelect() {
  return (
    <Select collection={collection}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup heading="Fruits">
          {collection.items.map((item) => (
            <SelectItem item={item} key={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
```

Source: [`../../registry/react/examples/select/example-default.tsx`](../../registry/react/examples/select/example-default.tsx).

## Pitfalls

- Passing raw string children without `collection` / `SelectItem` `item` prop alignment—always mirror a working example.
- Using Radix `SelectItem` `value`-only patterns without verifying Shark’s Ark item API.

## Further reading

- [Ark UI Select](https://ark-ui.com/docs/components/select)
- [`../../content/docs/components/select.mdx`](../../content/docs/components/select.mdx)
- Additional examples under [`../../registry/react/examples/select/`](../../registry/react/examples/select/)
