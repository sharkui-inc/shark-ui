"use client";

import { createListCollection } from "@ark-ui/react";
import {
  CircleHelpIcon,
  CopyIcon,
  CornerDownLeftIcon,
  EllipsisIcon,
  FileCodeIcon,
  FileTextIcon,
  GitBranchIcon,
  GlobeIcon,
  ImagePlusIcon,
  ListPlusIcon,
  ListTodoIcon,
  MicIcon,
  PaperclipIcon,
  PencilIcon,
  PlusIcon,
  QuoteIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  Trash2Icon,
} from "lucide-react";
import React from "react";
import {
  Context,
  ContextContent,
  ContextHeader,
  ContextIcon,
  ContextMeter,
  ContextTrigger,
} from "@/registry/react/components/context";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";
import { Marker, MarkerContent } from "@/registry/react/components/marker";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuList,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Message,
  MessageAction,
  MessageActions,
  MessageContent,
  MessageFooter,
} from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
  MessageBubbleTrigger,
} from "@/registry/react/components/message-bubble";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerStick,
  MessageScrollerViewport,
} from "@/registry/react/components/message-scroller";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";
import {
  Queue,
  QueueItem,
  QueueItemAction,
  QueueItemActions,
  QueueItemContent,
  QueueList,
  QueueSection,
  QueueSectionContent,
  QueueSectionHeader,
} from "@/registry/react/components/queue";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import {
  Suggestion,
  Suggestions,
} from "@/registry/react/components/suggestion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";
import {
  type PlaybackStep,
  useChatPreviewPlayback,
} from "./use-chat-preview-playback";

type DeliveryStatus = "sending" | "delivered" | "read";

interface LiveMessage {
  author: "agent" | "you";
  id: number;
  status?: DeliveryStatus;
  text: string;
}

interface QueueEntry {
  id: string;
  title: string;
}

const REPLIES = [
  "Pinned. The retry queue now shares the checkout idempotency key.",
  "Good call. I'll keep createCharge() single-flight on submit.",
  "Ship it. The failing test stays green on double-submit.",
];

const SUGGESTIONS = ["Show the failing test", "Explain the race", "Open a PR"];

const INITIAL_QUEUE: QueueEntry[] = [
  { id: "q1", title: "Add regression test for double-submit" },
  { id: "q2", title: "Update checkout docs" },
];

