"use client";

import type React from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const items = [
  {
    choices: [
      { value: "source" },
      { value: "tests" },
      { value: "docs" },
      { value: "history" },
    ],
    multiple: true,
    name: "context",
    required: true,
  },
] as const;

const QuestionnaireMultiple = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const context = new FormData(event.currentTarget).getAll("context");

    toast.create({
      description: `Context: ${context.join(", ") || "None"}`,
      title: "Context selected",
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
      <QuestionnaireItem name="context">
        <QuestionnaireTitle>
          What context should the agent inspect?
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          Select every source that may affect the implementation.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="source">
            Relevant source files
          </QuestionnaireChoice>
          <QuestionnaireChoice value="tests">
            Existing tests
          </QuestionnaireChoice>
          <QuestionnaireChoice value="docs">
            Architecture documentation
          </QuestionnaireChoice>
          <QuestionnaireChoice value="history">
            Recent commit history
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnaireSubmit>Share context</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
};

export default QuestionnaireMultiple;
