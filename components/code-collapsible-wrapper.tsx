"use client";

import { Collapsible as ArkCollapsible } from "@ark-ui/react/collapsible";
import { createContext } from "@ark-ui/react/utils";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

interface CodeCollapsibleWrapperProps
  extends React.ComponentProps<typeof ArkCollapsible.Root> {}

const [CodeCollapsibleActionsProvider, useCodeCollapsibleActions] =
  createContext<HTMLElement | null>({
    defaultValue: null,
    hookName: "useCodeCollapsibleActions",
    name: "CodeCollapsibleActionsContext",
    providerName: "CodeCollapsibleWrapper",
    strict: false,
  });

export { useCodeCollapsibleActions };

export const CodeCollapsibleWrapper = (props: CodeCollapsibleWrapperProps) => {
  const { className, children, collapsedHeight = "256px", ...rest } = props;
  const [actionsElement, setActionsElement] =
    React.useState<HTMLElement | null>(null);

  return (
    <ArkCollapsible.Root
      className={cn("group/code-collapsible relative md:-mx-1", className)}
      collapsedHeight={collapsedHeight}
      lazyMount={false}
      unmountOnExit={false}
      {...rest}
    >
      <CodeCollapsibleActionsProvider value={actionsElement}>
        {/*
          Ark marks tabbable elements inside partial collapses as inert while
          closed. Keep visible actions outside Content so they remain usable.
          https://ark-ui.com/docs/components/collapsible#partial-collapse
        */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          ref={setActionsElement}
        />
        <div className="absolute inset-e-10 top-1.5 z-10 flex items-center">
          <ArkCollapsible.Trigger asChild>
            <Button className="opacity-64 hover:opacity-100" variant="ghost">
              <span className="group-data-[state=closed]/code-collapsible:hidden">
                Collapse
              </span>
              <span className="group-data-[state=open]/code-collapsible:hidden">
                Expand
              </span>
            </Button>
          </ArkCollapsible.Trigger>
        </div>

        <ArkCollapsible.Content
          className={cn(
            "[--radix-collapsible-content-height:var(--height)]",
            "relative mt-6 overflow-hidden [&>figure]:mt-0 [&>figure]:md:mx-0!",
            "transition-[height] duration-200",
            "data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down data-[state=closed]:duration-200 data-[state=open]:duration-200 data-[state=closed]:ease-out data-[state=open]:ease-out",
            "motion-reduce:animate-none motion-reduce:transition-none"
          )}
        >
          {children}
        </ArkCollapsible.Content>

        <ArkCollapsible.Trigger asChild>
          <button
            className={cn(
              "absolute inset-x-px -bottom-4 -mx-px",
              "h-20",
              "flex items-center justify-center",
              "bg-linear-to-b from-transparent via-background/64 to-background",
              "font-medium text-muted-foreground text-sm",
              "rounded-b-lg",
              "transition-colors",
              "border border-t-0 outline-hidden focus-visible:border-ring/64 focus-visible:border-t focus-visible:ring-2 focus-visible:ring-ring/24",
              "hover:text-foreground",
              "group-data-[state=open]/code-collapsible:hidden"
            )}
            type="button"
          >
            Expand
          </button>
        </ArkCollapsible.Trigger>
      </CodeCollapsibleActionsProvider>
    </ArkCollapsible.Root>
  );
};
