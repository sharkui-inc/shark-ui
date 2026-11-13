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
  const [value, setValue] = React.useState("Summarize the latest deploy.");

  return (
    <PromptInput
      className="max-w-lg"
      onStop={() => setStatus("ready")}
      onSubmit={() => setStatus("streaming")}
      status={status}
    >
      <PromptInputTextarea
        aria-label="Follow-up prompt"
        onChange={(event) => setValue(event.target.value)}
        placeholder="Add a follow-up…"
        value={value}
      />
      <PromptInputFooter>
        <PromptInputSubmit disabled={!value.trim()} size="icon-sm" />
      </PromptInputFooter>
    </PromptInput>
  );
};

export default Example;
