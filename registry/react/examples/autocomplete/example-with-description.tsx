"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { BellOffIcon, CircleIcon, MoonIcon } from "lucide-react";
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@/registry/react/components/autocomplete";
import { MenuItemDescription } from "@/registry/react/components/menu";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems,
  });

  return (
    <Autocomplete
      className="w-full max-w-64"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <AutocompleteInput placeholder="Select a status" />
      <AutocompleteContent>
        <AutocompleteEmpty />
        <AutocompleteList>
          {collection.items.map((item) => {
            const Icon = item.icon;

            return (
              <AutocompleteItem item={item} key={item.value}>
                <Icon aria-hidden />
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span>{item.label}</span>
                  <MenuItemDescription>{item.description}</MenuItemDescription>
                </span>
              </AutocompleteItem>
            );
          })}
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
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
