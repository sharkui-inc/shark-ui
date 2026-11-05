"use client";

import {
  DateInput as ArkDateInput,
  useDateInputContext as useArkDateInputContext,
} from "@ark-ui/react/date-input";
import { XIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { fieldLabelVariants } from "@/registry/react/components/field";
import type { InputProps } from "@/registry/react/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  type InputGroupProps,
} from "@/registry/react/components/input-group";

export const useDateInputContext = useArkDateInputContext;

interface DateInputProps
  extends React.ComponentProps<typeof ArkDateInput.Root>,
    Pick<InputProps, "size"> {
  /**
   * The separator to show between the date input fields.
   *
   * @default "-"
   */
  separator?: string | React.ReactNode;
  /**
   * Whether to show the clear button.
   *
   * @default false
   */
  showClear?: boolean;
}

interface DateInputControlProps
  extends React.ComponentProps<typeof ArkDateInput.Root>,
    Pick<InputGroupProps, "size"> {
  /**
   * Whether to show the clear button.
   *
   * @default false
   */
  showClear: boolean;
}

export const DateInput = (props: DateInputProps) => {
  const {
    size = "md",
    showClear = false,
    selectionMode = "single",
    shouldForceLeadingZeros = true,
    separator = "-",
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkDateInput.Root
      className={cn(
        "group/date-input",
        "w-full",
        "flex flex-col items-start gap-2",
        className
      )}
      data-size={size}
      data-slot="date-input"
      selectionMode={selectionMode}
      shouldForceLeadingZeros={shouldForceLeadingZeros}
      {...rest}
    >
      {children}
      <DateInputControl showClear={showClear} size={size}>
        <DateInputSegmentGroup index={0} />
        {selectionMode === "range" && (
          <>
            <span
              aria-hidden="true"
              className={cn(
                "text-muted-foreground",
                "pointer-events-none select-none",
                "[&_svg]:size-3 [&_svg]:shrink-0"
              )}
            >
              {separator}
            </span>
            <DateInputSegmentGroup index={1} />
          </>
        )}
      </DateInputControl>
      <ArkDateInput.HiddenInput index={0} key="date-input-hidden-0" />
      {selectionMode === "range" && (
        <ArkDateInput.HiddenInput index={1} key="date-input-hidden-1" />
      )}
    </ArkDateInput.Root>
  );
};

export const DateInputLabel = (
  props: React.ComponentProps<typeof ArkDateInput.Label>
) => {
  const { className, ...rest } = props;

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Ark UI label is associated with its field through context
    <ArkDateInput.Label
      className={cn(fieldLabelVariants(), className)}
      data-slot="date-input-label"
      {...rest}
    />
  );
};

const DateInputControl = (props: DateInputControlProps) => {
  const { size = "md", showClear, children } = props;

  const dateInput = useArkDateInputContext();
  const hasValue = dateInput.value.length > 0;

  return (
    <ArkDateInput.Control asChild data-slot="date-input-control">
      <InputGroup
        className={cn(
          "data-disabled:pointer-events-none data-disabled:opacity-64"
        )}
        size={size}
      >
        <div
          aria-invalid={dateInput.invalid || undefined}
          className={cn(
            "min-w-0",
            "flex-1",
            "flex items-center gap-2",
            "text-base font-normal md:text-sm"
          )}
          data-slot="date-input-field"
        >
          {children}
        </div>
        {showClear && hasValue && !dateInput.disabled && (
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              aria-label="Clear date"
              data-slot="date-input-clear"
              onClick={() => dateInput.clearValue()}
              size="icon-xs"
              variant="ghost"
            >
              <XIcon aria-hidden="true" />
            </InputGroupButton>
          </InputGroupAddon>
        )}
      </InputGroup>
    </ArkDateInput.Control>
  );
};

const DateInputSegmentGroup = (
  props: React.ComponentProps<typeof ArkDateInput.SegmentGroup>
) => {
  const { index = 0, className, ...rest } = props;

  return (
    <ArkDateInput.SegmentGroup
      className={cn("min-w-0", "flex items-center gap-px", className)}
      data-slot="date-input-segment-group"
      index={index}
      {...rest}
    >
      <ArkDateInput.SegmentContext>
        {(segment) => <DateInputSegment segment={segment} />}
      </ArkDateInput.SegmentContext>
    </ArkDateInput.SegmentGroup>
  );
};

const DateInputSegment = (
  props: React.ComponentProps<typeof ArkDateInput.Segment>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDateInput.Segment
      className={cn(
        "not-data-[type=literal]:inline-flex not-data-[type=literal]:min-h-6 not-data-[type=literal]:min-w-6 not-data-[type=literal]:items-center not-data-[type=literal]:justify-center",
        "tabular-nums",
        "rounded-sm border-0 shadow-none ring-0",
        "not-data-[type=literal]:px-0.5",
        "not-data-[type=literal]:focus:bg-primary not-data-[type=literal]:focus:text-primary-foreground",
        "data-[type=literal]:text-muted-foreground data-[type=literal]:px-px data-[type=literal]:select-none",
        "data-placeholder-shown:text-muted-foreground",
        "outline-hidden",
        "data-readonly:cursor-default",
        "group-aria-invalid/date-input:text-destructive",
        "group-data-invalid/date-input:text-destructive",
        "not-data-[type=literal]:focus:group-data-invalid/date-input:bg-destructive not-data-[type=literal]:focus:group-data-invalid/date-input:text-white",
        "dark:group-data-invalid/date-input:text-destructive-foreground dark:group-aria-invalid/date-input:text-destructive-foreground",
        "dark:not-data-[type=literal]:focus:group-data-invalid/date-input:bg-destructive-foreground",
        className
      )}
      data-slot="date-input-segment"
      {...rest}
    />
  );
};
