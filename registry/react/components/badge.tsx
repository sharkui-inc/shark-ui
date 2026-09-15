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
    "outline-hidden focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
    "[&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0",
    "has-[>[data-icon=inline-start]]:ps-[calc(var(--badge-px)-(--spacing(0.5)))] has-[>[data-icon=inline-end]]:pe-[calc(var(--badge-px)-(--spacing(0.5)))]",
    "[&_[data-icon=inline-end]]:order-last [&_[data-icon=inline-start]]:order-first",
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
        "has-[>[data-icon=inline-start]]:pe-(--badge-px)",
      ],
    },
    size: {
      lg: [
        "[--badge-px:--spacing(2)]",
        "h-6.5 min-w-6.5",
        "px-(--badge-px)",
        "text-sm",
      ],
      md: ["[--badge-px:--spacing(1.5)]", "h-5.5 min-w-5.5", "px-(--badge-px)"],
      sm: ["[--badge-px:--spacing(1)]", "h-5 min-w-5", "px-(--badge-px)"],
    },
    variant: {
      default: [
        "bg-primary",
        "text-primary-foreground",
        "[a&]:hover:bg-primary-hover",
        "focus-visible:border-background",
      ],
      destructive: [
        "bg-destructive/8 dark:bg-destructive/8",
        "text-destructive-foreground",
        "border-destructive-foreground/24",
        "[a&]:hover:bg-destructive/24",
      ],
      info: [
        "bg-info/8",
        "text-info-foreground",
        "border-info-foreground/24",
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
        "[a&]:hover:bg-secondary-hover",
      ],
      success: [
        "bg-success/8",
        "text-success-foreground",
        "border-success-foreground/24",
        "[a&]:hover:bg-success/24",
      ],
      warning: [
        "bg-warning/8",
        "text-warning-foreground",
        "border-warning-foreground/24",
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
