"use client";

import {
  CopyIcon,
  CornerDownLeftIcon,
  EllipsisIcon,
  FilePenLineIcon,
  FileTextIcon,
  PencilIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  Trash2Icon,
} from "lucide-react";
import type React from "react";
import { ThumbCard } from "@/components/thumbs/thumb-card";
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
import { Button } from "@/registry/react/components/button";
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";
import {
  Context,
  ContextContent,
  ContextFooter,
  ContextHeader,
  ContextMeter,
  ContextTitle,
  ContextTrigger,
  ContextTriggerLabel,
} from "@/registry/react/components/context";
import {
  Diff,
  DiffContent,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";
import { Kbd } from "@/registry/react/components/kbd";
import { Marker, MarkerContent } from "@/registry/react/components/marker";
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
  MessageBubbleReactions,
} from "@/registry/react/components/message-bubble";
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/react/components/message-scroller";
import {
  Plan,
  PlanContent,
  PlanHeader,
  PlanItem,
  PlanItemTrigger,
} from "@/registry/react/components/plan";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
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
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/registry/react/components/sources";
import {
  Suggestion,
  Suggestions,
} from "@/registry/react/components/suggestion";
import {
  Terminal,
  TerminalContent,
  TerminalHeader,
} from "@/registry/react/components/terminal";
import {
  ToolResult,
  ToolResultAction,
  ToolResultMeta,
  ToolResultName,
  ToolResultStatus,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";

interface FeatureTileProps {
  children: React.ReactNode;
  description: string;
  title: string;
}

const FeatureTile = (props: FeatureTileProps) => {
  const { title, description, children } = props;

  return (
    <ThumbCard
      className="**:data-[slot=card-content]:h-44 **:data-[slot=card-content]:min-h-44 **:data-[slot=card-content]:flex-none"
      description={description}
      interactive
      title={title}
    >
      {children}
    </ThumbCard>
  );
};

const MessageScrollerDemo = () => (
  <MessageScroller className="h-full w-full max-w-sm rounded-lg border">
    <MessageScrollerViewport className="px-3 py-3">
      <MessageScrollerContent className="gap-2">
        <MessageScrollerItem>
          <MessageBubble variant="secondary">
            <MessageBubbleContent>Did the preview deploy?</MessageBubbleContent>
          </MessageBubble>
        </MessageScrollerItem>
        <MessageScrollerItem>
          <MessageBubble align="end">
            <MessageBubbleContent>Yes. Checking next.</MessageBubbleContent>
          </MessageBubble>
        </MessageScrollerItem>
        <MessageScrollerItem>
          <MessageBubble variant="secondary">
            <MessageBubbleContent>
              Scroller stays with you.
            </MessageBubbleContent>
          </MessageBubble>
        </MessageScrollerItem>
      </MessageScrollerContent>
    </MessageScrollerViewport>
  </MessageScroller>
);

const MessageDemo = () => (
  <Message className="w-full max-w-sm">
    <MessageContent>
      <MessageBubble variant="ghost">
        <MessageBubbleContent>
          Green on the suite. Ready to open the PR.
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
    </MessageContent>
  </Message>
);

const MessageBubbleDemo = () => (
  <MessageBubble className="w-full max-w-sm" variant="secondary">
    <MessageBubbleContent>We just crossed 10,000 signups.</MessageBubbleContent>
    <MessageBubbleReactions
      align="start"
      aria-label="Reactions: party popper"
      role="img"
      side="top"
    >
      <span>🎉</span>
    </MessageBubbleReactions>
  </MessageBubble>
);

const MarkerDemo = () => (
  <div className="flex w-full max-w-sm flex-col gap-4">
    <Marker variant="separator">
      <MarkerContent>Today</MarkerContent>
    </Marker>
    <Marker role="status">
      <MarkerContent>2 unread</MarkerContent>
    </Marker>
  </div>
);

const PromptInputDemo = () => (
  <PromptInput className="w-full max-w-sm" status="ready">
    <PromptInputTextarea
      aria-label="Prompt"
      className="min-h-10"
      defaultValue="Summarize the latest deploy."
      placeholder="Ask anything…"
    />
    <PromptInputFooter>
      <PromptInputSubmit size="icon-sm" />
    </PromptInputFooter>
  </PromptInput>
);

const SuggestionDemo = () => (
  <Suggestions className="w-full max-w-sm justify-center">
    <Suggestion>Summarize this brief</Suggestion>
    <Suggestion>Draft a checklist</Suggestion>
    <Suggestion>Find risks</Suggestion>
  </Suggestions>
);

const AttachmentDemo = () => (
  <Attachment className="w-full max-w-sm" state="done">
    <AttachmentMedia>
      <FileTextIcon aria-hidden="true" />
    </AttachmentMedia>
    <AttachmentContent>
      <AttachmentTitle>brief.pdf</AttachmentTitle>
      <AttachmentDescription>PDF · 240 KB</AttachmentDescription>
    </AttachmentContent>
  </Attachment>
);

const ReasoningDemo = () => (
  <Reasoning className="w-full max-w-sm" defaultOpen duration={8}>
    <ReasoningTrigger />
    <ReasoningContent>
      Make the payment handler idempotent and upsert by payment intent id.
    </ReasoningContent>
  </Reasoning>
);

const SourcesDemo = () => (
  <Sources className="w-full max-w-sm" defaultOpen>
    <SourcesTrigger count={2} />
    <SourcesContent>
      <Source href="#" title="React Documentation" />
      <Source href="#" title="Ark UI" />
    </SourcesContent>
  </Sources>
);

const ToolResultDemo = () => (
  <ToolResult className="w-full max-w-sm" defaultOpen={false} status="success">
    <ToolResultTrigger>
      <ToolResultTitle>Tests passed</ToolResultTitle>
      <ToolResultMeta>2.9s</ToolResultMeta>
      <ToolResultName>terminal.run</ToolResultName>
      <ToolResultAction>
        <ToolResultStatus />
      </ToolResultAction>
    </ToolResultTrigger>
  </ToolResult>
);

const ApprovalCardDemo = () => (
  <ApprovalCard className="w-full max-w-sm">
    <ApprovalCardHeader>
      <FilePenLineIcon aria-hidden="true" />
      <ApprovalCardTitle>Apply this file change?</ApprovalCardTitle>
    </ApprovalCardHeader>
    <ApprovalCardContent>
      Update `getOffset` to use a 1-based page index before shipping.
    </ApprovalCardContent>
    <ApprovalCardFooter>
      <ApprovalCardReject>Keep file</ApprovalCardReject>
      <ApprovalCardSubmit>Apply patch</ApprovalCardSubmit>
    </ApprovalCardFooter>
  </ApprovalCard>
);

const PlanDemo = () => (
  <Plan className="w-full max-w-sm" defaultOpen status="in-progress">
    <PlanHeader title="Add email validation" />
    <PlanContent>
      <PlanItem status="completed">
        <PlanItemTrigger title="Read current validator" />
      </PlanItem>
      <PlanItem status="in-progress">
        <PlanItemTrigger title="Patch isValidEmail" />
      </PlanItem>
      <PlanItem status="pending">
        <PlanItemTrigger title="Run unit tests" />
      </PlanItem>
    </PlanContent>
  </Plan>
);

const QueueDemo = () => (
  <Queue className="w-full max-w-sm">
    <QueueSection>
      <QueueSectionHeader title="2 Queued" />
      <QueueSectionContent>
        <QueueList>
          {QUEUE_ITEMS.map((item) => (
            <QueueItem key={item}>
              <QueueItemContent>{item}</QueueItemContent>
              <QueueItemActions>
                <QueueItemAction size="xs">
                  Send
                  <Kbd className="border-0 bg-transparent px-0">
                    <CornerDownLeftIcon aria-hidden="true" />
                  </Kbd>
                </QueueItemAction>
                <QueueItemAction aria-label={`Edit ${item}`}>
                  <PencilIcon aria-hidden="true" />
                </QueueItemAction>
                <QueueItemAction aria-label={`Remove ${item}`}>
                  <Trash2Icon aria-hidden="true" />
                </QueueItemAction>
                <QueueItemAction aria-label={`More actions for ${item}`}>
                  <EllipsisIcon aria-hidden="true" />
                </QueueItemAction>
              </QueueItemActions>
            </QueueItem>
          ))}
        </QueueList>
      </QueueSectionContent>
    </QueueSection>
  </Queue>
);

const ContextDemo = () => (
  <Context costLabel="$0.18" maxTokens={128_000} usedTokens={79_500}>
    <ContextTrigger asChild>
      <Button
        className="text-muted-foreground font-normal"
        size="sm"
        variant="ghost"
      >
        <ContextTriggerLabel />
      </Button>
    </ContextTrigger>
    <ContextContent>
      <ContextHeader>
        <ContextTitle showCloseButton>Context Usage</ContextTitle>
        <ContextMeter segments={CONTEXT_SEGMENTS} />
      </ContextHeader>
      <ContextFooter />
    </ContextContent>
  </Context>
);

const CodeBlockDemo = () => (
  <CodeBlock
    className="w-full max-w-sm"
    code={"const ok = (email: string) => /^[^\\s@]+@[^\\s@]+$/.test(email);"}
    language="tsx"
  >
    <CodeBlockHeader title="helpers.ts">
      <CodeBlockActions>
        <CodeBlockCopy />
      </CodeBlockActions>
    </CodeBlockHeader>
    <CodeBlockContent />
  </CodeBlock>
);

const DiffDemo = () => (
  <Diff className="w-full max-w-sm">
    <DiffHeader title="pagination.ts">
      <DiffStats added={1} removed={1} />
    </DiffHeader>
    <DiffContent>
      <DiffLine line={2} type="delete">
        {"  return page * pageSize;"}
      </DiffLine>
      <DiffLine line={2} type="add">
        {"  return (page - 1) * pageSize;"}
      </DiffLine>
    </DiffContent>
  </Diff>
);

const TerminalDemo = () => (
  <Terminal className="w-full max-w-sm" output={TERMINAL_OUTPUT}>
    <TerminalHeader>zsh · pnpm test</TerminalHeader>
    <TerminalContent />
  </Terminal>
);

export const AiComponentsFeatures = () => (
  <div className="flex flex-col gap-16 sm:gap-20">
    <section
      aria-labelledby="conversation-parts"
      className="flex flex-col gap-8 sm:gap-10"
    >
      <div className="flex max-w-2xl flex-col gap-3">
        <h2
          className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          id="conversation-parts"
        >
          Message and thread components
        </h2>
        <p className="text-muted-foreground text-base text-pretty sm:text-lg">
          Each tile is the real component. Click, hover, and type to try it.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <FeatureTile
          description="Auto-scroll, anchors, and jump controls for long threads."
          title="MessageScroller"
        >
          <MessageScrollerDemo />
        </FeatureTile>
        <FeatureTile
          description="Layout, avatar slot, and message actions in one row."
          title="Message"
        >
          <MessageDemo />
        </FeatureTile>
        <FeatureTile
          description="Alignments, variants, and reactions on the bubble."
          title="MessageBubble"
        >
          <MessageBubbleDemo />
        </FeatureTile>
        <FeatureTile
          description="Date separators and unread markers in the thread."
          title="Marker"
        >
          <MarkerDemo />
        </FeatureTile>
        <FeatureTile
          description="Composer with status, stop, and submit affordances."
          title="PromptInput"
        >
          <PromptInputDemo />
        </FeatureTile>
        <FeatureTile
          description="Quick follow-up chips next to the composer."
          title="Suggestion"
        >
          <SuggestionDemo />
        </FeatureTile>
        <FeatureTile
          description="File chips with media, title, and status."
          title="Attachment"
        >
          <AttachmentDemo />
        </FeatureTile>
      </div>
    </section>

    <section
      aria-labelledby="agent-parts"
      className="flex flex-col gap-8 sm:gap-10"
    >
      <div className="flex max-w-2xl flex-col gap-3">
        <h2
          className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          id="agent-parts"
        >
          Agent and tool components
        </h2>
        <p className="text-muted-foreground text-base text-pretty sm:text-lg">
          Reasoning, tools, approvals, plans, and output surfaces for agent UIs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <FeatureTile
          description="Expandable thinking with duration and streaming states."
          title="Reasoning"
        >
          <ReasoningDemo />
        </FeatureTile>
        <FeatureTile
          description="Collapsible source list with counts and links."
          title="Sources"
        >
          <SourcesDemo />
        </FeatureTile>
        <FeatureTile
          description="Tool rows with status, meta, and expandable output."
          title="ToolResult"
        >
          <ToolResultDemo />
        </FeatureTile>
        <FeatureTile
          description="Approve or reject sensitive actions before they run."
          title="ApprovalCard"
        >
          <ApprovalCardDemo />
        </FeatureTile>
        <FeatureTile
          description="Agent plan with status and collapsible steps."
          title="Plan"
        >
          <PlanDemo />
        </FeatureTile>
        <FeatureTile
          description="Queue follow-ups without blocking the current turn."
          title="Queue"
        >
          <QueueDemo />
        </FeatureTile>
        <FeatureTile
          description="Token usage meter with cost and category breakdown."
          title="Context"
        >
          <ContextDemo />
        </FeatureTile>
        <FeatureTile
          description="Highlighted code with copy and language header."
          title="CodeBlock"
        >
          <CodeBlockDemo />
        </FeatureTile>
        <FeatureTile
          description="Add and delete lines with file header and stats."
          title="Diff"
        >
          <DiffDemo />
        </FeatureTile>
        <FeatureTile
          description="ANSI output with header and auto-scroll follow."
          title="Terminal"
        >
          <TerminalDemo />
        </FeatureTile>
      </div>
    </section>
  </div>
);

const QUEUE_ITEMS = ["Summarize the launch brief", "Draft release notes"];

const CONTEXT_SEGMENTS = [
  { color: "var(--chart-1)", title: "Input", value: 42_000 },
  { color: "var(--chart-2)", title: "Output", value: 18_500 },
  { color: "var(--chart-3)", title: "Reasoning", value: 12_800 },
  { color: "var(--chart-4)", title: "Cache", value: 6200 },
];

const TERMINAL_OUTPUT = [
  "\u001B[34mRunning tests...\u001B[0m",
  " \u001B[32m✓\u001B[0m validateForm › valid input",
  "\u001B[90m1 passed\u001B[0m",
].join("\n");
