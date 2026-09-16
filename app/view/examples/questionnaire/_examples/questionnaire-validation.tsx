"use client";

import type React from "react";
import { useState } from "react";
import { z } from "zod";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireItem,
  type QuestionnaireItemChangeDetails,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const items = [
  { name: "detail", required: true },
  { name: "audience", required: true },
] as const;

const questionnaireSchema = z
  .object({
    audience: z.enum(["team", "public"]),
    detail: z.enum(["summary", "complete"]),
  })
  .superRefine((answers, context) => {
    if (answers.audience === "public" && answers.detail === "summary") {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Public answers need enough context. Choose a complete answer.",
        path: ["detail"],
      });
    }
  });

type QuestionnaireItemName = keyof z.infer<typeof questionnaireSchema>;
type QuestionnaireErrors = Partial<Record<QuestionnaireItemName, string>>;

const ValidationProgress = ({
  index,
  total,
}: {
  index: number;
  total: number;
}) => (
  <span className="min-w-0 text-muted-foreground tabular-nums">
    {index} / {total}
  </span>
);

const QuestionnaireValidation = () => {
  const [item, setItem] = useState<QuestionnaireItemName>("detail");
  const [errors, setErrors] = useState<QuestionnaireErrors>({});

  const index = items.findIndex((definition) => definition.name === item) + 1;

  const clearError = (name: QuestionnaireItemName) => {
    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });
  };

  const handleItemChange = (details: QuestionnaireItemChangeDetails) =>
    setItem(details.item as QuestionnaireItemName);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = questionnaireSchema.safeParse(
      Object.fromEntries(new FormData(event.currentTarget))
    );

    if (result.success) {
      setErrors({});
      toast.create({
        description: `Detail: ${result.data.detail} · Audience: ${result.data.audience}`,
        title: "Agent response configured",
        type: "success",
      });
      return;
    }

    const nextErrors: QuestionnaireErrors = {};

    for (const issue of result.error.issues) {
      const [name] = issue.path;

      if ((name === "detail" || name === "audience") && !nextErrors[name]) {
        nextErrors[name] = issue.message;
      }
    }

    const firstInvalidItem = result.error.issues[0]?.path[0];

    setErrors(nextErrors);

    if (firstInvalidItem === "detail" || firstInvalidItem === "audience") {
      setItem(firstInvalidItem);
    }
  };

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      item={item}
      items={items}
      onItemChange={handleItemChange}
      onSubmit={handleSubmit}
    >
      <Card className="w-full">
        <QuestionnaireItem name="detail">
          <CardHeader>
            <QuestionnaireTitle>
              How much detail should the answer include?
            </QuestionnaireTitle>
            <QuestionnaireDescription>
              Choose the response depth.
            </QuestionnaireDescription>
            <CardAction>
              <ValidationProgress index={index} total={items.length} />
            </CardAction>
          </CardHeader>
          <CardContent>
            <QuestionnaireChoices>
              <QuestionnaireChoice
                onClick={() => clearError("detail")}
                value="summary"
              >
                Concise summary
              </QuestionnaireChoice>
              <QuestionnaireChoice
                onClick={() => clearError("detail")}
                value="complete"
              >
                Complete answer
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            {errors.detail ? (
              <p className="text-destructive dark:text-destructive-foreground">
                {errors.detail}
              </p>
            ) : null}
          </CardContent>
        </QuestionnaireItem>

        <QuestionnaireItem name="audience">
          <CardHeader>
            <QuestionnaireTitle>Who will read the answer?</QuestionnaireTitle>
            <QuestionnaireDescription>
              Public answers require complete context.
            </QuestionnaireDescription>
            <CardAction>
              <ValidationProgress index={index} total={items.length} />
            </CardAction>
          </CardHeader>
          <CardContent>
            <QuestionnaireChoices>
              <QuestionnaireChoice
                onClick={() => clearError("audience")}
                value="team"
              >
                My team
              </QuestionnaireChoice>
              <QuestionnaireChoice
                onClick={() => clearError("audience")}
                value="public"
              >
                Public audience
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            {errors.audience ? (
              <p className="text-destructive dark:text-destructive-foreground">
                {errors.audience}
              </p>
            ) : null}
          </CardContent>
        </QuestionnaireItem>

        <CardFooter>
          <QuestionnaireActions>
            <QuestionnairePrevious />
            <QuestionnaireNext>Next</QuestionnaireNext>
            <QuestionnaireSubmit>Validate answers</QuestionnaireSubmit>
          </QuestionnaireActions>
        </CardFooter>
      </Card>
    </Questionnaire>
  );
};

export default QuestionnaireValidation;
