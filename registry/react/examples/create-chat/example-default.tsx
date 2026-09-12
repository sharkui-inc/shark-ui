"use client";

import {
  FileTextIcon,
  GlobeIcon,
  ImagePlusIcon,
  ListTodoIcon,
  PaperclipIcon,
  PlusIcon,
  RefreshCwIcon,
} from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import { Message, MessageContent } from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
  useMessageScroller,
} from "@/registry/react/components/message-scroller";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";
import { Prose } from "@/registry/react/components/prose";
import { useChatHelper } from "@/registry/react/hooks/use-chat-helper";
import { createChat } from "@/registry/react/lib/create-chat";

const CreateChatDemo = () => {
  const [session, setSession] = useState(0);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <ChatThread
        key={session}
        onReset={() => setSession((value) => value + 1)}
      />
      <p className="text-center text-muted-foreground text-sm">
        Demo is read only. Press send to send messages.
      </p>
    </div>
  );
};

const ChatThread = ({ onReset }: { onReset: () => void }) => {
  const { canSendNext, messages, nextMessage, sendNext, status, stop } =
    useChatHelper({
      adapter: "ai-sdk",
      chat,
      initialMessageCount: 0,
    });
  const isBusy = status === "submitted" || status === "streaming";
  const nextText = nextMessage ? getMessageText(nextMessage) : "";
  const latestText = getMessageText(messages.at(-1) ?? { parts: [] });

  return (
    <Card className="h-[32rem] w-full gap-0 overflow-hidden rounded-3xl py-0">
      <CardHeader
        className="shrink-0 border-b py-4"
        description="How can I help you today?"
        title="New Chat"
      >
        <CardAction>
          <Button
            aria-label="Reset conversation"
            onClick={onReset}
            pill
            size="icon-sm"
            variant="outline"
          >
            <RefreshCwIcon aria-hidden="true" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="flex min-h-0 flex-1 flex-col px-0">
        <MessageScroller className="min-h-0 flex-1">
          <MessageScrollerViewport className="px-(--space) py-4">
            <FollowLatestMessage
              enabled={isBusy}
              messageCount={messages.length}
              streamedText={latestText}
            />
            <MessageScrollerContent className="gap-4">
              {messages.map((message) => {
                const isUser = message.role === "user";

                return (
                  <MessageScrollerItem key={message.id}>
                    <Message align={isUser ? "end" : "start"}>
                      <MessageContent>
                        <MessageBubble
                          align={isUser ? "end" : "start"}
                          variant={isUser ? "secondary" : "ghost"}
                        >
                          <MessageBubbleContent>
                            {isUser ? (
                              getMessageText(message)
                            ) : (
                              <MessageText text={getMessageText(message)} />
                            )}
                          </MessageBubbleContent>
                        </MessageBubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                );
              })}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </CardContent>
      <CardFooter className="shrink-0 rounded-none border-0 bg-transparent py-4">
        <PromptInput
          className="w-full"
          onStop={stop}
          onSubmit={() => {
            if (canSendNext) {
              sendNext()?.catch(noop);
            }
          }}
          status={toPromptStatus(status)}
        >
          <PromptInputTextarea
            aria-label="Prompt"
            placeholder="Ask the agent…"
            readOnly
            value={nextText}
          />
          <PromptInputFooter>
            <PromptInputTools>
              <Menu positioning={{ placement: "top-start" }}>
                <MenuTrigger asChild>
                  <PromptInputButton aria-label="Add to prompt" size="icon-xs">
                    <PlusIcon aria-hidden="true" />
                  </PromptInputButton>
                </MenuTrigger>
                <MenuContent className="w-52">
                  {promptActions.map((action) => (
                    <MenuItem key={action.value} value={action.value}>
                      {action.icon}
                      {action.label}
                    </MenuItem>
                  ))}
                </MenuContent>
              </Menu>
            </PromptInputTools>
            <PromptInputSubmit />
          </PromptInputFooter>
        </PromptInput>
      </CardFooter>
    </Card>
  );
};

const FollowLatestMessage = ({
  enabled,
  messageCount,
  streamedText,
}: {
  enabled: boolean;
  messageCount: number;
  streamedText: string;
}) => {
  const previousMessageCount = useRef(messageCount);
  const scrollArea = useMessageScroller();

  useLayoutEffect(() => {
    const startedTurn = messageCount > previousMessageCount.current;
    const isFirstStreamFrame = streamedText.length === 0;

    if (
      enabled &&
      (startedTurn || isFirstStreamFrame || scrollArea.isAtBottom)
    ) {
      scrollArea.scrollToEdge({ behavior: "auto", edge: "bottom" });
    }

    previousMessageCount.current = messageCount;
  }, [enabled, messageCount, scrollArea, streamedText]);

  return null;
};

const chat = createChat({ adapter: "ai-sdk" })
  .user(
    "Every time a reply streams in, the whole thread jumps. I can't keep my place."
  )
  .assistant(
    "Put the list in `MessageScroller`. It pins the viewport while tokens arrive, so the new text shows up where you're already looking.\n\nIf you scroll up, it stops. Your place holds until you jump back down.",
    { delayMs: 400 }
  )
  .user(
    "Sending a new message still feels like the view lurches. Like the latest turn just appears out of nowhere."
  )
  .assistant(
    "Same rule. Follow only if you're already at the bottom. A new send shouldn't drag you there if you scrolled away.",
    { delayMs: 400 }
  );

const promptActions = [
  {
    icon: <PaperclipIcon aria-hidden="true" />,
    label: "Attach files",
    value: "files",
  },
  {
    icon: <ImagePlusIcon aria-hidden="true" />,
    label: "Add screenshot",
    value: "screenshot",
  },
  {
    icon: <GlobeIcon aria-hidden="true" />,
    label: "Add web page",
    value: "web-page",
  },
  {
    icon: <FileTextIcon aria-hidden="true" />,
    label: "Add project instructions",
    value: "instructions",
  },
  {
    icon: <ListTodoIcon aria-hidden="true" />,
    label: "Plan implementation",
    value: "plan",
  },
];

const PARAGRAPH_BREAK = /\n\n+/;
const INLINE_CODE = /(`[^`]+`)/g;

const MessageText = ({ text }: { text: string }) => {
  if (!text) {
    return null;
  }

  const paragraphs = text.split(PARAGRAPH_BREAK);

  return (
    <Prose className="max-w-none [&_p:not(:first-child)]:mt-3">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{renderInline(paragraph)}</p>
      ))}
    </Prose>
  );
};

const renderInline = (text: string) => {
  const parts = text.split(INLINE_CODE).filter(Boolean);

  return parts.map((part) => {
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return <code key={part}>{part.slice(1, -1)}</code>;
    }

    return <span key={part}>{part}</span>;
  });
};

const getMessageText = (message: {
  parts: readonly { text?: string; type: string }[];
}) =>
  message.parts
    .filter((part) => part.type === "text")
    .map((part) => part.text ?? "")
    .join("");

const toPromptStatus = (status: string): PromptInputStatus => {
  switch (status) {
    case "error":
      return "error";
    case "ready":
      return "ready";
    case "streaming":
      return "streaming";
    case "submitted":
      return "submitted";
    default:
      return "ready";
  }
};

const noop = () => undefined;

export default CreateChatDemo;
