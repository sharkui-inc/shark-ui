"use client";

import {
  Dialog as ArkDialog,
  useDialog as useArkDialog,
  useDialogContext as useArkDialogContext,
} from "@ark-ui/react/dialog";
import { Portal } from "@ark-ui/react/portal";
import { XIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "@/registry/react/components/dialog";

export const useSheet = useArkDialog;
export const useSheetContext = useArkDialogContext;
export const SheetRootProvider = ArkDialog.RootProvider;

export const Sheet = (props: React.ComponentProps<typeof Dialog>) => (
  <Dialog data-slot="sheet" {...props} />
);

export const SheetTrigger = (
  props: React.ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger data-slot="sheet-trigger" {...props} />;

export const SheetOverlay = (
  props: React.ComponentProps<typeof DialogOverlay>
) => <DialogOverlay data-slot="sheet-overlay" {...props} />;

const sheetPositionerVariants = tv({
  base: [
    "[--inset:--spacing(0)]",
    "fixed inset-0 z-50",
    "h-svh w-screen",
    "grid",
    "overflow-hidden",
  ],
  defaultVariants: {
    variant: "default",
  },
  variants: {
    placement: {
      bottom: "grid grid-rows-[1fr_auto] not-data-[variant=inset]:pt-12",
      left: "flex justify-start",
      right: "flex justify-end",
      top: "grid grid-rows-[auto_1fr] not-data-[variant=inset]:pb-12",
    },
    variant: {
      default: "",
      inset: [
        "px-(--inset) sm:[--inset:--spacing(4)]",
        "data-[placement=bottom]:pb-(--inset)",
        "data-[placement=top]:pt-(--inset)",
        "data-[placement=left]:pt-(--inset) data-[placement=left]:pb-(--inset)",
        "data-[placement=right]:pt-(--inset) data-[placement=right]:pb-(--inset)",
      ],
    },
  },
});

interface SheetPositionerProps
  extends React.ComponentProps<typeof ArkDialog.Positioner>,
    VariantProps<typeof sheetPositionerVariants> {}

export const SheetPositioner = (props: SheetPositionerProps) => {
  const { variant = "default", placement, className, ...rest } = props;

  return (
    <ArkDialog.Positioner
      className={cn(sheetPositionerVariants({ placement, variant }), className)}
      data-placement={placement}
      data-slot="sheet-positioner"
      data-variant={variant}
      {...rest}
    />
  );
};

const sheetContentVariants = tv({
  base: [
    "[--space:--spacing(6)]",
    "relative",
    "max-h-full min-h-0 w-full min-w-0",
    "flex flex-col",
    "bg-popover",
    "text-popover-foreground",
    "shadow-lg/4",
    "outline-hidden",
    "origin-center transition-[opacity,translate] duration-200 ease-out will-change-transform",
    "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
    "motion-reduce:animate-none motion-reduce:transition-none",
  ],
  defaultVariants: {
    placement: "right",
    variant: "default",
  },
  variants: {
    // Sheet placement refers to a visual viewport edge, not reading order.
    placement: {
      bottom: [
        "row-start-2 border-t pb-[env(safe-area-inset-bottom,0px)]",
        "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      ],
      left: [
        "w-[calc(100%-(--spacing(12)))] max-w-md ps-[env(safe-area-inset-left,0px)]",
        "col-start-2",
        "border-e",
        "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
      ],
      right: [
        "w-[calc(100%-(--spacing(12)))] max-w-md pe-[env(safe-area-inset-right,0px)]",
        "col-start-2",
        "border-s",
        "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
      ],
      top: [
        "border-b pt-[env(safe-area-inset-top,0px)]",
        "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      ],
    },
    variant: {
      default: "",
      inset: [
        "sm:rounded-2xl sm:border",
        "sm:**:data-[slot=sheet-footer]:rounded-b-2xl",
      ],
    },
  },
});

interface SheetContentProps
  extends React.ComponentProps<typeof ArkDialog.Content>,
    VariantProps<typeof sheetContentVariants> {
  /**
   * Show close button at the top right corner
   *
   * @default true
   */
  showCloseButton?: boolean;
}

export const SheetContent = (props: SheetContentProps) => {
  const {
    showCloseButton = true,
    placement = "right",
    variant = "default",
    className,
    children,
    ...rest
  } = props;

  return (
    <Portal>
      <SheetOverlay />

      <SheetPositioner placement={placement} variant={variant}>
        <ArkDialog.Content
          className={cn(
            sheetContentVariants({ placement, variant }),
            className
          )}
          data-slot="sheet-content"
          {...rest}
        >
          {children}

          {!!showCloseButton && (
            <SheetClose asChild>
              <Button
                aria-label="Close"
                className="absolute inset-e-2 top-2 opacity-64 hover:opacity-100"
                size="icon-sm"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </SheetClose>
          )}
        </ArkDialog.Content>
      </SheetPositioner>
    </Portal>
  );
};

export const SheetHeader = (
  props: React.ComponentProps<typeof DialogHeader>
) => <DialogHeader data-slot="sheet-header" {...props} />;

export const SheetTitle = (props: React.ComponentProps<typeof DialogTitle>) => (
  <DialogTitle data-slot="sheet-title" {...props} />
);

export const SheetDescription = (
  props: React.ComponentProps<typeof DialogDescription>
) => <DialogDescription data-slot="sheet-description" {...props} />;

export const SheetBody = (props: React.ComponentProps<typeof DialogBody>) => {
  const { className, ...rest } = props;

  return (
    <DialogBody
      className={cn(
        "in-[[data-slot=sheet-content]:has([data-slot=sheet-header]:not(.sr-only))]:pt-0",
        className
      )}
      data-slot="sheet-body"
      {...rest}
    />
  );
};

export const SheetClose = (
  props: React.ComponentProps<typeof ArkDialog.CloseTrigger>
) => <ArkDialog.CloseTrigger data-slot="sheet-close" {...props} />;

export const SheetFooter = (
  props: React.ComponentProps<typeof DialogFooter>
) => {
  const { className, ...rest } = props;

  return (
    <DialogFooter
      className={cn("sm:rounded-none", className)}
      data-slot="sheet-footer"
      {...rest}
    />
  );
};
