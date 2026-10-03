"use client";

import {
  Combobox as ArkCombobox,
  useComboboxContext as useArkComboboxContext,
} from "@ark-ui/react/combobox";
import { Dialog as ArkDialog } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { SearchIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  type ComboboxItem,
  comboboxItemVariants,
} from "@/registry/react/components/combobox";
import {
  Dialog,
  type DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogPositioner,
  DialogTrigger,
  dialogContentVariants,
} from "@/registry/react/components/dialog";
import type { InputProps } from "@/registry/react/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";
import { MenuShortcut } from "@/registry/react/components/menu";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { Separator } from "@/registry/react/components/separator";

export const useCommandContext = useArkComboboxContext;
export const CommandDialog = Dialog;

export const CommandDialogTrigger = (
  props: React.ComponentProps<typeof DialogTrigger>
) => <DialogTrigger data-slot="command-dialog-trigger" {...props} />;

const commandDialogPositionerVariants = tv({
  base: ["max-sm:h-dvh max-sm:grid-rows-[1fr]"],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: ["max-sm:p-0"],
      inset: ["p-3 sm:p-4"],
    },
  },
});

const commandDialogContentVariants = tv({
  base: [
    "max-sm:row-start-1",
    "max-sm:**:data-[slot=command-content]:min-h-0 max-sm:**:data-[slot=command-content]:flex-1",
    "max-sm:**:data-[slot=scroll-area]:min-h-0 max-sm:**:data-[slot=scroll-area]:flex-1",
    "data-[state=closed]:animate-none data-[state=open]:animate-none",
  ],
  defaultVariants: {
    fill: false,
    variant: "default",
  },
  variants: {
    fill: {
      false: [
        "max-sm:h-auto max-sm:max-h-[80dvh] max-sm:**:data-[slot=scroll-area]:max-h-[80dvh]",
        "max-sm:self-start",
      ],
      true: [
        "max-sm:h-full max-sm:max-h-dvh max-sm:**:data-[slot=scroll-area]:max-h-dvh",
        "max-sm:self-start",
      ],
    },
    variant: {
      default: [
        "border-0 p-0",
        "max-sm:rounded-none",
        "max-sm:**:data-[slot=command]:rounded-none max-sm:**:data-[slot=command]:border-0",
        "max-sm:**:data-[slot=command-footer]:rounded-none",
      ],
      inset: [
        "rounded-2xl border p-0",
        "**:data-[slot=command-footer]:rounded-b-2xl",
        "**:data-[slot=command]:rounded-none **:data-[slot=command]:border-0",
      ],
    },
  },
});

interface CommandDialogContentProps
  extends React.ComponentProps<typeof DialogContent>,
    Omit<VariantProps<typeof commandDialogContentVariants>, "fill"> {
  /**
   * The description of the dialog
   *
   * @default "Search for a command to run..."
   */
  description?: string;
  /**
   * Fill the available mobile viewport
   *
   * @default false
   */
  fill?: boolean;
  /**
   * The title of the dialog
   *
   * @default "Command Palette"
   */
  title?: string;
}

export const CommandDialogContent = (props: CommandDialogContentProps) => {
  const {
    fill,
    size = "md",
    variant = "default",
    title = "Command Palette",
    description = "Search for a command to run...",
    className,
    children,
    ...rest
  } = props;

  const { content } = dialogContentVariants({ size });

  return (
    <Portal>
      <DialogOverlay className="data-[state=closed]:animate-none data-[state=open]:animate-none" />

      <DialogPositioner
        className={commandDialogPositionerVariants({ variant })}
        data-variant={variant}
      >
        <ArkDialog.Content
          className={cn(
            content(),
            commandDialogContentVariants({ fill, variant }),
            className
          )}
          data-slot="command-dialog-content"
          data-variant={variant}
          {...rest}
        >
          <DialogHeader
            className="sr-only"
            description={description}
            title={title}
          />

          {children}
        </ArkDialog.Content>
      </DialogPositioner>
    </Portal>
  );
};

