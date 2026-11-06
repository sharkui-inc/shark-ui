"use client";

import { createGridCollection } from "@ark-ui/react/collection";
import { CopyIcon, ReplyIcon, Trash2Icon } from "lucide-react";
import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuList,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";
import { Message, MessageContent } from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
  MessageBubbleReactions,
} from "@/registry/react/components/message-bubble";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-6">
    <ChatRow text="The install failure is coming from the workspace package." />
    <ChatRow
      align="end"
      text="Okay drop me a link. Taking a look..."
      variant="secondary"
    />
  </div>
);

interface ChatRowProps {
  align?: "end" | "start";
  text: string;
  variant?: "default" | "secondary";
}

const ChatRow = (props: ChatRowProps) => {
  const { align = "start", text, variant = "default" } = props;

  const [open, setOpen] = React.useState(false);
  const [reaction, setReaction] = React.useState<string[]>([]);
  const emoji = collection.items.find((item) =>
    reaction.includes(item.value)
  )?.label;

  const handleOpenChange = (details: { open: boolean }) => {
    setOpen(details.open);
  };

  const handleReactionChange = (value: string[]) => {
    setReaction(value);
    setOpen(false);
  };

  return (
    <ContextMenu onOpenChange={handleOpenChange} open={open}>
      <ContextMenuTrigger asChild>
        <Message align={align}>
          <MessageContent>
            <MessageBubble align={align} variant={variant}>
              <MessageBubbleContent>{text}</MessageBubbleContent>
              {emoji ? (
                <MessageBubbleReactions
                  align={align}
                  aria-label={`Reactions: ${emoji}`}
                  role="img"
                >
                  <span>{emoji}</span>
                </MessageBubbleReactions>
              ) : null}
            </MessageBubble>
          </MessageContent>
        </Message>
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-48">
        <ContextMenuList>
          <EmojiPicker onValueChange={handleReactionChange} value={reaction} />
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem value="copy">
              <CopyIcon />
              Copy
            </ContextMenuItem>
            <ContextMenuItem value="reply">
              <ReplyIcon />
              Reply
            </ContextMenuItem>
            <ContextMenuItem value="delete" variant="destructive">
              <Trash2Icon />
              Delete
            </ContextMenuItem>
          </ContextMenuGroup>

        </ContextMenuList>
      </ContextMenuContent>
    </ContextMenu>
  );
};

interface EmojiPickerProps {
  onValueChange: (value: string[]) => void;
  value: string[];
}

const EmojiPicker = (props: EmojiPickerProps) => {
  const { value, onValueChange } = props;

  return (
    <Listbox
      aria-label="Add reaction"
      collection={collection}
      deselectable
      onValueChange={(details) => onValueChange(details.value)}
      value={value}
    >
      <ListboxContent>
        <div
          className="grid grid-cols-[repeat(var(--column-count),1fr)] gap-1"
          style={
            { "--column-count": collection.columnCount } as React.CSSProperties
          }
        >
          {collection.items.map((item) => (
            <ListboxItem
              className="data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground size-8 justify-center p-0"
              item={item}
              key={item.value}
              showIndicator={false}
            >
              <ListboxItemText className="flex-none text-center text-lg">
                {item.label}
              </ListboxItemText>
            </ListboxItem>
          ))}
        </div>
      </ListboxContent>
    </Listbox>
  );
};

const collection = createGridCollection({
  columnCount: 5,
  items: [
    { label: "👍", value: "thumbs-up" },
    { label: "❤️", value: "heart" },
    { label: "😂", value: "joy" },
    { label: "😮", value: "surprised" },
    { label: "😢", value: "cry" },
    { label: "🙏", value: "pray" },
    { label: "🔥", value: "fire" },
    { label: "🎉", value: "tada" },
    { label: "👀", value: "eyes" },
    { label: "💯", value: "hundred" },
  ],
});

export default Example;
