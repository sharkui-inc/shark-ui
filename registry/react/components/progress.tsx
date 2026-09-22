"use client";

import {
  Progress as ArkProgress,
  useProgress as useArkProgress,
  useProgressContext as useArkProgressContext,
} from "@ark-ui/react/progress";
import type React from "react";
import { cn } from "@/lib/utils";
import { FieldLabel } from "@/registry/react/components/field";

export const useProgress = useArkProgress;
export const useProgressContext = useArkProgressContext;
export const ProgressRootProvider = ArkProgress.RootProvider;

interface ProgressProps
  extends Omit<React.ComponentProps<typeof ArkProgress.Root>, "value"> {
  /**
   * Shows indeterminate progress
   *
   * @default false
   */
  indeterminate?: boolean;
  /**
   * The value of the progress bar
   *
   * @default 0
   */
  value?: number;
}

export const Progress = (props: ProgressProps) => {
  const {
    value,
    orientation = "horizontal",
    indeterminate = false,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkProgress.Root
      className={cn(
        "flex flex-wrap gap-3",
        "data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:-scale-y-100",
        className
      )}
      data-slot="progress"
      orientation={orientation}
      value={indeterminate ? null : value}
      {...rest}
    >
      {children}

      <ProgressTrack>
        <ProgressRange />
      </ProgressTrack>
    </ArkProgress.Root>
  );
};

export const ProgressTrack = (
  props: React.ComponentProps<typeof ArkProgress.Track>
) => {
  const { className, ...rest } = props;

  return (
    <ArkProgress.Track
      className={cn(
        "bg-input",
        "rounded-full",
        "overflow-x-hidden",
        "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2",
        className
      )}
      data-slot="progress-track"
      {...rest}
    />
  );
};

export const ProgressRange = (
  props: React.ComponentProps<typeof ArkProgress.Range>
) => {
  const { className, ...rest } = props;

  return (
    <ArkProgress.Range
      className={cn(
        "bg-primary",
        "transition-none",
        "data-[orientation=horizontal]:h-full",
        "data-[orientation=vertical]:h-full",
        "motion-reduce:data-[state=indeterminate]:animate-none",
        "data-[state=indeterminate]:w-1/3 data-[state=indeterminate]:animate-indeterminate",
        className
      )}
      data-slot="progress-range"
      {...rest}
    />
  );
};

export const ProgressLabel = (
  props: React.ComponentProps<typeof ArkProgress.Label>
) => {
  const { children, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkProgress.Label data-slot="progress-label" {...rest}>
        {children}
      </ArkProgress.Label>
    </FieldLabel>
  );
};

export const ProgressValue = (
  props: React.ComponentProps<typeof ArkProgress.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkProgress.ValueText
        className={cn("ms-auto tabular-nums", className)}
        data-slot="progress-value"
        {...rest}
      />
    </FieldLabel>
  );
};
