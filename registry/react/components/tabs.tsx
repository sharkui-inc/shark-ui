"use client";

import {
  Tabs as ArkTabs,
  useTabs as useArkTabs,
  useTabsContext as useArkTabsContext,
} from "@ark-ui/react/tabs";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { buttonControlVariants } from "@/registry/react/components/button";

export const useTabs = useArkTabs;
export const useTabsContext = useArkTabsContext;
export const TabsRootProvider = ArkTabs.RootProvider;

export const Tabs = (props: React.ComponentProps<typeof ArkTabs.Root>) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <ArkTabs.Root
      className={cn(
        "flex flex-col gap-2",
        "data-[orientation=vertical]:flex-row",
        className
      )}
      data-slot="tabs"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

const tabsListVariants = tv({
  defaultVariants: {
    variant: "default",
  },
  slots: {
    base: [
      "group/tabs-list",
      "relative z-0",
      "w-fit",
      "flex items-center gap-x-0.5",
      "text-muted-foreground",
      "data-[orientation=vertical]:flex-col",
    ],
    indicator: [
      "top-(--top) left-(--left)",
      "h-(--height)",
      "motion-reduce:[--transition-duration:0ms]",
    ],
  },
  variants: {
    variant: {
      default: {
        base: ["p-1", "bg-muted", "rounded-lg data-[pill=true]:rounded-full"],
        indicator: [
          "-z-1",
          "w-(--width)",
          "bg-background dark:bg-input",
          "rounded-md shadow-sm/4",
          "group-data-[pill=true]/tabs-list:rounded-full",
        ],
      },
      underline: {
        base: [
          "data-[orientation=vertical]:border-s data-[orientation=vertical]:px-1",
          "data-[orientation=horizontal]:py-1",
          "data-[orientation=horizontal]:*:data-[slot=tabs-trigger]:hover:bg-accent",
        ],
        indicator: [
          "z-10",
          "bg-primary",
          "data-[orientation=horizontal]:top-[calc(var(--top)+var(--height)-1px)]",
          "data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:w-(--width)",
          "data-[orientation=vertical]:left-0 data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:-translate-x-px",
        ],
      },
    },
  },
});
interface TabsListProps
  extends React.ComponentProps<typeof ArkTabs.List>,
    VariantProps<typeof tabsListVariants> {
  /**
   * Rounded tabs, only applies when `variant` is `"default"`.
   *
   * @default false
   */
  pill?: boolean;
}

export const TabsList = (props: TabsListProps) => {
  const {
    variant = "default",
    pill = false,
    className,
    children,
    ...rest
  } = props;

  const { base, indicator } = tabsListVariants({ variant });

  return (
    <ArkTabs.List
      className={cn(base(), className)}
      data-pill={pill}
      data-slot="tabs-list"
      {...rest}
    >
      {children}

      <ArkTabs.Indicator
        className={cn(indicator())}
        data-slot="tab-indicator"
      />
    </ArkTabs.List>
  );
};

export const TabsTrigger = (
  props: React.ComponentProps<typeof ArkTabs.Trigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTabs.Trigger
      className={cn(
        buttonControlVariants(),
        "h-8.5 sm:h-7.5",
        "flex grow gap-1.5",
        "px-[calc(--spacing(2.5)-1px)]",
        "rounded-md border border-transparent group-data-[pill=true]/tabs-list:rounded-full",
        "cursor-pointer",
        "transition-[color,background-color,box-shadow]",
        "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
        "hover:text-foreground",
        "aria-selected:text-foreground",
        "outline-hidden focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "[&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="tabs-trigger"
      {...rest}
    />
  );
};

export const TabsContent = (
  props: React.ComponentProps<typeof ArkTabs.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTabs.Content
      className={cn("flex-1", className)}
      data-slot="tabs-content"
      {...rest}
    />
  );
};
