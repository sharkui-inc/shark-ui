"use client";

import {
  Combobox as ArkCombobox,
  type ComboboxList as ArkComboboxList,
  useCombobox as useArkCombobox,
  useComboboxContext as useArkComboboxContext,
} from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";
import {
  inputItemVariants,
  type inputVariants,
} from "@/registry/react/components/input";
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
import { ScrollArea } from "@/registry/react/components/scroll-area";

export const useCombobox = useArkCombobox;
export const useComboboxContext = useArkComboboxContext;
export const ComboboxRootProvider = ArkCombobox.RootProvider;

export const ComboboxContext = ArkCombobox.Context;

export const Combobox: ArkCombobox.RootComponent = (props) => {
  const {
    allowCustomValue = false,
    openOnClick = true,
    onInputValueChange,
    scrollToIndexFn,
    lazyMount = true,
    unmountOnExit = true,
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
      scrollToIndexFn={(details) => {
        if (scrollToIndexFn) {
          scrollToIndexFn(details);
          return;
        }

        details.getElement()?.scrollIntoView({ block: "nearest" });
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
        "relative flex flex-wrap items-center gap-1",
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
        "bg-transparent dark:bg-transparent",
        "border-transparent shadow-none",
        "hover:bg-accent hover:text-accent-foreground",
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

  const { inputValue } = useComboboxContext();

  return (
    <ComboboxControl data-size={size}>
      <InputGroup
        className={cn(comboboxInputVariants({ variant }), className)}
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
                <XIcon />
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
          <ChevronsUpDownIcon />
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
          "min-w-0 max-w-64 font-normal",
          showTrigger && "justify-between",
          className
        )}
        data-slot="combobox-button-trigger"
        size={size}
        variant={variant}
        {...rest}
        aria-label={ariaLabel}
      >
        <span className="min-w-0 flex-1 truncate">{label}</span>
        {showTrigger ? (
          <ChevronsUpDownIcon aria-hidden className="shrink-0 opacity-64" />
        ) : null}
      </Button>
    </ArkCombobox.Trigger>
  );
};

export const ComboboxClear = (
  props: React.ComponentProps<typeof ArkCombobox.ClearTrigger>
) => <ArkCombobox.ClearTrigger data-slot="combobox-clear" {...props} />;

/** Composable combobox input for custom controls (e.g. Tags Input). */
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
          "h-auto min-h-8 data-[size=lg]:min-h-9 data-[size=sm]:min-h-7",
          "flex-wrap content-start items-center gap-1 py-1",
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
          "h-5.5 in-data-[size=lg]:h-6.5 in-data-[size=sm]:h-4.5 w-auto min-w-18 max-w-full flex-auto basis-auto",
          className
        )}
        {...rest}
      />
    </ArkCombobox.Input>
  );
};

interface ComboboxChipProps {
  children: React.ReactNode;
  className?: string;
  removeProps?: React.ComponentProps<"button">;
  value: string;
}

export const ComboboxChip = (props: ComboboxChipProps) => {
  const { children, className, removeProps, value } = props;
  const { clearValue, disabled } = useComboboxContext();
  const {
    className: removeClassName,
    onClick,
    type = "button",
    ...removeRest
  } = removeProps ?? {};

  return (
    <span
      className={cn(
        "h-5.5 in-data-[size=lg]:h-6.5 in-data-[size=sm]:h-4.5 max-w-full",
        "inline-flex shrink-0 items-center gap-1",
        "in-data-[size=lg]:ps-2 in-data-[size=sm]:ps-1 ps-1.5 pe-0.5",
        "bg-secondary",
        "rounded-md border",
        "text-secondary-foreground text-xs",
        className
      )}
      data-slot="combobox-chip"
    >
      <span className="truncate">{children}</span>
      {disabled ? null : (
        <InputGroupButton
          aria-label={`Remove ${value}`}
          className={cn(
            "in-data-[size=lg]:size-5.5 in-data-[size=sm]:size-3.5 size-4.5",
            "shrink-0",
            "text-muted-foreground",
            "[&_svg:not([class*='size-'])]:size-2 in-data-[size=lg]:[&_svg:not([class*='size-'])]:size-2.5 in-data-[size=sm]:[&_svg:not([class*='size-'])]:size-1.5",
            "hover:text-foreground",
            removeClassName
          )}
          size="icon-xs"
          {...removeRest}
          onClick={(event) => {
            onClick?.(event);

            if (!event.defaultPrevented) {
              clearValue(value);
            }
          }}
          type={type}
        >
          <XIcon aria-hidden />
        </InputGroupButton>
      )}
    </span>
  );
};

export const ComboboxPositioner = (
  props: React.ComponentProps<typeof ArkCombobox.Positioner>
) => <ArkCombobox.Positioner data-slot="combobox-positioner" {...props} />;

export const comboboxContentVariants = tv({
  base: [
    "relative z-[calc(50+var(--layer-index,0))]",
    "p-1.5",
    "origin-(--transform-origin)",
    "bg-popover",
    "text-popover-foreground",
    "rounded-xl border shadow-lg/4",
    "outline-hidden",
    "duration-150 ease-out",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "motion-reduce:animate-none",
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
            "max-h-96 min-w-48",
            "overflow-hidden",
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
    inputItemVariants(),
    "select-none",
    "cursor-default",
    "outline-hidden",
    "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "[&_svg:not([class*='text-'])]:text-muted-foreground",
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
        className="flex min-w-0 flex-1 items-start gap-2"
        data-slot="combobox-item-text"
      >
        {children}
      </ArkCombobox.ItemText>

      {showIndicator ? (
        <ArkCombobox.ItemIndicator
          className={indicator()}
          data-slot="combobox-item-indicator"
        >
          <CheckIcon />
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
  props: React.ComponentProps<typeof ArkComboboxList>
) => {
  const { className, ...rest } = props;

  return (
    <ScrollArea
      className="h-auto max-h-[inherit] **:data-[slot=scroll-area-viewport]:h-auto"
      orientation="vertical"
      overscrollContain
      scrollFade
    >
      <ArkCombobox.List
        className={cn("flex flex-col", className)}
        data-slot="combobox-list"
        {...rest}
      />
    </ScrollArea>
  );
};
