# Shark Combobox

## When to use

- Filterable lists tied to an input (typeahead, search-as-you-type).
- When Ark **`useListCollection`** + **`useFilter`** match the interaction model.

## When not to use

- Simple static pickers without filtering → often **Select** is simpler ([`select.md`](./select.md)).
- Native `<select>` → **Native Select**.

## Install

```bash
npx shadcn@latest add @shark/combobox
```

## Critical collection + filter pattern

From repository conventions (`AGENTS.md`) and examples such as [`../../registry/react/examples/combobox/example-controlled.tsx`](../../registry/react/examples/combobox/example-controlled.tsx):

```tsx
"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const { contains } = useFilter({ sensitivity: "base" });
const { collection, filter } = useListCollection({
  initialItems: [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ],
  filter: contains,
});

<Combobox
  className="w-full"
  collection={collection}
  onInputValueChange={({ inputValue }) => filter(inputValue)}
>
  <ComboboxInput placeholder="Select a fruit..." />
  <ComboboxContent>
    <ComboboxList>
      {collection.items.map((item) => (
        <ComboboxItem item={item} key={item.value}>
          {item.label}
        </ComboboxItem>
      ))}
    </ComboboxList>
  </ComboboxContent>
</Combobox>;
```

Key points:

- Pass **`collection`**, not a bespoke `items` prop unless MDX shows otherwise.
- Call **`filter(inputValue)`** inside **`onInputValueChange`**.
- Render **`collection.items.map(...)`** inside `ComboboxList`.

## Optional `ComboboxControl` / input group

`ComboboxInput` supports addons and clear/trigger UI—see `combobox.tsx` and larger examples under [`../../registry/react/examples/combobox/`](../../registry/react/examples/combobox/).

## Portal

`ComboboxContent` uses `Portal` from `@ark-ui/react/portal`—see [`../portal.md`](../portal.md).

## Pitfalls

- Static children only (no collection) while trying to get filtering behavior.
- Forgetting `item` prop on `ComboboxItem` when using collection objects.

## Further reading

- [Ark UI Combobox](https://ark-ui.com/docs/components/combobox)
- [`../../registry/react/components/combobox.tsx`](../../registry/react/components/combobox.tsx)
- [`../../content/docs/components/combobox.mdx`](../../content/docs/components/combobox.mdx)
