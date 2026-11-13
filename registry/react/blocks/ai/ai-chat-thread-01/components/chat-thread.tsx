"use client";

import {
  BotIcon,
  CopyIcon,
  FileTextIcon,
  ListTodoIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import {
  ApprovalCard,
  ApprovalCardContent,
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
} from "@/registry/react/components/message-scroller";
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
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/react/components/reasoning";
import {
  InlineCitation,
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/registry/react/components/sources";
import {
  State,
  StateContent,
  StateDescription,
  StateHeader,
  StateMedia,
  StateTitle,
} from "@/registry/react/components/state";
import {
  Suggestion,
  Suggestions,
} from "@/registry/react/components/suggestion";
import {
  ToolResult,
  ToolResultAction,
  ToolResultName,
  ToolResultStatus,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";

export interface ChatMessageAttachment {
  description: string;
  name: string;
}

export interface ChatMessageSource {
  href: string;
  title: string;
}

interface ApprovalPlanStep {
  detail?: string;
  id: string;
  title: string;
}

export interface ChatMessage {
  approvalPlan?: {
    steps: ApprovalPlanStep[];
    summary?: string;
    title: string;
  };
  attachment?: ChatMessageAttachment;
  confirmation?: string;
  content: string;
  id: string;
  plan?: {
    tasks: {
      file?: string;
      status: "completed" | "in-progress" | "pending";
      title: string;
    }[];
    title: string;
  };
  reasoning?: { content: string; duration: number };
  role: "assistant" | "user";
  sources?: ChatMessageSource[];
  tool?: { file: string; name: string; pathLabel?: string };
}

interface ChatThreadProps {
  messages: readonly ChatMessage[];
  onSuggestion: (text: string) => void;
  userName?: string;
}

const noop = () => undefined;

interface EmptyConversationProps {
  onSuggestion: (text: string) => void;
  userName: string;
}

const EmptyConversation = (props: EmptyConversationProps) => {
  const { userName, onSuggestion } = props;

  return (
    <State className="min-h-full px-6 py-16 md:px-6 md:py-16">
      <StateHeader>
        <StateMedia>
          <BotIcon
            aria-hidden="true"
            className="text-muted-foreground size-8"
          />
        </StateMedia>
        <StateTitle asChild>
          <h2>Hello {userName}</h2>
        </StateTitle>
        <StateDescription>What can I help you with today?</StateDescription>
      </StateHeader>
      <StateContent className="max-w-lg">
        <Suggestions>
          <Suggestion
            onClick={() => onSuggestion("Turn this launch brief into a plan")}
          >
            Turn this launch brief into a plan
          </Suggestion>
          <Suggestion onClick={() => onSuggestion("Summarize research themes")}>
            Summarize research themes
          </Suggestion>
          <Suggestion onClick={() => onSuggestion("Draft a release checklist")}>
            Draft a release checklist
          </Suggestion>
        </Suggestions>
      </StateContent>
    </State>
  );
};

interface MessageSourcesProps {
  sources: ChatMessageSource[];
}

const MessageSources = (props: MessageSourcesProps) => {
  const { sources } = props;

  return (
    <Sources defaultOpen>
      <SourcesTrigger count={sources.length} />
      <SourcesContent>
        {sources.map((source) => (
          <Source href={source.href} key={source.href} title={source.title} />
        ))}
      </SourcesContent>
    </Sources>
  );
};

interface MessageReasoningProps {
  content: string;
  duration: number;
}

const MessageReasoning = (props: MessageReasoningProps) => {
  const { content, duration } = props;

  return (
    <Reasoning duration={duration}>
      <ReasoningTrigger />
      <ReasoningContent>{content}</ReasoningContent>
    </Reasoning>
  );
};

interface MessageToolProps {
  file: string;
  name: string;
  pathLabel?: string;
}

const MessageTool = (props: MessageToolProps) => {
  const { file, name } = props;

  return (
    <ToolResult status="success">
      <ToolResultTrigger>
        <ToolResultTitle>{name}</ToolResultTitle>
        <ToolResultName>{file}</ToolResultName>
        <ToolResultAction>
          <ToolResultStatus />
        </ToolResultAction>
      </ToolResultTrigger>
    </ToolResult>
  );
};

interface MessageConfirmationProps {
  title: string;
}

const MessageConfirmation = (props: MessageConfirmationProps) => {
  const { title } = props;

  return (
    <ApprovalCard onApprove={noop} onReject={noop}>
      <ApprovalCardHeader>
        <ApprovalCardTitle>{title}</ApprovalCardTitle>
      </ApprovalCardHeader>
      <ApprovalCardFooter>
        <ApprovalCardReject variant="outline">Reject</ApprovalCardReject>
        <ApprovalCardSubmit>Approve</ApprovalCardSubmit>
      </ApprovalCardFooter>
    </ApprovalCard>
  );
};

const MessageApprovalPlan = (
  props: NonNullable<ChatMessage["approvalPlan"]>
) => {
  const { steps, title } = props;

  return (
    <ApprovalCard onApprove={noop} onReject={noop}>
      <ApprovalCardHeader>
        <ListTodoIcon aria-hidden="true" />
        <ApprovalCardTitle>{title}</ApprovalCardTitle>
      </ApprovalCardHeader>
      <ApprovalCardContent>
        <ol className="bg-muted/32 flex flex-col gap-1 rounded-lg border p-2">
          {steps.map((step) => (
            <li
              className="flex items-start gap-2 px-2 py-1.5 text-xs"
              key={step.id}
            >
              <span className="border-muted-foreground/48 mt-1 size-2 shrink-0 rounded-full border" />
              <span className="min-w-0">
                <span className="font-medium">{step.title}</span>
                {step.detail ? (
                  <span className="text-muted-foreground mt-0.5 block">
                    {step.detail}
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ol>
      </ApprovalCardContent>
      <ApprovalCardFooter>
        <ApprovalCardReject>View plan</ApprovalCardReject>
        <ApprovalCardSubmit>Approve</ApprovalCardSubmit>
      </ApprovalCardFooter>
    </ApprovalCard>
  );
};

const MessagePlan = (props: NonNullable<ChatMessage["plan"]>) => {
  const { tasks, title } = props;

  return (
    <Plan defaultOpen status="in-progress">
      <PlanHeader title={title} />
      <PlanContent>
        {tasks.map((task) => (
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
  );
};

const MessageAttachmentBlock = (props: ChatMessageAttachment) => {
  const { description, name } = props;

  return (
    <Attachment size="sm">
      <AttachmentMedia>
        <FileTextIcon aria-hidden="true" />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>{name}</AttachmentTitle>
        <AttachmentDescription>{description}</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  );
};

const AssistantActions = () => (
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
);

interface ChatMessageItemProps {
  message: ChatMessage;
}

const ChatMessageItem = (props: ChatMessageItemProps) => {
  const { message } = props;

  const isUser = message.role === "user";
  const firstSource = message.sources?.[0];

  return (
    <MessageScrollerItem className="[content-visibility:visible]">
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
          {isUser ? null : <MessageHeader>Onda Assistant</MessageHeader>}
          {message.sources?.length ? (
            <MessageSources sources={message.sources} />
          ) : null}
          {message.reasoning ? (
            <MessageReasoning
              content={message.reasoning.content}
              duration={message.reasoning.duration}
            />
          ) : null}
          {message.tool ? (
            <MessageTool
              file={message.tool.file}
              name={message.tool.name}
              pathLabel={message.tool.pathLabel}
            />
          ) : null}
          {message.confirmation ? (
            <MessageConfirmation title={message.confirmation} />
          ) : null}
          {message.approvalPlan ? (
            <MessageApprovalPlan {...message.approvalPlan} />
          ) : null}
          {message.plan ? <MessagePlan {...message.plan} /> : null}
          <MessageBubble
            align={isUser ? "end" : "start"}
            variant={isUser ? "secondary" : "ghost"}
          >
            <MessageBubbleContent>
              {message.content}
              {firstSource ? (
                <InlineCitation
                  href={firstSource.href}
                  index={1}
                  title={firstSource.title}
                />
              ) : null}
            </MessageBubbleContent>
          </MessageBubble>
          {message.attachment ? (
            <MessageAttachmentBlock {...message.attachment} />
          ) : null}
          {isUser ? null : <AssistantActions />}
        </MessageContent>
      </Message>
    </MessageScrollerItem>
  );
};

export const ChatThread = (props: ChatThreadProps) => {
  const { messages, userName = "James", onSuggestion } = props;

  return (
    <MessageScroller className="min-h-0 flex-1">
      <MessageScrollerViewport aria-live="polite">
        {messages.length === 0 ? (
          <EmptyConversation onSuggestion={onSuggestion} userName={userName} />
        ) : (
          <MessageScrollerContent className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
            {messages.map((message) => (
              <ChatMessageItem key={message.id} message={message} />
            ))}
          </MessageScrollerContent>
        )}
      </MessageScrollerViewport>
      <MessageScrollerButton />
    </MessageScroller>
  );
};
