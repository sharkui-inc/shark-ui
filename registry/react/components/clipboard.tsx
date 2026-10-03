"use client";

import {
  Clipboard as ArkClipboard,
  useClipboardContext as useArkClipboardContext,
} from "@ark-ui/react/clipboard";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import {
  inputHeightVars,
  inputVariants,
} from "@/registry/react/components/input";

export const useClipboardContext = useArkClipboardContext;
export const ClipboardContext = ArkClipboard.Context;

interface ClipboardProps
  extends React.ComponentProps<typeof ArkClipboard.Root> {
  /**
   * Styles for the root element
   */
  rootClassName?: string;
}

export const Clipboard = (props: ClipboardProps) => {
  const { rootClassName, className, children, ...rest } = props;
  const hasMultipleParts = React.Children.toArray(children).length > 1;

  return (
    <ArkClipboard.Root
      className={cn("contents", rootClassName)}
      data-slot="clipboard"
      {...rest}
    >
      <ArkClipboard.Control
        asChild={!hasMultipleParts}
        className={cn(
          hasMultipleParts && "flex items-center gap-2",
          rootClassName,
          className
        )}
        data-slot="clipboard-control"
      >
        {children}
      </ArkClipboard.Control>
    </ArkClipboard.Root>
  );
};

export const ClipboardTrigger = (
  props: React.ComponentProps<typeof ArkClipboard.Trigger>
) => <ArkClipboard.Trigger data-slot="clipboard-trigger" {...props} />;

export const ClipboardInput = (
  props: React.ComponentProps<typeof ArkClipboard.Input>
) => {
  const { className, ...rest } = props;

  return (
    <ArkClipboard.Input
      className={cn(inputVariants(), className)}
      data-slot="clipboard-input"
      {...rest}
    />
  );
};

const clipboardValueVariants = tv({
  base: [
    "h-(--field-height)",
    "inline-flex items-center",
    "font-normal text-base md:text-sm",
    "bg-transparent dark:bg-input/32",
    "rounded-lg border border-input shadow-xs/4",
  ],
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      lg: [inputHeightVars.lg, "px-[calc(--spacing(3.5)-1px)]"],
      md: [inputHeightVars.md, "px-[calc(--spacing(3)-1px)]"],
      sm: [inputHeightVars.sm, "px-[calc(--spacing(2.5)-1px)]"],
      xl: [
        "[--field-height:--spacing(12)] md:[--field-height:--spacing(11)]",
        "px-[calc(--spacing(3)-1px)]",
      ],
      xs: [
        "[--field-height:--spacing(8)] md:[--field-height:--spacing(7)]",
        "px-[calc(--spacing(3)-1px)]",
      ],
    },
  },
});

interface ClipboardValueProps
  extends React.ComponentProps<typeof ArkClipboard.ValueText>,
    VariantProps<typeof clipboardValueVariants> {}

export const ClipboardValue = (props: ClipboardValueProps) => {
  const { size, className, ...rest } = props;

  return (
    <ArkClipboard.ValueText
      className={cn(clipboardValueVariants({ size }), className)}
      data-slot="clipboard-value"
      {...rest}
    />
  );
};

export const ClipboardIndicator = (
  props: React.ComponentProps<typeof ArkClipboard.Indicator>
) => {
  const { copied = <CheckIcon />, className, children, ...rest } = props;

  return (
    <ArkClipboard.Indicator
      className={cn("pointer-events-none", className)}
      copied={copied}
      data-slot="clipboard-indicator"
      {...rest}
      aria-hidden
    >
      {children ?? <ClipboardIcon />}
    </ArkClipboard.Indicator>
  );
};
