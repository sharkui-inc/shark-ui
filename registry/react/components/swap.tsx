"use client";

import { Swap as ArkSwap, useSwapContext } from "@ark-ui/react/swap";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useSwap = useSwapContext;

const swapIndicatorVariants = tv({
  base: ["[&>span]:motion-reduce:animate-none"],
  defaultVariants: {
    variant: "fade",
  },
  variants: {
    variant: {
      blur: [
        "[&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:zoom-in-50 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:blur-in-sm [&>span]:data-[state=open]:duration-250",
        "[&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:zoom-out-50 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:blur-out-sm [&>span]:data-[state=closed]:duration-150",
      ],
      fade: [
        "[&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-200",
        "[&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-100",
      ],
      flip: [
        "[&>span]:backface-hidden",
        "[&>span]:data-[state=open]:animate-[flip-in_400ms_ease]",
        "[&>span]:data-[state=closed]:animate-[flip-out_200ms_ease]",
      ],
      rotate: [
        "[&>span]:data-[state=open]:spin-in-[-90deg] [&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-250",
        "[&>span]:data-[state=closed]:spin-out-[90deg] [&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-100",
      ],
      scale: [
        "[&>span]:data-[state=open]:zoom-in-0 [&>span]:data-[state=open]:fade-in-0 [&>span]:data-[state=open]:animate-in [&>span]:data-[state=open]:duration-200",
        "[&>span]:data-[state=closed]:zoom-out-100 [&>span]:data-[state=closed]:fade-out-0 [&>span]:data-[state=closed]:animate-out [&>span]:data-[state=closed]:duration-100",
      ],
    },
  },
});

type SwapBaseProps = Omit<
  React.ComponentProps<typeof ArkSwap.Root>,
  "children"
> &
  VariantProps<typeof swapIndicatorVariants>;

type SwapSlotsProps = {
  children?: never;
  off: React.ReactNode;
  on: React.ReactNode;
};

type SwapCompoundProps = {
  children: React.ReactNode;
  off?: never;
  on?: never;
};

type SwapProps = SwapBaseProps & (SwapCompoundProps | SwapSlotsProps);

export const SwapIndicator = (
  props: React.ComponentProps<typeof ArkSwap.Indicator>
) => <ArkSwap.Indicator data-slot="swap-indicator" {...props} />;

export const Swap = (props: SwapProps) => {
  if ("on" in props) {
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
        <SwapIndicator type="on">{on}</SwapIndicator>
        <SwapIndicator type="off">{off}</SwapIndicator>
      </ArkSwap.Root>
    );
  }

  const {
    variant = "fade",
    lazyMount = true,
    unmountOnExit = true,
    className,
    children,
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
      {children}
    </ArkSwap.Root>
  );
};
