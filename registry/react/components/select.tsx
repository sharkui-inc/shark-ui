"use client";

import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import {
  Select as ArkSelect,
  useSelectContext as useArkSelectContext,
} from "@ark-ui/react/select";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { fieldLabelVariants } from "@/registry/react/components/field";
import { inputHeightVars } from "@/registry/react/components/input";
import {
  menuEmptyVariants,
  menuGroupLabelVariants,
  menuItemControlVariants,
  menuItemIndicatorVariants,
} from "@/registry/react/components/menu";
import { Separator } from "@/registry/react/components/separator";

export const useSelectContext = useArkSelectContext;

export const SelectContext = ArkSelect.Context;

export const Select: ArkSelect.RootComponent = (props) => {
  const {
    lazyMount = true,
    unmountOnExit = true,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkSelect.Root
      className={cn("flex flex-col gap-2", className)}
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

export const SelectLabel = (
  props: React.ComponentProps<typeof ArkSelect.Label>
) => {
  const { className, ...rest } = props;

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Ark UI label is associated with its field through context
    <ArkSelect.Label
      className={cn(fieldLabelVariants(), className)}
      data-slot="select-label"
      {...rest}
    />
  );
};

export const selectTriggerVariants = tv({
  base: [
    "h-(--field-height) w-fit min-w-0",
    "flex items-center gap-2",
    "touch-manipulation select-none",
    "text-base font-normal md:text-sm",
    "rounded-lg",
    "outline-hidden",
    "transition-[color,box-shadow]",
    "data-placeholder-shown:text-muted-foreground",
    "[&_svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-64",
    "motion-reduce:transition-none",
  ],
  defaultVariants: {
    size: "md",
    variant: "default",
  },
  variants: {
    size: {
      lg: [
        inputHeightVars.lg,
        "ps-[calc(--spacing(3.5)-1px)] pe-[calc(--spacing(3.5)-1px)]",
      ],
      md: [
        inputHeightVars.md,
        "ps-[calc(--spacing(3)-1px)] pe-[calc(--spacing(3)-1px)]",
      ],
      sm: [
        inputHeightVars.sm,
        "ps-[calc(--spacing(2.5)-1px)] pe-[calc(--spacing(2.5)-1px)]",
        "rounded-md",
      ],
    },
    variant: {
      default: [
        "bg-transparent",
        "dark:bg-input/32",
        "border-input border shadow-xs/4",
        "group-focus-within:border-ring/64 group-focus-within:ring-ring/24 group-focus-within:ring-2",
        "data-[state=open]:border-ring/64 data-[state=open]:ring-ring/24 data-[state=open]:ring-2",
        "aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:ring-destructive/24 aria-invalid:ring-[3px]",
        "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-destructive/24 data-invalid:ring-[3px]",
        "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/32",
        "dark:data-invalid:border-destructive-foreground dark:data-invalid:text-destructive-foreground dark:data-invalid:ring-destructive-foreground/32",
      ],
      ghost: [
        "border border-transparent",
        "hover:bg-accent hover:text-accent-foreground",
        "group-focus-within:border-ring/64 group-focus-within:ring-ring/24 group-focus-within:ring-2",
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
    <ArkSelect.Control className="group" data-slot="select-control">
      <ArkSelect.Trigger
        className={cn(selectTriggerVariants({ size, variant }), className)}
        data-slot="select-trigger"
        {...rest}
      >
        {children}

        {showTrailing ? (
          <div className={cn("flex items-center gap-1", "ms-auto")}>
            {showClear ? (
              <SelectClearTrigger>
                <XIcon aria-hidden="true" />
              </SelectClearTrigger>
            ) : null}
            {showTrigger ? (
              <ArkSelect.Indicator data-slot="select-indicator">
                <ChevronsUpDownIcon aria-hidden="true" className="size-4" />
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
      className={cn("-mx-1 my-1", "pointer-events-none", className)}
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
            "flex max-h-96 min-w-(--reference-width) flex-col",
            "p-1.5",
            "bg-popover bg-clip-padding",
            "text-popover-foreground",
            "rounded-xl border shadow-lg/4",
            "origin-(--transform-origin)",
            "outline-hidden",
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
          data-slot="select-content"
          {...rest}
        >
          {children}
        </ArkSelect.Content>
      </ArkSelect.Positioner>
    </Portal>
  );
};

export const SelectList = (
  props: React.ComponentProps<typeof ArkSelect.List>
) => {
  const { className, ...rest } = props;

  return (
    <ArkSelect.List
      className={cn(
        "min-h-0 flex-1",
        "flex flex-col",
        "overflow-x-hidden overflow-y-auto overscroll-y-contain",
        "scrollbar-thumb-foreground/24 scrollbar-thin scrollbar-track-transparent",
        className
      )}
      data-slot="select-list"
      {...rest}
    />
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
      {!!heading && <SelectGroupLabel>{heading}</SelectGroupLabel>}

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

  const { item, indicator } = menuItemIndicatorVariants();

  return (
    <ArkSelect.Item
      className={cn(
        menuItemControlVariants(),
        "text-base font-normal md:text-sm",
        "touch-manipulation select-none",
        "cursor-default",
        "outline-hidden",
        "in-[[data-slot=select-content]:has([data-slot=select-group-label])]:ps-4",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        className,
        item()
      )}
      data-slot="select-item"
      {...rest}
    >
      <ArkSelect.ItemText
        className={cn(
          "min-w-0",
          "flex items-start gap-2",
          "[&_svg:not([class*='text-'])]:text-muted-foreground"
        )}
        data-slot="select-item-text"
      >
        {children}
      </ArkSelect.ItemText>

      <ArkSelect.ItemIndicator
        className={indicator()}
        data-slot="select-item-indicator"
      >
        <CheckIcon aria-hidden="true" />
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
      aria-label="Clear selection"
      className={cn(
        "[&_svg]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0",
        "transition-opacity",
        "opacity-64",
        "outline-hidden",
        "focus-visible:opacity-100",
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

  const { collection } = useSelectContext();

  if (collection.size === 0) {
    return (
      <ark.div
        className={cn(menuEmptyVariants(), className)}
        data-slot="select-empty"
        role="presentation"
        {...rest}
      />
    );
  }

  return null;
};
