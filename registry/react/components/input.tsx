"use client";

import { FieldInput } from "@ark-ui/react/field";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const inputHeightVars = {
  lg: "[--field-height:--spacing(11)] md:[--field-height:--spacing(10)]",
  md: "[--field-height:--spacing(10)] md:[--field-height:--spacing(9)]",
  sm: "[--field-height:--spacing(9)] md:[--field-height:--spacing(8)]",
} as const;

export const inputVariants = tv({
  base: [
    "peer",
    "h-(--field-height) w-full min-w-0",
    "bg-transparent dark:bg-input/32",
    "font-normal text-base md:text-sm",
    "rounded-lg",
    "border border-input shadow-xs/4",
    "placeholder:text-muted-foreground",
    "file:inline-flex file:h-7 file:items-center file:border-0",
    "file:font-medium file:text-foreground file:text-sm",
    "transition-[color,box-shadow]",
    "outline-hidden focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
    "aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24",
    "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24",
    "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/32",
    "dark:data-invalid:border-destructive-foreground dark:data-invalid:text-destructive-foreground dark:data-invalid:ring-destructive-foreground/32",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-64",
    "motion-reduce:transition-none",
  ],
  defaultVariants: {
    pill: false,
    size: "md",
  },
  variants: {
    pill: {
      false: "",
      true: "rounded-full",
    },
    size: {
      lg: [inputHeightVars.lg, "px-[calc(--spacing(3.5)-1px)]"],
      md: [inputHeightVars.md, "px-[calc(--spacing(3)-1px)]"],
      sm: [inputHeightVars.sm, "px-[calc(--spacing(2.5)-1px)]"],
    },
  },
});

export interface InputProps
  extends Omit<React.ComponentProps<typeof FieldInput>, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = (props: InputProps) => {
  const {
    size = "md",
    pill = false,
    type = "text",
    className,
    ...rest
  } = props;

  return (
    <FieldInput
      className={cn(
        inputVariants({ pill, size }),
        !pill && size === "sm" && "rounded-md",
        className
      )}
      data-size={size}
      data-slot="input"
      type={type}
      {...rest}
    />
  );
};
