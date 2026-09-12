"use client";

import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import { Select as ArkSelect, useSelectContext } from "@ark-ui/react/select";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { inputItemVariants } from "@/registry/react/components/input";
import {
  menuEmptyVariants,
  menuGroupLabelVariants,
  menuItemControlVariants,
  menuItemIconVariants,
  menuItemIndicatorVariants,
  menuListVariants,
  menuSeparatorVariants,
} from "@/registry/react/components/menu";
import { Separator } from "@/registry/react/components/separator";

export const useSelect = useSelectContext;

export const SelectContext = ArkSelect.Context;

export const Select: ArkSelect.RootComponent = (props) => {
  const { lazyMount = true, unmountOnExit = true, children, ...rest } = props;

  return (
    <ArkSelect.Root
      data-slot="select"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    >
      {children}

      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  );
};

export const selectTriggerVariants = tv({
  base: [
    "w-fit min-w-0",
    "flex items-center gap-2",
    "touch-manipulation select-none",
    "font-normal text-base md:text-sm",
    "outline-none",
    "transition-[color,box-shadow]",
    "data-placeholder-shown:text-muted-foreground/64",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-64",
    "motion-reduce:transition-none",
  ],
  defaultVariants: {
    size: "md",
    variant: "default",
  },
  variants: {
    size: {
      lg: ["h-9", "px-[calc(--spacing(3.5)-1px)]"],
      md: ["h-8", "px-[calc(--spacing(3)-1px)]"],
      sm: ["h-7", "px-[calc(--spacing(2.5)-1px)]"],
    },
    variant: {
      default: [
        "rounded-lg",
        "bg-transparent dark:bg-input/30",
        "border border-input shadow-xs/5",
        "focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
        "data-[state=open]:border-primary data-[state=open]:ring-[3px] data-[state=open]:ring-ring/32",
        "aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24",
        "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-[3px] data-invalid:ring-destructive/24",
        "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/40",
        "dark:data-invalid:border-destructive-foreground dark:data-invalid:text-destructive-foreground dark:data-invalid:ring-destructive-foreground/40",
      ],
      ghost: [
        "rounded-lg",
        "border border-transparent",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
      ],
    },
  },
});

interface SelectTriggerProps
  extends Omit<React.ComponentProps<typeof ArkSelect.Trigger>, "size">,
    VariantProps<typeof selectTriggerVariants> {
  /**
   * Show clear trigger
   *
   * @default false
   */
  showClear?: boolean;
  /**
   * Show the chevron indicator
   *
   * @default true
   */
  showTrigger?: boolean;
}

export const SelectTrigger = (props: SelectTriggerProps) => {
  const {
    showClear = false,
    showTrigger = true,
    size = "md",
    variant = "default",
    className,
    children,
    ...rest
  } = props;

  const showTrailing = showClear || showTrigger;

  return (
    <ArkSelect.Control data-slot="select-control">
      <ArkSelect.Trigger
        className={cn(selectTriggerVariants({ size, variant }), className)}
        data-slot="select-trigger"
        {...rest}
      >
        {children}

        {showTrailing ? (
          <div className="ms-auto flex items-center gap-1 rtl:me-auto">
            {showClear ? (
              <SelectClearTrigger>
                <XIcon />
              </SelectClearTrigger>
            ) : null}
            {showTrigger ? (
              <ArkSelect.Indicator data-slot="select-indicator">
                <ChevronsUpDownIcon className="size-4" />
              </ArkSelect.Indicator>
            ) : null}
          </div>
        ) : null}
      </ArkSelect.Trigger>
    </ArkSelect.Control>
  );
};

export const SelectSeparator = (
  props: React.ComponentProps<typeof Separator>
) => {
  const { className, ...rest } = props;

  return (
    <Separator
      className={cn(
        "pointer-events-none -mx-1",
        menuSeparatorVariants(),
        className
      )}
      data-slot="select-separator"
      {...rest}
    />
  );
};

