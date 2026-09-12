"use client";

import { BrainIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

interface ReasoningProps extends React.ComponentProps<typeof Collapsible> {
  duration?: number;
  isStreaming?: boolean;
}

export const Reasoning = (props: ReasoningProps) => {
  const {
    className,
    defaultOpen,
    duration,
    isStreaming = false,
    ...rest
  } = props;

  return (
    <Collapsible
      className={cn("w-full min-w-0 text-sm", className)}
      data-duration={duration}
      data-slot="reasoning"
      data-streaming={isStreaming ? "" : undefined}
      defaultOpen={defaultOpen ?? isStreaming}
      {...rest}
    />
  );
};

interface ReasoningTriggerProps
  extends React.ComponentProps<typeof CollapsibleTrigger> {
  duration?: number;
  isStreaming?: boolean;
}

export const ReasoningTrigger = (props: ReasoningTriggerProps) => {
  const { className, children, duration, isStreaming = false, ...rest } = props;
  let label = "Thought";
  if (isStreaming) {
    label = "Thinking";
  } else if (duration !== undefined) {
    label = `Thought for ${duration}s`;
  }

  return (
    <CollapsibleTrigger
      className={cn(
        "flex min-h-9 w-fit max-w-full items-center justify-start gap-2 rounded-lg py-1 text-start text-muted-foreground text-sm",
        "hover:text-foreground",
        "[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:shrink-0",
        className
      )}
      data-align="start"
      data-slot="reasoning-trigger"
      {...rest}
    >
      {children ?? (
        <>
          <BrainIcon aria-hidden="true" />
          <span className={cn("inline-block", isStreaming && "shimmer")}>
            {label}
          </span>
          <CollapsibleIndicator className="size-3.5" />
        </>
      )}
    </CollapsibleTrigger>
  );
};

export const ReasoningContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn(
        "ps-6 text-muted-foreground text-sm leading-relaxed",
        className
      )}
      data-slot="reasoning-content"
      {...rest}
    />
  );
};
