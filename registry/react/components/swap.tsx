"use client";

import { Swap as ArkSwap, useSwapContext } from "@ark-ui/react/swap";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useSwap = useSwapContext;

const swapIndicatorVariants = tv({
  base: [
    "[&>span]:data-[state=open]:animate-in",
    "[&>span]:data-[state=closed]:animate-out",
    "[&>span]:motion-reduce:animate-none",
  ],
  defaultVariants: {
    variant: "fade",
  },
  variants: {
    variant: {
      blur: [
        "[&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:zoom-in-[98%] [&>span]:data-[state=open]:duration-150 [&>span]:data-[state=open]:ease-out",
        "[&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:zoom-out-[98%] [&>span]:data-[state=closed]:duration-150 [&>span]:data-[state=closed]:ease-out",
      ],
      fade: [
        "[&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:duration-150 [&>span]:data-[state=open]:ease-out",
        "[&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:duration-150 [&>span]:data-[state=closed]:ease-out",
      ],
      flip: [
        "[&>span]:data-[state=open]:spin-in-[-45deg] [&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:duration-150 [&>span]:data-[state=open]:ease-out",
        "[&>span]:data-[state=closed]:spin-out-[45deg] [&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:duration-150 [&>span]:data-[state=closed]:ease-out",
      ],
      rotate: [
        "[&>span]:data-[state=open]:spin-in-[-45deg] [&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:duration-150 [&>span]:data-[state=open]:ease-out",
        "[&>span]:data-[state=closed]:spin-out-[45deg] [&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:duration-150 [&>span]:data-[state=closed]:ease-out",
      ],
      scale: [
        "[&>span]:data-[state=open]:zoom-in-[98%] [&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:duration-150 [&>span]:data-[state=open]:ease-out",
        "[&>span]:data-[state=closed]:zoom-out-[98%] [&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:duration-150 [&>span]:data-[state=closed]:ease-out",
      ],
    },
  },
});

type SwapBaseProps = Omit<
  React.ComponentProps<typeof ArkSwap.Root>,
  "asChild" | "children"
> &
  VariantProps<typeof swapIndicatorVariants>;

type SwapProps = SwapBaseProps & {
  off: React.ReactNode;
  on: React.ReactNode;
};

export const Swap = (props: SwapProps) => {
  const {
    variant = "fade",
    lazyMount = true,
    unmountOnExit = true,
    className,
    on,
    off,
    ...rest
  } = props;

  return (
    <ArkSwap.Root
      className={cn(swapIndicatorVariants({ variant }), className)}
      data-slot="swap"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      <ArkSwap.Indicator data-slot="swap-indicator" type="on">
        {on}
      </ArkSwap.Indicator>
      <ArkSwap.Indicator data-slot="swap-indicator" type="off">
        {off}
      </ArkSwap.Indicator>
    </ArkSwap.Root>
  );
};
