"use client";

import { ark } from "@ark-ui/react/factory";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const badgeVariants = tv({
  base: [
    "relative",
    "inline-flex w-fit shrink-0 items-center justify-center gap-1",
    "select-none whitespace-nowrap font-medium text-xs",
    "border border-transparent",
    "overflow-hidden",
    "transition-colors",
    "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
    "[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
    "[button&,a&]:cursor-pointer",
    "motion-reduce:transition-none",
  ],
  defaultVariants: {
    pill: false,
    size: "md",
    variant: "default",
  },
  variants: {
    pill: {
      false: "rounded-md",
      true: [
        "rounded-full",
        "has-[>svg]:data-[size=sm]:pe-1.5",
        "has-[>svg]:data-[size=md]:pe-2",
        "has-[>svg]:data-[size=lg]:pe-2 sm:has-[>svg]:data-[size=lg]:pe-2.5",
      ],
    },
    size: {
      lg: ["h-6.5 min-w-6.5", "px-2", "text-sm"],
      md: ["h-5.5 min-w-5.5", "px-1.5"],
      sm: ["h-5 min-w-5", "px-1"],
    },
    variant: {
      default: [
        "bg-primary",
        "text-primary-foreground",
        "[a&]:hover:bg-primary/80",
      ],
      destructive: [
        "bg-destructive/8 dark:bg-destructive/8",
        "text-destructive-foreground",
        "border-destructive-foreground/24",
        "focus-visible:border-destructive focus-visible:ring-destructive/24",
        "dark:focus-visible:ring-destructive/32",
        "[a&]:hover:bg-destructive/24",
      ],
      info: [
        "bg-info/8",
        "text-info-foreground",
        "border-info-foreground/24",
        "focus-visible:border-info focus-visible:ring-info/48",
        "[a&]:hover:bg-info/24",
      ],
      outline: [
        "text-foreground",
        "border-border",
        "[a&]:hover:bg-accent",
        "[a&]:hover:text-accent-foreground",
      ],
      secondary: [
        "bg-secondary",
        "text-secondary-foreground",
        "border-secondary/24",
        "focus-visible:border-foreground focus-visible:ring-foreground/48",
        "[a&]:hover:bg-secondary/80",
      ],
      success: [
        "bg-success/8",
        "text-success-foreground",
        "border-success-foreground/24",
        "focus-visible:border-success focus-visible:ring-success/24",
        "[a&]:hover:bg-success/24",
      ],
      warning: [
        "bg-warning/8",
        "text-warning-foreground",
        "border-warning-foreground/24",
        "focus-visible:border-warning focus-visible:ring-warning/24",
        "dark:focus-visible:ring-warning/32",
        "[a&]:hover:bg-warning/24",
      ],
    },
  },
});

export type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

interface BadgeProps
  extends React.ComponentProps<typeof ark.span>,
    VariantProps<typeof badgeVariants> {}

export const Badge = (props: BadgeProps) => {
  const {
    variant = "default",
    size = "md",
    pill = false,
    className,
    ...rest
  } = props;

  return (
    <ark.span
      className={cn(badgeVariants({ pill, size, variant }), className)}
      data-size={size}
      data-slot="badge"
      data-variant={variant}
      {...rest}
    />
  );
};
