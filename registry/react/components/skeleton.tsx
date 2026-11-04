"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";

export const Skeleton = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "bg-muted",
        "rounded-md",
        "animate-pulse",
        "motion-reduce:animate-none",
        className
      )}
      data-slot="skeleton"
      {...rest}
    />
  );
};

export const SkeletonCircle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "size-10",
        "shrink-0",
        "bg-muted",
        "rounded-full",
        "animate-pulse",
        "motion-reduce:animate-none",
        className
      )}
      data-slot="skeleton-circle"
      {...rest}
    />
  );
};

interface SkeletonTextProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The number of lines of the skeleton text.
   *
   * @default 1
   */
  lines?: number;
}

export const SkeletonText = (props: SkeletonTextProps) => {
  const { className, lines = 2, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-full",
        "flex flex-col gap-2",
        "animate-pulse",
        "**:[div]:h-4",
        "motion-reduce:animate-none",
        className
      )}
      data-slot="skeleton-text"
      {...rest}
    >
      {Array.from({ length: lines }).map((_, index) => {
        const key = `skeleton-text-${index}`;

        return (
          <div
            className={cn("w-full", "bg-muted", "rounded-md", "last:w-3/4")}
            data-slot="skeleton-text-line"
            key={key}
          />
        );
      })}
    </ark.div>
  );
};
