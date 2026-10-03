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
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
  type QuestionnaireValueChangeDetails,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const QuestionnaireConditional = () => {
  const [runtime, setRuntime] = React.useState("local");
  const items = React.useMemo(
    () => [
      { name: "runtime", required: true },
      { name: "environment", required: runtime === "cloud" },
      { name: "approval", required: true },
    ],
    [runtime]
  );

  const handleValueChange = (details: QuestionnaireValueChangeDetails) => {
    const { values } = details.value.runtime;
    const [runtimeAnswer] = values;

    if (runtimeAnswer) {
      setRuntime(runtimeAnswer);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    toast.create({
      description: `Runtime: ${formData.get("runtime") ?? "None"} · Environment: ${formData.get("environment") ?? "Not applicable"} · Approval: ${formData.get("approval") ?? "None"}`,
      title: "Execution plan saved",
      type: "success",
    });
  };

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="runtime"
      items={items}
      onSubmit={handleSubmit}
      onValueChange={handleValueChange}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem name="runtime">
        <QuestionnaireTitle>Where should the agent run?</QuestionnaireTitle>
        <QuestionnaireDescription>
          Cloud runs add an environment question to this flow.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="local">
            Local workspace
          </QuestionnaireChoice>
          <QuestionnaireChoice value="cloud">
            Cloud workspace
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="environment">
        <QuestionnaireTitle>
          Which cloud environment should it use?
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice disabled={runtime !== "cloud"} value="preview">
            Preview
          </QuestionnaireChoice>
          <QuestionnaireChoice disabled={runtime !== "cloud"} value="staging">
            Staging
          </QuestionnaireChoice>
          <QuestionnaireChoice disabled={runtime !== "cloud"} value="isolated">
            Isolated sandbox
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="approval">
        <QuestionnaireTitle>
          When should the agent request approval?
        </QuestionnaireTitle>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="writes">
            Before writing files
          </QuestionnaireChoice>
          <QuestionnaireChoice value="commands">
            Before running commands
          </QuestionnaireChoice>
          <QuestionnaireChoice value="sensitive">
            Only for sensitive actions
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <QuestionnairePrevious />
        <QuestionnaireNext>Next</QuestionnaireNext>
        <QuestionnaireSubmit>Save execution plan</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
};

export default QuestionnaireConditional;
