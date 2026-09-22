"use client";

import {
  ScrollArea as ArkScrollArea,
  useScrollArea as useArkScrollArea,
  useScrollAreaContext as useArkScrollAreaContext,
} from "@ark-ui/react/scroll-area";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useScrollArea = useArkScrollArea;
export const useScrollAreaContext = useArkScrollAreaContext;
export const ScrollAreaRootProvider = ArkScrollArea.RootProvider;

const scrollAreaVariants = tv({
  base: ["h-full", "rounded-[inherit]", "outline-hidden", "scrollbar-none"],
  defaultVariants: {
    scrollFade: false,
  },
  variants: {
    overscrollContain: {
      true: [
        "has-[>[data-slot=scroll-area-content][data-overflow-y]]:overscroll-y-contain",
        "has-[>[data-slot=scroll-area-content][data-overflow-x]]:overscroll-x-contain",
      ],
    },
    scrollFade: {
      true: [
        "mask-t-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-start)))]",
        "mask-b-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-y-end)))]",
        "mask-l-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-start)))]",
        "mask-r-from-[calc(100%-min(var(--fade-size),var(--scroll-area-overflow-x-end)))]",
        "motion-reduce:transition-none",
      ],
    },
  },
});

type ScrollAreaOrientation = "both" | "horizontal" | "vertical";

interface ScrollAreaProps
  extends React.ComponentProps<typeof ArkScrollArea.Root>,
    VariantProps<typeof scrollAreaVariants> {
  /**
   * Whether to prevent the content from expanding the scroll area horizontally.
   *
   * @default true
   */
  clampContentMinWidth?: boolean;
  /**
   * Whether the content should fill the scroll area.
   *
   * @default false
   */
  fill?: boolean;
  /**
   * Set the orientation of the scroll area
   *
   * @default "both"
   */
  orientation?: ScrollAreaOrientation;
  /**
   * Whether to prevent scroll chaining to parent scroll containers.
   *
   * @default false
   */
  overscrollContain?: boolean;
  /**
   * Whether to always reserve space for the scrollbar track.
   *
   * @default false
   */
  scrollbarGutter?: boolean;
}

export const ScrollArea = (props: ScrollAreaProps) => {
  const {
    clampContentMinWidth = true,
    fill = false,
    overscrollContain = false,
    scrollFade = false,
    scrollbarGutter = false,
    orientation = "both",
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkScrollArea.Root
      className={cn(
        "[--fade-size:1.5rem]",
        "relative size-full min-h-0",
        className
      )}
      data-slot="scroll-area"
      {...rest}
    >
      <ArkScrollArea.Viewport
        className={cn(
          scrollAreaVariants({
            overscrollContain,
            scrollFade,
          }),
          scrollbarGutter && orientation !== "horizontal" && "pe-2.5",
          scrollbarGutter && orientation !== "vertical" && "pb-2.5"
        )}
        data-slot="scroll-area-viewport"
        style={{ maxHeight: "inherit" }}
      >
        <ArkScrollArea.Content
          className={cn(fill && "size-full")}
          data-slot="scroll-area-content"
          style={clampContentMinWidth ? { minWidth: 0 } : undefined}
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
        "pointer-events-none opacity-0",
        "transition-opacity delay-300",
        "data-[orientation=vertical]:w-1.5",
        "data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:flex-col",
        "data-hover:pointer-events-auto data-hover:opacity-100 data-hover:delay-0 data-hover:duration-120",
        "data-scrolling:pointer-events-auto data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-120",
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
        className="relative flex-1 rounded-full bg-foreground/24"
        data-slot="scroll-area-thumb"
      />
    </ArkScrollArea.Scrollbar>
  );
};
