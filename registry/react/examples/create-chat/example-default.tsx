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
import React from "react";
import { Streamdown } from "streamdown";
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
import "streamdown/styles.css";

const CreateChatDemo = () => {
  const [session, setSession] = React.useState(0);

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
      chat,
      initialMessageCount: 0,
    });

  const isBusy = status === "submitted" || status === "streaming";
  const nextText = nextMessage?.content ?? "";
  const latestText = messages.at(-1)?.content ?? "";

  return (
    <Card className="h-[32rem] w-full gap-0 overflow-hidden rounded-3xl py-0">
      <CardHeader
        className="shrink-0 border-b py-4"
        description="Weekend pop-up in Lisbon"
        title="Cafe launch"
      >
        <CardAction>
          <Button
            aria-label="Reset conversation"
            onClick={onReset}
            pill
            size="icon-sm"
            variant="outline"
          >
            <RefreshCwIcon aria-hidden />
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
              {messages.map((message, index) => {
                const isUser = message.role === "user";
                const isStreamingMessage =
                  isBusy && !isUser && index === messages.length - 1;

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
                              message.content
                            ) : (
                              <MessageText
                                isStreaming={isStreamingMessage}
                                text={message.content}
                              />
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
            placeholder="Ask about the launch…"
            readOnly
            value={nextText}
          />
          <PromptInputFooter>
            <PromptInputTools>
              <Menu positioning={{ placement: "top-start" }}>
                <MenuTrigger asChild>
                  <PromptInputButton aria-label="Add to prompt" size="icon-xs">
                    <PlusIcon aria-hidden />
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
  const previousMessageCount = React.useRef(messageCount);
  const scrollArea = useMessageScroller();

  React.useLayoutEffect(() => {
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
  .user("I'm opening a weekend pop-up cafe in Lisbon. Where do I start?")
  .assistant(
    "Start with a tight menu: one espresso drink, one cold brew, and two pastries. Scarcity makes the line feel intentional.",
    { delayMs: 400 }
  )
  .user("What about the name?")
  .assistant(
    "Try Maré, meaning tide. Short, easy to say in Portuguese and English, and it photographs well on a window vinyl.",
    { delayMs: 350 }
  )
  .user("And the space? I only have a 12m² corner.")
  .assistant(
    "Lean into the corner. One long counter, stools facing the street, and a single shelf of merch behind you. No tables. People stand, sip, leave.",
    { delayMs: 400 }
  )
  .user("Can you sketch a three-day launch plan?")
  .assistant(
    "Friday: soft open for friends, fix the flow.\n\nSaturday: public drop, limited cups, Stories from the queue.\n\nSunday: sell out early, announce next weekend before the last pastry is gone.",
    { delayMs: 450 }
  )
  .user("What should the first Instagram post say?")
  .assistant(
    "\"Maré opens Saturday at 8. Two drinks. Two pastries. When they're gone, we're gone.\"\n\nNo hashtag soup. One photo of the counter at dawn.",
    { delayMs: 350 }
  )
  .user("Any merch worth printing for weekend one?")
  .assistant(
    "One tote and one enamel pin. Both with just the word Maré. Skip the full menu print. You'll change it next week.",
    { delayMs: 380 }
  );

const promptActions = [
  {
    icon: <PaperclipIcon aria-hidden />,
    label: "Attach files",
    value: "files",
  },
  {
    icon: <ImagePlusIcon aria-hidden />,
    label: "Add screenshot",
    value: "screenshot",
  },
  {
    icon: <GlobeIcon aria-hidden />,
    label: "Add web page",
    value: "web-page",
  },
  {
    icon: <FileTextIcon aria-hidden />,
    label: "Add project instructions",
    value: "instructions",
  },
  {
    icon: <ListTodoIcon aria-hidden />,
    label: "Plan implementation",
    value: "plan",
  },
];

const MessageText = (props: { isStreaming?: boolean; text: string }) => {
  const { isStreaming = false, text } = props;

  if (!text) {
    return null;
  }

  return (
    <Prose className="max-w-none">
      <Streamdown
        animated
        isAnimating={isStreaming}
        mode={isStreaming ? "streaming" : "static"}
      >
        {text}
      </Streamdown>
    </Prose>
  );
};

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
