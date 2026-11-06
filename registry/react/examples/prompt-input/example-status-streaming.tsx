"use client";

import React from "react";
import {
  PromptInput,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/registry/react/components/prompt-input";

const Example = () => {
  const [status, setStatus] = React.useState<PromptInputStatus>("streaming");

  return (
    <PromptInput
      className="max-w-lg"
      onStop={() => setStatus("ready")}
      onSubmit={() => setStatus("streaming")}
      status={status}
    >
      <PromptInputTextarea
        aria-label="Follow-up prompt"
        defaultValue="Summarize the latest deploy."
        placeholder="Add a follow-up…"
      />
      <PromptInputFooter>
        <PromptInputSubmit size="icon-sm" />
      </PromptInputFooter>
    </PromptInput>
  );
};

export default Example;
