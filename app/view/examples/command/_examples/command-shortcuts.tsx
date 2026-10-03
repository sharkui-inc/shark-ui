"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import { CreditCardIcon, SettingsIcon, UserIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandDialogTrigger,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/registry/react/components/command";

const CommandShortcuts = () => {
  const [open, setOpen] = React.useState(false);
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <div className="flex flex-col gap-4">
      <CommandDialog onOpenChange={({ open: o }) => setOpen(o)} open={open}>
        <CommandDialogTrigger asChild>
          <Button className="w-fit" variant="outline">
            Open Menu
          </Button>
        </CommandDialogTrigger>
        <CommandDialogContent>
          <Command
            collection={collection}
            onInputValueChange={({ inputValue }) => filter(inputValue)}
            onValueChange={() => setOpen(false)}
          >
            <CommandInput
              autoFocus={false}
              placeholder="Type a command or search..."
            />
            <CommandContent>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandList>
                {collection.group().map(([group, items]) => (
                  <CommandGroup heading={group} key={group}>
                    {items.map((item) => (
                      <CommandItem item={item} key={item.value}>
                        {item.icon}
                        <span>{item.label}</span>
                        <CommandShortcut>{item.shortcut}</CommandShortcut>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ))}
              </CommandList>
            </CommandContent>
          </Command>
        </CommandDialogContent>
      </CommandDialog>
    </div>
  );
};

const initialItems = [
  {
    group: "Settings",
    icon: <UserIcon aria-hidden />,
    label: "Profile",
    shortcut: "⌘P",
    value: "profile",
  },
  {
    group: "Settings",
    icon: <CreditCardIcon aria-hidden />,
    label: "Billing",
    shortcut: "⌘B",
    value: "billing",
  },
  {
    group: "Settings",
    icon: <SettingsIcon aria-hidden />,
    label: "Settings",
    shortcut: "⌘S",
    value: "settings",
  },
];

export default CommandShortcuts;
