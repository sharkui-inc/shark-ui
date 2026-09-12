"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
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
  CommandShortcut,
} from "@/registry/react/components/command";
import { commandItems } from "../_data/chat";

export const ChatSearchDialog = ({
  onNewChat,
  onOpenChange,
  onSelectConversation,
  open,
}: {
  onNewChat: () => void;
  onOpenChange: (open: boolean) => void;
  onSelectConversation: (conversation: string) => void;
  open: boolean;
}) => {
  const { contains } = useFilter({ sensitivity: "base" });
  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems: commandItems,
  });

  return (
    <CommandDialog
      onOpenChange={({ open: nextOpen }) => {
        if (nextOpen) {
          filter("");
        }

        onOpenChange(nextOpen);
      }}
      open={open}
    >
      <CommandDialogContent
        description="Find a conversation and pick up where you left off."
        title="Search chats"
      >
        <Command
          collection={collection}
          onInputValueChange={({ inputValue }) => filter(inputValue)}
          onValueChange={({ value }) => {
            const command = commandItems.find(
              (item) => item.value === value[0]
            );

            if (command?.value === "new-chat") {
              onNewChat();
              onOpenChange(false);
            } else if (command?.group === "Recent chats") {
              onSelectConversation(command.label);
            } else {
              onOpenChange(false);
            }
          }}
        >
          <CommandInput placeholder="Search chats..." />
          <CommandContent>
            <CommandEmpty>No chats found.</CommandEmpty>
            <CommandList>
              {collection.group().map(([group, items]) => (
                <CommandGroup heading={group} key={group}>
                  {items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <CommandItem item={item} key={item.value}>
                        <Icon aria-hidden="true" />
                        <span className="truncate">{item.label}</span>
                        {item.shortcut ? (
                          <CommandShortcut>{item.shortcut}</CommandShortcut>
                        ) : null}
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              ))}
            </CommandList>
          </CommandContent>
        </Command>
      </CommandDialogContent>
    </CommandDialog>
  );
};