export const AiComponentsIdeChat = () => {
  const [draft, setDraft] = React.useState("");
  const [messages, setMessages] = React.useState<LiveMessage[]>([]);
  const [typing, setTyping] = React.useState(false);
  const [model, setModel] = React.useState(["claude-fable-5-2"]);
  const [mode, setMode] = React.useState(["auto"]);
  const [queueItems, setQueueItems] = React.useState<QueueEntry[]>([]);
  const [queueSeeded, setQueueSeeded] = React.useState(false);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const nextId = React.useRef(1);
  const replyIndex = React.useRef(0);
  const playbackMessageId = React.useRef<number | null>(null);
  const timers = React.useRef<number[]>([]);
  const addContextTriggerId = React.useId();
  const modeTriggerId = React.useId();
  const modelTriggerId = React.useId();
  const contextTriggerId = React.useId();

  React.useEffect(
    () => () => {
      for (const timer of timers.current) {
        window.clearTimeout(timer);
      }
    },
    []
  );

  const later = (callback: () => void, delay: number) => {
    timers.current.push(window.setTimeout(callback, delay));
  };

  const setStatus = (id: number, status: DeliveryStatus) => {
    setMessages((current) =>
      current.map((message) =>
        message.id === id ? { ...message, status } : message
      )
    );
  };

  const playback = useChatPreviewPlayback((step: PlaybackStep) => {
    if (step.type === "draft") {
      setDraft(step.text);
      return;
    }

    if (step.type === "send") {
      const id = nextId.current;
      nextId.current += 1;
      playbackMessageId.current = id;
      setMessages((current) => [
        ...current,
        { author: "you", id, status: "sending", text: step.text },
      ]);
      setDraft("");
      return;
    }

    if (step.type === "reply") {
      const id = nextId.current;
      nextId.current += 1;
      setTyping(false);
      setMessages((current) => [
        ...current,
        { author: "agent", id, text: step.text },
      ]);
      return;
    }

    if (step.type === "suggestions") {
      setShowSuggestions(true);
      return;
    }

    if (playbackMessageId.current === null) {
      return;
    }

    setStatus(
      playbackMessageId.current,
      step.type === "delivered" ? "delivered" : "read"
    );

    if (step.type === "typing") {
      setTyping(true);
    }
  });

  const stopPlayback = () => {
    if (!playback.stop()) {
      return;
    }

    setDraft("");
    setTyping(false);

    if (playbackMessageId.current !== null) {
      setStatus(playbackMessageId.current, "read");
    }
  };

  const send = (text: string) => {
    const id = nextId.current;
    nextId.current += 1;

    setShowSuggestions(false);
    if (!queueSeeded) {
      setQueueSeeded(true);
      setQueueItems(INITIAL_QUEUE);
    }
    setMessages((current) => [
      ...current,
      { author: "you", id, status: "sending", text },
    ]);
    setDraft("");
    later(() => setStatus(id, "delivered"), 700);
    later(() => {
      setStatus(id, "read");
      setTyping(true);
    }, 1400);
    later(() => {
      const replyIndexValue = replyIndex.current;
      replyIndex.current += 1;
      const reply = REPLIES[replyIndexValue % REPLIES.length] ?? "";
      const replyId = nextId.current;
      nextId.current += 1;
      setTyping(false);
      setMessages((current) => [
        ...current,
        { author: "agent", id: replyId, text: reply },
      ]);
    }, 2800);
  };

  const liveCount = messages.length + (typing ? 1 : 0);

  return (
    <div className="flex h-full min-h-0 flex-col" ref={playback.ref}>
      <MessageScroller className="min-h-0 flex-1">
        <MessageScrollerViewport className="overscroll-y-auto px-4 pt-4 pb-14">
          <MessageScrollerStick itemCount={liveCount} />
          <MessageScrollerContent className="mx-auto w-full max-w-3xl gap-3">
            {messages.map((message) => {
              const isYou = message.author === "you";

              return (
                <MessageScrollerItem key={message.id}>
                  <Message align={isYou ? "end" : "start"}>
                    <MessageContent>
                      {isYou ? (
                        <Menu positioning={{ placement: "left-start" }}>
                          <MessageBubble align="end" variant="default">
                            <MessageBubbleContent>
                              {message.text}
                            </MessageBubbleContent>
                            <MenuTrigger asChild>
                              <MessageBubbleTrigger />
                            </MenuTrigger>
                          </MessageBubble>
                          <MenuContent className="min-w-52">
                            <MenuList>
                              <MenuGroup>
                                <MenuItem value="copy">
                                  <CopyIcon aria-hidden="true" />
                                  Copy prompt
                                </MenuItem>
                                <MenuItem value="edit-resend">
                                  <PencilIcon aria-hidden="true" />
                                  Edit & resend
                                </MenuItem>
                                <MenuItem value="retry">
                                  <RefreshCcwIcon aria-hidden="true" />
                                  Retry turn
                                </MenuItem>
                                <MenuItem value="quote">
                                  <QuoteIcon aria-hidden="true" />
                                  Quote in composer
                                </MenuItem>
                                <MenuSeparator />
                                <MenuItem value="queue">
                                  <ListPlusIcon aria-hidden="true" />
                                  Add to queue
                                </MenuItem>
                                <MenuItem value="branch">
                                  <GitBranchIcon aria-hidden="true" />
                                  Branch from here
                                </MenuItem>
                                <MenuItem value="open-file">
                                  <FileCodeIcon aria-hidden="true" />
                                  Open as scratch file
                                </MenuItem>
                                <MenuSeparator />
                                <MenuItem value="delete" variant="destructive">
                                  <Trash2Icon aria-hidden="true" />
                                  Delete message
                                </MenuItem>
                              </MenuGroup>
                            </MenuList>
                          </MenuContent>
                        </Menu>
                      ) : (
                        <>
                          <MessageBubble align="start" variant="ghost">
                            <MessageBubbleContent>
                              {message.text}
                            </MessageBubbleContent>
                          </MessageBubble>
                          <MessageFooter>
                            <MessageActions>
                              <MessageAction tooltip="Copy">
                                <CopyIcon aria-hidden="true" />
                              </MessageAction>
                              <MessageAction tooltip="Regenerate">
                                <RefreshCcwIcon aria-hidden="true" />
                              </MessageAction>
                              <MessageAction tooltip="Good response">
                                <ThumbsUpIcon aria-hidden="true" />
                              </MessageAction>
                              <MessageAction tooltip="Bad response">
                                <ThumbsDownIcon aria-hidden="true" />
                              </MessageAction>
                            </MessageActions>
                          </MessageFooter>
                        </>
                      )}
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              );
            })}

            {typing ? (
              <MessageScrollerItem>
                <Marker role="status">
                  <MarkerContent>Thinking…</MarkerContent>
                </Marker>
              </MessageScrollerItem>
            ) : null}
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>

      <div className="shrink-0 px-3 pb-3">
        <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-2">
          {showSuggestions ? (
            <Suggestions className="absolute inset-x-0 bottom-full z-10 mb-2 justify-start">
              {SUGGESTIONS.map((suggestion) => (
                <Suggestion
                  key={suggestion}
                  onClick={() => {
                    stopPlayback();
                    send(suggestion);
                  }}
                >
                  {suggestion}
                </Suggestion>
              ))}
            </Suggestions>
          ) : null}

          <div className="w-full">
            {queueItems.length > 0 ? (
              <Queue className="w-full gap-0">
                <QueueSection className="bg-background dark:bg-input/32 rounded-t-2xl rounded-b-none border-b-0 shadow-xs/4">
                  <QueueSectionHeader
                    title={`${queueItems.length} Queued Message${queueItems.length === 1 ? "" : "s"}`}
                  />
                  <QueueSectionContent className="border-0 pt-0">
                    <QueueList>
                      {queueItems.map((item) => (
                        <QueueItem key={item.id}>
                          <QueueItemContent>{item.title}</QueueItemContent>
                          <QueueItemActions>
                            <QueueItemAction
                              onClick={() => {
                                stopPlayback();
                                setQueueItems((current) =>
                                  current.filter(
                                    (queueItem) => queueItem.id !== item.id
                                  )
                                );
                                send(item.title);
                              }}
                              size="xs"
                            >
                              Steer
                              <Kbd className="border-0 bg-transparent px-0">
                                <CornerDownLeftIcon aria-hidden="true" />
                              </Kbd>
                            </QueueItemAction>
                            <QueueItemAction aria-label={`Edit ${item.title}`}>
                              <PencilIcon aria-hidden="true" />
                            </QueueItemAction>
                            <QueueItemAction
                              aria-label={`Remove ${item.title}`}
                              onClick={() => {
                                setQueueItems((current) =>
                                  current.filter(
                                    (queueItem) => queueItem.id !== item.id
                                  )
                                );
                              }}
                            >
                              <Trash2Icon aria-hidden="true" />
                            </QueueItemAction>
                            <QueueItemAction
                              aria-label={`More actions for ${item.title}`}
                            >
                              <EllipsisIcon aria-hidden="true" />
                            </QueueItemAction>
                          </QueueItemActions>
                        </QueueItem>
                      ))}
                    </QueueList>
                  </QueueSectionContent>
                </QueueSection>
              </Queue>
            ) : null}
            <PromptInput
              className={
                queueItems.length > 0
                  ? "w-full [&_[data-slot=input-group]]:rounded-t-none [&_[data-slot=input-group]]:border-t-0"
                  : "w-full"
              }
              onSubmit={({ text }) => {
                stopPlayback();
                send(text);
              }}
              status="ready"
            >
              <PromptInputTextarea
                aria-label="Prompt"
                onChange={(event) => {
                  stopPlayback();
                  setDraft(event.target.value);
                }}
                onFocus={stopPlayback}
                placeholder={
                  queueItems.length > 0
                    ? "Add a follow-up"
                    : "Describe a task or ask a question."
                }
                value={draft}
              />
              <PromptInputFooter>
                <PromptInputTools>
                  <Menu
                    ids={{ trigger: addContextTriggerId }}
                    positioning={{ placement: "top-start" }}
                  >
                    <Tooltip ids={{ trigger: addContextTriggerId }}>
                      <TooltipTrigger asChild>
                        <MenuTrigger asChild>
                          <PromptInputButton
                            aria-label="Add to prompt"
                            onClick={stopPlayback}
                            size="icon-sm"
                          >
                            <PlusIcon aria-hidden="true" />
                          </PromptInputButton>
                        </MenuTrigger>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add context</p>
                        <Kbd>@</Kbd>
                      </TooltipContent>
                    </Tooltip>
                    <MenuContent className="min-w-52">
                      <MenuList>
                        <MenuGroup heading="Add context">
                          {contextActions.map((action) => (
                            <MenuItem key={action.value} value={action.value}>
                              {action.icon}
                              {action.label}
                            </MenuItem>
                          ))}
                        </MenuGroup>
                        <MenuSeparator />
                        <MenuGroup heading="Agent actions">
                          {agentActions.map((action) => (
                            <MenuItem key={action.value} value={action.value}>
                              {action.icon}
                              {action.label}
                            </MenuItem>
                          ))}
                        </MenuGroup>
                      </MenuList>
                    </MenuContent>
                  </Menu>
                  <Select
                    collection={modeCollection}
                    ids={{ trigger: modeTriggerId }}
                    onValueChange={(details) => setMode(details.value)}
                    positioning={{ placement: "top-start" }}
                    value={mode}
                  >
                    <Tooltip ids={{ trigger: modeTriggerId }}>
                      <TooltipTrigger asChild>
                        <SelectTrigger
                          showTrigger={false}
                          size="sm"
                          variant="ghost"
                        >
                          <SelectValue placeholder="Auto" />
                        </SelectTrigger>
                      </TooltipTrigger>
                      <TooltipContent>Agent mode</TooltipContent>
                    </Tooltip>
                    <SelectContent>
                      <SelectList>
                        {modeCollection.items.map((item) => (
                          <SelectItem item={item} key={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectList>
                    </SelectContent>
                  </Select>
                </PromptInputTools>
                <Select
                  collection={modelCollection}
                  ids={{ trigger: modelTriggerId }}
                  onValueChange={(details) => setModel(details.value)}
                  positioning={{ placement: "top" }}
                  value={model}
                >
                  <Tooltip ids={{ trigger: modelTriggerId }}>
                    <TooltipTrigger asChild>
                      <SelectTrigger
                        showTrigger={false}
                        size="sm"
                        variant="ghost"
                      >
                        <SelectValue placeholder="Model" />
                      </SelectTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Switch model</p>
                      <KbdGroup>
                        <Kbd>⌥</Kbd>
                        <Kbd>P</Kbd>
                      </KbdGroup>
                    </TooltipContent>
                  </Tooltip>
                  <SelectContent className="max-h-72 min-w-52">
                    <SelectList>
                      {modelCollection.items.map((item) => (
                        <SelectItem item={item} key={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectList>
                  </SelectContent>
                </Select>
                <Context
                  ids={{ trigger: contextTriggerId }}
                  maxTokens={200_000}
                  positioning={{ placement: "top-end" }}
                  usedTokens={128_400}
                >
                  <Tooltip ids={{ trigger: contextTriggerId }}>
                    <TooltipTrigger asChild>
                      <ContextTrigger asChild>
                        <PromptInputButton
                          aria-label="Context usage"
                          size="icon-sm"
                          type="button"
                        >
                          <ContextIcon />
                        </PromptInputButton>
                      </ContextTrigger>
                    </TooltipTrigger>
                    <TooltipContent>Context usage</TooltipContent>
                  </Tooltip>
                  <ContextContent>
                    <ContextHeader>
                      <ContextMeter segments={contextUsage} />
                    </ContextHeader>
                  </ContextContent>
                </Context>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <PromptInputButton
                      aria-label="Dictate"
                      onClick={stopPlayback}
                      size="icon-sm"
                      type="button"
                    >
                      <MicIcon aria-hidden="true" />
                    </PromptInputButton>
                  </TooltipTrigger>
                  <TooltipContent>Dictate</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <PromptInputSubmit
                      className="ms-2"
                      disabled={!draft.trim()}
                      size="icon-sm"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send</p>
                    <Kbd>↵</Kbd>
                  </TooltipContent>
                </Tooltip>
              </PromptInputFooter>
            </PromptInput>
          </div>
        </div>
      </div>
    </div>
  );
};

const models = [
  { label: "Claude Fable 5.2", value: "claude-fable-5-2" },
  { label: "Claude Opus 5.5", value: "claude-opus-5-5" },
  { label: "GPT-6 Astra", value: "gpt-6-astra" },
  { label: "GPT-6.1 Sol", value: "gpt-6-1-sol" },
  { label: "Gemini 4 Carbon", value: "gemini-4-carbon" },
  { label: "DeepSeek V4.1", value: "deepseek-v4-1" },
  { label: "Kimi K3.1 Pro", value: "kimi-k3-1-pro" },
];

const modes = [
  { label: "Auto", value: "auto" },
  { label: "Agent", value: "agent" },
  { label: "Ask", value: "ask" },
];

const modelCollection = createListCollection({ items: models });
const modeCollection = createListCollection({ items: modes });

const actionItems = [
  {
    group: "context",
    icon: <PaperclipIcon aria-hidden="true" />,
    label: "Attach files and folders",
    value: "files",
  },
  {
    group: "context",
    icon: <ImagePlusIcon aria-hidden="true" />,
    label: "Add image or screenshot",
    value: "image",
  },
  {
    group: "context",
    icon: <GlobeIcon aria-hidden="true" />,
    label: "Add web page",
    value: "web-page",
  },
  {
    group: "context",
    icon: <FileTextIcon aria-hidden="true" />,
    label: "Add project instructions",
    value: "instructions",
  },
  {
    group: "agent",
    icon: <ListTodoIcon aria-hidden="true" />,
    label: "Plan implementation",
    value: "plan",
  },
  {
    group: "agent",
    icon: <CircleHelpIcon aria-hidden="true" />,
    label: "Ask a question",
    value: "ask",
  },
] as const;

const contextActions = actionItems.filter(
  (action) => action.group === "context"
);

const agentActions = actionItems.filter((action) => action.group === "agent");

const contextUsage = [
  { color: "var(--chart-1)", title: "Input", value: 42_000 },
  { color: "var(--chart-2)", title: "Output", value: 8600 },
  { color: "var(--chart-3)", title: "Reasoning", value: 24_000 },
  { color: "var(--chart-4)", title: "Cache", value: 53_800 },
];
