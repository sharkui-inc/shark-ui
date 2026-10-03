"use client";

import React from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  type QuestionnaireItemChangeDetails,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
  type QuestionnaireValue,
  type QuestionnaireValueChangeDetails,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const items = [
  { name: "permission", required: true },
  { name: "verification", required: true },
] as const;

type ItemName = "permission" | "verification";

const hasAnswer = (answer: QuestionnaireValue[keyof QuestionnaireValue]) =>
  Boolean(answer?.input.trim() || answer?.values.some((value) => value.trim()));

const QuestionnaireNavigationState = () => {
  const [item, setItem] = React.useState<ItemName>("permission");
  const [value, setValue] = React.useState<QuestionnaireValue>({});
  const unanswered = !hasAnswer(value[item]);

  const handleItemChange = (details: QuestionnaireItemChangeDetails) =>
    setItem(details.item as ItemName);

  const handleValueChange = (details: QuestionnaireValueChangeDetails) =>
    setValue(details.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    toast.create({
      description: `Permission: ${formData.get("permission") ?? "None"} · Verification: ${formData.get("verification") ?? "None"}`,
      title: "Permissions saved",
      type: "success",
    });
  };

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      item={item}
      items={items}
      onItemChange={handleItemChange}
      onSubmit={handleSubmit}
      onValueChange={handleValueChange}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem name="permission">
        <QuestionnaireTitle>What may the agent modify?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Next is intentionally disabled until an answer is selected.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="files">Project files</QuestionnaireChoice>
          <QuestionnaireChoice value="tests">
            Project files and tests
          </QuestionnaireChoice>
          <QuestionnaireChoice value="config">
            Files, tests, and configuration
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="verification">
        <QuestionnaireTitle>
          What must pass before completion?
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="tests">Tests</QuestionnaireChoice>
          <QuestionnaireChoice value="types">
            Tests and types
          </QuestionnaireChoice>
          <QuestionnaireChoice value="all">
            Tests, types, and visual QA
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext disabled={unanswered} variant="secondary">
          Next
        </QuestionnaireNext>
        <QuestionnaireSubmit disabled={unanswered}>
          Save permissions
        </QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
};

export default QuestionnaireNavigationState;
