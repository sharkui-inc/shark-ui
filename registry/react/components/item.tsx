"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Separator } from "@/registry/react/components/separator";

export const ItemGroup = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "group/item-group",
        "w-full",
        "flex flex-col gap-4",
        className
      )}
      data-slot="item-group"
      {...rest}
    />
  );
};

export const ItemSeparator = (
  props: React.ComponentProps<typeof Separator>
) => {
  const { className, ...rest } = props;

  return (
    <Separator
      className={cn("my-2", className)}
      data-slot="item-separator"
      orientation="horizontal"
      {...rest}
    />
  );
};

const itemVariants = tv({
  base: [
    "[--space:--spacing(3)]",
    "group/item",
    "w-full",
    "flex flex-wrap items-center",
    "gap-(--space)",
    "p-(--space)",
    "in-data-[slot=menu-content]:p-0",
    "font-sans text-sm",
    "rounded-xl border",
    "transition-colors duration-150",
    "motion-reduce:transition-none",
    "[a,button]:hover:bg-muted",
    "outline-hidden",
    "focus-visible:border-ring/64 focus-visible:ring-ring/24 focus-visible:ring-2",
    "[&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg:not([class*='size-']):not([class*='h-'])]:size-4",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "border-transparent",
      muted: ["bg-muted/48", "border-transparent shadow-xs/4"],
      outline: "border-border shadow-xs/4",
    },
  },
});

interface ItemProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof itemVariants> {}

export const Item = (props: ItemProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ark.div
      className={cn(itemVariants({ variant }), className)}
      data-slot="item"
      data-variant={variant}
      {...rest}
    />
  );
};

const itemMediaVariants = tv({
  base: [
    "shrink-0",
    "flex items-center justify-center gap-2",
    "[&_svg]:pointer-events-none",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    variant: {
      default: "bg-transparent",
      icon: [
        "group-has-data-[slot=item-title]/item:group-has-data-[slot=item-description]/item:self-start",
        "in-[[data-slot=item]:not(:has([data-slot=item-title]))]:self-center",
        "[&_svg:not([class*='size-']):not([class*='h-'])]:h-lh",
        "[&_svg:not([class*='size-']):not([class*='w-'])]:w-4",
      ],
      image: [
        "relative",
        "size-10",
        "rounded-xl",
        "overflow-hidden",
        "after:border-border after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:mix-blend-darken",
        "dark:after:mix-blend-lighten",
        "[&_img]:size-full [&_img]:object-cover",
      ],
    },
  },
});

interface ItemMediaProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof itemMediaVariants> {}

export const ItemMedia = (props: ItemMediaProps) => {
  const { variant = "default", className, ...rest } = props;

  return (
    <ark.div
      className={cn(itemMediaVariants({ className, variant }))}
      data-slot="item-media"
      data-variant={variant}
      {...rest}
    />
  );
};

export const ItemContent = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex-1",
        "flex flex-col gap-0.5",
        "[&+[data-slot=item-content]]:flex-none",
        className
      )}
      data-slot="item-content"
      {...rest}
    />
  );
};

export const ItemTitle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-fit",
        "flex items-center gap-2",
        "line-clamp-1 text-sm leading-snug font-medium",
        "underline-offset-4",
        className
      )}
      data-slot="item-title"
      {...rest}
    />
  );
};

export const ItemDescription = (props: React.ComponentProps<typeof ark.p>) => {
  const { className, ...rest } = props;

  return (
    <ark.p
      className={cn(
        "text-muted-foreground line-clamp-2 text-start text-sm leading-normal font-normal",
        "[&>a:hover]:text-primary",
        "[&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      data-slot="item-description"
      {...rest}
    />
  );
};

export const ItemActions = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex items-center gap-2", className)}
      data-slot="item-actions"
      {...rest}
    />
  );
};

export const ItemHeader = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "basis-full",
        "flex items-center justify-between gap-2",
        "[&_img]:size-full [&_img]:rounded-xl [&_img]:object-cover",
        className
      )}
      data-slot="item-header"
      {...rest}
    />
  );
};

export const ItemFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "basis-full",
        "flex items-center justify-between gap-2",
        className
      )}
      data-slot="item-footer"
      {...rest}
    />
  );
};
