"use client";

import { RefreshCwIcon } from "lucide-react";
import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/react/components/reasoning";

const STREAM_MS = 3000;

const Example = () => {
  const [runId, setRunId] = React.useState(0);

  return (
    <div className="relative flex size-full items-center justify-center">
      <div className="absolute inset-e-4 top-4">
        <Button
          aria-label="Reload"
          size="icon-md"
          variant="ghost"
          onClick={() => setRunId((id) => id + 1)}
        >
          <RefreshCwIcon aria-hidden />
        </Button>
      </div>

      <StreamingReasoning key={runId} />
    </div>
  );
};

const StreamingReasoning = () => {
  const [isStreaming, setIsStreaming] = React.useState(true);
  const [duration, setDuration] = React.useState<number | undefined>();

  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsStreaming(false);
      setDuration(STREAM_MS / 1000);
    }, STREAM_MS);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Reasoning
      className="max-w-lg"
      defaultOpen
      duration={duration}
      isStreaming={isStreaming}
    >
      <ReasoningTrigger />
      <ReasoningContent>
        Scanning helpers.ts for the current validation path...
      </ReasoningContent>
    </Reasoning>
  );
};

export default Example;
