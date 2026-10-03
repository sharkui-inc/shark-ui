"use client";

import { BotIcon } from "lucide-react";
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

interface ChatEmptyProps {
  onSuggestion?: (text: string) => void;
  userName?: string;
}

export const ChatEmpty = (props: ChatEmptyProps) => {
  const { onSuggestion, userName = "James" } = props;

  return (
    <State className="min-h-svh px-6 py-16 md:px-6 md:py-16">
      <StateHeader>
        <StateMedia>
          <BotIcon aria-hidden className="size-8 text-muted-foreground" />
        </StateMedia>
        <StateTitle asChild>
          <h2>Hello {userName}</h2>
        </StateTitle>
        <StateDescription>What can I help you with today?</StateDescription>
      </StateHeader>
      <StateContent className="max-w-lg">
        <Suggestions>
          <Suggestion
            onClick={onSuggestion}
            suggestion="Turn this launch brief into a plan"
          />
          <Suggestion
            onClick={onSuggestion}
            suggestion="Summarize research themes"
          />
          <Suggestion
            onClick={onSuggestion}
            suggestion="Draft a release checklist"
          />
        </Suggestions>
      </StateContent>
    </State>
  );
};
