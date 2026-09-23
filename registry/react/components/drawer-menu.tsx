"use client";

import { Checkbox as ArkCheckbox } from "@ark-ui/react/checkbox";
import { Drawer as ArkDrawer } from "@ark-ui/react/drawer";
import { RadioGroup as ArkRadioGroup } from "@ark-ui/react/radio-group";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import type React from "react";
import type { VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import {
  menuGroupLabelVariants,
  menuItemIndicatorVariants,
  menuItemVariants,
  menuSeparatorVariants,
} from "@/registry/react/components/menu";

export const DrawerMenu = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex flex-col p-1.5 text-start", className)}
      data-slot="drawer-menu"
      {...rest}
    />
  );
};

interface DrawerMenuItemProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof menuItemVariants> {}

export const DrawerMenuItem = (props: DrawerMenuItemProps) => {
  const { className, type = "button", variant = "default", ...rest } = props;

  return (
    <button
      className={cn(
        menuItemVariants({ variant }),
        variant === "destructive"
          ? "hover:bg-destructive/8 dark:hover:bg-destructive-foreground/8"
          : "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="drawer-menu-item"
      data-variant={variant}
      type={type}
      {...rest}
    />
  );
};

export const DrawerMenuSeparator = (props: React.ComponentProps<"hr">) => {
  const { className, ...rest } = props;

  return (
    <hr
      className={cn(menuSeparatorVariants(), "border-0", className)}
      data-slot="drawer-menu-separator"
      {...rest}
    />
  );
};

export const DrawerMenuGroup = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn("flex flex-col", className)}
      data-slot="drawer-menu-group"
      {...rest}
    />
  );
};

export const DrawerMenuGroupLabel = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(menuGroupLabelVariants(), className)}
      data-slot="drawer-menu-group-label"
      {...rest}
    />
  );
};

export const DrawerMenuTrigger = (
  props: React.ComponentProps<typeof ArkDrawer.Trigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkDrawer.Trigger
      className={cn(
        menuItemVariants(),
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="drawer-menu-trigger"
      {...rest}
    >
      {children}
      <ChevronRightIcon className="ms-auto size-3.5 rtl:rotate-180" />
    </ArkDrawer.Trigger>
  );
};

export const DrawerMenuCheckboxItem = (
  props: React.ComponentProps<typeof ArkCheckbox.Root>
) => {
  const { children, className, ...rest } = props;
  const { item, indicator } = menuItemIndicatorVariants();

  return (
    <ArkCheckbox.Root
      className={cn(
        menuItemVariants(),
        item(),
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="drawer-menu-checkbox-item"
      {...rest}
    >
      <ArkCheckbox.Indicator className={indicator()}>
        <CheckIcon />
      </ArkCheckbox.Indicator>
      <span className="flex min-w-0 flex-1 items-center gap-2">{children}</span>
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
};

export const DrawerMenuRadioGroup = (
  props: React.ComponentProps<typeof ArkRadioGroup.Root>
) => {
  const { className, ...rest } = props;

  return (
    <ArkRadioGroup.Root
      className={cn("flex flex-col", className)}
      data-slot="drawer-menu-radio-group"
      {...rest}
    />
  );
};

export const DrawerMenuRadioItem = (
  props: React.ComponentProps<typeof ArkRadioGroup.Item>
) => {
  const { children, className, ...rest } = props;
  const { item, indicator } = menuItemIndicatorVariants();

  return (
    <ArkRadioGroup.Item
      className={cn(
        menuItemVariants(),
        item(),
        "hover:bg-accent hover:text-accent-foreground",
        className
      )}
      data-slot="drawer-menu-radio-item"
      {...rest}
    >
      <span
        className={cn(
          indicator(),
          "hidden group-data-[state=checked]/menu-item:flex"
        )}
      >
        <CheckIcon />
      </span>
      <ArkRadioGroup.ItemText className="flex min-w-0 flex-1 items-center gap-2">
        {children}
      </ArkRadioGroup.ItemText>
      <ArkRadioGroup.ItemHiddenInput />
    </ArkRadioGroup.Item>
  );
};
