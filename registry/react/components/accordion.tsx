"use client";

import {
  Accordion as ArkAccordion,
  useAccordion as useArkAccordion,
  useAccordionContext as useArkAccordionContext,
} from "@ark-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const useAccordion = useArkAccordion;
export const useAccordionContext = useArkAccordionContext;
export const AccordionRootProvider = ArkAccordion.RootProvider;

export const Accordion = (
  props: React.ComponentProps<typeof ArkAccordion.Root>
) => {
  const {
    collapsible = true,
    lazyMount = true,
    unmountOnExit = true,
    ...rest
  } = props;

  return (
    <ArkAccordion.Root
      collapsible={collapsible}
      data-slot="accordion"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const AccordionItem = (
  props: React.ComponentProps<typeof ArkAccordion.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAccordion.Item
      className={cn("flex flex-col border-b last:border-b-0", className)}
      data-slot="accordion-item"
      {...rest}
    />
  );
};

export const AccordionTrigger = (
  props: React.ComponentProps<typeof ArkAccordion.ItemTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkAccordion.ItemTrigger
      className={cn(
        "flex flex-1 items-center justify-between gap-3",
        "touch-manipulation",
        "py-4",
        "text-start font-medium text-sm",
        "rounded-md border border-transparent",
        "outline-hidden",
        "transition-[border-color,box-shadow,opacity]",
        "disabled:pointer-events-none disabled:opacity-64 disabled:grayscale",
        "focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
        "[&_[data-state=open]>svg]:rotate-180",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="accordion-trigger"
      {...rest}
    >
      {children}

      <ArkAccordion.ItemIndicator data-slot="accordion-indicator">
        <ChevronDownIcon
          className={cn(
            "translate-y-0.5",
            "size-4",
            "shrink-0",
            "text-muted-foreground",
            "pointer-events-none",
            "transition-transform duration-150 ease-out",
            "motion-reduce:transition-none"
          )}
        />
      </ArkAccordion.ItemIndicator>
    </ArkAccordion.ItemTrigger>
  );
};

export const AccordionContent = (
  props: React.ComponentProps<typeof ArkAccordion.ItemContent>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkAccordion.ItemContent
      className={cn(
        "[--radix-accordion-content-height:var(--height)]",
        "overflow-hidden rounded-md text-sm",
        "data-[state=open]:animate-accordion-down data-[state=open]:duration-200 data-[state=open]:ease-out",
        "data-[state=closed]:animate-accordion-up data-[state=closed]:duration-200 data-[state=closed]:ease-out",
        "motion-reduce:animate-none",
        className
      )}
      data-slot="accordion-content"
      {...rest}
    >
      <div className="pt-0 pb-4">{children}</div>
    </ArkAccordion.ItemContent>
  );
};
