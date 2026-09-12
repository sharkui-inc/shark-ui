"use client";

import { Collapsible as ArkCollapsible } from "@ark-ui/react/collapsible";
import {
  type ComponentProps,
  createContext,
  useContext,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

interface CodeCollapsibleWrapperProps
  extends ComponentProps<typeof ArkCollapsible.Root> {}

const CodeCollapsibleActionsContext = createContext<HTMLElement | null>(null);

export const useCodeCollapsibleActions = () =>
  useContext(CodeCollapsibleActionsContext);

export const CodeCollapsibleWrapper = (props: CodeCollapsibleWrapperProps) => {
  const { className, children, collapsedHeight = "256px", ...rest } = props;
  const [actionsElement, setActionsElement] = useState<HTMLElement | null>(
    null
  );

  return (
    <ArkCollapsible.Root
      className={cn("group/code-collapsible relative md:-mx-1", className)}
      collapsedHeight={collapsedHeight}
      lazyMount={false}
      unmountOnExit={false}
      {...rest}
    >
      <CodeCollapsibleActionsContext.Provider value={actionsElement}>
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
            "relative mt-6 overflow-hidden [&>figure]:mt-0 [&>figure]:md:mx-0!",
            "transition-[height] duration-200",
            "data-[state=closed]:animate-collapse data-[state=open]:animate-expand",
            "motion-reduce:animate-none motion-reduce:transition-none"
          )}
        >
          {children}
        </ArkCollapsible.Content>

        <ArkCollapsible.Trigger asChild>
          <button
            className={cn(
              "absolute inset-x-0 -bottom-4",
              "h-20",
              "flex items-center justify-center",
              "bg-linear-to-b from-transparent via-background/64 to-background",
              "font-medium text-muted-foreground text-sm",
              "rounded-b-lg border border-t-0",
              "transition-colors",
              "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32",
              "hover:text-foreground",
              "group-data-[state=open]/code-collapsible:hidden"
            )}
            type="button"
          >
            Expand
          </button>
        </ArkCollapsible.Trigger>
      </CodeCollapsibleActionsContext.Provider>
    </ArkCollapsible.Root>
  );
};
