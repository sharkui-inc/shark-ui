"use client";

import {
  Combobox as ArkCombobox,
  useComboboxContext as useArkComboboxContext,
} from "@ark-ui/react/combobox";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";
import type { inputVariants } from "@/registry/react/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import {
  menuEmptyVariants,
  menuGroupLabelVariants,
  menuItemControlVariants,
  menuItemIndicatorVariants,
} from "@/registry/react/components/menu";

export const useComboboxContext = useArkComboboxContext;

export const ComboboxContext = ArkCombobox.Context;

export const Combobox: ArkCombobox.RootComponent = (props) => {
  const {
    allowCustomValue = false,
    openOnClick = true,
    lazyMount = true,
    unmountOnExit = true,
    onInputValueChange,
    positioning,
    ...rest
  } = props;

  return (
    <ArkCombobox.Root
      allowCustomValue={allowCustomValue}
      data-slot="combobox"
      lazyMount={lazyMount}
      onInputValueChange={(details) => {
        onInputValueChange?.({
          ...details,
          inputValue:
            details.reason === "item-select" && !allowCustomValue
              ? ""
              : details.inputValue,
        });
      }}
      openOnClick={openOnClick}
      positioning={{
        flip: ["bottom", "top", "left", "right"],
        placement: "bottom",
        ...positioning,
      }}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const ComboboxControl = (
  props: React.ComponentProps<typeof ArkCombobox.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.Control
      className={cn(
        "group/combobox-control",
        "relative",
        "flex flex-wrap items-center gap-1",
        className
      )}
      data-slot="combobox-control"
      {...rest}
    />
  );
};

interface ComboboxInputProps
  extends Omit<React.ComponentProps<typeof ArkCombobox.Input>, "size">,
    VariantProps<typeof inputVariants>,
    VariantProps<typeof comboboxInputVariants> {
  /**
   * Whether the control is disabled.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether to show the clear button.
   *
   * @default false
   */
  showClear?: boolean;
  /**
   * Whether to show the trigger button.
   *
   * @default true
   */
  showTrigger?: boolean;
}

export const comboboxInputVariants = tv({
  variants: {
    variant: {
      ghost: [
        "bg-transparent",
        "dark:bg-transparent",
        "border-transparent shadow-none",
        "hover:bg-accent hover:text-accent-foreground",
        "dark:hover:bg-accent dark:hover:text-accent-foreground",
        "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        "dark:data-[state=open]:bg-accent dark:data-[state=open]:text-accent-foreground",
        "focus-within:data-[state=open]:border-transparent focus-within:data-[state=open]:ring-0",
      ],
    },
  },
});

export const ComboboxInput = (props: ComboboxInputProps) => {
  const {
    size = "md",
    variant,
    showTrigger = true,
    showClear = false,
    className,
    children,
    ...rest
  } = props;

  const { inputValue, open } = useComboboxContext();

  return (
    <ComboboxControl data-size={size}>
      <InputGroup
        className={cn(comboboxInputVariants({ variant }), className)}
        data-state={open ? "open" : "closed"}
        size={size}
      >
        {children}
        <ArkCombobox.Input asChild>
          <InputGroupInput {...rest} />
        </ArkCombobox.Input>
        <InputGroupAddon align="inline-end">
          {showTrigger ? (
            <ComboboxTrigger className="group-has-data-[slot=combobox-clear]/input-group:hidden" />
          ) : null}
          {showClear && inputValue ? (
            <ComboboxClear asChild>
              <InputGroupButton size="icon-xs" variant="ghost">
                <XIcon aria-hidden="true" />
              </InputGroupButton>
            </ComboboxClear>
          ) : null}
        </InputGroupAddon>
      </InputGroup>
    </ComboboxControl>
  );
};

export const ComboboxTrigger = (
  props: React.ComponentProps<typeof ArkCombobox.Trigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkCombobox.Trigger
      className={children ? className : undefined}
      data-slot="combobox-trigger"
      {...rest}
      asChild
    >
      {children ?? (
        <InputGroupButton className={className} size="icon-xs" variant="ghost">
          <ChevronsUpDownIcon aria-hidden="true" />
        </InputGroupButton>
      )}
    </ArkCombobox.Trigger>
  );
};

interface ComboboxButtonTriggerProps extends Omit<ButtonProps, "children"> {
  children?: React.ReactNode;
  /**
   * Text shown when no item is selected.
   *
   * @default "Select an option"
   */
  placeholder?: React.ReactNode;
  /**
   * Whether to show the chevron icon.
   *
   * @default true
   */
  showTrigger?: boolean;
}

