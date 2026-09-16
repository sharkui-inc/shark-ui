"use client";

import { createContext } from "@ark-ui/react/utils";
import type React from "react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

export interface ReasoningTranslations {
  /**
   * The thinking label
   *
   * @default "Thinking"
   */
  thinking: React.ReactNode;
  /**
   * The thought label
   *
   * @default "Thought"
   */
  thought: React.ReactNode;
  /**
   * The thought for duration label
   *
   * @default (duration) => `Thought for ${duration}s`
   */
  thoughtForDuration: (duration: number) => React.ReactNode;
}

interface ReasoningProps extends React.ComponentProps<typeof Collapsible> {
  /**
   * The duration of the reasoning
   */
  duration?: number;
  /**
   * Whether the reasoning is streaming
   */
  isStreaming?: boolean;
  /**
   * The translations for the reasoning
   */
  translations?: Partial<ReasoningTranslations>;
}

type ReasoningContextValue = Pick<
  ReasoningProps,
  "duration" | "isStreaming" | "translations"
>;

export const Reasoning = (props: ReasoningProps) => {
  const {
    defaultOpen,
    duration,
    isStreaming = false,
    translations,
    className,
    ...rest
  } = props;

  return (
    <ReasoningProvider
      value={{
        duration,
        isStreaming,
        translations,
      }}
    >
      <Collapsible
        className={cn("w-full min-w-0 text-sm", className)}
        data-duration={duration}
        data-slot="reasoning"
        data-streaming={isStreaming ? "" : undefined}
        defaultOpen={defaultOpen ?? isStreaming}
        {...rest}
      />
    </ReasoningProvider>
  );
};

const getReasoningLabel = (context: ReasoningContextValue) => {
  const { duration, isStreaming, translations } = context;

  if (isStreaming) {
    return translations?.thinking ?? DEFAULT_TRANSLATIONS.thinking;
  }

  if (duration !== undefined) {
    return (
      translations?.thoughtForDuration?.(duration) ??
      DEFAULT_TRANSLATIONS.thoughtForDuration(duration)
    );
  }

  return translations?.thought ?? DEFAULT_TRANSLATIONS.thought;
};

export const ReasoningTrigger = (
  props: React.ComponentProps<typeof CollapsibleTrigger>
) => {
  const { className, children, ...rest } = props;

  const reasoning = _useReasoning();
  const label = getReasoningLabel(reasoning);

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
        <span
          className={cn("inline-block", reasoning.isStreaming && "shimmer")}
        >
          {label}
        </span>
      )}

      <CollapsibleIndicator className="size-3.5" />
    </CollapsibleTrigger>
  );
};

export const ReasoningContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn("text-muted-foreground text-sm leading-relaxed", className)}
      data-slot="reasoning-content"
      {...rest}
    />
  );
};

const DEFAULT_TRANSLATIONS: ReasoningTranslations = {
  thinking: "Thinking",
  thought: "Thought",
  thoughtForDuration: (duration) => `Thought for ${duration}s`,
};

const [ReasoningProvider, _useReasoning] = createContext<ReasoningContextValue>(
  {
    name: "ReasoningContext",
    providerName: "Reasoning",
  }
);
