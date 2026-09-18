"use client";

import React from "react";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceShortcut,
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
    choices: [{ value: "inspect" }, { value: "tests" }, { value: "patch" }],
    name: "action",
    required: true,
  },
] as const;

type ShortcutMode = "letters" | "numbers" | undefined;

const QuestionnaireShortcuts = () => {
  const [shortcuts, setShortcuts] = React.useState<ShortcutMode>("letters");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const action = new FormData(event.currentTarget).get("action");

    toast.create({
      description: `Action: ${action ?? "None"} · Shortcuts: ${shortcuts ?? "none"}`,
      title: "Next action selected",
      type: "success",
    });
  };

  return (
    <div className="relative mx-auto flex h-full w-full max-w-md flex-col">
      <NativeSelect
        aria-label="Shortcut style"
        className="absolute end-0 top-0"
        onChange={({ target }) => {
          const { value } = target;
          setShortcuts(
            value === "letters" || value === "numbers" ? value : undefined
          );
        }}
        value={shortcuts ?? "none"}
      >
        <NativeSelectOption value="none">No shortcuts</NativeSelectOption>
        <NativeSelectOption value="letters">Letters</NativeSelectOption>
        <NativeSelectOption value="numbers">Numbers</NativeSelectOption>
      </NativeSelect>

      <Questionnaire
        className="mt-auto"
        items={items}
        onSubmit={handleSubmit}
        shortcuts={shortcuts}
      >
        <QuestionnaireItem name="action">
          <QuestionnaireTitle>
            What should the agent do next?
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            Use the displayed shortcut or navigate with the keyboard.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="inspect">
              Inspect the implementation
              <QuestionnaireChoiceShortcut />
            </QuestionnaireChoice>
            <QuestionnaireChoice value="tests">
              Run the relevant tests
              <QuestionnaireChoiceShortcut />
            </QuestionnaireChoice>
            <QuestionnaireChoice value="patch">
              Prepare the patch
              <QuestionnaireChoiceShortcut />
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>

        <QuestionnaireActions>
          <QuestionnaireSubmit>Confirm action</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
};

export default QuestionnaireShortcuts;
