"use client";

import { BotIcon } from "lucide-react";
import type React from "react";
import { useCallback, useState } from "react";
import { Avatar, AvatarFallback } from "@/registry/react/components/avatar";
import {
  Diff,
  DiffContent,
  DiffHeader,
  DiffLine,
} from "@/registry/react/components/diff";
import {
  Message,
  MessageAvatar,
  MessageContent,
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
  PlanAction,
  PlanContent,
  PlanHeader,
  PlanItem,
  PlanItemContent,
  PlanItemDetailFile,
  PlanItemTrigger,
  PlanTrigger,
} from "@/registry/react/components/plan";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/registry/react/components/prompt-input";
import {
  ToolResult,
  ToolResultAction,
  ToolResultContent,
  ToolResultName,
  ToolResultStatus,
  ToolResultTitle,
  ToolResultTrigger,
} from "@/registry/react/components/tool-result";

export const IdeChat = () => {
  const [draft, setDraft] = useState("");

  const handleSubmit = useCallback(() => {
    setDraft("");
  }, []);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) =>
      setDraft(event.target.value),
    []
  );

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="border-b p-3">
        <Plan>
          <PlanHeader title="Add email validation">
            <PlanAction>
              <PlanTrigger />
            </PlanAction>
          </PlanHeader>
          <PlanContent>
            <PlanItem status="completed">
              <PlanItemTrigger status="completed" title="Read helpers.ts" />
              <PlanItemContent>
                <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
              </PlanItemContent>
            </PlanItem>
            <PlanItem status="in-progress">
              <PlanItemTrigger
                status="in-progress"
                title="Patch isValidEmail"
              />
              <PlanItemContent>
                <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
              </PlanItemContent>
            </PlanItem>
          </PlanContent>
        </Plan>
      </div>
      <MessageScroller className="min-h-0 flex-1">
        <MessageScrollerViewport>
          <MessageScrollerContent className="flex flex-col gap-4 p-3">
            <MessageScrollerItem>
              <Message align="end">
                <MessageContent>
                  <MessageBubble align="end" variant="secondary">
                    <MessageBubbleContent>
                      Add email format validation to the form.
                    </MessageBubbleContent>
                  </MessageBubble>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
            <MessageScrollerItem>
              <Message>
                <MessageAvatar>
                  <Avatar size="sm">
                    <AvatarFallback>
                      <BotIcon aria-hidden="true" className="size-4" />
                    </AvatarFallback>
                  </Avatar>
                </MessageAvatar>
                <MessageContent>
                  <MessageHeader>Shark Agent</MessageHeader>
                  <ToolResult status="success">
                    <ToolResultTrigger>
                      <ToolResultTitle>Read helpers.ts</ToolResultTitle>
                      <ToolResultName>Read</ToolResultName>
                      <ToolResultAction>
                        <ToolResultStatus />
                      </ToolResultAction>
                    </ToolResultTrigger>
                  </ToolResult>
                  <Diff>
                    <DiffHeader>src/utils/helpers.ts</DiffHeader>
                    <DiffContent>
                      <DiffLine type="delete">
                        {"  return Boolean(email);"}
                      </DiffLine>
                      <DiffLine type="add">
                        {
                          "  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);"
                        }
                      </DiffLine>
                    </DiffContent>
                  </Diff>
                  <ToolResult status="success">
                    <ToolResultTrigger>
                      <ToolResultTitle>Tests passed</ToolResultTitle>
                      <ToolResultName>Shell</ToolResultName>
                      <ToolResultAction>
                        <ToolResultStatus />
                      </ToolResultAction>
                    </ToolResultTrigger>
                    <ToolResultContent>
                      <p className="font-mono text-muted-foreground text-xs">
                        All tests passed
                      </p>
                    </ToolResultContent>
                  </ToolResult>
                </MessageContent>
              </Message>
            </MessageScrollerItem>
          </MessageScrollerContent>
        </MessageScrollerViewport>
        <MessageScrollerButton />
      </MessageScroller>
      <div className="border-t p-3">
        <PromptInput onSubmit={handleSubmit}>
          <PromptInputTextarea
            aria-label="Message"
            className="min-h-16"
            onChange={handleChange}
            placeholder="Ask about the code..."
            value={draft}
          />
          <PromptInputFooter>
            <PromptInputSubmit />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
};
