"use client";

import { GlobeIcon, PaperclipIcon } from "lucide-react";
import { useState } from "react";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/registry/react/components/prompt-input";

const Example = () => {
  const [status, setStatus] = useState<PromptInputStatus>("ready");
  const [value, setValue] = useState("Summarize the latest deploy.");

  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <PromptInput
        onStop={() => setStatus("ready")}
        onSubmit={() => setStatus("streaming")}
        status={status}
      >
        <PromptInputTextarea
          aria-label="Prompt"
          onChange={(event) => setValue(event.target.value)}
          placeholder="Ask the agent to do something…"
          value={value}
        />
        <PromptInputFooter>
          <PromptInputTools>
            <PromptInputButton aria-label="Attach file" size="icon-xs">
              <PaperclipIcon aria-hidden="true" />
            </PromptInputButton>
            <PromptInputButton size="xs" variant="outline">
              <GlobeIcon aria-hidden="true" />
              Search
            </PromptInputButton>
          </PromptInputTools>
          <PromptInputSubmit />
        </PromptInputFooter>
      </PromptInput>
      <p className="text-muted-foreground text-sm">
        Status: {status} · {value || "Empty"}
      </p>
    </div>
  );
};

export default Example;
