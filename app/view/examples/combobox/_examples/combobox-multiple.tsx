"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxContext,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";

const ComboboxMultiple = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Combobox
      className="w-full max-w-64"
      collection={collection}
      defaultValue={[initialItems[0].value]}
      multiple
      onInputValueChange={({ inputValue, reason }) =>
        filter(reason === "item-select" ? "" : inputValue)
      }
    >
      <ComboboxContext<Framework>>
        {({ selectedItems }) => (
          <>
            <ComboboxChips>
              {selectedItems.map((item) => (
                <ComboboxChip key={item.value} value={item.value}>
                  {item.label}
                </ComboboxChip>
              ))}
              <ComboboxChipsInput
                aria-label="Add framework"
                placeholder="Select frameworks..."
              />
            </ComboboxChips>
            <ComboboxContent>
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList>
                {collection.items.map((item) => (
                  <ComboboxItem item={item} key={item.value}>
                    {item.label}
                  </ComboboxItem>
                ))}
              </ComboboxList>
            </ComboboxContent>
          </>
        )}
      </ComboboxContext>
    </Combobox>
  );
};

const initialItems = [
  { label: "Next.js", value: "nextjs" },
  { label: "SvelteKit", value: "sveltekit" },
  { label: "Nuxt.js", value: "nuxtjs" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
];

type Framework = (typeof initialItems)[number];

export default ComboboxMultiple;
