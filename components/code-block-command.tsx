"use client";

import { TerminalIcon } from "lucide-react";
import React from "react";
import {
  formatShadcnCommandDisplay,
  packageManagerCommandVariants,
} from "@/lib/shadcn-command";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import {
  type PackageManager,
  useConfig,
  useUpdateConfig,
} from "@/store/config";
import { CopyButton } from "./copy-button";

interface CodeBlockCommandProps extends React.ComponentProps<"figure"> {
  __npm__?: string;
}

export const CodeBlockCommand = (props: CodeBlockCommandProps) => {
  const { __npm__, className, ...rest } = props;

  const config = useConfig();
  const updateConfig = useUpdateConfig();

  const packageManager = config.packageManager || "pnpm";

  const tabs = React.useMemo(
    () =>
      packageManagerCommandVariants(__npm__ ?? "") ?? {
        bun: __npm__ ?? "",
        npm: __npm__ ?? "",
        pnpm: __npm__ ?? "",
        yarn: __npm__ ?? "",
      },
    [__npm__]
  );

  return (
    <figure
      className={cn(
        "relative mt-6 w-full min-w-0 overflow-hidden rounded-2xl border bg-code text-code-foreground outline-none",
        "in-data-[tab=code]:border-0",
        className
      )}
      data-slot="docs-mdx-code-block"
      {...rest}
    >
      <Tabs
        className="gap-0"
        onValueChange={({ value }) => {
          updateConfig({
            packageManager: value as PackageManager,
          });
        }}
        value={packageManager}
      >
        <div className="flex items-center gap-2 border-border/64 border-b px-4 py-1 font-mono">
          <TerminalIcon aria-hidden className="size-4" />

          <TabsList className="bg-transparent">
            {Object.entries(tabs).map(([key]) => (
              <TabsTrigger className="rounded-lg" key={key} value={key}>
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <ScrollArea className="**:data-[slot=scroll-area-scrollbar]:data-[orientation=horizontal]:mx-2 **:data-[slot=scroll-area-scrollbar]:data-[orientation=vertical]:my-2">
          {Object.entries(tabs).map(([key, value]) => (
            <TabsContent
              className="mt-0 w-max px-4 py-3.5"
              key={key}
              value={key}
            >
              <pre>
                <code
                  className="relative font-mono text-[.8125rem] leading-none"
                  data-language="bash"
                >
                  {formatShadcnCommandDisplay(value)}
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
