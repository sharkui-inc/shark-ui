"use client";

import { ark } from "@ark-ui/react/factory";
import { Field as ArkField } from "@ark-ui/react/field";
import { ChevronsUpDownIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { inputHeightVars } from "@/registry/react/components/input";

export const nativeSelectVariants = tv({
  base: [
    "appearance-none",
    "bg-none",
    "[&::-ms-expand]:hidden [&::picker-icon]:hidden",
    "h-(--field-height) w-full min-w-0",
    "ps-2.5 pe-8",
    "text-start",
    "touch-manipulation select-none",
    "text-base font-normal md:text-sm",
    "bg-transparent",
    "dark:bg-input/32",
    "rounded-lg",
    "border-input border shadow-xs/4",
    "transition-colors",
    "outline-hidden",
    "[&:has(option[value='']:checked)]:text-muted-foreground",
    "disabled:pointer-events-none disabled:cursor-not-allowed",
    "focus:border-ring/64 focus:ring-ring/24 focus:ring-2",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/24 aria-invalid:ring-[3px]",
    "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/24",
    "motion-reduce:transition-none",
  ],
  defaultVariants: {
    size: "md",
    variant: "default",
  },
  variants: {
    size: {
      lg: [inputHeightVars.lg, "ps-[calc(--spacing(3.5)-1px)]"],
      md: [inputHeightVars.md, "ps-[calc(--spacing(3)-1px)]"],
      sm: [inputHeightVars.sm, "ps-[calc(--spacing(2.5)-1px)]", "rounded-md"],
    },
    variant: {
      default: "",
      ghost: [
        "bg-transparent",
        "dark:bg-transparent",
        "border-transparent shadow-none",
        "hover:bg-accent hover:text-accent-foreground",
        "dark:hover:bg-accent dark:hover:text-accent-foreground",
      ],
    },
  },
});

const nativeSelectEndPadding = {
  lg: "pe-[calc(--spacing(3.5)-1px)]",
  md: "pe-[calc(--spacing(3)-1px)]",
  sm: "pe-[calc(--spacing(2.5)-1px)]",
} as const;

interface NativeSelectProps
  extends Omit<React.ComponentProps<typeof ArkField.Select>, "size">,
    VariantProps<typeof nativeSelectVariants> {
  /**
   * Whether the select is invalid.
   *
   * @default false
   */
  invalid?: boolean;
  /**
   * Show the chevron indicator
   *
   * @default true
   */
  showTrigger?: boolean;
}

export const NativeSelect = (props: NativeSelectProps) => {
  const {
    size = "md",
    variant = "default",
    invalid,
    showTrigger = true,
    className,
    ...rest
  } = props;

  return (
    <ark.div
      className={cn(
        "relative",
        "w-fit",
        "has-[select:disabled]:opacity-64",
        "[&_svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      data-slot="native-select-wrapper"
    >
      <ArkField.Select
        className={cn(
          nativeSelectVariants({ size, variant }),
          !showTrigger && nativeSelectEndPadding[size]
        )}
        data-slot="native-select"
        {...rest}
        aria-invalid={invalid || undefined}
      />
      {showTrigger ? (
        <ChevronsUpDownIcon
          aria-hidden
          className={cn(
            "absolute inset-e-2.5 top-1/2",
            "-translate-y-1/2",
            "size-4"
          )}
          data-slot="native-select-icon"
        />
      ) : null}
    </ark.div>
  );
};

export const NativeSelectOption = (
  props: React.ComponentProps<typeof ark.option>
) => <ark.option data-slot="native-select-option" {...props} />;

export const NativeSelectOptGroup = (
  props: React.ComponentProps<typeof ark.optgroup>
) => <ark.optgroup data-slot="native-select-optgroup" {...props} />;
