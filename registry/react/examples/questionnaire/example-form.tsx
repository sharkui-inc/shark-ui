"use client";

import type React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/registry/react/components/card";
import {
  Questionnaire,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const answer = new FormData(event.currentTarget).get("experience");
    toast.info({
      description: String(answer ?? "No answer"),
      title: "Form submitted",
    });
  };

  return (
    <Card className="w-full max-w-md">
      <Questionnaire items={items} onSubmit={onSubmit}>
        <CardContent>
          <QuestionnaireItem name="experience">
            <QuestionnaireTitle>How was your experience?</QuestionnaireTitle>
            <QuestionnaireDescription>
              Select one option.
            </QuestionnaireDescription>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="great">Great</QuestionnaireChoice>
              <QuestionnaireChoice value="good">Good</QuestionnaireChoice>
              <QuestionnaireChoice value="poor">
                Could be better
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>
        </CardContent>
        <CardFooter className="justify-end">
          <Button type="reset" variant="outline">
            Clear
          </Button>
          <QuestionnaireSubmit>Submit</QuestionnaireSubmit>
        </CardFooter>
      </Questionnaire>
    </Card>
  );
};

const items = [
  {
    name: "experience",
    required: true,
  },
] as const;

export default Example;
