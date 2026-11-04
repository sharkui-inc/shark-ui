"use client";

import {
  NumberInput as ArkNumberInput,
  useNumberInputContext as useArkNumberInputContext,
} from "@ark-ui/react/number-input";
import { MinusIcon, PlusIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { fieldLabelVariants } from "@/registry/react/components/field";
import {
  Input,
  type InputProps,
  inputHeightVars,
} from "@/registry/react/components/input";

export const useNumberInputContext = useArkNumberInputContext;

interface NumberInputProps
  extends React.ComponentProps<typeof ArkNumberInput.Root>,
    Pick<InputProps, "size"> {}

export const NumberInput = (props: NumberInputProps) => {
  const { size = "md", className, children, ...rest } = props;

  return (
    <ArkNumberInput.Root
      className={cn(
        inputHeightVars[size],
        "data-[size=lg]:[--number-field-input-padding:calc(--spacing(3.5)-1px)]",
        "data-[size=md]:[--number-field-input-padding:calc(--spacing(3)-1px)]",
        "data-[size=sm]:[--number-field-input-padding:calc(--spacing(2.5)-1px)]",
        "group/number-field",
        "w-full",
        "flex flex-col items-start gap-2",
        "has-data-[slot=number-field-increment]:has-data-[slot=number-field-decrement]:**:data-[slot=number-field-input]:text-center",
        className
      )}
      data-size={size}
      data-slot="number-field"
      {...rest}
    >
      {children}
    </ArkNumberInput.Root>
  );
};

export const NumberInputGroup = (
  props: React.ComponentProps<typeof ArkNumberInput.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNumberInput.Control
      className={cn(
        "relative",
        "h-(--field-height)",
        "w-full",
        "flex justify-between",
        "bg-transparent",
        "dark:bg-input/32",
        "text-base font-normal md:text-sm",
        "rounded-lg",
        "in-data-[size=sm]:rounded-md",
        "overflow-hidden",
        "border-input border shadow-xs/4",
        "transition-[border-color,box-shadow]",
        "focus-within:border-ring/64 focus-within:ring-ring/24 focus-within:ring-2",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/24 aria-invalid:ring-[3px]",
        "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/24",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="number-field-group"
      {...rest}
    />
  );
};

export const NumberInputDecrement = (
  props: React.ComponentProps<typeof ArkNumberInput.DecrementTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNumberInput.DecrementTrigger
      asChild
      className={cn(
        "relative",
        "h-full",
        "shrink-0",
        "flex",
        "text-foreground",
        "rounded-none",
        "cursor-pointer",
        className
      )}
      data-slot="number-field-decrement"
      {...rest}
    >
      <Button
        aria-label="Decrement"
        className={cn(
          "h-full md:h-full",
          "focus-visible:border-transparent focus-visible:ring-0"
        )}
        variant="ghost"
      >
        <MinusIcon aria-hidden />
      </Button>
    </ArkNumberInput.DecrementTrigger>
  );
};

export const NumberInputIncrement = (
  props: React.ComponentProps<typeof ArkNumberInput.IncrementTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkNumberInput.IncrementTrigger
      asChild
      className={cn(
        "relative",
        "h-full",
        "shrink-0",
        "flex",
        "text-foreground",
        "rounded-none",
        "cursor-pointer",
        className
      )}
      data-slot="number-field-increment"
      {...rest}
    >
      <Button
        aria-label="Increment"
        className={cn(
          "h-full md:h-full",
          "focus-visible:border-transparent focus-visible:ring-0"
        )}
        variant="ghost"
      >
        <PlusIcon aria-hidden />
      </Button>
    </ArkNumberInput.IncrementTrigger>
  );
};

export const NumberInputInput = (props: React.ComponentProps<typeof Input>) => {
  const { size: inputSize, className, ...rest } = props;

  return (
    <ArkNumberInput.Input asChild data-slot="number-field-input" {...rest}>
      <Input
        className={cn(
          "h-full grow",
          inputSize ? "" : "px-(--number-field-input-padding)",
          "tabular-nums",
          "border-0 shadow-none ring-0",
          "focus-visible:border-0 focus-visible:ring-0",
          "aria-invalid:ring-0",
          "data-invalid:ring-0",
          "dark:bg-transparent",
          className
        )}
        size={inputSize}
      />
    </ArkNumberInput.Input>
  );
};

export const NumberInputScrubber = (
  props: React.ComponentProps<typeof ArkNumberInput.Scrubber>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkNumberInput.Scrubber
      asChild
      className={cn("flex", "cursor-ew-resize", className)}
      data-slot="number-field-scrubber"
      {...rest}
    >
      <ArkNumberInput.Label className={fieldLabelVariants()}>
        {children}
      </ArkNumberInput.Label>
    </ArkNumberInput.Scrubber>
  );
};
