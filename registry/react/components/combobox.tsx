"use client";

import {
  Combobox as ArkCombobox,
  type ComboboxList as ArkComboboxList,
  useComboboxContext as useArkComboboxContext,
} from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { CheckIcon, ChevronsUpDownIcon, XIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
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
  menuItemIconVariants,
  menuItemIndicatorVariants,
  menuListVariants,
} from "@/registry/react/components/menu";
import { ScrollArea } from "@/registry/react/components/scroll-area";

export const useCombobox = useArkComboboxContext;

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
    VariantProps<typeof inputVariants> {
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

export const ComboboxInput = (props: ComboboxInputProps) => {
  const {
    size = "md",
    showTrigger = true,
    showClear = false,
    className,
    children,
    ...rest
  } = props;

  const { inputValue } = useCombobox();

  return (
    <ComboboxControl data-size={size}>
      <InputGroup className={cn(className)} size={size}>
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
          "h-5.5 in-data-[size=lg]:h-6.5 in-data-[size=sm]:h-4.5 min-w-18 flex-auto basis-auto",
          "px-1",
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
  const { clearValue, disabled } = useCombobox();
  const {
    className: removeClassName,
    onClick,
    ...removeRest
  } = removeProps ?? {};

  return (
    <span
      className={cn(
        "h-6 in-data-[size=lg]:h-7 in-data-[size=sm]:h-5 max-w-full",
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
            "in-data-[size=lg]:size-6 in-data-[size=sm]:size-4 size-5",
            "shrink-0",
            "text-muted-foreground",
            "hover:text-foreground",
            removeClassName
          )}
          onClick={(event) => {
            onClick?.(event);

            if (!event.defaultPrevented) {
              clearValue(value);
            }
          }}
          size="icon-xs"
          type="button"
          {...removeRest}
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
    "origin-(--transform-origin)",
    "bg-popover",
    "text-popover-foreground",
    "rounded-xl border shadow-lg/4",
    "outline-none",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=open]:zoom-in-[98%] data-[state=closed]:zoom-out-[98%]",
    "data-[placement=top]:slide-in-from-bottom-2",
    "data-[placement=bottom]:slide-in-from-top-2",
    "data-[placement=right]:slide-in-from-start-2",
    "data-[placement=left]:slide-in-from-end-2",
    "has-data-[state=closed]:animate-out has-data-[state=open]:animate-in",
    "has-data-[state=closed]:fade-out-0 has-data-[state=open]:fade-in-0",
    "has-data-[state=open]:zoom-in-[98%] has-data-[state=closed]:zoom-out-[98%]",
    "has-data-[placement=top]:slide-in-from-bottom-2",
    "has-data-[placement=bottom]:slide-in-from-top-2",
    "has-data-[placement=right]:slide-in-from-start-2",
    "has-data-[placement=left]:slide-in-from-end-2",
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
            menuListVariants(),
            className
          )}
          data-slot="combobox-content"
          {...rest}
        >
          <ScrollArea
            className="max-h-[inherit]"
            orientation="vertical"
            scrollFade
          >
            {children}
          </ScrollArea>
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
    menuItemIconVariants(),
    "select-none",
    "cursor-default",
    "outline-hidden",
    "data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground",
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

  return (
    <ArkCombobox.Item
      className={cn(comboboxItemVariants(), showIndicator && "pe-8", className)}
      data-slot="combobox-item"
      persistFocus
      {...rest}
    >
      {children}

      {showIndicator ? (
        <ArkCombobox.ItemIndicator
          className={menuItemIndicatorVariants()}
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
      {children || "No results found."}
    </ArkCombobox.Empty>
  );
};

export const ComboboxList = (
  props: React.ComponentProps<typeof ArkComboboxList>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.List
      className={cn("flex flex-col", className)}
      data-slot="combobox-list"
      {...rest}
    />
  );
};
