"use client";

import { ark } from "@ark-ui/react/factory";
import {
  Listbox as ArkListbox,
  useListbox as useArkListbox,
  useListboxContext as useArkListboxContext,
} from "@ark-ui/react/listbox";
import { CheckIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { FieldLabel } from "@/registry/react/components/field";
import { inputItemVariants } from "@/registry/react/components/input";
import {
  MenuShortcut,
  menuEmptyVariants,
  menuGroupLabelVariants,
  menuItemControlVariants,
  menuItemHighlightVariants,
  menuItemIconVariants,
  menuItemIndicatorVariants,
} from "@/registry/react/components/menu";

export const useListbox = useArkListbox;
export const useListboxContext = useArkListboxContext;
export const ListboxRootProvider = ArkListbox.RootProvider;

export const Listbox: ArkListbox.RootComponent = (props) => {
  const { className, ...rest } = props;

  return (
    <ArkListbox.Root
      className={cn(
        "w-full",
        "flex flex-col gap-1.5",
        "text-foreground",
        className
      )}
      data-slot="listbox"
      {...rest}
    />
  );
};

export const ListboxLabel = (
  props: React.ComponentProps<typeof ArkListbox.Label>
) => {
  const { children, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkListbox.Label data-slot="listbox-label" {...rest}>
        {children}
      </ArkListbox.Label>
    </FieldLabel>
  );
};

export const ListboxContent = (
  props: React.ComponentProps<typeof ArkListbox.Content>
) => {
  const { className, ...rest } = props;

  return (
    <ArkListbox.Content
      className={cn(
        "flex min-h-0 w-full flex-col",
        "overflow-y-auto",
        "outline-hidden",
        "data-[orientation=horizontal]:max-h-none data-[orientation=horizontal]:flex-row",
        className
      )}
      data-slot="listbox-content"
      {...rest}
    />
  );
};

export const ListboxBody = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex min-w-0 flex-col",
        "in-[[data-slot=listbox-content][data-orientation=horizontal]]:flex-row",
        className
      )}
      data-slot="listbox-body"
      {...rest}
    />
  );
};

const listboxItemVariants = tv({
  base: [
    "group/listbox-item",
    menuItemControlVariants(),
    inputItemVariants(),
    "items-start",
    "cursor-pointer",
    "outline-hidden",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    menuItemIconVariants(),
    "[&_svg:not([class*='text-'])]:text-muted-foreground",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: [
        "text-popover-foreground",
        menuItemHighlightVariants(),
        "hover:bg-accent hover:text-accent-foreground",
      ],
      destructive: [
        "text-destructive dark:text-destructive-foreground",
        "hover:bg-destructive/8 dark:hover:bg-destructive-foreground/8",
        "data-highlighted:bg-destructive/8 dark:data-highlighted:bg-destructive-foreground/8",
        "**:[svg]:text-destructive dark:**:[svg]:text-destructive-foreground",
      ],
    },
  },
});

interface ListboxItemProps
  extends React.ComponentProps<typeof ArkListbox.Item>,
    VariantProps<typeof listboxItemVariants> {
  /**
   * Whether to show the selected item check.
   *
   * @default true
   */
  showIndicator?: boolean;
}

export const ListboxItem = (props: ListboxItemProps) => {
  const {
    showIndicator = true,
    variant = "default",
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkListbox.Item
      className={cn(
        listboxItemVariants({ variant }),
        showIndicator && "pe-8",
        className
      )}
      data-slot="listbox-item"
      data-variant={variant}
      {...rest}
    >
      {children}

      {showIndicator ? <ListboxItemIndicator /> : null}
    </ArkListbox.Item>
  );
};

export const ListboxItemText = (
  props: React.ComponentProps<typeof ArkListbox.ItemText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkListbox.ItemText
      className={cn("min-h-lh min-w-0 flex-1", "whitespace-nowrap", className)}
      data-slot="listbox-item-text"
      {...rest}
    />
  );
};

interface ListboxItemGroupProps
  extends React.ComponentProps<typeof ArkListbox.ItemGroup> {
  /**
   * The heading of the listbox item group.
   */
  heading?: string;
}

export const ListboxItemGroup = (props: ListboxItemGroupProps) => {
  const { heading, className, children, ...rest } = props;

  return (
    <ArkListbox.ItemGroup
      className={cn("flex flex-col", className)}
      data-slot="listbox-item-group"
      {...rest}
    >
      {!!heading && <ListboxItemGroupLabel>{heading}</ListboxItemGroupLabel>}
      {children}
    </ArkListbox.ItemGroup>
  );
};

export const ListboxItemGroupLabel = (
  props: React.ComponentProps<typeof ArkListbox.ItemGroupLabel>
) => {
  const { className, ...rest } = props;

  return (
    <ArkListbox.ItemGroupLabel
      className={cn(menuGroupLabelVariants(), className)}
      data-slot="listbox-item-group-label"
      {...rest}
    />
  );
};

export const ListboxValueText = (
  props: React.ComponentProps<typeof ArkListbox.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkListbox.ValueText
      className={cn("font-normal", className)}
      data-slot="listbox-value-text"
      {...rest}
    />
  );
};

export const ListboxItemDescription = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("text-muted-foreground text-xs", className)}
      data-slot="listbox-item-description"
      {...rest}
    />
  );
};

export const ListboxItemIndicator = (
  props: React.ComponentProps<typeof ArkListbox.ItemIndicator>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkListbox.ItemIndicator
      className={cn(
        menuItemIndicatorVariants(),
        "zoom-in-95 fade-in-0 animate-in",
        "motion-reduce:animate-none",
        className
      )}
      data-slot="listbox-item-indicator"
      {...rest}
    >
      {children ?? <CheckIcon />}
    </ArkListbox.ItemIndicator>
  );
};

export const ListboxEmpty = (
  props: React.ComponentProps<typeof ArkListbox.Empty>
) => {
  const { className, ...rest } = props;

  return (
    <ArkListbox.Empty
      className={cn(menuEmptyVariants(), className)}
      data-slot="listbox-empty"
      {...rest}
    />
  );
};

export const ListboxShortcut = (
  props: React.ComponentProps<typeof MenuShortcut>
) => <MenuShortcut data-slot="listbox-shortcut" {...props} />;
