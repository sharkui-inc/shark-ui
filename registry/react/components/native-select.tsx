"use client";

import { ark } from "@ark-ui/react/factory";
import { Field as ArkField } from "@ark-ui/react/field";
import { ChevronsUpDownIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const nativeSelectVariants = tv({
  base: [
    "appearance-none",
    "w-full min-w-0",
    "ps-2.5 pe-8 text-start",
    "touch-manipulation select-none",
    "font-normal text-base md:text-sm",
    "bg-transparent dark:bg-input/32",
    "rounded-lg",
    "border border-input shadow-xs/4",
    "transition-colors",
    "outline-hidden",
    "[&:has(option[value='']:checked)]:text-muted-foreground",
    "disabled:pointer-events-none disabled:cursor-not-allowed",
    "focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
    "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24",
    "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/24",
    "motion-reduce:transition-none",
  ],
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: ["h-9", "ps-[calc(--spacing(3.5)-1px)]"],
      md: ["h-8", "ps-[calc(--spacing(3)-1px)]"],
      sm: ["h-7", "ps-[calc(--spacing(2.5)-1px)]", "rounded-md"],
    },
  },
});

interface NativeSelectProps
  extends Omit<React.ComponentProps<typeof ArkField.Select>, "size">,
    VariantProps<typeof nativeSelectVariants> {
  /**
   * Whether the select is invalid.
   *
   * @default false
   */
  invalid?: boolean;
}

export const NativeSelect = (props: NativeSelectProps) => {
  const { size = "md", invalid, className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "relative w-fit",
        "has-[select:disabled]:opacity-64",
        "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
        className
      )}
      data-slot="native-select-wrapper"
    >
      <ArkField.Select
        className={cn(nativeSelectVariants({ size }))}
        data-slot="native-select"
        {...rest}
        aria-invalid={invalid || undefined}
      />
      <ChevronsUpDownIcon
        aria-hidden
        className={cn(
          "absolute inset-e-2.5 top-1/2 -translate-y-1/2",
          "size-4"
        )}
        data-slot="native-select-icon"
      />
    </ark.div>
  );
};

export const NativeSelectOption = (
  props: React.ComponentProps<typeof ark.option>
) => <ark.option data-slot="native-select-option" {...props} />;

export const NativeSelectOptGroup = (
  props: React.ComponentProps<typeof ark.optgroup>
) => <ark.optgroup data-slot="native-select-optgroup" {...props} />;
