"use client";

import { Portal } from "@ark-ui/react/portal";
import {
  Tooltip as ArkTooltip,
  useTooltip as useArkTooltip,
  useTooltipContext as useArkTooltipContext,
} from "@ark-ui/react/tooltip";
import type React from "react";
import { tv } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useTooltip = useArkTooltip;
export const useTooltipContext = useArkTooltipContext;
export const TooltipRootProvider = ArkTooltip.RootProvider;

export const tooltipContentVariants = tv({
  base: [
    "z-50 w-fit",
    "px-3 py-1.5",
    "has-[[data-slot=kbd],[data-slot=kbd-group]]:flex has-[[data-slot=kbd],[data-slot=kbd-group]]:items-center has-[[data-slot=kbd],[data-slot=kbd-group]]:gap-2",
    "has-[>:is([data-slot=kbd],[data-slot=kbd-group]):last-child]:pe-2",
    "has-[>[data-slot=tooltip-arrow]+:is([data-slot=kbd],[data-slot=kbd-group]):not(:last-child)]:ps-2",
    "bg-foreground",
    "text-background text-xs",
    "rounded-lg shadow-lg/4",
    "outline-hidden",
    "origin-(--transform-origin) animate-in duration-150 ease-out",
    "fade-in-0 zoom-in-[98%]",
    "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%]",
    "data-[state=closed]:animate-out",
    "data-[placement=bottom]:slide-in-from-top-2",
    "data-[placement=left]:slide-in-from-end-2",
    "data-[placement=right]:slide-in-from-start-2",
    "data-[placement=top]:slide-in-from-bottom-2",
    "motion-reduce:animate-none",
  ],
});

export const tooltipArrowStyle = {
  "--arrow-background": "var(--foreground)",
  "--arrow-size": "calc(1.5 * var(--spacing))",
} as React.CSSProperties;

export const Tooltip = (
  props: React.ComponentProps<typeof ArkTooltip.Root>
) => {
  const {
    positioning,
    lazyMount = true,
    unmountOnExit = true,
    closeDelay = 100,
    openDelay = 600,
    ...rest
  } = props;

  return (
    <ArkTooltip.Root
      closeDelay={closeDelay}
      data-slot="tooltip"
      lazyMount={lazyMount}
      openDelay={openDelay}
      positioning={{
        placement: "top",
        ...positioning,
      }}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const TooltipTrigger = (
  props: React.ComponentProps<typeof ArkTooltip.Trigger>
) => <ArkTooltip.Trigger data-slot="tooltip-trigger" {...props} />;

interface TooltipContentProps
  extends React.ComponentProps<typeof ArkTooltip.Content> {
  /**
   * Whether to show the arrow
   *
   * @default true
   */
  showArrow?: boolean;
}

export const TooltipContent = (props: TooltipContentProps) => {
  const { showArrow = true, className, children, ...rest } = props;

  return (
    <Portal>
      <ArkTooltip.Positioner data-slot="tooltip-positioner">
        <ArkTooltip.Content
          className={cn(tooltipContentVariants(), className)}
          data-slot="tooltip-content"
          {...rest}
        >
          {children}

          {showArrow ? <TooltipArrow /> : null}
        </ArkTooltip.Content>
      </ArkTooltip.Positioner>
    </Portal>
  );
};

export const TooltipArrow = (
  props: React.ComponentProps<typeof ArkTooltip.Arrow>
) => {
  const { style, ...rest } = props;

  return (
    <ArkTooltip.Arrow
      data-slot="tooltip-arrow"
      style={{ ...tooltipArrowStyle, ...style }}
      {...rest}
    >
      <ArkTooltip.ArrowTip />
    </ArkTooltip.Arrow>
  );
};
