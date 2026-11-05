"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import {
  Command,
  CommandContent,
  CommandDialog,
  CommandDialogContent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/react/components/command";
import {
  useFormatHotkey,
  useHotkey,
} from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";

const HOTKEY = "mod+j";

const CommandDialogExample = () => {
  const [open, setOpen] = React.useState(false);
  const formatHotkey = useFormatHotkey();
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  useHotkey({
    action: () => setOpen((isOpen) => !isOpen),
    hotkey: HOTKEY,
    options: { preventDefault: true },
  });

  return (
    <>
      <p className="text-muted-foreground text-sm">
        Press <Kbd>{formatHotkey(HOTKEY)}</Kbd> to open the command palette
      </p>
      <CommandDialog onOpenChange={({ open: o }) => setOpen(o)} open={open}>
        <CommandDialogContent>
          <Command
            collection={collection}
            onInputValueChange={({ inputValue }) => filter(inputValue)}
            onValueChange={() => setOpen(false)}
          >
            <CommandInput placeholder="Type a command or search..." />
            <CommandContent>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandList>
                {collection.group().map(([group, items], index) => (
                  <React.Fragment key={group}>
                    {index !== 0 && <CommandSeparator />}
                    <CommandGroup heading={group}>
                      {items.map((item) => (
                        <CommandItem item={item} key={item.value}>
                          {item.icon}
                          <span>{item.label}</span>
                          {item.shortcut ? (
                            <CommandShortcut>{item.shortcut}</CommandShortcut>
                          ) : null}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </React.Fragment>
                ))}
              </CommandList>
            </CommandContent>
          </Command>
        </CommandDialogContent>
      </CommandDialog>
    </>
  );
};

const initialItems = [
  {
    group: "Suggestions",
    icon: <CalendarIcon aria-hidden="true" />,
    label: "Calendar",
    value: "calendar",
  },
  {
    group: "Suggestions",
    icon: <SmileIcon aria-hidden="true" />,
    label: "Search Emoji",
    value: "search-emoji",
  },
  {
    group: "Suggestions",
    icon: <CalculatorIcon aria-hidden="true" />,
    label: "Calculator",
    value: "calculator",
  },
  {
    group: "Settings",
    icon: <UserIcon aria-hidden="true" />,
    label: "Profile",
    shortcut: "⌘P",
    value: "profile",
  },
  {
    group: "Settings",
    icon: <CreditCardIcon aria-hidden="true" />,
    label: "Billing",
    shortcut: "⌘B",
    value: "billing",
  },
  {
    group: "Settings",
    icon: <SettingsIcon aria-hidden="true" />,
    label: "Settings",
    shortcut: "⌘S",
    value: "settings",
  },
];

export default CommandDialogExample;
