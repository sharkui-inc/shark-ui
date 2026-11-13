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
  const { userName = "James", onSuggestion } = props;

  return (
    <State className="min-h-svh px-6 py-16 md:px-6 md:py-16">
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
            onClick={() => onSuggestion?.("Turn this launch brief into a plan")}
          >
            Turn this launch brief into a plan
          </Suggestion>
          <Suggestion
            onClick={() => onSuggestion?.("Summarize research themes")}
          >
            Summarize research themes
          </Suggestion>
          <Suggestion
            onClick={() => onSuggestion?.("Draft a release checklist")}
          >
            Draft a release checklist
          </Suggestion>
        </Suggestions>
      </StateContent>
    </State>
  );
};
