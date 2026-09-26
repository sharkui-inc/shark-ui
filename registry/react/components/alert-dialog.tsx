"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  dialogFooterVariants,
} from "@/registry/react/components/dialog";

export const AlertDialog = (props: React.ComponentProps<typeof Dialog>) => (
  <Dialog data-slot="alert-dialog-root" {...props} role="alertdialog" />
);

export const AlertDialogTrigger = (
  props: React.ComponentProps<typeof DialogTrigger>
) => <DialogTrigger data-slot="alert-dialog-trigger" {...props} />;

export const AlertDialogContent = (
  props: React.ComponentProps<typeof DialogContent>
) => (
  <DialogContent
    data-slot="alert-dialog-content"
    {...props}
    showCloseButton={false}
  />
);

export const AlertDialogBody = (
  props: React.ComponentProps<typeof DialogBody>
) => {
  const { className, ...rest } = props;

  return (
    <DialogBody
      className={cn(
        "in-[[data-slot=alert-dialog-content]:has([data-slot=alert-dialog-header]:not(.sr-only))]:pt-1",
        className
      )}
      data-slot="alert-dialog-body"
      {...rest}
    />
  );
};

export const AlertDialogHeader = (
  props: React.ComponentProps<typeof DialogHeader>
) => {
  const { className, ...rest } = props;

  return (
    <DialogHeader
      className={cn(
        "in-[[data-slot=alert-dialog-content]:has([data-slot=alert-dialog-body])]:pb-3",
        className
      )}
      data-slot="alert-dialog-header"
      {...rest}
    />
  );
};

export const AlertDialogTitle = (
  props: React.ComponentProps<typeof DialogTitle>
) => <DialogTitle data-slot="alert-dialog-title" {...props} />;

export const AlertDialogDescription = (
  props: React.ComponentProps<typeof DialogDescription>
) => <DialogDescription data-slot="alert-dialog-description" {...props} />;

export const AlertDialogClose = (
  props: React.ComponentProps<typeof DialogClose>
) => <DialogClose data-slot="alert-dialog-close" {...props} />;

export const AlertDialogFooter = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        dialogFooterVariants(),
        "flex-col-reverse sm:flex-row sm:justify-end",
        className
      )}
      data-slot="alert-dialog-footer"
      {...rest}
    />
  );
};

interface AlertDialogActionProps
  extends React.ComponentProps<typeof DialogClose>,
    Omit<ButtonProps, "variant"> {
  /**
   * The variant of the action button
   *
   * @default "default"
   */
  variant?: "default" | "destructive";
}

export const AlertDialogAction = (props: AlertDialogActionProps) => {
  const { variant = "default", ...rest } = props;

  return (
    <AlertDialogClose asChild data-slot="alert-dialog-action">
      <Button variant={variant} {...rest} />
    </AlertDialogClose>
  );
};

interface AlertDialogCancelProps
  extends React.ComponentProps<typeof DialogClose>,
    Omit<ButtonProps, "variant"> {}

export const AlertDialogCancel = (props: AlertDialogCancelProps) => (
  <AlertDialogClose asChild data-slot="alert-dialog-cancel">
    <Button variant="outline" {...props} />
  </AlertDialogClose>
);
