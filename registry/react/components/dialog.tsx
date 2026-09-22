"use client";

import {
  Dialog as ArkDialog,
  useDialog as useArkDialog,
  useDialogContext as useArkDialogContext,
} from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { createContext } from "@ark-ui/react/utils";
import { XIcon } from "lucide-react";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { ScrollArea } from "@/registry/react/components/scroll-area";

export const useDialog = useArkDialog;
export const useDialogContext = useArkDialogContext;

interface DialogContextProps {
  /**
   * Used internally to show or hide overlay
   *
   * @default true
   */
  modal?: boolean;
}

const [DialogModalProvider, _useDialog] = createContext<DialogContextProps>({
  name: "DialogModalContext",
  providerName: "Dialog",
});

export interface DialogRootProviderProps
  extends React.ComponentProps<typeof ArkDialog.RootProvider> {
  /**
   * Used internally to show or hide overlay. Match the `modal` option
   * passed to `useDialog` when non-default.
   *
   * @default true
   */
  modal?: boolean;
}

export const DialogRootProvider = (props: DialogRootProviderProps) => {
  const { modal = true, children, ...rest } = props;

  return (
    <DialogModalProvider value={{ modal }}>
      <ArkDialog.RootProvider {...rest}>{children}</ArkDialog.RootProvider>
    </DialogModalProvider>
  );
};

export interface DialogProps
  extends React.ComponentProps<typeof ArkDialog.Root> {}

export const Dialog = (props: DialogProps) => {
  const {
    modal = true,
    lazyMount = true,
    unmountOnExit = true,
    ...rest
  } = props;

  return (
    <DialogModalProvider
      value={{
        modal,
      }}
    >
      <ArkDialog.Root
        data-slot="dialog"
        lazyMount={lazyMount}
        modal={modal}
        unmountOnExit={unmountOnExit}
        {...rest}
      />
    </DialogModalProvider>
  );
};

export const DialogTrigger = (
  props: React.ComponentProps<typeof ArkDialog.Trigger>
) => <ArkDialog.Trigger data-slot="dialog-trigger" {...props} />;

export const dialogOverlayVariants = tv({
  base: [
    "fixed inset-0 z-50",
    "bg-black/32 backdrop-blur-xs",
    "duration-200 ease-out",
    "peer peer-data-[slot=dialog-overlay]:hidden",
    "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
    "motion-reduce:animate-none",
  ],
});

export const DialogOverlay = (
  props: React.ComponentProps<typeof ArkDialog.Backdrop>
) => {
  const { className, ...rest } = props;

  const { modal } = _useDialog();

  if (!modal) {
    return null;
  }

  return (
    <ArkDialog.Backdrop
      className={cn(dialogOverlayVariants(), className)}
      data-slot="dialog-overlay"
      {...rest}
    />
  );
};

export const DialogPositioner = (
  props: React.ComponentProps<typeof ArkDialog.Positioner>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Positioner
      className={cn(
        "fixed inset-0 z-50",
        "h-svh w-screen",
        "grid grid-rows-[1fr_auto_3fr] justify-items-center",
        "p-4",
        className
      )}
      data-slot="dialog-positioner"
      {...rest}
    />
  );
};

export const dialogContentVariants = tv({
  defaultVariants: {
    size: "md",
  },
  slots: {
    content: [
      "[--space:--spacing(6)]",
      "z-[calc(50+var(--layer-index,0))]",
      "relative",
      "row-start-2",
      "max-h-[calc(100svh-2rem)] min-h-0 w-full min-w-0",
      "flex flex-col",
      "bg-popover",
      "text-popover-foreground",
      "rounded-2xl border shadow-lg/4",
      "overflow-hidden",
      "outline-hidden",
      "translate-y-[calc(-1.25rem*var(--nested-layer-count))]",
      "origin-center transition-[scale,opacity,translate] duration-200 ease-out will-change-transform",
      "data-[nested=dialog]:data-[state=open]:slide-in-from-bottom-10 data-[has-nested=dialog]:origin-top",
      "scale-[calc(1-0.1*var(--nested-layer-count))] opacity-[calc(1-0.1*var(--nested-layer-count))]",
      "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:animate-out",
      "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
      "motion-reduce:animate-none motion-reduce:transition-none",
    ],
    positioner: [],
  },
  variants: {
    bottomStickOnMobile: {
      true: {
        content: [
          "max-sm:max-h-[calc(100svh-3rem)]",
          "max-sm:max-w-none",
          "max-sm:pb-[env(safe-area-inset-bottom,0px)]",
          "max-sm:rounded-none max-sm:rounded-t-2xl max-sm:border-x-0 max-sm:border-t max-sm:border-b-0",
          "max-sm:**:data-[slot=dialog-footer]:rounded-none",
          "max-sm:**:data-[slot=alert-dialog-footer]:rounded-none",
          "max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))]",
          "max-sm:data-[state=closed]:slide-out-to-bottom-5 max-sm:data-[state=open]:slide-in-from-bottom-5",
          "max-sm:data-[state=closed]:zoom-out-100 max-sm:data-[state=open]:zoom-in-100",
        ],
        positioner: ["max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12"],
      },
    },
    size: {
      "2xl": { content: ["max-w-3xl"] },
      "3xl": { content: ["max-w-4xl"] },
      "4xl": { content: ["max-w-5xl"] },
      "5xl": { content: ["max-w-6xl"] },
      "6xl": { content: ["max-w-7xl"] },
      fullscreen: { content: ["size-full"] },
      lg: { content: ["max-w-xl"] },
      md: { content: ["max-w-lg"] },
      sm: { content: ["max-w-md"] },
      xl: { content: ["max-w-2xl"] },
    },
  },
});