export const ComboboxButtonTrigger = (props: ComboboxButtonTriggerProps) => {
  const {
    placeholder = "Select an option",
    showTrigger = true,
    size = "md",
    variant = "outline",
    className,
    children,
    ...rest
  } = props;

  const { hasSelectedItems, valueAsString } = useComboboxContext();
  const label = children ?? (hasSelectedItems ? valueAsString : placeholder);
  const ariaLabel =
    rest["aria-label"] ??
    (typeof label === "string" ? label : "Select an option");

  return (
    <ArkCombobox.Trigger asChild focusable>
      <Button
        className={cn(
          "max-w-64 min-w-0",
          "font-normal",
          showTrigger && "justify-between",
          className
        )}
        data-slot="combobox-button-trigger"
        size={size}
        variant={variant}
        {...rest}
        aria-label={ariaLabel}
      >
        <span className={cn("min-w-0 flex-1", "truncate")}>{label}</span>
        {showTrigger ? (
          <ChevronsUpDownIcon
            aria-hidden="true"
            className={cn("shrink-0", "opacity-64")}
          />
        ) : null}
      </Button>
    </ArkCombobox.Trigger>
  );
};

export const ComboboxClear = (
  props: React.ComponentProps<typeof ArkCombobox.ClearTrigger>
) => <ArkCombobox.ClearTrigger data-slot="combobox-clear" {...props} />;

export const ComboboxFieldInput = (
  props: React.ComponentProps<typeof ArkCombobox.Input>
) => <ArkCombobox.Input data-slot="combobox-field-input" {...props} />;

interface ComboboxChipsProps
  extends React.ComponentProps<typeof ArkCombobox.Control>,
    Pick<React.ComponentProps<typeof InputGroup>, "size"> {}

export const ComboboxChips = (props: ComboboxChipsProps) => {
  const { size = "md", className, children, ...rest } = props;

  return (
    <ArkCombobox.Control asChild data-slot="combobox-chips-control" {...rest}>
      <InputGroup
        className={cn(
          "h-auto",
          "flex-wrap content-center items-center gap-1",
          "py-1",
          "[--input-group-inset:--spacing(1)]",
          "data-disabled:pointer-events-none data-disabled:opacity-64",
          "has-data-[slot=combobox-chip]:px-1",
          className
        )}
        size={size}
      >
        {children}
      </InputGroup>
    </ArkCombobox.Control>
  );
};

export const ComboboxChipsInput = (
  props: Omit<React.ComponentProps<typeof ArkCombobox.Input>, "size">
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.Input asChild data-slot="combobox-chips-input">
      <InputGroupInput
        className={cn(
          "w-auto max-w-full min-w-18 flex-auto basis-auto",
          className
        )}
        {...rest}
      />
    </ArkCombobox.Input>
  );
};

interface ComboboxChipProps extends React.ComponentProps<typeof ark.span> {
  value: string;
}

export const ComboboxChip = (props: ComboboxChipProps) => {
  const { value, className, children, ...rest } = props;

  const { clearValue, disabled } = useComboboxContext();

  return (
    <ark.span
      className={cn(
        "h-5.5 max-w-full",
        "in-data-[size=lg]:h-6.5 in-data-[size=sm]:h-4.5",
        "shrink-0",
        "inline-flex items-center gap-1",
        "ps-1.5 pe-0.5",
        "in-data-[size=lg]:ps-2 in-data-[size=sm]:ps-1",
        "bg-secondary",
        "rounded-md border",
        "text-secondary-foreground text-xs",
        className
      )}
      data-slot="combobox-chip"
      {...rest}
    >
      <span className="truncate">{children}</span>
      {disabled ? null : (
        <InputGroupButton
          aria-label={`Remove ${value}`}
          className={cn(
            "size-4 md:size-4",
            "in-data-[size=lg]:size-5 in-data-[size=sm]:size-3 md:in-data-[size=lg]:size-5 md:in-data-[size=sm]:size-3",
            "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
            "shrink-0",
            "text-muted-foreground",
            "[&_svg:not([class*='size-'])]:size-2 in-data-[size=lg]:[&_svg:not([class*='size-'])]:size-2.5 in-data-[size=sm]:[&_svg:not([class*='size-'])]:size-1.5",
            "hover:text-foreground"
          )}
          onClick={() => {
            clearValue(value);
          }}
          size="icon-xs"
          type="button"
        >
          <XIcon aria-hidden="true" />
        </InputGroupButton>
      )}
    </ark.span>
  );
};

