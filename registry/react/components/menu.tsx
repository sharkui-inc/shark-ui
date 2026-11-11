"use client";

import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import {
  Menu as ArkMenu,
  useMenuContext as useArkMenuContext,
} from "@ark-ui/react/menu";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Separator } from "@/registry/react/components/separator";

export const useMenuContext = useArkMenuContext;

export const Menu = (props: React.ComponentProps<typeof ArkMenu.Root>) => {
  const {
    lazyMount = true,
    positioning,
    unmountOnExit = true,
    ...rest
  } = props;

  return (
    <ArkMenu.Root
      data-slot="menu"
      lazyMount={lazyMount}
      positioning={{
        flip: ["bottom", "top", "left", "right"],
        placement: "bottom-end",
        ...positioning,
      }}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const MenuTrigger = (
  props: React.ComponentProps<typeof ArkMenu.Trigger>
) => <ArkMenu.Trigger data-slot="menu-trigger" {...props} />;

export const MenuPositioner = (
  props: React.ComponentProps<typeof ArkMenu.Positioner>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMenu.Positioner
      className={cn("outline-hidden", className)}
      data-slot="menu-positioner"
      {...rest}
    />
  );
};

export const menuContentVariants = tv({
  base: [
    "z-[calc(50+var(--layer-index,0))]",
    "flex max-h-(--available-height) min-w-40 flex-col",
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
  ],
});

export const MenuContent = (
  props: React.ComponentProps<typeof ArkMenu.Content>
) => {
  const { className, children, ...rest } = props;

  return (
    <Portal>
      <MenuPositioner>
        <ArkMenu.Content
          className={cn(menuContentVariants(), className)}
          data-slot="menu-content"
          {...rest}
        >
          {children}
        </ArkMenu.Content>
      </MenuPositioner>
    </Portal>
  );
};

export const MenuList = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-h-0 flex-1",
        "flex flex-col",
        "overflow-x-hidden overflow-y-auto overscroll-y-contain",
        "scrollbar-thumb-foreground/24 scrollbar-thin scrollbar-track-transparent",
        className
      )}
      data-slot="menu-list"
      {...rest}
    />
  );
};

interface MenuGroupProps
  extends React.ComponentProps<typeof ArkMenu.ItemGroup> {
  /**
   * The heading of the menu item group.
   */
  heading?: string;
}

export const MenuGroup = (props: MenuGroupProps) => {
  const { heading, children, ...rest } = props;

  return (
    <ArkMenu.ItemGroup data-slot="menu-group" {...rest}>
      {!!heading && <MenuGroupLabel>{heading}</MenuGroupLabel>}

      {children}
    </ArkMenu.ItemGroup>
  );
};

export const MenuSeparator = (
  props: React.ComponentProps<typeof ArkMenu.Separator>
) => {
  const { className, ...rest } = props;

  return (
    <Separator asChild className={cn("my-1", "border-0", className)}>
      <ArkMenu.Separator data-slot="menu-separator" {...rest} />
    </Separator>
  );
};

export const menuItemControlVariants = tv({
  base: [
    "relative",
    "min-h-10 w-full md:min-h-8",
    "flex items-start gap-2",
    "rounded-lg",
    "px-[calc(--spacing(3)-1px)] py-2 md:py-1.5",
    "[&_svg:not([data-slot=menu-item-check-icon])]:pointer-events-none [&_svg:not([data-slot=menu-item-check-icon])]:h-lh [&_svg:not([data-slot=menu-item-check-icon])]:w-3.5 [&_svg:not([data-slot=menu-item-check-icon])]:shrink-0",
  ],
});

export const menuItemVariants = tv({
  base: [
    menuItemControlVariants(),
    "group/menu-item",
    "text-base font-medium md:text-sm",
    "touch-manipulation select-none",
    "outline-hidden",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default:
        "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      destructive: [
        "text-destructive",
        "dark:text-destructive-foreground",
        "data-highlighted:bg-destructive/8",
        "dark:data-highlighted:bg-destructive-foreground/8",
        "**:[svg]:text-destructive dark:**:[svg]:text-destructive-foreground",
      ],
    },
  },
});

interface MenuItemProps
  extends React.ComponentProps<typeof ArkMenu.Item>,
    VariantProps<typeof menuItemVariants> {}

export const MenuItem = (props: MenuItemProps) => {
  const { variant = "default", tabIndex = -1, className, ...rest } = props;

  return (
    <ArkMenu.Item
      className={cn(menuItemVariants({ variant }), className)}
      data-slot="menu-item"
      data-variant={variant}
      {...rest}
      tabIndex={tabIndex}
    />
  );
};

export const MenuQuickItem = (props: MenuItemProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ArkMenu.Item
      className={cn(
        menuItemVariants({ variant }),
        "flex-col gap-1 py-2.5",
        "[&_svg]:size-4.5",
        className
      )}
      {...rest}
    />
  );
};

export const menuItemDescriptionVariants = tv({
  base: "text-muted-foreground text-xs",
});

