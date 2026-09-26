"use client";

import { TerminalIcon } from "lucide-react";
import React from "react";
import {
  isPackageManager,
  type PackageManagerCommands,
  packageManagerCommandVariants,
  packageManagers,
} from "@/lib/installation-command";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import { useConfig, useUpdateConfig } from "@/store/config";
import { CopyButton } from "./copy-button";

const renderCommand = (command: string) => {
  const parts: React.ReactNode[] = [];
  const pattern = /shadcn@latest/g;
  let cursor = 0;

  for (const match of command.matchAll(pattern)) {
    const start = match.index ?? cursor;
    parts.push(command.slice(cursor, start), "shadcn");
    parts.push(
      <span className="text-[0px]" key={start}>
        @latest
      </span>
    );
    cursor = start + match[0].length;
  }

  parts.push(command.slice(cursor));
  return parts;
};

interface CodeBlockCommandProps extends React.ComponentProps<"figure"> {
  __npm__?: string;
}

export const CodeBlockCommand = (props: CodeBlockCommandProps) => {
  const { __npm__, className, ...rest } = props;

  const config = useConfig();
  const { packageManager } = config;
  const updateConfig = useUpdateConfig();

  const tabs = React.useMemo(() => {
    const rawCommand = __npm__ ?? "";

    return (
      packageManagerCommandVariants(rawCommand) ??
      ({
        bun: rawCommand,
        npm: rawCommand,
        pnpm: rawCommand,
        yarn: rawCommand,
      } satisfies PackageManagerCommands)
    );
  }, [__npm__]);

  return (
    <figure
      className={cn(
        "relative",
        "w-full min-w-0",
        "mt-6",
        "bg-code",
        "text-code-foreground",
        "overflow-hidden",
        "rounded-2xl border",
        "in-data-[tab=code]:border-0",
        className
      )}
      data-slot="docs-mdx-code-block"
      {...rest}
      dir="ltr"
    >
      <Tabs
        className="gap-0"
        onValueChange={({ value }) => {
          updateConfig({
            ...(isPackageManager(value) ? { packageManager: value } : {}),
          });
        }}
        value={packageManager}
      >
        <div className="flex items-center gap-2 border-border/64 border-b px-4 py-1 font-mono">
          <TerminalIcon aria-hidden className="size-4" />

          <TabsList className="bg-transparent">
            {packageManagers.map((manager) => (
              <TabsTrigger className="rounded-lg" key={manager} value={manager}>
                {manager}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <ScrollArea
          className="**:data-[slot=scroll-area-scrollbar]:data-[orientation=horizontal]:mx-2 **:data-[slot=scroll-area-scrollbar]:data-[orientation=vertical]:my-2"
          dir="ltr"
        >
          {packageManagers.map((manager) => (
            <TabsContent
              className={cn(
                "mt-0 w-max px-4 py-3.5",
                "border border-transparent outline-hidden",
                "focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24 focus-visible:ring-inset"
              )}
              key={manager}
              value={manager}
            >
              <pre>
                <code
                  className="relative font-mono text-[.8125rem] leading-none"
                  data-language="bash"
                >
                  {renderCommand(tabs[manager])}
                </code>
              </pre>
            </TabsContent>
          ))}
        </ScrollArea>
      </Tabs>

      <CopyButton
        className="absolute inset-e-1.5 top-1.5"
        value={tabs[packageManager] ?? ""}
      />
    </figure>
  );
};