export const SelectValue = (
  props: React.ComponentProps<typeof ArkSelect.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ValueText
      className={cn(
        "min-w-0",
        "flex items-center gap-2",
        "truncate text-nowrap",
        className
      )}
      {...rest}
    />
  );
};

export const SelectContent = (
  props: React.ComponentProps<typeof ArkSelect.Content>
) => {
  const { className, children, ...rest } = props;

  return (
    <Portal>
      <ArkSelect.Positioner data-slot="select-positioner">
        <ArkSelect.Content
          className={cn(
            "z-[calc(50+var(--layer-index,0))]",
            "relative",
            "max-h-96 min-w-(--reference-width)",
            "overflow-y-auto",
            "bg-popover",
            "text-popover-foreground",
            "rounded-xl border shadow-lg/5",
            "origin-(--transform-origin)",
            "outline-none",
            "duration-100",
            "data-[state=open]:animate-in",
            "data-[state=open]:fade-in-0",
            "data-[state=open]:zoom-in-[98%]",
            "data-[placement=bottom]:slide-in-from-top-2",
            "data-[placement=left]:slide-in-from-end-2",
            "data-[placement=right]:slide-in-from-start-2",
            "data-[placement=top]:slide-in-from-bottom-2",
            "motion-reduce:animate-none",
            menuListVariants(),
            className
          )}
          data-slot="select-content"
          {...rest}
        >
          {children}
        </ArkSelect.Content>
      </ArkSelect.Positioner>
    </Portal>
  );
};

interface SelectGroupProps
  extends React.ComponentProps<typeof ArkSelect.ItemGroup> {
  /**
   * The heading of the group
   */
  heading?: string | React.ReactNode;
}

export const SelectGroup = (props: SelectGroupProps) => {
  const { heading, children, ...rest } = props;

  return (
    <ArkSelect.ItemGroup data-slot="select-group" {...rest}>
      {!heading && <SelectGroupLabel>{heading}</SelectGroupLabel>}

      {children}
    </ArkSelect.ItemGroup>
  );
};

export const SelectGroupLabel = (
  props: React.ComponentProps<typeof ArkSelect.ItemGroupLabel>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ItemGroupLabel
      className={cn(menuGroupLabelVariants(), className)}
      data-slot="select-group-label"
      {...rest}
    />
  );
};

export const SelectItem = (
  props: React.ComponentProps<typeof ArkSelect.Item>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkSelect.Item
      className={cn(
        menuItemControlVariants(),
        inputItemVariants(),
        menuItemIconVariants(),
        "cursor-default",
        "pe-8",
        "outline-hidden",
        "in-[[data-slot=select-content]:has([data-slot=select-group-label])]:ps-4",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "[&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      data-slot="select-item"
      {...rest}
    >
      <ArkSelect.ItemText
        className="flex min-w-0 items-center gap-2"
        data-slot="select-item-text"
      >
        {children}
      </ArkSelect.ItemText>

      <ArkSelect.ItemIndicator
        className={menuItemIndicatorVariants()}
        data-slot="select-item-indicator"
      >
        <CheckIcon />
      </ArkSelect.ItemIndicator>
    </ArkSelect.Item>
  );
};

export const SelectClearTrigger = (
  props: React.ComponentProps<typeof ArkSelect.ClearTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.ClearTrigger
      aria-label="Clear selected value(s)"
      className={cn(
        "[&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
        "transition-opacity",
        "opacity-64",
        "outline-none focus-visible:opacity-100",
        "hover:opacity-100",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="select-clear-trigger"
      {...rest}
    />
  );
};

export const SelectEmpty = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  const { empty } = useSelectContext();

  if (empty) {
    return (
      <ark.div
        className={cn(menuEmptyVariants(), className)}
        role="presentation"
        {...rest}
      />
    );
  }

  return null;
};
