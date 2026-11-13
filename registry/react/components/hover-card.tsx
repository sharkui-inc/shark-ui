"use client";

import { Portal } from "@ark-ui/react";
import {
  HoverCard as ArkHoverCard,
  useHoverCardContext as useArkHoverCardContext,
} from "@ark-ui/react/hover-card";
import type React from "react";
import { cn } from "@/lib/utils";

export const useHoverCardContext = useArkHoverCardContext;

export const HoverCard = (
  props: React.ComponentProps<typeof ArkHoverCard.Root>
) => {
  const {
    lazyMount = true,
    unmountOnExit = true,
    closeDelay = 300,
    openDelay = 600,
    positioning,
    ...rest
  } = props;

  return (
    <ArkHoverCard.Root
      closeDelay={closeDelay}
      data-slot="hover-card"
      lazyMount={lazyMount}
      openDelay={openDelay}
      positioning={{
        flip: ["top", "bottom", "left", "right"],
        placement: "top",
        ...positioning,
      }}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const HoverCardTrigger = (
  props: React.ComponentProps<typeof ArkHoverCard.Trigger>
) => <ArkHoverCard.Trigger data-slot="hover-card-trigger" {...props} />;

interface HoverCardContentProps
  extends React.ComponentProps<typeof ArkHoverCard.Content> {
  /**
   * Whether to show the arrow.
   *
   * @default true
   */
  showArrow?: boolean;
}

export const HoverCardContent = (props: HoverCardContentProps) => {
  const { showArrow = true, className, children, ...rest } = props;

  return (
    <Portal>
      <ArkHoverCard.Positioner data-slot="hover-card-positioner">
        <ArkHoverCard.Content
          className={cn(
            "z-[calc(50+var(--layer-index,0))]",
            "min-w-64",
            "p-4",
            "bg-popover",
            "text-popover-foreground",
            "origin-(--transform-origin)",
            "duration-100 ease-out",
            "ring-border rounded-xl shadow-lg/4 ring-1 ring-inset",
            "outline-hidden",
            "data-[placement^=bottom]:slide-in-from-top-2",
            "data-[placement^=top]:slide-in-from-bottom-2",
            "data-[placement^=left]:slide-in-from-right-2",
            "data-[placement^=right]:slide-in-from-left-2",
            "data-[state=closed]:fade-out-0",
            "data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95",
            "data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out",
            "data-[state=open]:animate-in",
            "motion-reduce:animate-none",
            "motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
            className
          )}
          data-slot="hover-card-content"
          {...rest}
        >
          {children}

          {showArrow ? <HoverCardArrow /> : null}
        </ArkHoverCard.Content>
      </ArkHoverCard.Positioner>
    </Portal>
  );
};

export const HoverCardArrow = (
  props: React.ComponentProps<typeof ArkHoverCard.Arrow>
) => {
  const { style, ...rest } = props;

  return (
    <ArkHoverCard.Arrow
      data-slot="hover-card-arrow"
      style={
        {
          "--arrow-background": "var(--popover)",
          "--arrow-size": "calc(1.5 * var(--spacing))",
          ...style,
        } as React.CSSProperties
      }
      {...rest}
    >
      <ArkHoverCard.ArrowTip className="border-border border-t border-l" />
    </ArkHoverCard.Arrow>
  );
};
