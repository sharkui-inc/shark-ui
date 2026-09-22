"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  BellIcon,
  CalculatorIcon,
  CalendarIcon,
  ClipboardPasteIcon,
  CodeIcon,
  CopyIcon,
  CreditCardIcon,
  FileTextIcon,
  FolderIcon,
  FolderPlusIcon,
  HelpCircleIcon,
  HomeIcon,
  ImageIcon,
  InboxIcon,
  LayoutGridIcon,
  ListIcon,
  PlusIcon,
  ScissorsIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react";
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
  CommandSeparator,
  CommandShortcut,
} from "@/registry/react/components/command";

const CommandScrollable = () => {
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
    </div>
  );
};

const initialItems = [
  {
    group: "Navigation",
    icon: <HomeIcon aria-hidden />,
    label: "Home",
    shortcut: "⌘H",
    value: "home",
  },
  {
    group: "Navigation",
    icon: <InboxIcon aria-hidden />,
    label: "Inbox",
    shortcut: "⌘I",
    value: "inbox",
  },
  {
    group: "Navigation",
    icon: <FileTextIcon aria-hidden />,
    label: "Documents",
    shortcut: "⌘D",
    value: "documents",
  },
  {
    group: "Navigation",
    icon: <FolderIcon aria-hidden />,
    label: "Folders",
    shortcut: "⌘F",
    value: "folders",
  },
  {
    group: "Actions",
    icon: <PlusIcon aria-hidden />,
    label: "New File",
    shortcut: "⌘N",
    value: "new-file",
  },
  {
    group: "Actions",
    icon: <FolderPlusIcon aria-hidden />,
    label: "New Folder",
    shortcut: "⇧⌘N",
    value: "new-folder",
  },
  {
    group: "Actions",
    icon: <CopyIcon aria-hidden />,
    label: "Copy",
    shortcut: "⌘C",
    value: "copy",
  },
  {
    group: "Actions",
    icon: <ScissorsIcon aria-hidden />,
    label: "Cut",
    shortcut: "⌘X",
    value: "cut",
  },
  {
    group: "Actions",
    icon: <ClipboardPasteIcon aria-hidden />,
    label: "Paste",
    shortcut: "⌘V",
    value: "paste",
  },
  {
    group: "Actions",
    icon: <TrashIcon aria-hidden />,
    label: "Delete",
    shortcut: "⌫",
    value: "delete",
  },
  {
    group: "View",
    icon: <LayoutGridIcon aria-hidden />,
    label: "Grid View",
    value: "grid-view",
  },
  {
    group: "View",
    icon: <ListIcon aria-hidden />,
    label: "List View",
    value: "list-view",
  },
  {
    group: "View",
    icon: <ZoomInIcon aria-hidden />,
    label: "Zoom In",
    shortcut: "⌘+",
    value: "zoom-in",
  },
  {
    group: "View",
    icon: <ZoomOutIcon aria-hidden />,
    label: "Zoom Out",
    shortcut: "⌘-",
    value: "zoom-out",
  },
  {
    group: "Account",
    icon: <UserIcon aria-hidden />,
    label: "Profile",
    shortcut: "⌘P",
    value: "profile",
  },
  {
    group: "Account",
    icon: <CreditCardIcon aria-hidden />,
    label: "Billing",
    shortcut: "⌘B",
    value: "billing",
  },
  {
    group: "Account",
    icon: <SettingsIcon aria-hidden />,
    label: "Settings",
    shortcut: "⌘S",
    value: "settings",
  },
  {
    group: "Account",
    icon: <BellIcon aria-hidden />,
    label: "Notifications",
    value: "notifications",
  },
  {
    group: "Account",
    icon: <HelpCircleIcon aria-hidden />,
    label: "Help & Support",
    value: "help",
  },
  {
    group: "Tools",
    icon: <CalculatorIcon aria-hidden />,
    label: "Calculator",
    value: "calculator",
  },
  {
    group: "Tools",
    icon: <CalendarIcon aria-hidden />,
    label: "Calendar",
    value: "calendar",
  },
  {
    group: "Tools",
    icon: <ImageIcon aria-hidden />,
    label: "Image Editor",
    value: "image-editor",
  },
  {
    group: "Tools",
    icon: <CodeIcon aria-hidden />,
    label: "Code Editor",
    value: "code-editor",
  },
];

export default CommandScrollable;
