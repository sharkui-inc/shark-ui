"use client";

import { ark } from "@ark-ui/react/factory";
import {
  FloatingPanel as ArkFloatingPanel,
  useFloatingPanelContext as useArkFloatingPanelContext,
} from "@ark-ui/react/floating-panel";
import { Portal } from "@ark-ui/react/portal";
import { MaximizeIcon, MinimizeIcon, MinusIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";
import { ScrollArea } from "@/registry/react/components/scroll-area";

export const useFloatingPanelContext = useArkFloatingPanelContext;
export const FloatingPanel = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Root>
) => {
  const { lazyMount = true, unmountOnExit = true, ...rest } = props;

  return (
    <ArkFloatingPanel.Root
      data-slot="floating-panel"
      lazyMount={lazyMount}
      unmountOnExit={unmountOnExit}
      {...rest}
    />
  );
};

export const FloatingPanelTrigger = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Trigger>
) => <ArkFloatingPanel.Trigger data-slot="floating-panel-trigger" {...props} />;

interface FloatingPanelContentProps
  extends React.ComponentProps<typeof ArkFloatingPanel.Content> {
  /**
   * Enable resizable panel
   *
   * @default true
   */
  resizable?: boolean;
}

export const FloatingPanelContent = (props: FloatingPanelContentProps) => {
  const { resizable = true, className, children, ...rest } = props;

  return (
    <Portal>
      <ArkFloatingPanel.Positioner
        className="inset-s-(--x) top-(--y)"
        data-slot="floating-panel-positioner"
        dir="ltr"
        style={{ zIndex: "calc(50 + var(--z-index))" }}
      >
        <ArkFloatingPanel.Content
          className={cn(
            "[--space:--spacing(4)]",
            "z-[calc(50+var(--z-index))]",
            "group/floating-panel",
            "relative",
            "flex flex-col",
            "h-(--height) min-h-0 w-(--width)",
            "bg-popover",
            "text-popover-foreground",
            "rounded-2xl border shadow-lg/4",
            "outline-hidden",
            "origin-center transition-[scale,opacity,translate] duration-200 ease-out will-change-transform",
            "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
            "motion-reduce:animate-none motion-reduce:transition-none",
            "motion-reduce:data-[state=open]:animate-none",
            className
          )}
          data-slot="floating-panel-content"
          {...rest}
        >
          {children}

          {!!resizable && (
            <>
              <FloatingPanelResizeTrigger axis="n" />
              <FloatingPanelResizeTrigger axis="e" />
              <FloatingPanelResizeTrigger axis="w" />
              <FloatingPanelResizeTrigger axis="s" />
              <FloatingPanelResizeTrigger axis="ne" />
              <FloatingPanelResizeTrigger axis="se" />
              <FloatingPanelResizeTrigger axis="sw" />
              <FloatingPanelResizeTrigger axis="nw" />
            </>
          )}
        </ArkFloatingPanel.Content>
      </ArkFloatingPanel.Positioner>
    </Portal>
  );
};

export const FloatingPanelDragTrigger = (
  props: React.ComponentProps<typeof ArkFloatingPanel.DragTrigger>
) => (
  <ArkFloatingPanel.DragTrigger
    data-slot="floating-panel-drag-trigger"
    {...props}
  />
);

export const FloatingPanelHeader = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Header>
) => {
  const { className, ...rest } = props;

  return (
    <FloatingPanelDragTrigger>
      <ArkFloatingPanel.Header
        className={cn(
          "relative",
          "min-w-0",
          "px-(--space) py-[calc(var(--space)*0.5)]",
          "flex flex-1 shrink-0 items-center gap-2",
          "bg-muted/48",
          "rounded-t-[max(0px,calc(var(--radius)*2-1px))] border-b",
          "overflow-hidden",
          "in-data-disabled:cursor-default",
          "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          className
        )}
        data-slot="floating-panel-header"
        {...rest}
      />
    </FloatingPanelDragTrigger>
  );
};

