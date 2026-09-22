"use client";

import { RefreshCwIcon, TriangleAlertIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  PromptInput,
  PromptInputFooter,
  type PromptInputStatus,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/registry/react/components/prompt-input";

const Example = () => {
  const [status, setStatus] = React.useState<PromptInputStatus>("error");
  const [value, setValue] = React.useState(
    "Review the authentication changes before release."
  );

  return (
    <div className="flex w-full max-w-lg flex-col gap-2">
      {status === "error" ? (
        <div className="flex items-center justify-between gap-2 px-1">
          <span className="flex items-center gap-2 text-destructive text-xs">
            <TriangleAlertIcon aria-hidden className="size-3.5" />
            Couldn’t finish the review.
          </span>
          <Button onClick={() => setStatus("ready")} size="xs" variant="ghost">
            <RefreshCwIcon aria-hidden data-icon="inline-start" />
            Retry
          </Button>
        </div>
      ) : null}

      <PromptInput
        onStop={() => setStatus("ready")}
        onSubmit={() => setStatus("streaming")}
        status={status}
      >
        <PromptInputTextarea
          aria-label="Prompt"
          onChange={(event) => setValue(event.target.value)}
          placeholder="Describe what you need reviewed…"
          value={value}
        />
        <PromptInputFooter>
          <PromptInputSubmit size="icon-sm" />
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
};

export default Example;