interface DialogContentProps
  extends React.ComponentProps<typeof ArkDialog.Content>,
    VariantProps<typeof dialogContentVariants> {
  /**
   * Stick the dialog to the bottom of the screen on mobile
   *
   * @default true
   */
  bottomStickOnMobile?: boolean;
  /**
   * Show close button at the top right corner
   *
   * @default true
   */
  showCloseButton?: boolean;
}

export const DialogContent = (props: DialogContentProps) => {
  const {
    showCloseButton = true,
    bottomStickOnMobile = true,
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const { content, positioner } = dialogContentVariants({
    bottomStickOnMobile,
    size,
  });

  return (
    <Portal>
      <DialogOverlay />

      <DialogPositioner className={positioner()}>
        <ArkDialog.Content
          className={cn(content(), className)}
          data-slot="dialog-content"
          {...rest}
        >
          {children}

          {!!showCloseButton && (
            <DialogClose asChild>
              <Button
                aria-label="Close"
                className="absolute inset-e-2 top-2 opacity-64 hover:opacity-100"
                size="icon-sm"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </DialogClose>
          )}
        </ArkDialog.Content>
      </DialogPositioner>
    </Portal>
  );
};

interface DialogBodyProps extends React.ComponentProps<typeof ark.div> {
  /**
   * Add a fade effect to the scroll area
   *
   * @default true
   */
  scrollFade?: boolean;
}

export const DialogBody = (props: DialogBodyProps) => {
  const { scrollFade = true, className, ...rest } = props;

  return (
    <ScrollArea
      className="min-h-0 min-w-0 flex-1"
      orientation="vertical"
      overscrollContain
      scrollFade={scrollFade}
    >
      <ark.div
        className={cn(
          "p-(--space)",
          "in-[[data-slot=dialog-content]:has([data-slot=dialog-header]:not(.sr-only))]:pt-1",
          className
        )}
        data-slot="dialog-body"
        {...rest}
      />
    </ScrollArea>
  );
};

export const dialogHeaderVariants = tv({
  base: ["shrink-0", "p-(--space)", "flex flex-col gap-2"],
});

interface DialogHeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The description of the dialog
   */
  description?: string;
  /**
   * The title of the dialog
   */
  title?: string;
}

export const DialogHeader = (props: DialogHeaderProps) => {
  const { className, title, description, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        dialogHeaderVariants(),
        "in-[[data-slot=dialog-content]:has([data-slot=dialog-body])]:pb-3",
        "max-sm:pb-4",
        className
      )}
      data-slot="dialog-header"
      {...rest}
    >
      {!!title && <DialogTitle>{title}</DialogTitle>}

      {!!description && <DialogDescription>{description}</DialogDescription>}

      {!title && typeof children === "string" ? (
        <DialogTitle>{children}</DialogTitle>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const dialogTitleVariants = tv({
  base: ["font-heading font-semibold text-xl leading-none"],
});

export const DialogTitle = (
  props: React.ComponentProps<typeof ArkDialog.Title>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Title
      className={cn(dialogTitleVariants(), className)}
      data-slot="dialog-title"
      {...rest}
    />
  );
};

export const dialogDescriptionVariants = tv({
  base: ["text-muted-foreground text-sm"],
});

export const DialogDescription = (
  props: React.ComponentProps<typeof ArkDialog.Description>
) => {
  const { className, ...rest } = props;

  return (
    <ArkDialog.Description
      className={cn(dialogDescriptionVariants(), className)}
      data-slot="dialog-description"
      {...rest}
    />
  );
};

export const DialogClose = (
  props: React.ComponentProps<typeof ArkDialog.CloseTrigger>
) => <ArkDialog.CloseTrigger data-slot="dialog-close-trigger" {...props} />;

export const dialogFooterVariants = tv({
  base: [
    "shrink-0",
    "flex flex-col gap-2 sm:flex-row-reverse sm:justify-start",
    "rounded-b-[max(0px,calc(var(--radius-2xl)-1px))]",
    "px-(--space) py-4",
    "bg-muted/48",
    "border-t",
  ],
});

export const DialogFooter = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(dialogFooterVariants(), className)}
      data-slot="dialog-footer"
      {...rest}
    />
  );
};