export const FloatingPanelControl = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFloatingPanel.Control
      className={cn("ms-auto flex items-center gap-2", className)}
      data-slot="floating-panel-control"
      {...rest}
    />
  );
};

interface FloatingPanelStageTriggerProps
  extends Omit<
      React.ComponentProps<typeof ArkFloatingPanel.StageTrigger>,
      "stage"
    >,
    ButtonProps {}

export const FloatingPanelMinimize = (
  props: FloatingPanelStageTriggerProps
) => {
  const { size = "icon-xs", variant = "ghost", ...rest } = props;

  return (
    <ArkFloatingPanel.StageTrigger {...rest} asChild stage="minimized">
      <Button aria-label="Minimize" size={size} variant={variant}>
        <MinusIcon />
      </Button>
    </ArkFloatingPanel.StageTrigger>
  );
};

export const FloatingPanelMaximize = (
  props: FloatingPanelStageTriggerProps
) => {
  const { size = "icon-xs", variant = "ghost", ...rest } = props;

  return (
    <ArkFloatingPanel.StageTrigger {...rest} asChild stage="maximized">
      <Button aria-label="Maximize" size={size} variant={variant}>
        <MaximizeIcon />
      </Button>
    </ArkFloatingPanel.StageTrigger>
  );
};

export const FloatingPanelRestore = (props: FloatingPanelStageTriggerProps) => {
  const { size = "icon-xs", variant = "outline", ...rest } = props;

  return (
    <ArkFloatingPanel.StageTrigger {...rest} asChild stage="default">
      <Button aria-label="Restore" size={size} variant={variant}>
        <MinimizeIcon className="hidden group-data-maximized/floating-panel:block" />
        <MaximizeIcon className="hidden group-data-minimized/floating-panel:block" />
      </Button>
    </ArkFloatingPanel.StageTrigger>
  );
};

export const FloatingPanelTitle = (
  props: React.ComponentProps<typeof ArkFloatingPanel.Title>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFloatingPanel.Title
      className={cn(
        "min-w-0 flex-1",
        "flex items-center gap-2",
        "truncate whitespace-nowrap font-medium text-sm leading-none",
        className
      )}
      data-slot="floating-panel-title"
      {...rest}
    />
  );
};

