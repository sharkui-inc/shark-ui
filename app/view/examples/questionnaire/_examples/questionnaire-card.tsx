"use client";

import type React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const items = [
  {
    choices: [{ value: "fix" }, { value: "refactor" }, { value: "docs" }],
    name: "task",
    required: true,
  },
  {
    choices: [{ value: "summary" }, { value: "files" }, { value: "review" }],
    name: "output",
    required: true,
  },
] as const;

const QuestionnaireCard = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    toast.create({
      description: `Task: ${formData.get("task") ?? "None"} · Handoff: ${formData.get("output") ?? "None"}`,
      title: "Agent task created",
      type: "success",
    });
  };

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="task"
      items={items}
      onSubmit={handleSubmit}
      shortcuts="numbers"
    >
      <Card>
        <QuestionnaireItem name="task">
          <CardHeader>
            <QuestionnaireTitle asChild>
              <CardTitle>What should the agent work on?</CardTitle>
            </QuestionnaireTitle>
            <QuestionnaireDescription asChild>
              <CardDescription>
                Choose the task that should be handled next.
              </CardDescription>
            </QuestionnaireDescription>
            <CardAction>
              <QuestionnaireProgress />
            </CardAction>
          </CardHeader>
          <CardContent>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="fix">
                Fix the failing tests
              </QuestionnaireChoice>
              <QuestionnaireChoice value="refactor">
                Refactor the data layer
              </QuestionnaireChoice>
              <QuestionnaireChoice value="docs">
                Update the integration guide
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </CardContent>
        </QuestionnaireItem>

        <QuestionnaireItem name="output">
          <CardHeader>
            <QuestionnaireTitle asChild>
              <CardTitle>What should the final handoff include?</CardTitle>
            </QuestionnaireTitle>
            <QuestionnaireDescription asChild>
              <CardDescription>
                Pick the level of detail needed for review.
              </CardDescription>
            </QuestionnaireDescription>
            <CardAction>
              <QuestionnaireProgress />
            </CardAction>
          </CardHeader>
          <CardContent>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="summary">
                Summary only
              </QuestionnaireChoice>
              <QuestionnaireChoice value="files">
                Summary and changed files
              </QuestionnaireChoice>
              <QuestionnaireChoice value="review">
                Full review handoff
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </CardContent>
        </QuestionnaireItem>

        <CardFooter>
          <QuestionnaireActions className="w-full">
            <QuestionnairePrevious />
            <QuestionnaireNext>Next</QuestionnaireNext>
            <QuestionnaireSubmit>Create task</QuestionnaireSubmit>
          </QuestionnaireActions>
        </CardFooter>
      </Card>
    </Questionnaire>
  );
};

export default QuestionnaireCard;
