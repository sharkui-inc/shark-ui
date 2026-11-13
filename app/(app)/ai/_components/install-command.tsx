"use client";

import type React from "react";
import { CopyButton } from "@/components/copy-button";
import { cn } from "@/lib/utils";

interface InstallCommandProps extends React.ComponentProps<"div"> {
  command: string;
}

export const InstallCommand = (props: InstallCommandProps) => {
  const { command, className, ...rest } = props;

  return (
    <div
      className={cn(
        "bg-code text-code-foreground",
        "inline-flex max-w-full items-center gap-2",
        "rounded-xl border px-3 py-2",
        "font-mono text-sm",
        className
      )}
      {...rest}
    >
      <code className="min-w-0 truncate">
        <span className="text-muted-foreground">$</span> {command}
      </code>
      <CopyButton className="shrink-0" value={command} />
    </div>
  );
};