export const FloatingPanelResizeTrigger = (
  props: React.ComponentProps<typeof ArkFloatingPanel.ResizeTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkFloatingPanel.ResizeTrigger
      className={cn(
        "data-[axis=ne]:z-1 data-[axis=nw]:z-1 data-[axis=se]:z-1 data-[axis=sw]:z-1",
        "data-[axis=n]:h-1.5 data-[axis=s]:h-1.5 data-[axis=n]:max-w-[90%] data-[axis=s]:max-w-[90%]",
        "data-[axis=e]:max-h-[90%] data-[axis=w]:max-h-[90%] data-[axis=e]:w-1.5 data-[axis=w]:w-1.5",
        "data-[axis=ne]:size-2.5 data-[axis=nw]:size-2.5 data-[axis=se]:size-2.5 data-[axis=sw]:size-2.5",
        "after:absolute",
        "pointer-fine:data-[axis=n]:after:inset-x-0 pointer-fine:data-[axis=n]:after:-top-1 pointer-fine:data-[axis=n]:after:h-1",
        "pointer-fine:data-[axis=s]:after:inset-x-0 pointer-fine:data-[axis=s]:after:-bottom-1 pointer-fine:data-[axis=s]:after:h-1",
        "pointer-fine:data-[axis=e]:after:inset-y-0 pointer-fine:data-[axis=e]:after:-right-1 pointer-fine:data-[axis=e]:after:w-1",
        "pointer-fine:data-[axis=w]:after:inset-y-0 pointer-fine:data-[axis=w]:after:-left-1 pointer-fine:data-[axis=w]:after:w-1",
        "pointer-fine:data-[axis=nw]:after:-top-1 pointer-fine:data-[axis=nw]:after:-left-1 pointer-fine:data-[axis=nw]:after:size-[calc(100%+--spacing(1))]",
        "pointer-fine:data-[axis=ne]:after:-top-1 pointer-fine:data-[axis=ne]:after:-right-1 pointer-fine:data-[axis=ne]:after:size-[calc(100%+--spacing(1))]",
        "pointer-fine:data-[axis=se]:after:-right-1 pointer-fine:data-[axis=se]:after:-bottom-1 pointer-fine:data-[axis=se]:after:size-[calc(100%+--spacing(1))]",
        "pointer-fine:data-[axis=sw]:after:-bottom-1 pointer-fine:data-[axis=sw]:after:-left-1 pointer-fine:data-[axis=sw]:after:size-[calc(100%+--spacing(1))]",
        "pointer-coarse:data-[axis=n]:after:inset-x-0 pointer-coarse:data-[axis=n]:after:-top-6 pointer-coarse:data-[axis=n]:after:h-6",
        "pointer-coarse:data-[axis=s]:after:inset-x-0 pointer-coarse:data-[axis=s]:after:-bottom-6 pointer-coarse:data-[axis=s]:after:h-6",
        "pointer-coarse:data-[axis=e]:after:inset-y-0 pointer-coarse:data-[axis=e]:after:-right-6 pointer-coarse:data-[axis=e]:after:w-6",
        "pointer-coarse:data-[axis=w]:after:inset-y-0 pointer-coarse:data-[axis=w]:after:-left-6 pointer-coarse:data-[axis=w]:after:w-6",
        "pointer-coarse:data-[axis=nw]:after:-top-6 pointer-coarse:data-[axis=nw]:after:-left-6 pointer-coarse:data-[axis=nw]:after:size-[calc(100%+--spacing(6))]",
        "pointer-coarse:data-[axis=ne]:after:-top-6 pointer-coarse:data-[axis=ne]:after:-right-6 pointer-coarse:data-[axis=ne]:after:size-[calc(100%+--spacing(6))]",
        "pointer-coarse:data-[axis=se]:after:-right-6 pointer-coarse:data-[axis=se]:after:-bottom-6 pointer-coarse:data-[axis=se]:after:size-[calc(100%+--spacing(6))]",
        "pointer-coarse:data-[axis=sw]:after:-bottom-6 pointer-coarse:data-[axis=sw]:after:-left-6 pointer-coarse:data-[axis=sw]:after:size-[calc(100%+--spacing(6))]",
        "data-disabled:hidden",
        className
      )}
      data-slot="floating-panel-resize-trigger"
      {...rest}
    />
  );
};

export const FloatingPanelStageTrigger = (
  props: React.ComponentProps<typeof ArkFloatingPanel.StageTrigger>
) => (
  <ArkFloatingPanel.StageTrigger
    data-slot="floating-panel-stage-trigger"
    {...props}
  />
);

export const FloatingPanelCloseTrigger = (
  props: React.ComponentProps<typeof ArkFloatingPanel.CloseTrigger>
) => (
  <ArkFloatingPanel.CloseTrigger
    data-slot="floating-panel-close-trigger"
    {...props}
  />
);

interface FloatingPanelBodyProps
  extends React.ComponentProps<typeof ArkFloatingPanel.Body> {
  /**
   * Add a fade effect to the scroll area
   *
   * @default true
   */
  scrollFade?: boolean;
}

export const FloatingPanelBody = (props: FloatingPanelBodyProps) => {
  const { scrollFade = true, className, children, ...rest } = props;

  return (
    <ScrollArea
      className="min-w-0 flex-1"
      overscrollContain
      scrollFade={scrollFade}
    >
      <ArkFloatingPanel.Body
        className={cn("flex flex-col gap-4", "p-(--space)", className)}
        data-slot="floating-panel-body"
        {...rest}
      >
        {children}
      </ArkFloatingPanel.Body>
    </ScrollArea>
  );
};

export const FloatingPanelFooter = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        "rounded-b-2xl",
        "px-(--space) py-4",
        "bg-muted/48",
        "border-t",
        className
      )}
      data-slot="floating-panel-footer"
      {...rest}
    />
  );
};
