"use client";

import {
  DatePicker as ArkDatePicker,
  useDatePickerContext as useArkDatePickerContext,
} from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import { getLocalTimeZone } from "@internationalized/date";
import { CalendarIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { CalendarPresetTrigger } from "@/registry/react/components/calendar";
import { fieldLabelVariants } from "@/registry/react/components/field";
import type { InputProps } from "@/registry/react/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";

export const useDatePickerContext = useArkDatePickerContext;

export const DatePicker = (
  props: Omit<React.ComponentProps<typeof ArkDatePicker.Root>, "inline">
) => {
  const {
    lazyMount = true,
    unmountOnExit = true,
    positioning,
    timeZone = getLocalTimeZone(),
    className,
    ...rest
  } = props;

  return (
    <ArkDatePicker.Root
      className={cn(
        "[--cell-size:--spacing(9)]",
        "w-fit",
        "flex flex-col gap-2",
        className
      )}
      data-slot="date-picker"
      lazyMount={lazyMount}
      positioning={{
        flip: ["top", "bottom", "left", "right"],
        placement: "top",
        ...positioning,
      }}
      unmountOnExit={unmountOnExit}
      {...rest}
      inline={false}
      timeZone={timeZone}
    />
  );
};

export const DatePickerLabel = (
  props: React.ComponentProps<typeof ArkDatePicker.Label>
) => {
  const { className, ...rest } = props;

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Ark UI label is associated with its field through context
    <ArkDatePicker.Label
      className={cn(fieldLabelVariants(), className)}
      data-slot="date-picker-label"
      {...rest}
    />
  );
};

export const DatePickerTrigger = (
  props: React.ComponentProps<typeof ArkDatePicker.Trigger>
) => {
  const {
    "aria-labelledby": ariaLabelledBy,
    className,
    children,
    ...rest
  } = props;

  const datePicker = useDatePickerContext();
  const labelId = datePicker.getLabelProps().id;
  const labelledBy = [ariaLabelledBy, labelId].filter(Boolean).join(" ");

  return (
    <ArkDatePicker.Control data-slot="date-picker-control">
      <ArkDatePicker.Trigger
        aria-labelledby={labelledBy || undefined}
        className={cn(
          "justify-start",
          "text-start",
          "data-placeholder-shown:[&>span]:text-muted-foreground",
          "active:scale-100",
          "[&_svg:not([class*='text-'])]:opacity-64",
          className
        )}
        data-slot="date-picker-trigger"
        {...rest}
      >
        {children}
      </ArkDatePicker.Trigger>
    </ArkDatePicker.Control>
  );
};

interface DatePickerInputProps
  extends Omit<React.ComponentProps<typeof ArkDatePicker.Input>, "size">,
    InputProps {}

export const DatePickerInput = (props: DatePickerInputProps) => {
  const { size, className, ...rest } = props;

  return (
    <ArkDatePicker.Control data-slot="date-picker-control">
      <InputGroup size={size}>
        <ArkDatePicker.Input asChild data-slot="date-picker-input" {...rest}>
          <InputGroupInput className={className} />
        </ArkDatePicker.Input>

        <InputGroupAddon align="inline-end">
          <ArkDatePicker.Trigger asChild data-slot="date-picker-trigger">
            <InputGroupButton size="icon-xs" variant="ghost">
              <CalendarIcon
                aria-hidden="true"
                className="text-muted-foreground"
              />
            </InputGroupButton>
          </ArkDatePicker.Trigger>
        </InputGroupAddon>
      </InputGroup>
    </ArkDatePicker.Control>
  );
};

export const DatePickerContent = (
  props: React.ComponentProps<typeof ArkDatePicker.Content>
) => {
  const { className, ...rest } = props;

  return (
    <Portal>
      <ArkDatePicker.Positioner data-slot="date-picker-positioner">
        <ArkDatePicker.Content
          className={cn(
            "z-[calc(50+var(--layer-index,0))]",
            "[--cell-size:--spacing(9)]",
            "w-fit min-w-72",
            "p-3",
            "bg-popover",
            "text-popover-foreground",
            "rounded-xl border shadow-lg/4",
            "outline-hidden",
            "origin-(--transform-origin)",
            "duration-100 ease-out",
            "data-[placement^=bottom]:slide-in-from-top-2",
            "data-[placement^=top]:slide-in-from-bottom-2",
            "data-[placement^=left]:slide-in-from-right-2",
            "data-[placement^=right]:slide-in-from-left-2",
            "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in",
            "motion-reduce:animate-none",
            "motion-reduce:data-[state=open]:animate-none",
            className
          )}
          data-slot="date-picker-content"
          {...rest}
        />
      </ArkDatePicker.Positioner>
    </Portal>
  );
};

export const DatePickerValue = (
  props: React.ComponentProps<typeof ArkDatePicker.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDatePicker.ValueText
      className={cn("text-sm font-medium", className)}
      data-slot="date-picker-value"
      {...rest}
    />
  );
};

export const DatePickerPresetTrigger = (
  props: React.ComponentProps<typeof ArkDatePicker.PresetTrigger>
) => (
  <CalendarPresetTrigger data-slot="date-picker-preset-trigger" {...props} />
);
