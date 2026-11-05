"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const State = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-w-0 flex-1",
        "flex flex-col items-center justify-center gap-6",
        "p-6 md:p-12",
        "text-center text-balance",
        "rounded-lg border-dashed",
        className
      )}
      data-slot="state"
      {...rest}
    />
  );
};

export const StateHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "max-w-sm",
        "flex flex-col items-center gap-2",
        "text-center",
        className
      )}
      data-slot="state-header"
      {...rest}
    />
  );
};

export const stateMediaVariants = tv({
  base: [
    "shrink-0",
    "flex items-center justify-center",
    "mb-2",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "bg-transparent",
      icon: [
        "size-10",
        "bg-muted",
        "text-foreground",
        "rounded-lg",
        "[&_svg:not([class*='size-'])]:size-6",
      ],
    },
  },
});

interface StateMediaProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof stateMediaVariants> {}

export const StateMedia = (props: StateMediaProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ark.div
      className={cn(stateMediaVariants({ variant }), className)}
      data-slot="state-media"
      data-variant={variant}
      {...rest}
    />
  );
};

export const StateTitle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("text-lg font-medium tracking-tight", className)}
      data-slot="state-title"
      {...rest}
    />
  );
};

export const StateDescription = (props: React.ComponentProps<typeof ark.p>) => {
  const { className, ...rest } = props;

  return (
    <ark.p
      className={cn(
        "text-muted-foreground text-sm/relaxed",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      data-slot="state-description"
      {...rest}
    />
  );
};

export const StateContent = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-full max-w-sm min-w-0",
        "flex flex-col items-center gap-4",
        "text-sm text-balance",
        className
      )}
      data-slot="state-content"
      {...rest}
    />
  );
};
