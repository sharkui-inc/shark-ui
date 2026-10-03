"use client";

import type React from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const items = [
  {
    choices: [
      { value: "incremental" },
      { value: "module" },
      { value: "rewrite" },
    ],
    name: "approach",
    required: true,
  },
] as const;

const QuestionnaireFreeform = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const approach = new FormData(event.currentTarget).get("approach");

    toast.create({
      description: `Approach: ${approach ?? "None"}`,
      title: "Approach selected",
      type: "success",
    });
  };

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      items={items}
      onSubmit={handleSubmit}
      shortcuts="letters"
    >
      <QuestionnaireItem name="approach">
        <QuestionnaireTitle>
          How should the agent approach this refactor?
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          Choose a strategy or write a more specific instruction.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="incremental">
            Make the smallest safe change
          </QuestionnaireChoice>
          <QuestionnaireChoice value="module">
            Refactor one module at a time
          </QuestionnaireChoice>
          <QuestionnaireChoice value="rewrite">
            Replace the implementation completely
          </QuestionnaireChoice>
          <QuestionnaireInput
            aria-label="Another refactoring approach"
            placeholder="Describe another approach…"
          />
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnaireSubmit>Use this approach</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
};

export default QuestionnaireFreeform;
