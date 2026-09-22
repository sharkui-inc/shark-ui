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
import { Input, inputItemVariants } from "@/registry/react/components/input";
import {
  MenuShortcut,
  menuEmptyVariants,
  menuGroupLabelVariants,
  menuItemControlVariants,
  menuItemDescriptionVariants,
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

export const ListboxInput = (props: React.ComponentProps<typeof Input>) => (
  <ArkListbox.Input asChild data-slot="listbox-input">
    <Input {...props} />
  </ArkListbox.Input>
);

export const ListboxContent = (
  props: React.ComponentProps<typeof ArkListbox.Content>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkListbox.Content
      className={cn(
        "flex min-h-0 w-full min-w-0 flex-col gap-1 *:shrink-0",
        "p-1.5",
        "overflow-y-auto overflow-x-hidden overscroll-y-contain",
        "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground/20",
        "outline-hidden",
        "data-[orientation=horizontal]:max-h-none data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:overflow-x-auto data-[orientation=horizontal]:overflow-y-hidden data-[orientation=horizontal]:overscroll-x-contain",
        className
      )}
      data-slot="listbox-content"
      {...rest}
    >
      {children}
    </ArkListbox.Content>
  );
};

const listboxItemVariants = tv({
  base: [
    "group/listbox-item",
    menuItemControlVariants(),
    inputItemVariants(),
    "cursor-pointer",
    "outline-hidden",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "[&_svg:not([class*='text-'])]:text-muted-foreground",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: [
        "text-popover-foreground",
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
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
    highlightOnHover = true,
    showIndicator = true,
    variant = "default",
    className,
    children,
    ...rest
  } = props;
  const { item } = menuItemIndicatorVariants();

  return (
    <ArkListbox.Item
      className={cn(
        listboxItemVariants({ variant }),
        className,
        showIndicator && item()
      )}
      data-slot="listbox-item"
      data-variant={variant}
      highlightOnHover={highlightOnHover}
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
      className={cn(menuItemDescriptionVariants(), className)}
      data-slot="listbox-item-description"
      {...rest}
    />
  );
};

export const ListboxItemIndicator = (
  props: React.ComponentProps<typeof ArkListbox.ItemIndicator>
) => {
  const { className, children, ...rest } = props;
  const { indicator } = menuItemIndicatorVariants();

  return (
    <ArkListbox.ItemIndicator
      className={cn(indicator(), className)}
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
  const { className, children, ...rest } = props;

  return (
    <ArkListbox.Empty
      className={cn(menuEmptyVariants(), className)}
      data-slot="listbox-empty"
      {...rest}
    >
      {children ?? "No results found."}
    </ArkListbox.Empty>
  );
};

export const ListboxShortcut = (
  props: React.ComponentProps<typeof MenuShortcut>
) => <MenuShortcut data-slot="listbox-shortcut" {...props} />;
