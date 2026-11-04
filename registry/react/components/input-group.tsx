"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";
import { Input, inputHeightVars } from "@/registry/react/components/input";
import { Textarea } from "@/registry/react/components/textarea";

const inputGroupVariants = tv({
  base: [
    "[--input-group-px:calc(--spacing(3)-1px)]",
    "[--input-group-inset:calc(--spacing(1)-1px)]",
    "[--input-group-radius:var(--radius)]",
    "[--input-group-textarea-pb:var(--input-group-px)] [--input-group-textarea-pt:var(--input-group-px)]",
    "has-[>[data-align=block-start]_:is(button,a,[role=button])]:[--input-group-textarea-pt:--spacing(1)]",
    "has-[>[data-align=block-end]_:is(button,a,[role=button])]:[--input-group-textarea-pb:--spacing(1)]",
    "group/input-group",
    "relative",
    "h-(--field-height) min-h-(--field-height) w-full min-w-0",
    "flex items-center",
    "px-(--input-group-px)",
    "text-base font-normal md:text-sm",
    "bg-background",
    "dark:bg-input/32",
    "rounded-lg",
    "border-input border shadow-xs/4",
    "transition-[color,box-shadow]",
    "has-[>textarea]:h-auto",
    "has-[>[data-align^=block]]:h-auto has-[>[data-align^=block]]:flex-col",
    "has-[>[data-align=block-start]]:[&>input]:pb-3",
    "has-[>[data-align=block-end]]:[&>input]:pt-3",
    "[&_[data-inline=true]_:is(button,a,[role=button],kbd)]:rounded-[max(var(--radius-sm),calc(var(--input-group-radius)-var(--input-group-inset)))]",
    "data-[pill=true]:[&_[data-inline=true]_:is(button,a,[role=button],kbd)]:rounded-full",
    "focus-within:border-ring/64 focus-within:ring-ring/24 focus-within:ring-2",
    "pointer-coarse:[&>:is(button,a,[role=button])]:min-h-11 pointer-coarse:[&>:is(button,a,[role=button])]:min-w-11",
    "pointer-coarse:[&>[data-slot=input-group-addon]_:is(button,a,[role=button])]:min-h-11 pointer-coarse:[&>[data-slot=input-group-addon]_:is(button,a,[role=button])]:min-w-11",
    "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/24 has-[[data-slot][aria-invalid=true]]:ring-[3px]",
    "dark:has-[[data-slot][aria-invalid=true]]:border-destructive-foreground dark:has-[[data-slot][aria-invalid=true]]:ring-destructive-foreground/32",
    "has-[[data-slot=input-group-control]:disabled]:pointer-events-none has-[[data-slot=input-group-control]:disabled]:opacity-64",
    "data-disabled:pointer-events-none data-disabled:opacity-64",
    "motion-reduce:transition-none",
  ],
  compoundVariants: [
    {
      class: "rounded-full",
      pill: true,
    },
  ],
  defaultVariants: {
    pill: false,
    size: "md",
  },
  variants: {
    pill: {
      false: "",
      true: "",
    },
    size: {
      lg: inputHeightVars.lg,
      md: inputHeightVars.md,
      sm: [
        inputHeightVars.sm,
        "[--input-group-px:calc(--spacing(2)-1px)]",
        "[--input-group-radius:calc(var(--radius)*0.75)]",
        "rounded-md",
      ],
    },
  },
});

export interface InputGroupProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof inputGroupVariants> {}

export const InputGroup = (props: InputGroupProps) => {
  const { size = "md", pill = false, className, ...rest } = props;

  return (
    <ark.div
      className={cn(inputGroupVariants({ pill, size }), className)}
      data-pill={pill || undefined}
      data-size={size}
      data-slot="input-group"
      role="group"
      {...rest}
    />
  );
};

