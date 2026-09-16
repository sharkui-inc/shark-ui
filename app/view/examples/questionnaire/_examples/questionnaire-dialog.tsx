"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/react/components/dialog";
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
  { name: "scope", required: true },
  { name: "tests", required: true },
] as const;

const QuestionnaireDialog = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setOpen(false);
    toast.create({
      description: `Scope: ${formData.get("scope") ?? "None"} · Verification: ${formData.get("tests") ?? "None"}`,
      title: "Clarification sent",
      type: "success",
    });
  };

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button variant="outline">Open clarification</Button>
      </DialogTrigger>
      <DialogContent>
        <Questionnaire
          defaultItem="scope"
          items={items}
          onSubmit={handleSubmit}
        >
          <QuestionnaireItem name="scope">
            <DialogHeader>
              <QuestionnaireProgress />
              <QuestionnaireTitle asChild>
                <DialogTitle>Which files are in scope?</DialogTitle>
              </QuestionnaireTitle>
              <QuestionnaireDescription asChild>
                <DialogDescription>
                  Choose how broadly the agent can update the workspace.
                </DialogDescription>
              </QuestionnaireDescription>
            </DialogHeader>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="component">
                Component only
              </QuestionnaireChoice>
              <QuestionnaireChoice value="feature">
                Complete feature directory
              </QuestionnaireChoice>
              <QuestionnaireChoice value="workspace">
                Any related workspace file
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>

          <QuestionnaireItem name="tests">
            <DialogHeader>
              <QuestionnaireProgress />
              <QuestionnaireTitle asChild>
                <DialogTitle>How much verification is needed?</DialogTitle>
              </QuestionnaireTitle>
              <QuestionnaireDescription asChild>
                <DialogDescription>
                  Choose the checks the agent should run before handoff.
                </DialogDescription>
              </QuestionnaireDescription>
            </DialogHeader>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="targeted">
                Targeted tests
              </QuestionnaireChoice>
              <QuestionnaireChoice value="package">
                Package tests
              </QuestionnaireChoice>
              <QuestionnaireChoice value="full">
                Full workspace verification
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <QuestionnaireActions>
              <QuestionnairePrevious />
              <QuestionnaireNext>Next</QuestionnaireNext>
              <QuestionnaireSubmit>Send answer</QuestionnaireSubmit>
            </QuestionnaireActions>
          </DialogFooter>
        </Questionnaire>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionnaireDialog;
