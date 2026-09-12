"use client";

import { createListCollection, useListCollection } from "@ark-ui/react";
import type { UIMessage } from "ai";
import {
  BotIcon,
  BugIcon,
  CodeXmlIcon,
  CopyIcon,
  FileTextIcon,
  FolderIcon,
  GitBranchIcon,
  GlobeIcon,
  HammerIcon,
  ImagePlusIcon,
  MonitorIcon,
  PaperclipIcon,
  PlusIcon,
  RefreshCwIcon,
  ShieldAlertIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  Trash2Icon,
} from "lucide-react";
import {
  type CSSProperties,
  type ReactNode,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SharkIcon } from "@/components/icons/shark";
import { cn } from "@/lib/utils";
import {
  ApprovalCard,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardReject,
  ApprovalCardSubmit,
  ApprovalCardTitle,
} from "@/registry/react/components/approval-card";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/react/components/code-block";
import {
  Context,
  ContextBody,
  ContextContent,
  ContextHeader,
  ContextIcon,
  ContextMeter,
  ContextTrigger,
  ContextUsageRow,
} from "@/registry/react/components/context";
import {
  Diff,
  DiffContent,
  DiffFile,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";
import { IconTile } from "@/registry/react/components/icon-tile";
import { Item, ItemTitle } from "@/registry/react/components/item";
import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/registry/react/components/marker";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import {
  Message,
  MessageAction,
  MessageActions,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/registry/react/components/message";
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
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorTrigger,
} from "@/registry/react/components/model-selector";
import {
  Plan,
  PlanContent,
  PlanHeader,
  PlanItem,
  PlanItemContent,
  PlanItemDetailFile,
  PlanItemTrigger,
} from "@/registry/react/components/plan";
import {
  PromptInput,
  PromptInputBottom,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
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
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/react/components/reasoning";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import {
  InlineCitation,
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/registry/react/components/sources";
import {
  SpeechInput,
  SpeechInputTrigger,
} from "@/registry/react/components/speech-input";
import {
  Terminal,
  TerminalContent,
  TerminalHeader,
} from "@/registry/react/components/terminal";
import {
  ToolResult,
  ToolResultAction,
  ToolResultContent,
  ToolResultName,
  ToolResultStatus,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";
import { useChatHelper } from "@/registry/react/hooks/use-chat-helper";
import {
  CONTEXT_USAGE,
  chat,
  type DemoMessageExtras,
  getMessageText,
  MESSAGE_EXTRAS,
  MODEL_OPTIONS,
  USER_TURNS,
} from "../demo";

interface AiChatProps {
  assistantName?: string;
  className?: string;
  headerAction?: ReactNode;
  rightSidebar?: ReactNode;
  showDemoArtifacts?: boolean;
  welcomeTitle?: string;
}

const noop = () => undefined;

const getCompactThreadTitle = (message: UIMessage) => {
  const prompt = getMessageText(message).trim().replace(/\s+/g, " ");
  const matchingTurn = USER_TURNS.find(
    (turn) => turn.id === message.id || turn.text === prompt
  );

  if (matchingTurn) {
    return matchingTurn.label;
  }

  if (!prompt) {
    return "New chat";
  }

  const words = prompt.split(" ");
  const title = words.slice(0, 6).join(" ");

  return words.length > 6 ? `${title}…` : title;
};

const effortCollection = createListCollection({
  items: [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
    { label: "Extra high", value: "extra-high" },
  ],
});

const accessCollection = createListCollection({
  items: [
    {
      description: "Read, write, and run commands.",
      label: "Full access",
      value: "full",
    },
    {
      description: "Request approval before taking action.",
      label: "Ask first",
      value: "ask",
    },
    {
      description: "View files without making changes.",
      label: "Read only",
      value: "read",
    },
  ],
});

const promptActions = [
  {
    icon: <PaperclipIcon aria-hidden="true" />,
    label: "Attach files and folders",
    value: "files",
  },
  {
    icon: <ImagePlusIcon aria-hidden="true" />,
    label: "Add image or screenshot",
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
];

const emptyStateSuggestions = [
  {
    icon: <CodeXmlIcon aria-hidden="true" className="size-4" />,
    label: "Understand",
    text: "Help me understand the structure of this project.",
  },
  {
    icon: <HammerIcon aria-hidden="true" className="size-4" />,
    label: "Build",
    text: "Help me plan a new feature for this project.",
  },
  {
    icon: <RefreshCwIcon aria-hidden="true" className="size-4" />,
    label: "Review",
    text: "Review this project and suggest the most valuable improvements.",
  },
  {
    icon: <BugIcon aria-hidden="true" className="size-4" />,
    label: "Fix",
    text: "Help me diagnose and fix an issue in this project.",
  },
] as const;

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

const toPromptStatus = (status: string): PromptInputStatus => {
  switch (status) {
    case "error":
      return "error";
    case "streaming":
      return "streaming";
    case "submitted":
      return "submitted";
    default:
      return "ready";
  }
};

const EmptyConversation = ({
  onSuggestion,
  welcomeTitle,
}: {
  onSuggestion: (text: string) => void;
  welcomeTitle: string;
}) => (
  <div className="mx-auto flex min-h-full w-full max-w-3xl flex-col items-center justify-center px-4 py-10 text-center sm:px-6">
    <IconTile aria-hidden="true" size="lg">
      <SharkIcon aria-hidden="true" />
    </IconTile>
    <h2 className="mt-7 max-w-3xl text-balance font-medium text-2xl tracking-tight">
      {welcomeTitle}
    </h2>

    <div className="mt-8 flex w-full flex-nowrap justify-start gap-3 overflow-x-auto pb-1">
      {emptyStateSuggestions.map((item) => (
        <Item
          asChild
          className="h-auto min-h-14 min-w-40 flex-1 hover:bg-muted"
          key={item.label}
          variant="outline"
        >
          <button
            className="w-full text-start font-sans"
            onClick={() => onSuggestion(item.text)}
            type="button"
          >
            <span className="flex min-w-0 items-center gap-2">
              <span className="grid size-7 shrink-0 place-items-center text-primary">
                {item.icon}
              </span>
              <ItemTitle className="line-clamp-2 text-start leading-4">
                {item.label}
              </ItemTitle>
            </span>
          </button>
        </Item>
      ))}
    </div>
  </div>
);

const AssistantActions = () => (
  <MessageFooter>
    <MessageActions>
      <MessageAction>
        <CopyIcon aria-hidden="true" />
      </MessageAction>
      <MessageAction>
        <ThumbsUpIcon aria-hidden="true" />
      </MessageAction>
      <MessageAction>
        <ThumbsDownIcon aria-hidden="true" />
      </MessageAction>
    </MessageActions>
  </MessageFooter>
);

const MessageExtras = ({ extras }: { extras: DemoMessageExtras }) => {
  const added = extras.diff?.lines.filter((line) => line.type === "add").length;
  const removed = extras.diff?.lines.filter(
    (line) => line.type === "delete"
  ).length;

  return (
    <>
      {extras.sources?.length ? (
        <Sources defaultOpen>
          <SourcesTrigger count={extras.sources.length} />
          <SourcesContent>
            {extras.sources.map((source) => (
              <Source
                href={source.href}
                key={source.href}
                title={source.title}
              />
            ))}
          </SourcesContent>
        </Sources>
      ) : null}
      {extras.reasoning ? (
        <Reasoning duration={extras.reasoning.duration}>
          <ReasoningTrigger duration={extras.reasoning.duration} />
          <ReasoningContent>{extras.reasoning.content}</ReasoningContent>
        </Reasoning>
      ) : null}
      {extras.tool ? (
        <ToolResult defaultOpen={Boolean(extras.terminal)} status="success">
          <ToolResultTrigger>
            <ToolResultTitle>{extras.tool.name}</ToolResultTitle>
            <ToolResultName>{extras.tool.file}</ToolResultName>
            <ToolResultAction>
              <ToolResultStatus />
            </ToolResultAction>
          </ToolResultTrigger>
          {extras.terminal ? (
            <ToolResultContent>
              <Terminal output={extras.terminal.output}>
                <TerminalHeader>{extras.terminal.header}</TerminalHeader>
                <TerminalContent />
              </Terminal>
            </ToolResultContent>
          ) : null}
        </ToolResult>
      ) : null}
      {extras.tool || !extras.terminal ? null : (
        <Terminal output={extras.terminal.output}>
          <TerminalHeader>{extras.terminal.header}</TerminalHeader>
          <TerminalContent />
        </Terminal>
      )}
      {extras.diff ? (
        <Diff>
          <DiffHeader>
            <DiffFile>{extras.diff.file}</DiffFile>
            <DiffStats added={added ?? 0} removed={removed ?? 0} />
          </DiffHeader>
          <DiffContent>
            {extras.diff.lines.map((line) => (
              <DiffLine
                key={`${line.type}-${line.line}-${line.text}`}
                line={line.line}
                type={line.type}
              >
                {line.text}
              </DiffLine>
            ))}
          </DiffContent>
        </Diff>
      ) : null}
      {extras.approval ? (
        <ApprovalCard onApprove={noop} onReject={noop}>
          <ApprovalCardHeader>
            <ApprovalCardTitle>{extras.approval}</ApprovalCardTitle>
          </ApprovalCardHeader>
          <ApprovalCardFooter>
            <ApprovalCardReject variant="outline">Reject</ApprovalCardReject>
            <ApprovalCardSubmit>Approve</ApprovalCardSubmit>
          </ApprovalCardFooter>
        </ApprovalCard>
      ) : null}
      {extras.plan ? (
        <Plan defaultOpen>
          <PlanHeader title={extras.plan.title} />
          <PlanContent>
            {extras.plan.tasks.map((task) => (
              <PlanItem
                collapsible={Boolean(task.file)}
                key={task.title}
                status={task.status}
              >
                <PlanItemTrigger title={task.title} />
                {task.file ? (
                  <PlanItemContent>
                    <PlanItemDetailFile>{task.file}</PlanItemDetailFile>
                  </PlanItemContent>
                ) : null}
              </PlanItem>
            ))}
          </PlanContent>
        </Plan>
      ) : null}
      {extras.code ? (
        <CodeBlock code={extras.code.code}>
          <CodeBlockHeader>
            <CodeBlockTitle>{extras.code.title}</CodeBlockTitle>
            <CodeBlockCopy />
          </CodeBlockHeader>
          <CodeBlockContent showLineNumbers>
            {extras.code.code}
          </CodeBlockContent>
        </CodeBlock>
      ) : null}
      {extras.attachment ? (
        <Attachment size="sm">
          <AttachmentMedia>
            <FileTextIcon aria-hidden="true" />
          </AttachmentMedia>
          <AttachmentContent>
            <AttachmentTitle>{extras.attachment.name}</AttachmentTitle>
            <AttachmentDescription>
              {extras.attachment.description}
            </AttachmentDescription>
          </AttachmentContent>
        </Attachment>
      ) : null}
    </>
  );
};

const ChatMessageItem = ({
  assistantName,
  extras,
  isStreaming = false,
  message,
}: {
  assistantName: string;
  extras?: DemoMessageExtras;
  isStreaming?: boolean;
  message: UIMessage;
}) => {
  const isUser = message.role === "user";
  const text = getMessageText(message);
  const firstSource = extras?.sources?.[0];

  return (
    <MessageScrollerItem>
      <Message align={isUser ? "end" : "start"}>
        {isUser ? null : (
          <MessageAvatar>
            <Avatar size="sm">
              <AvatarFallback>
                <BotIcon aria-hidden="true" className="size-4" />
              </AvatarFallback>
            </Avatar>
          </MessageAvatar>
        )}
        <MessageContent>
          {isUser ? null : <MessageHeader>{assistantName}</MessageHeader>}
          {isUser || !isStreaming ? null : (
            <Marker className="w-fit rounded-lg bg-muted px-3 py-2">
              <MarkerIcon>
                <BotIcon aria-hidden="true" />
              </MarkerIcon>
              <MarkerContent className="shimmer">Thinking</MarkerContent>
            </Marker>
          )}
          {extras ? <MessageExtras extras={extras} /> : null}
          {text ? (
            <MessageBubble
              align={isUser ? "end" : "start"}
              variant={isUser ? "default" : "outline"}
            >
              <MessageBubbleContent>
                {text}
                {firstSource ? (
                  <InlineCitation
                    href={firstSource.href}
                    index={1}
                    title={firstSource.title}
                  />
                ) : null}
              </MessageBubbleContent>
            </MessageBubble>
          ) : null}
          {isUser ? null : <AssistantActions />}
        </MessageContent>
      </Message>
    </MessageScrollerItem>
  );
};

const ChatSession = ({
  assistantName,
  className,
  headerAction,
  showDemoArtifacts,
  welcomeTitle,
}: {
  assistantName: string;
  className?: string;
  headerAction?: ReactNode;
  onReset: () => void;
  showDemoArtifacts: boolean;
  welcomeTitle: string;
}) => {
  const [model, setModel] = useState(MODEL_OPTIONS[0].value);
  const [effort, setEffort] = useState("medium");
  const [access, setAccess] = useState("full");
  const [prompt, setPrompt] = useState("");
  const { collection } = useListCollection({
    initialItems: [...MODEL_OPTIONS],
  });
  const { canSendNext, messages, nextMessage, sendNext, status, stop } =
    useChatHelper({
      adapter: "ai-sdk",
      chat,
    });
  const promptStatus = toPromptStatus(status);
  const messageIds = useMemo(
    () => new Set(messages.map((message) => message.id)),
    [messages]
  );
  const queuedTurns = USER_TURNS.filter(
    (turn) => !messageIds.has(turn.id) && turn.id !== nextMessage?.id
  );
  const usedTokens = Math.min(18_420 + messages.length * 640, 128_000);
  const isBusy = status === "submitted" || status === "streaming";
  const hasMessages = messages.length > 0;
  const latestAssistantMessage = [...messages]
    .reverse()
    .find((message) => message.role === "assistant");
  const firstUserMessage = messages.find((message) => message.role === "user");
  const threadTitle = firstUserMessage
    ? getCompactThreadTitle(firstUserMessage)
    : "New Chat";
  const latestMessageText = getMessageText(messages.at(-1) ?? { parts: [] });

  return (
    <div
      className={cn("flex min-h-0 w-full flex-col bg-background", className)}
    >
      <header
        className={cn(
          "flex h-12 shrink-0 items-center gap-3 ps-4",
          hasMessages && "border-b"
        )}
      >
        {hasMessages ? (
          <h2 className="min-w-0 flex-1 truncate font-medium text-sm">
            {threadTitle}
          </h2>
        ) : null}
        <div className="ms-auto">{headerAction}</div>
      </header>

      <MessageScroller className="min-h-0 flex-1">
        <MessageScrollerViewport aria-live="polite">
          <FollowLatestMessage
            enabled={isBusy}
            messageCount={messages.length}
            streamedText={latestMessageText}
          />
          {messages.length === 0 ? (
            <EmptyConversation
              onSuggestion={setPrompt}
              welcomeTitle={welcomeTitle}
            />
          ) : (
            <MessageScrollerContent className="w-full py-8">
              <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 sm:px-6">
                <MessageScrollerItem>
                  <Marker variant="separator">
                    <MarkerContent>Today</MarkerContent>
                  </Marker>
                </MessageScrollerItem>
                {messages.map((message) => (
                  <ChatMessageItem
                    assistantName={assistantName}
                    extras={
                      showDemoArtifacts ? MESSAGE_EXTRAS[message.id] : undefined
                    }
                    isStreaming={
                      isBusy && message.id === latestAssistantMessage?.id
                    }
                    key={message.id}
                    message={message}
                  />
                ))}
              </div>
            </MessageScrollerContent>
          )}
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-4 pt-2 pb-4 sm:px-6">
        {showDemoArtifacts && hasMessages && queuedTurns.length > 0 ? (
          <Queue>
            <QueueSection>
              <QueueSectionHeader
                title={`${queuedTurns.length} Queued Messages`}
              />
              <QueueSectionContent>
                <QueueList>
                  {queuedTurns.map((turn) => (
                    <QueueItem key={turn.id}>
                      <QueueItemContent>{turn.label}</QueueItemContent>
                      <QueueItemActions>
                        <QueueItemAction aria-label={`Remove ${turn.label}`}>
                          <Trash2Icon aria-hidden="true" />
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
          className="w-full"
          onStop={stop}
          onSubmit={() => {
            if (canSendNext) {
              sendNext()?.catch(noop);
              setPrompt("");
            }
          }}
          status={promptStatus}
        >
          <PromptInputTextarea
            aria-label="Message"
            onChange={(event) => setPrompt(event.target.value)}
            value={prompt}
          />
          <PromptInputFooter>
            <PromptInputTools>
              <Menu positioning={{ placement: "top-start" }}>
                <MenuTrigger asChild>
                  <PromptInputButton aria-label="Add to prompt" size="icon-sm">
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
              <Select
                collection={accessCollection}
                onValueChange={({ value }) => setAccess(value[0] ?? "")}
                positioning={{ placement: "top-start" }}
                value={[access]}
              >
                <SelectTrigger showTrigger={false} size="sm" variant="ghost">
                  <ShieldAlertIcon aria-hidden="true" />
                  <SelectValue placeholder="Full access" />
                </SelectTrigger>
                <SelectContent>
                  {accessCollection.items.map((item) => (
                    <SelectItem item={item} key={item.value}>
                      <span className="flex min-w-0 flex-col gap-0.5">
                        <span>{item.label}</span>
                        <span className="text-muted-foreground text-xs">
                          {item.description}
                        </span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </PromptInputTools>
            <ModelSelector
              collection={collection}
              onValueChange={({ value }) => setModel(value[0] ?? "")}
              value={[model]}
            >
              <ModelSelectorTrigger size="sm" variant="ghost" />
              <ModelSelectorContent>
                <ModelSelectorList>
                  {collection.items.map((item) => (
                    <ModelSelectorItem item={item} key={item.value}>
                      {item.label}
                    </ModelSelectorItem>
                  ))}
                </ModelSelectorList>
              </ModelSelectorContent>
            </ModelSelector>
            <Select
              collection={effortCollection}
              onValueChange={({ value }) => setEffort(value[0] ?? "")}
              positioning={{ placement: "top" }}
              value={[effort]}
            >
              <SelectTrigger showTrigger={false} size="sm" variant="ghost">
                <SelectValue placeholder="Medium" />
              </SelectTrigger>
              <SelectContent>
                {effortCollection.items.map((item) => (
                  <SelectItem item={item} key={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <SpeechInput>
              <SpeechInputTrigger />
            </SpeechInput>
            <PromptInputSubmit className="ms-2" size="icon-sm" />
          </PromptInputFooter>
          <PromptInputBottom>
            <Button
              className="text-muted-foreground hover:text-foreground"
              size="sm"
              variant="ghost"
            >
              <FolderIcon aria-hidden="true" className="size-4" />
              shark-ui
            </Button>
            <Button
              className="text-muted-foreground hover:text-foreground"
              size="sm"
              variant="ghost"
            >
              <MonitorIcon aria-hidden="true" className="size-4" />
              Local
            </Button>
            <Button
              className="text-muted-foreground hover:text-foreground"
              size="sm"
              variant="ghost"
            >
              <GitBranchIcon aria-hidden="true" className="size-4" />
              main
            </Button>
            <div className="ms-auto">
              <Context
                maxTokens={128_000}
                positioning={{ placement: "top-end" }}
                usedTokens={usedTokens}
              >
                <ContextTrigger aria-label="Context usage" size="icon-sm">
                  <ContextIcon />
                </ContextTrigger>
                <ContextContent>
                  <ContextHeader>
                    <ContextMeter />
                  </ContextHeader>
                  <ContextBody>
                    {CONTEXT_USAGE.map((usage) => (
                      <ContextUsageRow key={usage.title} {...usage} />
                    ))}
                  </ContextBody>
                </ContextContent>
              </Context>
            </div>
          </PromptInputBottom>
        </PromptInput>
      </div>
    </div>
  );
};

export const AiChat = ({
  assistantName = "Shark Assistant",
  className,
  headerAction,
  rightSidebar,
  showDemoArtifacts = true,
  welcomeTitle = "What should we build in shark-ui?",
}: AiChatProps) => {
  const [session, setSession] = useState(0);

  const sessionContent = (
    <ChatSession
      assistantName={assistantName}
      className={className}
      headerAction={headerAction}
      key={session}
      onReset={() => setSession((current) => current + 1)}
      showDemoArtifacts={showDemoArtifacts}
      welcomeTitle={welcomeTitle}
    />
  );

  if (!rightSidebar) {
    return sessionContent;
  }

  return (
    <SidebarProvider
      className="h-full min-h-0"
      defaultOpen={false}
      style={{ "--sidebar-width": "20rem" } as CSSProperties}
    >
      <SidebarInset className="min-w-0">{sessionContent}</SidebarInset>
      <Sidebar collapsible="offcanvas" placement="right">
        {rightSidebar}
      </Sidebar>
    </SidebarProvider>
  );
};
