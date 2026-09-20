import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Spinner } from "@/registry/react/components/spinner";

export const buttonControlVariants = tv({
  base: [
    "relative",
    "inline-flex shrink-0 items-center justify-center gap-2",
    "touch-manipulation",
    "select-none whitespace-nowrap font-medium font-sans text-sm",
  ],
});

export const buttonVariants = tv({
  base: [
    buttonControlVariants(),
    "rounded-lg",
    "transition-[background-color,border-color,color,box-shadow,opacity,scale]",
    "outline-hidden focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
    "disabled:pointer-events-none disabled:opacity-64",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "aria-disabled:pointer-events-none aria-disabled:opacity-64",
    "data-[state=loading]:pointer-events-none",
    "aria-invalid:border-destructive aria-invalid:ring-destructive/24",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-mx-0.5 [&_svg]:shrink-0",
    "has-[>[data-icon=inline-start]]:ps-[calc(var(--btn-px)-(--spacing(0.5)))] has-[>[data-icon=inline-end]]:pe-[calc(var(--btn-px)-(--spacing(0.5)))]",
    "**:data-[icon=inline-end]:order-last **:data-[icon=inline-start]:order-first **:data-icon:mx-0",
    "motion-reduce:transition-none",
  ],
  compoundVariants: [
    {
      class: "rounded-full",
      pill: true,
    },
  ],
  defaultVariants: {
    clickEffect: true,
    pill: false,
    size: "md",
    variant: "default",
  },
  variants: {
    clickEffect: {
      true: "active:not-aria-[haspopup]:scale-[0.98]",
    },
    pill: {
      false: "",
      true: "px-[calc(var(--btn-px)+(--spacing(1.5)))]",
    },
    size: {
      "icon-lg": "size-9",
      "icon-md": "size-8",
      "icon-sm": ["size-7", "rounded-md"],
      "icon-xl": "size-10 [&_svg:not([class*='size-'])]:size-5",
      "icon-xs": [
        "size-6",
        "rounded-md",
        "[&_svg:not([class*='size-'])]:size-3",
        "in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-3.5",
      ],
      lg: ["h-9", "[--btn-px:calc(--spacing(3.5)-1px)]", "px-(--btn-px)"],
      md: ["h-8", "[--btn-px:calc(--spacing(3)-1px)]", "px-(--btn-px)"],
      sm: [
        "h-7",
        "gap-1.5",
        "[--btn-px:calc(--spacing(2.5)-1px)]",
        "px-(--btn-px)",
        "rounded-md",
        "[&_svg:not([class*='size-'])]:size-3.5",
      ],
      xl: [
        "h-10",
        "text-base",
        "[--btn-px:calc(--spacing(4)-1px)]",
        "px-(--btn-px)",
      ],
      xs: [
        "h-6",
        "gap-1",
        "[--btn-px:calc(--spacing(2)-1px)]",
        "px-(--btn-px)",
        "text-xs",
        "rounded-md",
        "[&_svg:not([class*='size-'])]:size-3",
        "in-data-[slot=input-group]:[&_svg:not([class*='size-'])]:size-3.5",
      ],
    },
    variant: {
      default: [
        "bg-primary",
        "border border-transparent shadow-sm/4",
        "text-primary-foreground",
        "hover:bg-primary-hover",
        "focus-visible:border-background",
      ],
      destructive: [
        "bg-destructive",
        "text-white",
        "border border-transparent shadow-sm/4",
        "hover:bg-destructive-hover",
      ],
      ghost: [
        "hover:bg-accent hover:text-accent-foreground",
        "border border-transparent",
      ],
      link: [
        "text-primary",
        "underline-offset-4",
        "border border-transparent",
        "hover:underline",
      ],
      outline: [
        "bg-transparent",
        "text-foreground",
        "border border-input shadow-xs/4",
        "hover:bg-accent hover:text-accent-foreground",
        "dark:bg-input/32 dark:hover:bg-input/64",
      ],
      secondary: [
        "bg-secondary",
        "text-secondary-foreground",
        "border border-transparent shadow-sm/4",
        "hover:bg-secondary-hover",
      ],
    },
  },
});

export interface ButtonProps
  extends React.ComponentProps<typeof ark.button>,
    VariantProps<typeof buttonVariants> {
  /**
   * Apply a click effect to the button
   *
   * @default true
   */
  clickEffect?: boolean;
  /**
   * Show a loading indicator
   *
   * @default false
   */
  isLoading?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    variant = "default",
    size = "md",
    clickEffect = true,
    pill = false,
    isLoading = false,
    className,
    children,
    ...rest
  } = props;

  return (
    <ark.button
      className={cn(
        buttonVariants({ clickEffect, pill, size, variant }),
        className
      )}
      data-size={size}
      data-slot="button"
      data-state={isLoading ? "loading" : "idle"}
      data-variant={variant}
      type="button"
      {...rest}
      aria-busy={isLoading}
      aria-disabled={isLoading}
    >
      {isLoading ? (
        <>
          <span aria-hidden className="invisible">
            {children}
          </span>

          <span className="sr-only">{children}</span>

          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner aria-hidden />
          </span>
        </>
      ) : (
        children
      )}
    </ark.button>
  );
};
