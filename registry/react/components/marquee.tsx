"use client";

import {
  Marquee as ArkMarquee,
  useMarqueeContext as useArkMarqueeContext,
} from "@ark-ui/react/marquee";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useMarqueeContext = useArkMarqueeContext;

const marqueeVariants = tv({
  base: [
    "group/marquee",
    "relative",
    "w-full max-w-full",
    "isolate",
    "data-paused:**:paused!",
  ],
  defaultVariants: {
    fade: true,
  },
  variants: {
    fade: {
      true: [
        "[--fade-size:25%]",
        "data-[orientation=horizontal]:mask-r-from-[calc(100%-var(--fade-size))] data-[orientation=horizontal]:mask-l-from-[calc(100%-var(--fade-size))]",
        "data-[orientation=vertical]:mask-t-from-[calc(100%-var(--fade-size))] data-[orientation=vertical]:mask-b-from-[calc(100%-var(--fade-size))]",
      ],
    },
  },
});

interface MarqueeProps
  extends Omit<React.ComponentProps<typeof ArkMarquee.Root>, "side">,
    VariantProps<typeof marqueeVariants> {
  /**
   *
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
}

export const Marquee = (props: MarqueeProps) => {
  const {
    speed = 50,
    fade = true,
    spacing = "16px",
    orientation = "horizontal",
    className,
    children,
    ...rest
  } = props;

  const side = orientation === "horizontal" ? "start" : "bottom";

  return (
    <ArkMarquee.Root
      className={cn(marqueeVariants({ fade }), className)}
      data-orientation={orientation}
      data-slot="marquee"
      side={side}
      spacing={spacing}
      speed={speed}
      {...rest}
    >
      {children}
    </ArkMarquee.Root>
  );
};

export const MarqueeContent = (
  props: React.ComponentProps<typeof ArkMarquee.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMarquee.Viewport
      className={cn("flex", "overflow-hidden")}
      data-slot="marquee-viewport"
    >
      <ArkMarquee.Content
        className={cn(
          "flex",
          "min-w-max",
          "delay-(--marquee-delay)",
          "data-[orientation=vertical]:animate-marquee-y data-[orientation=vertical]:flex-col",
          "data-[orientation=horizontal]:animate-marquee-x data-[orientation=horizontal]:flex-row",
          "data-reverse:shimmer-reverse!",
          className
        )}
        data-slot="marquee-content"
        {...rest}
      />
    </ArkMarquee.Viewport>
  );
};

export const MarqueeItem = (
  props: React.ComponentProps<typeof ArkMarquee.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMarquee.Item
      className={cn("w-full", "text-nowrap", className)}
      data-slot="marquee-item"
      {...rest}
    />
  );
};
