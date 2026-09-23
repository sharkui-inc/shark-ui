"use client";

import { Portal } from "@ark-ui/react";
import {
  HoverCard as ArkHoverCard,
  useHoverCard as useArkHoverCard,
  useHoverCardContext as useArkHoverCardContext,
} from "@ark-ui/react/hover-card";
import type React from "react";
import { cn } from "@/lib/utils";

export const useHoverCard = useArkHoverCard;
export const useHoverCardContext = useArkHoverCardContext;
export const HoverCardRootProvider = ArkHoverCard.RootProvider;

interface HoverCardProps
  extends React.ComponentProps<typeof ArkHoverCard.Root> {}

export const HoverCard = (props: HoverCardProps) => {
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
            "w-64",
            "p-4",
            "bg-popover",
            "text-popover-foreground",
            "origin-(--transform-origin)",
            "duration-150 ease-out",
            "rounded-xl border shadow-lg/4",
            "outline-hidden",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]",
            "data-[state=closed]:animate-out data-[state=open]:animate-in",
            "motion-reduce:animate-none",
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
      <ArkHoverCard.ArrowTip />
    </ArkHoverCard.Arrow>
  );
};
