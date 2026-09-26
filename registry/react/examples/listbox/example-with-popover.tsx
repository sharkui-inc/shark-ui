"use client";

import { useListCollection } from "@ark-ui/react/collection";
import { useFilter } from "@ark-ui/react/locale";
import { ChevronsUpDown } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Listbox,
  ListboxContent,
  ListboxEmpty,
  ListboxInput,
  ListboxItem,
  ListboxItemText,
  ListboxValueText,
} from "@/registry/react/components/listbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    initialItems: [
      { label: "Brazil", value: "br" },
      { label: "Mexico", value: "mx" },
      { label: "Ireland", value: "ie" },
      { label: "Canada", value: "ca" },
    ],
  });

  return (
    <Listbox
      className="max-w-48"
      collection={collection}
      onSelect={() => {
        setIsOpen(false);
      }}
    >
      <Popover onOpenChange={({ open }) => setIsOpen(open)} open={isOpen}>
        <PopoverTrigger asChild>
          <Button className="justify-between" variant="outline">
            <ListboxValueText placeholder="Select framework" />
            <ChevronsUpDown className="opacity-64" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="min-w-64 gap-2">
          <ListboxContent>
            <ListboxInput
              onChange={(e) => filter(e.target.value)}
              placeholder="Search..."
            />
            {collection.items.map((item) => (
              <ListboxItem item={item} key={item.value}>
                <ListboxItemText>{item.label}</ListboxItemText>
              </ListboxItem>
            ))}

            <ListboxEmpty>No results found.</ListboxEmpty>
          </ListboxContent>
        </PopoverContent>
      </Popover>
    </Listbox>
  );
};

export default Example;
