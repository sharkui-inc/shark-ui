"use client";

import {
  Popover as ArkPopover,
  usePopover as useArkPopover,
  usePopoverContext as useArkPopoverContext,
} from "@ark-ui/react/popover";
import { Portal } from "@ark-ui/react/portal";
import type React from "react";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger } from "@/registry/react/components/popover";
import {
  tooltipArrowStyle,
  tooltipContentVariants,
} from "@/registry/react/components/tooltip";

export const useToggleTooltip = useArkPopover;
export const useToggleTooltipContext = useArkPopoverContext;
export const ToggleTooltipRootProvider = ArkPopover.RootProvider;

export const ToggleTooltip = (
  props: React.ComponentProps<typeof ArkPopover.Root>
) => {
  const {
    positioning,
    lazyMount = true,
    unmountOnExit = true,
    modal = false,
    ...rest
  } = props;

  return (
    <Popover
      data-slot="toggle-tooltip"
      lazyMount={lazyMount}
      modal={modal}
      positioning={{
        placement: "top",
        ...positioning,
      }}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const ToggleTooltipTrigger = (
  props: React.ComponentProps<typeof ArkPopover.Trigger>
) => <PopoverTrigger data-slot="toggle-tooltip-trigger" {...props} />;

interface ToggleTooltipContentProps
  extends React.ComponentProps<typeof ArkPopover.Content> {
  /**
   * Whether to show the arrow
   *
   * @default true
   */
  showArrow?: boolean;
}

export const ToggleTooltipContent = (props: ToggleTooltipContentProps) => {
  const { showArrow = true, className, children, ...rest } = props;

  return (
    <Portal>
      <ArkPopover.Positioner data-slot="toggle-tooltip-positioner">
        <ArkPopover.Content
          className={cn(tooltipContentVariants(), className)}
          data-slot="toggle-tooltip-content"
          {...rest}
        >
          {children}

          {showArrow ? <ToggleTooltipArrow /> : null}
        </ArkPopover.Content>
      </ArkPopover.Positioner>
    </Portal>
  );
};

export const ToggleTooltipArrow = (
  props: React.ComponentProps<typeof ArkPopover.Arrow>
) => {
  const { style, ...rest } = props;

  return (
    <ArkPopover.Arrow
      data-slot="toggle-tooltip-arrow"
      style={{ ...tooltipArrowStyle, ...style }}
      {...rest}
    >
      <ArkPopover.ArrowTip />
    </ArkPopover.Arrow>
  );
};
