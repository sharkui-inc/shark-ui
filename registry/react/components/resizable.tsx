"use client";

import {
  Splitter as ArkSplitter,
  useSplitter as useArkSplitter,
  useSplitterContext as useArkSplitterContext,
} from "@ark-ui/react/splitter";
import { GripVerticalIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export const useResizable = useArkSplitter;
export const useResizableContext = useArkSplitterContext;
export const ResizableRootProvider = ArkSplitter.RootProvider;

const resizableRegistry = ArkSplitter.createRegistry({
  hitAreaMargins: { coarse: 24, fine: 5 },
});

export const Resizable = (
  props: React.ComponentProps<typeof ArkSplitter.Root>
) => {
  const { className, registry = resizableRegistry, ...rest } = props;

  return (
    <ArkSplitter.Root
      className={cn("flex size-full", className)}
      data-slot="resizable"
      registry={registry}
      {...rest}
    />
  );
};

export const ResizablePanel = (
  props: React.ComponentProps<typeof ArkSplitter.Panel>
) => <ArkSplitter.Panel data-slot="resizable-panel" {...props} />;

interface ResizableResizeTriggerProps
  extends React.ComponentProps<typeof ArkSplitter.ResizeTrigger> {
  /**
   * Whether to show the handle
   *
   * @default false
   */
  withHandle?: boolean;
}

export const ResizableResizeTrigger = (props: ResizableResizeTriggerProps) => {
  const { withHandle = false, className, ...rest } = props;

  return (
    <ArkSplitter.ResizeTrigger
      aria-label="Resize"
      className={cn(
        "relative bg-border",
        "flex w-px items-center justify-center",
        "cursor-col-resize data-[orientation=vertical]:cursor-row-resize",
        "data-[dragging]:bg-primary",
        "after:-translate-x-1/2 data-[orientation=vertical]:after:-translate-y-1/2",
        "after:absolute after:inset-s-1/2 after:inset-y-0 after:w-1",
        "focus-visible:border-ring/64 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring/24",
        "data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full",
        "data-[orientation=vertical]:after:inset-s-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full",
        "data-[orientation=vertical]:after:translate-x-0",
        "[&[data-orientation=vertical]>div]:rotate-90",
        className
      )}
      data-slot="resizable-resize-trigger"
      {...rest}
    >
      {withHandle ? (
        <ArkSplitter.ResizeTriggerIndicator
          className={cn(
            "z-10",
            "h-4 w-3",
            "flex items-center justify-center",
            "bg-border",
            "rounded-xs border",
            "data-[dragging]:bg-primary",
            "data-[orientation=vertical]:rotate-90"
          )}
        >
          <GripVerticalIcon className="size-2.5" />
        </ArkSplitter.ResizeTriggerIndicator>
      ) : null}
    </ArkSplitter.ResizeTrigger>
  );
};
