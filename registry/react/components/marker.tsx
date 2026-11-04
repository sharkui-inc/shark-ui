"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const markerVariants = tv({
  base: [
    "group/marker",
    "relative",
    "min-h-4 w-full",
    "flex items-center gap-2",
    "text-muted-foreground text-start text-sm",
    "[&_svg:not([class*='size-'])]:size-4",
    "[a]:hover:text-foreground [a]:underline [a]:underline-offset-3",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      border: ["pb-2", "border-border border-b"],
      default: "",
      separator: [
        "before:bg-border before:me-1 before:h-px before:min-w-0 before:flex-1",
        "after:bg-border after:ms-1 after:h-px after:min-w-0 after:flex-1",
      ],
    },
  },
});

interface MarkerProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof markerVariants> {}

export const Marker = (props: MarkerProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ark.div
      className={cn(markerVariants({ variant }), className)}
      data-slot="marker"
      data-variant={variant}
      {...rest}
    />
  );
};

export const MarkerIcon = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "size-4 shrink-0",
        "[&_svg:not([class*='size-'])]:size-4",
        className
      )}
      data-slot="marker-icon"
      {...rest}
      aria-hidden
    />
  );
};

export const MarkerContent = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "min-w-0",
        "wrap-break-word",
        "group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center",
        "*:[a]:hover:text-foreground *:[a]:underline *:[a]:underline-offset-3",
        className
      )}
      data-slot="marker-content"
      {...rest}
    />
  );
};
