"use client";

import { createListCollection } from "@ark-ui/react";
import React from "react";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => {
  const [value, setValue] = React.useState(["mountain"]);

  const selectedImage = collection.items.find((item) =>
    value.includes(item.value)
  );

  return (
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <Listbox
        className="grid w-full gap-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8"
        collection={collection}
        onValueChange={(e) => setValue(e.value)}
        value={value}
      >
        <ListboxContent className="overflow-visible rounded-2xl bg-muted">
          {collection.items.map((item) => (
            <ListboxItem
              className="relative flex w-full flex-row items-center gap-3 rounded-xl border border-transparent bg-transparent px-3 py-3 text-start transition-[background-color,border-color,box-shadow] duration-150 ease-out hover:bg-accent/64 data-[selected]:border-input data-[selected]:bg-background data-[selected]:shadow-xs/4"
              data-selected={value.includes(item.value) || undefined}
              item={item}
              key={item.value}
              showIndicator={false}
            >
              <div className="min-w-0 flex-1">
                <ListboxItemText className="block truncate font-medium text-sm">
                  {item.label}
                </ListboxItemText>
              </div>
            </ListboxItem>
          ))}
        </ListboxContent>
        <div className="relative min-h-80 overflow-hidden rounded-2xl bg-muted shadow-xs/4 sm:min-h-full">
          <img
            alt={selectedImage?.alt ?? ""}
            className="absolute inset-0 size-full object-cover"
            height={640}
            src={selectedImage?.artwork}
            width={640}
          />
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/80 via-foreground/64 to-transparent px-5 pt-16 pb-5 sm:px-7 sm:pt-24 sm:pb-7">
            <h3 className="font-heading font-medium text-background text-xl tracking-tight sm:text-2xl">
              {selectedImage?.label}
            </h3>
          </div>
        </div>
      </Listbox>
    </div>
  );
};

const collection = createListCollection({
  items: [
    {
      alt: "Scenic mountain view",
      artwork:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=mountain-landscape&waveColor=2b6cb0",
      label: "Mountain Landscape",
      value: "mountain",
    },
    {
      alt: "Ocean waves",
      artwork:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=ocean-waves&waveColor=7c3aed",
      label: "Ocean Waves",
      value: "ocean",
    },
    {
      alt: "Forest path",
      artwork:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=forest-path&waveColor=1a6b5c",
      label: "Forest Path",
      value: "forest",
    },
    {
      alt: "City skyline",
      artwork:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=city-skyline&waveColor=ea580c",
      label: "City Skyline",
      value: "city",
    },
    {
      alt: "Desert dunes",
      artwork:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=desert-dunes&waveColor=ca8a04",
      label: "Desert Dunes",
      value: "desert",
    },
  ],
});

export default Example;
