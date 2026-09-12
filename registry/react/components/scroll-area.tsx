"use client";

import {
  ScrollArea as ArkScrollArea,
  useScrollAreaContext,
} from "@ark-ui/react/scroll-area";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useScrollArea = useScrollAreaContext;

const scrollAreaVariants = tv({
  base: ["h-full", "rounded-[inherit]", "outline-none", "scrollbar-none"],
  defaultVariants: {
    scrollbarGutter: false,
    scrollFade: false,
  },
  variants: {
    scrollbarGutter: {
      true: ["in-data-overflow-x:pb-2.5", "in-data-overflow-y:pe-2.5"],
    },
    scrollFade: {
      true: [
        "data-overflow-y:not-data-at-top:mask-t-from-[calc(100%-var(--fade-size))]",
        "data-overflow-y:not-data-at-bottom:mask-b-from-[calc(100%-var(--fade-size))]",
        "data-overflow-x:not-data-at-left:mask-l-from-[calc(100%-var(--fade-size))]",
        "data-overflow-x:not-data-at-right:mask-r-from-[calc(100%-var(--fade-size))]",
        "motion-reduce:transition-none",
      ],
    },
  },
});

type ScrollAreaOrientation = "both" | "horizontal" | "vertical";

const getOrientationStyles = (orientation: ScrollAreaOrientation) => {
  switch (orientation) {
    case "vertical":
      return {
        content: { minWidth: 0 },
        viewport: { overflowX: "hidden" as const },
      };
    case "horizontal":
      return {
        content: { minHeight: 0 },
        viewport: { overflowY: "hidden" as const },
      };
    case "both":
      return {
        content: undefined,
        viewport: undefined,
      };
    default: {
      const _exhaustive: never = orientation;
      return _exhaustive;
    }
  }
};

interface ScrollAreaProps
  extends React.ComponentProps<typeof ArkScrollArea.Root>,
    VariantProps<typeof scrollAreaVariants> {
  /**
   * Set the orientation of the scroll area
   *
   * @default "both"
   */
  orientation?: ScrollAreaOrientation;
}

export const ScrollArea = (props: ScrollAreaProps) => {
  const {
    scrollFade = false,
    scrollbarGutter = false,
    orientation = "both",
    className,
    children,
    ...rest
  } = props;

  const orientationStyles = getOrientationStyles(orientation);

  return (
    <ArkScrollArea.Root
      className={cn(
        "relative size-full min-h-0 [--fade-size:1.5rem]",
        className
      )}
      data-slot="scroll-area"
      {...rest}
    >
      <ArkScrollArea.Viewport
        className={cn(scrollAreaVariants({ scrollbarGutter, scrollFade }))}
        data-slot="scroll-area-viewport"
        style={orientationStyles.viewport}
      >
        <ArkScrollArea.Content
          data-slot="scroll-area-content"
          style={orientationStyles.content}
        >
          {children}
        </ArkScrollArea.Content>
      </ArkScrollArea.Viewport>

      {orientation === "horizontal" ? null : (
        <ScrollAreaScrollbar orientation="vertical" />
      )}
      {orientation === "vertical" ? null : (
        <ScrollAreaScrollbar orientation="horizontal" />
      )}

      <ArkScrollArea.Corner data-slot="scroll-area-corner" />
    </ArkScrollArea.Root>
  );
};

export const ScrollAreaScrollbar = (
  props: React.ComponentProps<typeof ArkScrollArea.Scrollbar>
) => {
  const { orientation, className, ...rest } = props;

  return (
    <ArkScrollArea.Scrollbar
      className={cn(
        "flex",
        "m-1",
        "bg-transparent",
        "opacity-0",
        "transition-opacity delay-300",
        "data-[orientation=vertical]:w-1.5",
        "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:flex-col",
        "data-hover:opacity-100 data-hover:delay-0 data-hover:duration-100",
        "data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-100",
        "data-[orientation=vertical]:[&:not([data-overflow-y])]:hidden",
        "data-[orientation=horizontal]:[&:not([data-overflow-x])]:hidden",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      {...rest}
    >
      <ArkScrollArea.Thumb
        className="relative flex-1 cursor-grab rounded-full bg-foreground/20 data-dragging:cursor-grabbing"
        data-slot="scroll-area-thumb"
      />
    </ArkScrollArea.Scrollbar>
  );
};
