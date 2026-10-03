"use client";

import {
  Toggle as ArkToggle,
  useToggle as useArkToggle,
  useToggleContext as useArkToggleContext,
} from "@ark-ui/react/toggle";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/registry/react/components/button";

export const useToggle = useArkToggle;
export const useToggleContext = useArkToggleContext;

export const toggleVariants = tv({
  base: ["data-[state=on]:bg-input/64 dark:data-[state=on]:bg-input/64"],
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: "min-w-11 md:min-w-10",
      md: "min-w-10 md:min-w-9",
      sm: "min-w-9 md:min-w-8",
    },
  },
});

export interface ToggleProps
  extends React.ComponentProps<typeof ArkToggle.Root>,
    VariantProps<typeof toggleVariants>,
    Pick<VariantProps<typeof buttonVariants>, "pill"> {
  /**
   * The variant of the toggle
   *
   * @default "default"
   */
  variant?: "default" | "outline";
}

export const Toggle = (props: ToggleProps) => {
  const {
    variant = "default",
    size = "md",
    pill = false,
    className,
    ...rest
  } = props;
  const buttonVariant = variant === "default" ? "ghost" : variant;

  return (
    <ArkToggle.Root
      className={cn(
        buttonVariants({
          clickEffect: false,
          pill,
          size,
          variant: buttonVariant,
        }),
        toggleVariants({ size }),
        className
      )}
      data-slot="toggle"
      {...rest}
    />
  );
};

export const ToggleIndicator = (
  props: React.ComponentProps<typeof ArkToggle.Indicator>
) => {
  const { children, ...rest } = props;

  return (
    <ArkToggle.Indicator
      className="flex items-center gap-2"
      data-slot="toggle-indicator"
      {...rest}
    >
      {children}
    </ArkToggle.Indicator>
  );
};
