"use client";

import { Marquee as ArkMarquee } from "@ark-ui/react/marquee";
import type React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps
  extends Omit<React.ComponentProps<typeof ArkMarquee.Root>, "side"> {
  /**
   *
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Whether to show the edges of the marquee
   *
   * @default true
   */
  showEdges?: boolean;
}

export const Marquee = (props: MarqueeProps) => {
  const {
    speed = 50,
    showEdges = true,
    spacing = "16px",
    orientation = "horizontal",
    className,
    children,
    ...rest
  } = props;

  const side = orientation === "horizontal" ? "start" : "bottom";

  return (
    <ArkMarquee.Root
      className={cn(
        "group/marquee",
        "relative",
        "w-full max-w-full",
        "isolate",
        className
      )}
      data-orientation={orientation}
      data-slot="marquee"
      side={side}
      spacing={spacing}
      speed={speed}
      {...rest}
    >
      {children}

      {showEdges && (
        <>
          <MarqueeEdge side={orientation === "horizontal" ? "start" : "top"} />
          <MarqueeEdge side={orientation === "horizontal" ? "end" : "bottom"} />
        </>
      )}
    </ArkMarquee.Root>
  );
};

export const MarqueeContent = (
  props: React.ComponentProps<typeof ArkMarquee.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMarquee.Viewport
      className="flex overflow-hidden"
      data-slot="marquee-viewport"
    >
      <ArkMarquee.Content
        className={cn(
          "flex",
          "min-w-max",
          "delay-(--marquee-delay)",
          "data-[orientation=vertical]:animate-marquee-y data-[orientation=vertical]:flex-col",
          "data-[orientation=horizontal]:animate-marquee-x data-[orientation=horizontal]:flex-row",
          "data-reverse:direction-[reverse]!",
          "group-data-paused/marquee:paused!",
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
      className={cn("w-full text-nowrap", className)}
      data-slot="marquee-item"
      {...rest}
    />
  );
};

export const MarqueeEdge = (
  props: React.ComponentProps<typeof ArkMarquee.Edge>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMarquee.Edge
      className={cn(
        "absolute z-10",
        "group-data-[orientation=horizontal]/marquee:h-full group-data-[orientation=horizontal]/marquee:w-1/4",
        "group-data-[orientation=vertical]/marquee:h-1/4 group-data-[orientation=vertical]/marquee:w-full",
        "pointer-events-none",
        "from-background to-transparent",
        "data-[side=start]:bg-linear-to-r",
        "data-[side=end]:bg-linear-to-l",
        "data-[side=top]:bg-linear-to-b",
        "data-[side=bottom]:bg-linear-to-t",
        className
      )}
      data-slot="marquee-edge"
      {...rest}
    />
  );
};
