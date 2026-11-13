"use client";

import {
  Swap as ArkSwap,
  useSwapContext as useArkSwapContext,
} from "@ark-ui/react/swap";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useSwapContext = useArkSwapContext;

const swapIndicatorVariants = tv({
  defaultVariants: {
    variant: "fade",
  },
  slots: {
    indicator: [
      "motion-reduce:animate-none",
      "motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
    ],
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
          "data-[state=open]:-spin-in-90 data-[state=open]:fade-in-0 data-[state=open]:animate-in data-[state=open]:duration-250",
          "data-[state=closed]:spin-out-90 data-[state=closed]:fade-out-0 data-[state=closed]:animate-out data-[state=closed]:duration-100",
        ],
      },
      scale: {
        indicator: [
          "data-[state=open]:zoom-in-95 data-[state=open]:fade-in-0 data-[state=open]:animate-in data-[state=open]:duration-200",
          "data-[state=closed]:zoom-out-100 data-[state=closed]:fade-out-0 data-[state=closed]:animate-out data-[state=closed]:duration-100",
        ],
      },
    },
  },
});

interface SwapProps
  extends React.ComponentProps<typeof ArkSwap.Root>,
    VariantProps<typeof swapIndicatorVariants> {
  off: React.ReactNode;
  on: React.ReactNode;
}

export const Swap = (props: SwapProps) => {
  const {
    variant = "fade",
    lazyMount = true,
    unmountOnExit = true,
    off,
    on,
    className,
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
      <SwapIndicator className={indicator()} type="on">
        {on}
      </SwapIndicator>
      <SwapIndicator className={indicator()} type="off">
        {off}
      </SwapIndicator>
    </ArkSwap.Root>
  );
};

const SwapIndicator = (
  props: React.ComponentProps<typeof ArkSwap.Indicator>
) => <ArkSwap.Indicator data-slot="swap-indicator" {...props} />;
