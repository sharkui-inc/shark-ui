"use client";

import type React from "react";
import { Button } from "@/registry/react/components/button";
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
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const items = [
  { name: "change", required: true },
  { name: "verification", required: true },
  { name: "notes" },
] as const;

const QuestionnaireResume = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const answers = {
      change: formData.get("change"),
      notes: formData.get("notes"),
      verification: formData.getAll("verification"),
    };

    toast.create({
      description: `Migration: ${answers.change ?? "None"} · Verification: ${answers.verification.join(", ") || "None"} · Notes: ${answers.notes || "None"}`,
      title: "Draft updated",
      type: "success",
    });
  };

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      defaultItem="verification"
      defaultValue={{
        change: { input: "", values: ["incremental"] },
        notes: { input: "Keep the existing public API stable.", values: [] },
        verification: { input: "", values: ["tests", "typecheck"] },
      }}
      items={items}
      onReset={() =>
        toast.create({
          title: "Saved answers restored",
          type: "success",
        })
      }
      onSubmit={handleSubmit}
    >
      <QuestionnaireProgress />

      <QuestionnaireItem name="change">
        <QuestionnaireTitle>What kind of migration is this?</QuestionnaireTitle>
        <QuestionnaireDescription>
          This answer was saved during the previous session.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="incremental">
            Incremental migration
          </QuestionnaireChoice>
          <QuestionnaireChoice value="cutover">
            Single cutover
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="verification">
        <QuestionnaireTitle>
          How should the migration be verified?
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          These checks were selected during the previous session.
        </QuestionnaireDescription>
        <QuestionnaireChoices>
          <QuestionnaireChoice value="tests">
            Run migration tests
          </QuestionnaireChoice>
          <QuestionnaireChoice value="typecheck">
            Run the typecheck
          </QuestionnaireChoice>
          <QuestionnaireChoice value="manual">
            Perform a manual smoke test
          </QuestionnaireChoice>
        </QuestionnaireChoices>
        <QuestionnaireError />
      </QuestionnaireItem>

      <QuestionnaireItem name="notes">
        <QuestionnaireTitle>
          Anything else the agent should remember?
        </QuestionnaireTitle>
        <QuestionnaireDescription>
          This note was saved with the draft.
        </QuestionnaireDescription>
        <QuestionnaireInput aria-label="Saved migration note" />
      </QuestionnaireItem>

      <QuestionnaireActions>
        <Button type="reset" variant="outline">
          Reset changes
        </Button>
        <QuestionnairePrevious />
        <QuestionnaireNext>Next</QuestionnaireNext>
        <QuestionnaireSubmit>Update draft</QuestionnaireSubmit>
      </QuestionnaireActions>
    </Questionnaire>
  );
};

export default QuestionnaireResume;
