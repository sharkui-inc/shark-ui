"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { BellOffIcon, CircleIcon, MoonIcon } from "lucide-react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/react/components/combobox";
import { MenuItemDescription } from "@/registry/react/components/menu";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Combobox
      className="w-full max-w-64"
      collection={collection}
      onInputValueChange={({ inputValue, reason }) =>
        filter(reason === "item-select" ? "" : inputValue)
      }
    >
      <ComboboxInput placeholder="Select a status" />
      <ComboboxContent>
        <ComboboxEmpty />
        <ComboboxList>
          {collection.items.map((item) => {
            const Icon = item.icon;

            return (
              <ComboboxItem item={item} key={item.value}>
                <Icon aria-hidden />
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span>{item.label}</span>
                  <MenuItemDescription>{item.description}</MenuItemDescription>
                </span>
              </ComboboxItem>
            );
          })}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

const initialItems = [
  {
    description: "Ready for new messages.",
    icon: CircleIcon,
    label: "Available",
    value: "available",
  },
  {
    description: "Away until later today.",
    icon: MoonIcon,
    label: "Away",
    value: "away",
  },
  {
    description: "Mute all notifications.",
    icon: BellOffIcon,
    label: "Do not disturb",
    value: "dnd",
  },
];

export default Example;
