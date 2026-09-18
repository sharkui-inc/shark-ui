"use client";

import { ark } from "@ark-ui/react/factory";
import {
  Tabs as ArkTabs,
  useTabs as useArkTabs,
  useTabsContext as useArkTabsContext,
} from "@ark-ui/react/tabs";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useBottomNavigation = useArkTabs;
export const useBottomNavigationContext = useArkTabsContext;
export const BottomNavigationRootProvider = ArkTabs.RootProvider;

export const BottomNavigation = (
  props: React.ComponentProps<typeof ArkTabs.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTabs.Root
      className={cn(
        "w-full",
        "min-h-[calc(var(--spacing)*14+env(safe-area-inset-bottom,0))]",
        "has-[data-variant=inset]:min-h-[calc(var(--spacing)*18+env(safe-area-inset-bottom,0))]",
        className
      )}
      data-slot="bottom-navigation"
      {...rest}
    />
  );
};

const bottomNavigationListVariants = tv({
  base: [
    "fixed z-10",
    "flex items-center justify-around",
    "shrink-0 border-t bg-background/64 backdrop-blur-sm",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: [
        "inset-x-0 bottom-0",
        "min-h-[calc(var(--spacing)*14+env(safe-area-inset-bottom,0))] w-full",
        "pb-[env(safe-area-inset-bottom,0px)]",
      ],
      inset: [
        "inset-x-4",
        "bottom-[calc(var(--spacing)*4+env(safe-area-inset-bottom,0px))]",
        "min-h-14 rounded-full shadow-lg/4",
      ],
    },
  },
});

interface BottomNavigationListProps
  extends React.ComponentProps<typeof ArkTabs.List>,
    VariantProps<typeof bottomNavigationListVariants> {}

export const BottomNavigationList = (props: BottomNavigationListProps) => {
  const {
    "aria-label": ariaLabel = "Bottom navigation",
    variant = "default",
    className,
    ...rest
  } = props;

  return (
    <ArkTabs.List
      aria-label={ariaLabel}
      className={cn(bottomNavigationListVariants({ variant }), className)}
      data-slot="bottom-navigation-list"
      data-variant={variant}
      {...rest}
    />
  );
};

export const BottomNavigationItem = (
  props: React.ComponentProps<typeof ArkTabs.Trigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkTabs.Trigger
      className={cn(
        "relative",
        "min-w-0",
        "flex min-h-11 flex-1 flex-col items-center justify-center gap-0.5",
        "p-2",
        "text-muted-foreground",
        "cursor-pointer",
        "transition-colors",
        "hover:text-foreground",
        "aria-selected:text-primary",
        "border border-transparent focus-visible:border-ring/64 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring/24",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "[&_svg:not([class*='size-'])]:size-5 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "has-[data-slot=bottom-navigation-item-label]:size-4",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="bottom-navigation-item"
      {...rest}
    />
  );
};

export const BottomNavigationItemIcon = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      aria-hidden
      className={cn("flex items-center justify-center", className)}
      data-slot="bottom-navigation-item-icon"
      {...rest}
    />
  );
};

export const BottomNavigationItemLabel = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("truncate font-medium text-xs", className)}
      data-slot="bottom-navigation-item-label"
      {...rest}
    />
  );
};
