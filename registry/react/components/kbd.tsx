"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const kbdVariants = tv({
  base: [
    "h-5 min-w-5",
    "px-1",
    "inline-flex w-fit max-w-full shrink-0 items-center justify-center gap-1",
    "select-none font-medium font-sans text-foreground text-xs leading-none",
    "rounded-sm border border-transparent",
    "pointer-events-none",
    "in-data-[slot=tooltip-content]:bg-background/24 in-data-[slot=tooltip-content]:text-background",
    "[&_svg:not([class*='size-'])]:size-3",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "bg-muted",
      outline: "border border-border",
    },
  },
});

interface KbdProps
  extends React.ComponentProps<typeof ark.kbd>,
    VariantProps<typeof kbdVariants> {}

export const Kbd = (props: KbdProps) => {
  const { variant = "default", className, style, ...rest } = props;

  return (
    <ark.kbd
      className={cn(kbdVariants({ variant }), className)}
      data-slot="kbd"
      {...rest}
      dir="ltr"
      style={{ unicodeBidi: "isolate", ...style }}
    />
  );
};

export const KbdGroup = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, style, ...rest } = props;

  return (
    <ark.div
      className={cn("inline-flex items-center gap-1", className)}
      data-slot="kbd-group"
      {...rest}
      dir="ltr"
      style={{ unicodeBidi: "isolate", ...style }}
    />
  );
};
