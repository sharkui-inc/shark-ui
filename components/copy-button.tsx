"use client";

import type React from "react";
import { createPortal } from "react-dom";
import { useCodeCollapsibleActions } from "@/components/code-collapsible-wrapper";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardIndicator,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

export const CopyButton = (props: React.ComponentProps<typeof Clipboard>) => {
  const { className, children, ...rest } = props;
  const actionsElement = useCodeCollapsibleActions();

  const button = (
    <Tooltip openDelay={400}>
      <Clipboard
        rootClassName={cn(
          "z-10",
          actionsElement && "pointer-events-auto",
          className
        )}
        {...rest}
      >
        <TooltipTrigger asChild>
          <ClipboardTrigger asChild>
            <Button
              className="opacity-64 hover:opacity-100 focus-visible:opacity-100"
              size="icon-sm"
              variant="ghost"
            >
              <ClipboardIndicator />
              {children}
            </Button>
          </ClipboardTrigger>
        </TooltipTrigger>
        <TooltipContent>Copy to clipboard</TooltipContent>
      </Clipboard>
    </Tooltip>
  );

  return actionsElement ? createPortal(button, actionsElement) : button;
};