export const Command: ArkCombobox.RootComponent = (props) => {
  const { lazyMount = true, unmountOnExit = true, className, ...rest } = props;

  return (
    <Combobox
      className={cn(
        "isolate",
        "flex min-h-0 flex-1 flex-col",
        "bg-popover",
        "text-popover-foreground",
        "overflow-hidden rounded-2xl border",
        className
      )}
      data-slot="command"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
      closeOnSelect={false}
      disableLayer
      inputBehavior="autohighlight"
      loopFocus={false}
      open
      selectionBehavior="clear"
    />
  );
};

interface CommandInputProps
  extends Omit<React.ComponentProps<typeof ArkCombobox.Input>, "size"> {
  /**
   * The size of the input
   *
   * @default "md"
   */
  size?: InputProps["size"];
}

export const CommandContent = (
  props: React.ComponentProps<typeof ArkCombobox.Content>
) => {
  const { children, className, ...rest } = props;

  return (
    <ArkCombobox.Content
      className={cn(
        "min-h-0",
        "flex flex-1 flex-col",
        "px-1.5",
        "overflow-hidden",
        "outline-hidden",
        className
      )}
      data-slot="command-content"
      {...rest}
    >
      {children}
    </ArkCombobox.Content>
  );
};

export const CommandInput = (props: CommandInputProps) => {
  const {
    size = "lg",
    className,
    autoFocus = true,
    "aria-label": ariaLabel = "Search commands",
    ...rest
  } = props;

  return (
    <ComboboxControl className="m-1.5">
      <InputGroup
        className={cn(
          "rounded-xl bg-input/32",
          "focus-within:border-input focus-within:ring-0",
          className
        )}
        size={size}
      >
        <InputGroupAddon>
          <SearchIcon aria-hidden className="opacity-64" />
        </InputGroupAddon>
        <ArkCombobox.Input asChild data-slot="command-input">
          <InputGroupInput
            aria-label={ariaLabel}
            autoFocus={autoFocus}
            {...rest}
          />
        </ArkCombobox.Input>
      </InputGroup>
    </ComboboxControl>
  );
};

export const CommandList = (
  props: React.ComponentProps<typeof ArkCombobox.List>
) => {
  const { className, ...rest } = props;

  return (
    <ScrollArea
      className="max-h-72 flex-1"
      orientation="vertical"
      overscrollContain
      scrollFade
    >
      <ArkCombobox.List
        className={cn("flex flex-col not-empty:pb-2", className)}
        data-slot="command-list"
        {...rest}
      />
    </ScrollArea>
  );
};

export const CommandEmpty = (
  props: React.ComponentProps<typeof ComboboxEmpty>
) => {
  const { className, children, ...rest } = props;

  return (
    <ComboboxEmpty
      className={cn("py-6 text-center text-sm", className)}
      data-slot="command-empty"
      {...rest}
    >
      {children ?? "No results found."}
    </ComboboxEmpty>
  );
};

export const CommandGroup = (
  props: React.ComponentProps<typeof ComboboxGroup>
) => <ComboboxGroup data-slot="command-group" {...props} />;

export const CommandGroupLabel = (
  props: React.ComponentProps<typeof ComboboxGroupLabel>
) => <ComboboxGroupLabel data-slot="command-group-label" {...props} />;

export const CommandItem = (
  props: React.ComponentProps<typeof ComboboxItem>
) => {
  const { className, ...rest } = props;

  return (
    <ArkCombobox.Item
      className={cn(comboboxItemVariants(), className)}
      data-slot="command-item"
      {...rest}
      persistFocus
    />
  );
};

export const CommandSeparator = (
  props: React.ComponentProps<typeof Separator>
) => {
  const { className, ...rest } = props;

  return (
    <Separator
      aria-hidden="true"
      className={cn("my-1", className)}
      data-slot="command-separator"
      {...rest}
    />
  );
};

export const CommandShortcut = (
  props: React.ComponentProps<typeof MenuShortcut>
) => <MenuShortcut data-slot="command-shortcut" {...props} />;

export const CommandFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "z-10",
        "flex items-center justify-between gap-3",
        "px-3 py-2",
        "bg-muted/48",
        "text-muted-foreground text-xs leading-none",
        "rounded-b-2xl border-t",
        className
      )}
      data-slot="command-footer"
      {...rest}
    />
  );
};
