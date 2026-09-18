"use client";

import React from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
  type QuestionnaireValue,
  type QuestionnaireValueChangeDetails,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const items = [
  { name: "task", required: true },
  { name: "constraints" },
  { name: "review", required: true },
] as const;

const hasAnswer = (answer: QuestionnaireValue[keyof QuestionnaireValue]) =>
  Boolean(answer?.input.trim() || answer?.values.some((value) => value.trim()));

const QuestionnaireSkipExample = () => {
  const [value, setValue] = React.useState<QuestionnaireValue>({});

  const { constraints } = value;
  let constraintStatus: "unanswered" | "answered" | "skipped";

  if (!constraints) {
    constraintStatus = "unanswered";
  } else if (hasAnswer(constraints)) {
    constraintStatus = "answered";
  } else {
    constraintStatus = "skipped";
  }

  const handleValueChange = (details: QuestionnaireValueChangeDetails) =>
    setValue(details.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const answers = {
      constraintStatus,
      constraints: formData.get("constraints"),
      review: formData.get("review"),
      task: formData.get("task"),
    };

    toast.create({
      description: `Task: ${answers.task ?? "None"} · Constraints: ${
        answers.constraintStatus === "skipped"
          ? "Skipped"
          : (answers.constraints ?? "None")
      } · Review: ${answers.review ?? "None"}`,
      title: "Agent brief submitted",
      type: "success",
    });
  };

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="task"
      items={items}
      onSubmit={handleSubmit}
      onValueChange={handleValueChange}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem name="task">
        <QuestionnaireTitle>What kind of change is this?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Choose the category that best describes the work.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="feature">New feature</QuestionnaireChoice>
          <QuestionnaireChoice value="fix">Bug fix</QuestionnaireChoice>
          <QuestionnaireChoice value="refactor">Refactor</QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="constraints">
        <QuestionnaireTitle>
          Are there any implementation constraints?
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          Answer if needed, or intentionally skip this question.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="no-dependencies">
            Do not add dependencies
          </QuestionnaireChoice>
          <QuestionnaireChoice value="no-migrations">
            Do not change the database
          </QuestionnaireChoice>
          <QuestionnaireChoice value="preserve-api">
            Preserve the public API
          </QuestionnaireChoice>
          <QuestionnaireInput
            aria-label="Another implementation constraint"
            placeholder="Describe another constraint…"
          />
        </QuestionnaireChoices>
      </QuestionnaireItem>

      <QuestionnaireItem name="review">
        <QuestionnaireTitle>
          How should the work be reviewed?
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          Choose the checks the agent should complete before handoff.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="tests">
            Run the test suite
          </QuestionnaireChoice>
          <QuestionnaireChoice value="diff">
            Review the final diff
          </QuestionnaireChoice>
          <QuestionnaireChoice value="both">
            Tests and diff review
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireSkip />
        <QuestionnaireNext>Next</QuestionnaireNext>
        <QuestionnaireSubmit>Submit brief</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
};

export default QuestionnaireSkipExample;
