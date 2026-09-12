"use client";

import { PaperclipIcon } from "lucide-react";
import { toast } from "@/components/examples/example-toast";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";
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
import { useChatHelper } from "@/registry/react/hooks/use-chat-helper";
import { createChat } from "@/registry/react/lib/create-chat";

export const ReasoningCardExample = (props: React.ComponentProps<"div">) => {
  const { canSendNext, messages, nextMessage, sendNext, status, stop } =
    useChatHelper({
      adapter: "ai-sdk",
      chat,
      initialMessageCount: 2,
    });
  const promptStatus = toPromptStatus(status);
  const isStreaming = status === "submitted" || status === "streaming";
  const nextText = nextMessage ? getMessageText(nextMessage) : "";
  const assistantMessage = messages.findLast(
    (message) => message.role === "assistant"
  );
  const answer = assistantMessage ? getMessageText(assistantMessage) : "";
  const assistantExtras = assistantMessage
    ? extras[assistantMessage.id]
    : undefined;
  const duration = isStreaming ? undefined : assistantExtras?.duration;

  return (
    <Card {...props}>
      <CardHeader
        description="What the model considered before answering."
        title="Reasoning"
      />
      <CardContent className="flex flex-col gap-4">
        <Reasoning duration={duration} isStreaming={isStreaming}>
          <ReasoningTrigger duration={duration} isStreaming={isStreaming} />
          <ReasoningContent>{assistantExtras?.reasoning}</ReasoningContent>
        </Reasoning>
        <p className="text-sm">{answer}</p>
        <Sources>
          <SourcesTrigger count={2} />
          <SourcesContent>
            <Source href="https://ark-ui.com" title="Ark UI" />
            <Source href="https://shark.vini.one" title="Shark UI" />
          </SourcesContent>
        </Sources>
      </CardContent>
      <CardFooter>
        <PromptInput
          className="w-full"
          onStop={stop}
          onSubmit={() => {
            if (canSendNext) {
              sendNext()?.catch(noop);
            }
          }}
          status={promptStatus}
        >
          <PromptInputTextarea
            aria-label="Prompt"
            placeholder="Ask the agent…"
            readOnly
            value={nextText}
          />
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputButton
                aria-label="Attach file"
                onClick={() =>
                  toast.info({
                    description:
                      "File attachments are not wired in this preview.",
                    title: "Attach file",
                  })
                }
                size="icon-xs"
              >
                <PaperclipIcon aria-hidden="true" />
              </PromptInputButton>
            </PromptInputTools>
            <PromptInputSubmit />
          </PromptInputFooter>
        </PromptInput>
      </CardFooter>
    </Card>
  );
};

const chat = createChat({ adapter: "ai-sdk" })
  .user("What should I fix first?", { id: "user-first" })
  .assistant(
    "Keep the first frame stable. Match skeleton height to the result, then stream the rest.",
    { delayMs: 400, id: "assistant-first" }
  )
  .user("What about input delay?", { id: "user-delay" })
  .assistant(
    "Stabilize the skeleton, then stream the rest. That is the first fix.",
    { delayMs: 400, id: "assistant-delay" }
  );

const extras: Record<string, { duration: number; reasoning: string }> = {
  "assistant-delay": {
    duration: 8,
    reasoning:
      "Considering input delay: first paint, input delay, and layout shift.",
  },
  "assistant-first": {
    duration: 8,
    reasoning:
      "Perceived slowness sits between the click and the first paint: input delay, skeleton size, and layout shift when data arrives.",
  },
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
