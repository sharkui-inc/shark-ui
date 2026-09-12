"use client";

import {
  Highlight as ArkHighlight,
  useHighlight as useArkHighlight,
} from "@ark-ui/react/highlight";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useHighlight = useArkHighlight;

export const highlightVariants = tv({
  base: ["box-decoration-clone"],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: [
        "px-[0.3em] py-[0.15em]",
        "rounded-md",
        "bg-primary",
        "text-primary-foreground",
      ],
      ghost: ["text-primary"],
    },
  },
});

interface HighlightProps
  extends React.ComponentProps<typeof ArkHighlight>,
    VariantProps<typeof highlightVariants> {}

export const Highlight = (props: HighlightProps) => {
  const { className, variant = "default", ...rest } = props;

  return (
    <ArkHighlight
      className={cn(highlightVariants({ variant }), className)}
      data-slot="highlight"
      data-variant={variant}
      {...rest}
    />
  );
};
