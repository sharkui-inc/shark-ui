import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const iconTileVariants = tv({
  base: [
    "inline-flex shrink-0 items-center justify-center",
    "font-medium text-muted-foreground",
    "rounded-md",
    "overflow-hidden",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[a&]:cursor-pointer [button&]:cursor-pointer",
    "[a&]:transition-colors [button&]:transition-colors",
    "disabled:pointer-events-none disabled:opacity-64",
    "aria-disabled:pointer-events-none aria-disabled:opacity-64",
    "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "motion-reduce:transition-none",
  ],
  defaultVariants: {
    fill: false,
    size: "md",
    variant: "default",
  },
  variants: {
    fill: {
      false: "",
      true: "rounded-full",
    },
    size: {
      lg: "size-9 [&_svg:not([class*='size-'])]:size-4.5",
      md: "size-8 [&_svg:not([class*='size-'])]:size-4",
      sm: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
      xl: "size-10 [&_svg:not([class*='size-'])]:size-5",
      xs: "size-6 [&_svg:not([class*='size-'])]:size-3",
    },
    variant: {
      default: [
        "bg-primary",
        "text-primary-foreground",
        "[a&]:hover:bg-primary/90 [button&]:hover:bg-primary/90",
      ],
      outline: [
        "bg-background",
        "border border-input",
        "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        "[button&]:hover:bg-accent [button&]:hover:text-accent-foreground",
      ],
      secondary: [
        "bg-secondary",
        "text-secondary-foreground",
        "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        "[button&]:hover:bg-accent [button&]:hover:text-accent-foreground",
      ],
    },
  },
});

export interface IconTileProps
  extends React.ComponentProps<typeof ark.span>,
    VariantProps<typeof iconTileVariants> {}

export const IconTile = (props: IconTileProps) => {
  const {
    variant = "default",
    size = "md",
    fill = false,
    className,
    ...rest
  } = props;

  return (
    <ark.span
      className={cn(iconTileVariants({ fill, size, variant }), className)}
      data-fill={fill}
      data-size={size}
      data-slot="icon-tile"
      data-variant={variant}
      {...rest}
    />
  );
};
