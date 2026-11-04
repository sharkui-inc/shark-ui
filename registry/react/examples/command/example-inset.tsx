"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { ArrowDownIcon, ArrowUpIcon, CornerDownLeftIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
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
  const [open, setOpen] = React.useState(false);
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  const onOpenChange = (props: { open: boolean }) => {
    const { open: nextOpen } = props;
    setOpen(nextOpen);
  };

  const onInputValueChange = (props: { inputValue: string }) => {
    const { inputValue } = props;
    filter(inputValue);
  };

  const onValueChange = () => {
    setOpen(false);
  };

  return (
    <CommandDialog onOpenChange={onOpenChange} open={open}>
      <CommandDialogTrigger asChild>
        <Button variant="outline">Open Command</Button>
      </CommandDialogTrigger>
      <CommandDialogContent variant="inset">
        <Command
          collection={collection}
          onInputValueChange={onInputValueChange}
          onValueChange={onValueChange}
        >
          <CommandInput placeholder="Search commands..." />
          <CommandContent>
            <CommandEmpty>No results found.</CommandEmpty>
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
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
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
              <div className="flex items-center gap-2">
                <Kbd variant="outline">
                  <CornerDownLeftIcon />
                </Kbd>
                <span>Open</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Kbd variant="outline">Esc</Kbd>
              <span>Close</span>
            </div>
          </CommandFooter>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
};

const initialItems = [
  { group: "File", label: "New File", shortcut: "⌘N", value: "new" },
  { group: "File", label: "Save", shortcut: "⌘S", value: "save" },
  { group: "File", label: "Open", shortcut: "⌘O", value: "open" },
  { group: "Edit", label: "Undo", shortcut: "⌘Z", value: "undo" },
  { group: "Edit", label: "Redo", shortcut: "⌘Z", value: "redo" },
  { group: "Edit", label: "Cut", shortcut: "⌘X", value: "cut" },
  { group: "Edit", label: "Copy", shortcut: "⌘C", value: "copy" },
];

export default Example;
