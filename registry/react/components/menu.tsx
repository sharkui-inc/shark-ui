"use client";

import { Portal } from "@ark-ui/react";
import { ark } from "@ark-ui/react/factory";
import {
  Menu as ArkMenu,
  useMenu as useArkMenu,
  useMenuContext as useArkMenuContext,
} from "@ark-ui/react/menu";
import { CheckIcon, ChevronRight } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const useMenu = useArkMenu;
export const useMenuContext = useArkMenuContext;
export const MenuRootProvider = ArkMenu.RootProvider;

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
    "max-h-(--available-height) min-w-32",
    "p-1.5",
    "overflow-y-auto overflow-x-hidden overscroll-y-contain",
    "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-foreground/20",
    "bg-popover",
    "text-popover-foreground",
    "rounded-xl border shadow-lg/4",
    "origin-(--transform-origin)",
    "outline-hidden",
    "duration-150 ease-out",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "motion-reduce:animate-none",
    "motion-reduce:data-[state=closed]:animate-none motion-reduce:data-[state=open]:animate-none",
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

export const menuSeparatorVariants = tv({
  base: "my-1 h-px bg-border",
});

export const MenuSeparator = (
  props: React.ComponentProps<typeof ArkMenu.Separator>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMenu.Separator
      className={cn(menuSeparatorVariants(), className)}
      data-slot="menu-separator"
      {...rest}
    />
  );
};

export const menuItemControlVariants = tv({
  base: [
    "relative flex min-h-10 w-full items-center gap-2 md:min-h-8",
    "rounded-lg",
    "px-[calc(--spacing(3)-1px)] py-1.5",
    "[&_svg:not([data-slot=menu-item-check-icon])]:pointer-events-none [&_svg:not([data-slot=menu-item-check-icon])]:h-lh [&_svg:not([data-slot=menu-item-check-icon])]:w-3.5 [&_svg:not([data-slot=menu-item-check-icon])]:shrink-0",
  ],
});

export const menuItemVariants = tv({
  base: [
    menuItemControlVariants(),
    "group/menu-item",
    "touch-manipulation select-none font-medium text-base md:text-sm",
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
        "text-destructive dark:text-destructive-foreground",
        "data-highlighted:bg-destructive/8 dark:data-highlighted:bg-destructive-foreground/8",
        "**:[svg]:text-destructive dark:**:[svg]:text-destructive-foreground",
      ],
    },
  },
});

interface MenuItemProps
  extends React.ComponentProps<typeof ArkMenu.Item>,
    VariantProps<typeof menuItemVariants> {}

export const MenuItem = (props: MenuItemProps) => {
  const { variant = "default", className, tabIndex = -1, ...rest } = props;

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
        "flex-col gap-1",
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
      "absolute inset-e-2 top-1/2 -translate-y-1/2",
      "flex h-lh w-4 shrink-0 items-center justify-center md:w-3.5",
      "[&_svg]:text-muted-foreground",
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
          className="size-4 md:size-3.5"
          data-slot="menu-item-check-icon"
        />
      </ArkMenu.ItemIndicator>

      <ArkMenu.ItemText
        className="flex min-w-0 flex-1 items-start gap-2"
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
          className="size-4 md:size-3.5"
          data-slot="menu-item-check-icon"
        />
      </ArkMenu.ItemIndicator>

      <ArkMenu.ItemText
        className="flex min-w-0 flex-1 items-start gap-2"
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
  base: "pointer-events-none px-2 py-1.5 font-medium text-muted-foreground text-xs",
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
        <ChevronRight className="size-3.5 rtl:rotate-180" />
      </MenuShortcut>
    </ArkMenu.TriggerItem>
  );
};

export const MenuShortcut = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, children, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "ms-auto font-medium text-muted-foreground text-xs tracking-widest",
        "group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive dark:group-data-highlighted/menu-item:group-data-[variant=destructive]/menu-item:text-destructive-foreground",
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
  base: "px-2 py-1.5 text-center text-muted-foreground text-sm",
});
