"use client";

import {
  Swap as ArkSwap,
  useSwap as useArkSwap,
  useSwapContext as useArkSwapContext,
} from "@ark-ui/react/swap";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useSwap = useArkSwap;
export const useSwapContext = useArkSwapContext;
export const SwapRootProvider = ArkSwap.RootProvider;

const swapIndicatorVariants = tv({
  defaultVariants: {
    variant: "fade",
  },
  slots: {
    indicator: "motion-reduce:animate-none",
    root: "",
  },
  variants: {
    variant: {
      blur: {
        indicator: [
          "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-50 data-[state=open]:animate-in data-[state=open]:blur-in-sm data-[state=open]:duration-250",
          "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-50 data-[state=closed]:animate-out data-[state=closed]:blur-out-sm data-[state=closed]:duration-150",
        ],
      },
      fade: {
        indicator: [
          "data-[state=open]:fade-in-0 data-[state=open]:animate-in data-[state=open]:duration-200",
          "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out data-[state=closed]:duration-100",
        ],
      },
      flip: {
        indicator: [
          "backface-hidden",
          "data-[state=open]:animate-flip-in",
          "data-[state=closed]:animate-flip-out",
        ],
      },
      rotate: {
        indicator: [
          "data-[state=open]:spin-in-[-90deg] data-[state=open]:fade-in-0 data-[state=open]:animate-in data-[state=open]:duration-250",
          "data-[state=closed]:spin-out-[90deg] data-[state=closed]:fade-out-0 data-[state=closed]:animate-out data-[state=closed]:duration-100",
        ],
      },
      scale: {
        indicator: [
          "data-[state=open]:zoom-in-0 data-[state=open]:fade-in-0 data-[state=open]:animate-in data-[state=open]:duration-200",
          "data-[state=closed]:zoom-out-100 data-[state=closed]:fade-out-0 data-[state=closed]:animate-out data-[state=closed]:duration-100",
        ],
      },
    },
  },
});

type SwapBaseProps = Omit<
  React.ComponentProps<typeof ArkSwap.Root>,
  "asChild" | "children"
> &
  VariantProps<typeof swapIndicatorVariants>;

type SwapProps = SwapBaseProps & {
  indicatorClassName?: string;
  off: React.ReactNode;
  on: React.ReactNode;
};

export const Swap = (props: SwapProps) => {
  const {
    variant = "fade",
    lazyMount = true,
    unmountOnExit = true,
    className,
    indicatorClassName,
    on,
    off,
    ...rest
  } = props;
  const { indicator, root } = swapIndicatorVariants({ variant });

  return (
    <ArkSwap.Root
      className={cn(root(), className)}
      data-slot="swap"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      <ArkSwap.Indicator
        className={cn(indicator(), indicatorClassName)}
        data-slot="swap-indicator"
        type="on"
      >
        {on}
      </ArkSwap.Indicator>
      <ArkSwap.Indicator
        className={cn(indicator(), indicatorClassName)}
        data-slot="swap-indicator"
        type="off"
      >
        {off}
      </ArkSwap.Indicator>
    </ArkSwap.Root>
  );
};
