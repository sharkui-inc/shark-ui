"use client";

import {
  Collapsible as ArkCollapsible,
  useCollapsible as useArkCollapsible,
  useCollapsibleContext as useArkCollapsibleContext,
} from "@ark-ui/react/collapsible";
import { ChevronDownIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const useCollapsible = useArkCollapsible;
export const useCollapsibleContext = useArkCollapsibleContext;
export const CollapsibleRootProvider = ArkCollapsible.RootProvider;

export const Collapsible = (
  props: React.ComponentProps<typeof ArkCollapsible.Root>
) => {
  const {
    collapsedHeight,
    collapsedWidth,
    lazyMount = true,
    unmountOnExit = true,
    className,
    ...rest
  } = props;

  const isPartialCollapse = Boolean(collapsedHeight || collapsedWidth);

  return (
    <ArkCollapsible.Root
      className={cn("group/collapsible", className)}
      collapsedHeight={collapsedHeight}
      collapsedWidth={collapsedWidth}
      data-partial-collapse={isPartialCollapse ? "" : undefined}
      data-slot="collapsible"
      lazyMount={isPartialCollapse ? false : lazyMount}
      unmountOnExit={isPartialCollapse ? false : unmountOnExit}
      {...rest}
    />
  );
};

export const CollapsibleTrigger = (
  props: React.ComponentProps<typeof ArkCollapsible.Trigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCollapsible.Trigger
      className={cn(
        "cursor-pointer touch-manipulation",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "not-data-[align=start]:has-data-[slot=collapsible-indicator]:[button]:justify-between",
        className
      )}
      data-slot="collapsible-trigger"
      {...rest}
    />
  );
};

export const CollapsibleContent = (
  props: React.ComponentProps<typeof ArkCollapsible.Content>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkCollapsible.Content
      className={cn(
        "[--radix-collapsible-content-height:var(--height)]",
        "data-has-collapsed-size:h-full data-has-collapsed-size:min-h-(--collapsed-height)",
        "overflow-hidden",
        "data-[state=open]:animate-collapsible-down data-[state=open]:duration-200 data-[state=open]:ease-out",
        "data-[state=closed]:animate-collapsible-up data-[state=closed]:duration-200 data-[state=closed]:ease-out",
        "motion-reduce:animate-none motion-reduce:transition-none"
      )}
      data-slot="collapsible-content"
      {...rest}
    >
      <div className={className}>{children}</div>
    </ArkCollapsible.Content>
  );
};

export const CollapsibleIndicator = (
  props: React.ComponentProps<typeof ArkCollapsible.Indicator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCollapsible.Indicator
      className={cn(
        "inline-flex size-4 items-center justify-center",
        "data-[state=open]:[&_svg]:rotate-180",
        className
      )}
      data-slot="collapsible-indicator"
      {...rest}
    >
      <ChevronDownIcon className="size-full shrink-0 transition-transform duration-150 ease-out motion-reduce:transition-none" />
    </ArkCollapsible.Indicator>
  );
};
