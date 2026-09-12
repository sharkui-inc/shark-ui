"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { ArrowDownIcon, ArrowUpIcon, CornerDownLeftIcon } from "lucide-react";
import {
  Command,
  CommandContent,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/registry/react/components/command";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <Command
      className="w-full max-w-md"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <CommandInput placeholder="Search..." />
      <CommandContent>
        <CommandEmpty />
        <CommandList>
          {collection.group().map(([group, items]) => (
            <CommandGroup heading={group} key={group}>
              {items.map((item) => (
                <CommandItem item={item} key={item.value}>
                  {item.label}
                  <CommandShortcut>{item.shortcut}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandContent>
      <CommandFooter>
        <div className="flex items-center gap-1.5">
          <Kbd variant="outline">
            <CornerDownLeftIcon />
          </Kbd>
          <span>Select</span>
        </div>
        <div className="flex items-center gap-1.5">
          <KbdGroup>
            <Kbd variant="outline">
              <ArrowUpIcon />
            </Kbd>
            <Kbd variant="outline">
              <ArrowDownIcon />
            </Kbd>
          </KbdGroup>
          <span>Navigate</span>
        </div>
      </CommandFooter>
    </Command>
  );
};

const initialItems = [
  { group: "App", label: "Settings", shortcut: "⌘,", value: "settings" },
  {
    group: "App",
    label: "Keyboard Shortcuts",
    shortcut: "⌘K",
    value: "shortcuts",
  },
  { group: "App", label: "Help", shortcut: "⌘?", value: "help" },
];

export default Example;
