"use client";

import {
  ArchiveIcon,
  EllipsisVerticalIcon,
  ReplyIcon,
  SendIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => {
  const [activeMessage, setActiveMessage] = React.useState<
    (typeof messages)[number] | null
  >(null);

  return (
    <Menu
      onTriggerValueChange={({ value }) => {
        setActiveMessage(
          messages.find((message) => message.value === value) ?? null
        );
      }}
      positioning={{ placement: "bottom-end" }}
    >
      <div className="flex w-full max-w-sm flex-col gap-2">
        {messages.map((message) => (
          <div
            className="flex items-center gap-3 rounded-lg border border-border px-3 py-2"
            key={message.value}
          >
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-sm">{message.sender}</p>
              <p className="truncate text-muted-foreground text-xs">
                {message.preview}
              </p>
            </div>
            <MenuTrigger asChild value={message.value}>
              <Button size="icon-sm" variant="ghost">
                <EllipsisVerticalIcon />
                <span className="sr-only">Actions for {message.sender}</span>
              </Button>
            </MenuTrigger>
          </div>
        ))}
      </div>
      <MenuContent className="w-40">
        <MenuGroup heading={activeMessage?.sender ?? "Actions"}>
          <MenuItem value="reply">
            <ReplyIcon />
            Reply
          </MenuItem>
          <MenuItem value="forward">
            <SendIcon />
            Forward
          </MenuItem>
          <MenuItem value="archive">
            <ArchiveIcon />
            Archive
          </MenuItem>
          <MenuSeparator />
          <MenuItem value="delete" variant="destructive">
            <Trash2Icon />
            Delete
          </MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};

const messages = [
  {
    preview: "Hey, can you review the latest PR?",
    sender: "Alice Johnson",
    value: "alice",
  },
  {
    preview: "Meeting notes from today are attached.",
    sender: "Bob Smith",
    value: "bob",
  },
  {
    preview: "The deploy finished successfully.",
    sender: "Carol Davis",
    value: "carol",
  },
];

export default Example;
