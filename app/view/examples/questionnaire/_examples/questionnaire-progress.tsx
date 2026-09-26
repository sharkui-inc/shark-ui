"use client";

import React from "react";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireError,
  QuestionnaireItem,
  type QuestionnaireItemChangeDetails,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const items = [
  { name: "scope", required: true },
  { name: "strategy", required: true },
  { name: "tests", required: true },
  { name: "delivery", required: true },
] as const;

const pageNames = ["scope", "strategy", "tests", "delivery"] as const;

const QuestionnaireProgressExample = () => {
  const [current, setCurrent] = React.useState(1);

  const handleItemChange = (details: QuestionnaireItemChangeDetails) =>
    setCurrent(
      pageNames.indexOf(details.item as (typeof pageNames)[number]) + 1
    );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    toast.create({
      description: `Scope: ${formData.get("scope") ?? "None"} · Commits: ${formData.get("strategy") ?? "None"} · Tests: ${formData.get("tests") ?? "None"} · Delivery: ${formData.get("delivery") ?? "None"}`,
      title: "Pull request plan ready",
      type: "success",
    });
  };

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="scope"
      items={items}
      onItemChange={handleItemChange}
      onSubmit={handleSubmit}
    >
      <div className="w-full">
        <div aria-hidden className="mb-2 flex gap-1.5">
          {items.map((definition, index) => (
            <span
              className={
                index < current
                  ? "h-1.5 flex-1 rounded-full bg-primary"
                  : "h-1.5 flex-1 rounded-full bg-muted"
              }
              key={definition.name}
            />
          ))}
        </div>
        <span className="text-muted-foreground">
          Checkpoint {current} of {items.length}
        </span>
      </div>

      <QuestionnaireItem name="scope">
        <QuestionnaireTitle>How large is the change?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="small">Small patch</QuestionnaireChoice>
          <QuestionnaireChoice value="medium">
            Feature-sized change
          </QuestionnaireChoice>
          <QuestionnaireChoice value="large">
            Cross-package change
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="strategy">
        <QuestionnaireTitle>
          How should commits be organized?
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="single">
            Single commit
          </QuestionnaireChoice>
          <QuestionnaireChoice value="logical">
            Logical commits
          </QuestionnaireChoice>
          <QuestionnaireChoice value="squash">
            Squash before review
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="tests">
        <QuestionnaireTitle>Which tests should run?</QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="targeted">
            Targeted tests
          </QuestionnaireChoice>
          <QuestionnaireChoice value="package">
            Package suite
          </QuestionnaireChoice>
          <QuestionnaireChoice value="workspace">
            Full workspace
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="delivery">
        <QuestionnaireTitle>
          How should the work be delivered?
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="patch">Patch only</QuestionnaireChoice>
          <QuestionnaireChoice value="commit">
            Committed locally
          </QuestionnaireChoice>
          <QuestionnaireChoice value="branch">
            Push a review branch
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext>Next</QuestionnaireNext>
        <QuestionnaireSubmit>Finish plan</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
};

export default QuestionnaireProgressExample;