const inputGroupAddonVariants = tv({
  base: [
    "[--input-group-addon-py:var(--input-group-px)]",
    "has-[:is(button,a,[role=button])]:[--input-group-addon-py:var(--input-group-inset)]",
    "h-full",
    "flex items-center justify-center gap-2",
    "text-muted-foreground text-xs font-medium",
    "select-none",
    "cursor-text",
    "[&_svg:not([class*='size-'])]:size-4",
  ],
  defaultVariants: {
    align: "inline-start",
  },
  variants: {
    align: {
      "block-end": [
        "w-full",
        "order-last justify-start",
        "pb-(--input-group-addon-py) [.border-t]:pt-(--input-group-px)",
      ],
      "block-start": [
        "w-full",
        "order-first justify-start",
        "pt-(--input-group-addon-py) [.border-b]:pb-(--input-group-px)",
      ],
      "inline-end": [
        "order-last",
        "ps-2 pe-0",
        "has-[:is(button,a,[role=button])]:-me-[calc(var(--input-group-px)-var(--input-group-inset))]",
      ],
      "inline-start": [
        "order-first",
        "ps-0 pe-2",
        "has-[:is(button,a,[role=button])]:-ms-[calc(var(--input-group-px)-var(--input-group-inset))]",
      ],
    },
  },
});

interface InputGroupAddonProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof inputGroupAddonVariants> {}

export const InputGroupAddon = (props: InputGroupAddonProps) => {
  const { className, align = "inline-start", onMouseDown, ...rest } = props;

  return (
    <ark.div
      className={cn(inputGroupAddonVariants({ align }), className)}
      data-align={align}
      data-inline={align.startsWith("inline") || undefined}
      data-slot="input-group-addon"
      role="group"
      {...rest}
      onMouseDown={(event) => {
        onMouseDown?.(event);
        if (
          event.defaultPrevented ||
          (event.target as HTMLElement).closest(
            "a, button, input, select, textarea, [role=button]"
          )
        ) {
          return;
        }

        event.preventDefault();
        event.currentTarget.parentElement
          ?.querySelector<HTMLElement>(
            "input:not(:focus), textarea:not(:focus)"
          )
          ?.focus();
      }}
    />
  );
};

export const InputGroupButton = (props: ButtonProps) => {
  const { className, variant = "ghost", size = "xs", ...rest } = props;

  return (
    <Button
      className={cn("text-sm", "shadow-none", className)}
      data-slot="input-group-button"
      size={size}
      variant={variant}
      {...rest}
    />
  );
};

export const InputGroupText = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "flex items-center gap-2",
        "text-muted-foreground text-xs font-medium",
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      data-slot="input-group-text"
      {...rest}
    />
  );
};

export const InputGroupInput = (props: React.ComponentProps<typeof Input>) => {
  const { className, ...rest } = props;

  return (
    <Input
      className={cn(
        "h-full flex-1",
        "px-0",
        "bg-transparent",
        "rounded-none border-0 shadow-none",
        "focus-visible:border-0 focus-visible:ring-0",
        "disabled:bg-transparent disabled:opacity-100",
        "aria-invalid:ring-0",
        "data-invalid:ring-0",
        "dark:bg-transparent dark:disabled:bg-transparent",
        className
      )}
      data-slot="input-group-control"
      {...rest}
    />
  );
};

export const InputGroupTextarea = (
  props: React.ComponentProps<typeof Textarea>
) => {
  const { className, ...rest } = props;

  return (
    <Textarea
      className={cn(
        "flex-1",
        "px-0",
        "bg-transparent",
        "pt-(--input-group-textarea-pt) pb-(--input-group-textarea-pb)",
        "rounded-none border-0 shadow-none",
        "resize-none",
        "focus-visible:border-0 focus-visible:ring-0",
        "disabled:bg-transparent disabled:opacity-100",
        "aria-invalid:ring-0",
        "data-invalid:ring-0",
        "dark:bg-transparent dark:disabled:bg-transparent",
        className
      )}
      data-slot="input-group-control"
      {...rest}
    />
  );
};