export const MenuItemDescription = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(menuItemDescriptionVariants(), className)}
      data-slot="menu-item-description"
      {...rest}
    />
  );
};

export const menuItemIndicatorVariants = tv({
  slots: {
    indicator: [
      "pointer-events-none",
      "absolute inset-e-2 top-1.5",
      "h-lh w-4 shrink-0 md:w-3.5",
      "flex items-center justify-center",
      "[&_svg]:text-foreground",
    ],
    item: "pe-8",
  },
});

export const MenuCheckboxItem = (
  props: React.ComponentProps<typeof ArkMenu.CheckboxItem>
) => {
  const { className, children, ...rest } = props;

  const { item, indicator } = menuItemIndicatorVariants();

  return (
    <ArkMenu.CheckboxItem
      className={cn(
        menuItemVariants({ variant: "default" }),
        className,
        item()
      )}
      {...rest}
    >
      <ArkMenu.ItemIndicator className={indicator()}>
        <CheckIcon
          aria-hidden="true"
          className="size-4 md:size-3.5"
          data-slot="menu-item-check-icon"
        />
      </ArkMenu.ItemIndicator>

      <ArkMenu.ItemText
        className={cn("min-w-0 flex-1", "flex items-start gap-2")}
        data-slot="menu-checkbox-item-text"
      >
        {children}
      </ArkMenu.ItemText>
    </ArkMenu.CheckboxItem>
  );
};

export const MenuRadioItem = (
  props: React.ComponentProps<typeof ArkMenu.RadioItem>
) => {
  const { className, children, ...rest } = props;

  const { item, indicator } = menuItemIndicatorVariants();

  return (
    <ArkMenu.RadioItem
      className={cn(
        menuItemVariants({ variant: "default" }),
        className,
        item()
      )}
      data-slot="menu-radio-item"
      {...rest}
    >
      <ArkMenu.ItemIndicator className={indicator()}>
        <CheckIcon
          aria-hidden="true"
          className="size-4 md:size-3.5"
          data-slot="menu-item-check-icon"
        />
      </ArkMenu.ItemIndicator>

      <ArkMenu.ItemText
        className={cn("min-w-0 flex-1", "flex items-start gap-2")}
        data-slot="menu-radio-item-text"
      >
        {children}
      </ArkMenu.ItemText>
    </ArkMenu.RadioItem>
  );
};

interface MenuRadioGroupProps
  extends React.ComponentProps<typeof ArkMenu.RadioItemGroup> {
  /**
   * The heading of the menu radio item group.
   */
  heading?: string;
}

export const MenuRadioGroup = (props: MenuRadioGroupProps) => {
  const { heading, children, ...rest } = props;

  return (
    <ArkMenu.RadioItemGroup data-slot="menu-radio-group" {...rest}>
      {!!heading && <MenuGroupLabel>{heading}</MenuGroupLabel>}

      {children}
    </ArkMenu.RadioItemGroup>
  );
};

export const menuGroupLabelVariants = tv({
  base: [
    "px-2 py-1.5",
    "text-muted-foreground text-xs font-medium",
    "pointer-events-none",
  ],
});

export const MenuGroupLabel = (
  props: React.ComponentProps<typeof ArkMenu.ItemGroupLabel>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMenu.ItemGroupLabel
      className={cn(menuGroupLabelVariants(), className)}
      data-slot="menu-group-label"
      {...rest}
    />
  );
};

export const MenuSub = (props: React.ComponentProps<typeof Menu>) => (
  <Menu data-slot="menu-sub" {...props} />
);

export const MenuSubContent = (
  props: React.ComponentProps<typeof ArkMenu.Content>
) => {
  const { className, children, ...rest } = props;

  return (
    <Portal>
      <MenuPositioner data-slot="menu-sub-positioner">
        <ArkMenu.Content
          className={cn(menuContentVariants(), className)}
          data-slot="menu-sub-content"
          {...rest}
        >
          {children}
        </ArkMenu.Content>
      </MenuPositioner>
    </Portal>
  );
};

export const MenuSubTrigger = (
  props: React.ComponentProps<typeof ArkMenu.TriggerItem>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkMenu.TriggerItem
      className={cn(
        menuItemVariants({ variant: "default" }),
        "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      )}
      data-slot="menu-sub-trigger"
      {...rest}
    >
      {children}

      <MenuShortcut>
        <ChevronRightIcon
          aria-hidden="true"
          className={cn("size-3.5", "rtl:rotate-180")}
        />
      </MenuShortcut>
    </ArkMenu.TriggerItem>
  );
};

export const MenuShortcut = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, children, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "ms-auto self-center",
        "text-muted-foreground text-xs font-medium tracking-widest",
        "group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive",
        "dark:group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive-foreground",
        className
      )}
      data-slot="menu-shortcut"
      {...rest}
    >
      <span dir="ltr" style={{ unicodeBidi: "isolate" }}>
        {children}
      </span>
    </ark.span>
  );
};

export const menuEmptyVariants = tv({
  base: ["px-2 py-1.5", "text-muted-foreground text-center text-sm"],
});
