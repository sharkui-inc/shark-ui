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
    "[&:is(a,button)]:cursor-pointer",
    "[&:is(a,button)]:transition-colors",
    "disabled:pointer-events-none disabled:opacity-64",
    "aria-disabled:pointer-events-none aria-disabled:opacity-64",
    "border border-transparent outline-hidden focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
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
        "[&:is(a,button)]:hover:bg-primary-hover",
        "focus-visible:border-background",
      ],
      outline: [
        "bg-background",
        "border border-input",
        "[&:is(a,button)]:hover:bg-accent",
        "[&:is(a,button)]:hover:text-accent-foreground",
      ],
      secondary: [
        "bg-secondary",
        "text-secondary-foreground",
        "[&:is(a,button)]:hover:bg-accent",
        "[&:is(a,button)]:hover:text-accent-foreground",
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