export const ComboboxPositioner = (
  props: React.ComponentProps<typeof ArkCombobox.Positioner>
) => <ArkCombobox.Positioner data-slot="combobox-positioner" {...props} />;

export const comboboxContentVariants = tv({
  base: [
    "z-[calc(50+var(--layer-index,0))]",
    "relative",
    "origin-(--transform-origin)",
    "bg-popover",
    "text-popover-foreground",
    "rounded-xl border shadow-lg/4",
    "outline-hidden",
    "duration-100 ease-out",
    "data-[placement^=bottom]:slide-in-from-top-2",
    "data-[placement^=top]:slide-in-from-bottom-2",
    "data-[placement^=left]:slide-in-from-right-2",
    "data-[placement^=right]:slide-in-from-left-2",
    "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in",
    "motion-reduce:animate-none",
    "motion-reduce:data-[state=open]:animate-none",
  ],
});

export const ComboboxContent = (
  props: React.ComponentProps<typeof ArkCombobox.Content>
) => {
  const { className, children, ...rest } = props;

  return (
    <Portal>
      <ComboboxPositioner>
        <ArkCombobox.Content
          className={cn(
            comboboxContentVariants(),
            "flex max-h-96 min-w-48 flex-col",
            "p-1.5",
            className
          )}
          data-slot="combobox-content"
          {...rest}
        >
          {children}
        </ArkCombobox.Content>
      </ComboboxPositioner>
    </Portal>
  );
};

interface ComboboxGroupProps
  extends React.ComponentProps<typeof ArkCombobox.ItemGroup> {
  /**
   * The heading of the group
   */
  heading?: string | React.ReactNode;
}

export const ComboboxGroup = (props: ComboboxGroupProps) => {
  const { heading, children, ...rest } = props;

  return (
    <ArkCombobox.ItemGroup data-slot="combobox-group" {...rest}>
      {!!heading && <ComboboxGroupLabel>{heading}</ComboboxGroupLabel>}

      {children}
    </ArkCombobox.ItemGroup>
  );
};

export const ComboboxGroupLabel = (
  props: React.ComponentProps<typeof ArkCombobox.ItemGroupLabel>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.ItemGroupLabel
      className={cn(menuGroupLabelVariants(), className)}
      data-slot="combobox-group-label"
      {...rest}
    />
  );
};

export const comboboxItemVariants = tv({
  base: [
    menuItemControlVariants(),
    "text-base font-normal md:text-sm",
    "touch-manipulation select-none",
    "cursor-default",
    "outline-hidden",
    "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
  ],
});

interface ComboboxItemProps
  extends React.ComponentProps<typeof ArkCombobox.Item> {
  /**
   * Whether to show the selected item check.
   *
   * @default true
   */
  showIndicator?: boolean;
}

export const ComboboxItem = (props: ComboboxItemProps) => {
  const { showIndicator = true, className, children, ...rest } = props;

  const { item, indicator } = menuItemIndicatorVariants();

  return (
    <ArkCombobox.Item
      className={cn(comboboxItemVariants(), className, showIndicator && item())}
      data-slot="combobox-item"
      {...rest}
      persistFocus
    >
      <ArkCombobox.ItemText
        className={cn(
          "min-w-0 flex-1",
          "flex items-start gap-2",
          "[&_svg:not([class*='text-'])]:text-muted-foreground"
        )}
        data-slot="combobox-item-text"
      >
        {children}
      </ArkCombobox.ItemText>

      {showIndicator ? (
        <ArkCombobox.ItemIndicator
          className={indicator()}
          data-slot="combobox-item-indicator"
        >
          <CheckIcon aria-hidden="true" />
        </ArkCombobox.ItemIndicator>
      ) : null}
    </ArkCombobox.Item>
  );
};

export const ComboboxEmpty = (
  props: React.ComponentProps<typeof ArkCombobox.Empty>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkCombobox.Empty
      className={cn(menuEmptyVariants(), className)}
      data-slot="combobox-empty"
      {...rest}
    >
      {children ?? "No results found."}
    </ArkCombobox.Empty>
  );
};

export const ComboboxList = (
  props: React.ComponentProps<typeof ArkCombobox.List>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.List
      className={cn(
        "min-h-0 flex-1",
        "flex flex-col",
        "overflow-x-hidden overflow-y-auto overscroll-y-contain",
        "scrollbar-thumb-foreground/24 scrollbar-thin scrollbar-track-transparent",
        className
      )}
      data-slot="combobox-list"
      {...rest}
    />
  );
};
