"use client";

import React from "react";
import { Button } from "@/registry/react/components/button";
import {
  Context,
  ContextContent,
  ContextHeader,
  ContextIcon,
  ContextMeter,
  ContextTrigger,
} from "@/registry/react/components/context";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const Example = () => {
  const triggerId = React.useId();

  return (
    <div className="flex justify-center">
      <Context
        ids={{ trigger: triggerId }}
        maxTokens={200_000}
        usedTokens={110_000}
      >
        <Tooltip ids={{ trigger: triggerId }}>
          <TooltipTrigger asChild>
            <ContextTrigger asChild>
              <Button
                aria-label="Context usage"
                className="text-muted-foreground font-normal"
                size="icon-sm"
                variant="ghost"
              >
                <ContextIcon />
              </Button>
            </ContextTrigger>
          </TooltipTrigger>
          <TooltipContent>Show context usage</TooltipContent>
        </Tooltip>
        <ContextContent>
          <ContextHeader>
            <ContextMeter segments={contextUsage} />
          </ContextHeader>
        </ContextContent>
      </Context>
    </div>
  );
};

const contextUsage = [
  { color: "var(--chart-1)", title: "Input", value: 64_000 },
  { color: "var(--chart-2)", title: "Output", value: 24_000 },
  { color: "var(--chart-3)", title: "Reasoning", value: 12_500 },
  { color: "var(--chart-4)", title: "Cache", value: 9500 },
];

export default Example;
