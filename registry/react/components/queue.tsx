"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

export const Queue = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex w-full min-w-0 flex-col gap-2", className)}
      data-slot="queue"
      {...rest}
    />
  );
};

export const QueueSection = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-xl border bg-card text-card-foreground shadow-xs/5",
        className
      )}
      data-slot="queue-section"
      {...rest}
    />
  );
};

interface QueueSectionHeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The title of the queue section.
   */
  title?: string;
}

export const QueueSectionHeader = (props: QueueSectionHeaderProps) => {
  const { title, className, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex min-h-9 min-w-0 items-center gap-2 px-3 py-1",
        "[&>svg]:order-first [&>svg]:shrink-0 [&>svg]:text-muted-foreground",
        "[&>svg:not([class*='size-'])]:size-3.5",
        className
      )}
      data-slot="queue-section-header"
      {...rest}
    >
      {!!title && <QueueTitle>{title}</QueueTitle>}
      {!title && typeof children === "string" ? (
        <QueueTitle>{children}</QueueTitle>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const QueueTitle = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-w-0",
        "flex-1",
        "truncate text-muted-foreground text-sm",
        className
      )}
      data-slot="queue-title"
      {...rest}
    />
  );
};

export const QueueSectionAction = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("flex shrink-0 items-center gap-1", "ms-auto", className)}
      data-slot="queue-section-action"
      {...rest}
    />
  );
};

export const QueueSectionContent = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("border-t p-1", className)}
      data-slot="queue-section-content"
      {...rest}
    />
  );
};

export const QueueList = (props: React.ComponentProps<typeof ark.ul>) => {
  const { className, ...rest } = props;

  return (
    <ark.ul
      className={cn("flex flex-col gap-0.5", className)}
      data-slot="queue-list"
      {...rest}
    />
  );
};

export const QueueItem = (props: React.ComponentProps<typeof ark.li>) => {
  const { className, ...rest } = props;

  return (
    <ark.li
      className={cn(
        "group/queue-item",
        "flex min-h-8 min-w-0 items-center gap-2",
        "rounded-lg px-2 py-1",
        "text-sm",
        "transition-colors duration-150",
        "hover:bg-muted",
        "has-focus-visible:bg-muted",
        "[&>svg:not([class*='size-'])]:size-3.5 [&>svg]:shrink-0 [&>svg]:text-muted-foreground",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="queue-item"
      {...rest}
    />
  );
};

interface QueueItemContentProps extends React.ComponentProps<typeof ark.span> {
  /**
   * Whether the item is completed.
   */
  completed?: boolean;
}

export const QueueItemContent = (props: QueueItemContentProps) => {
  const { completed = false, className, ...rest } = props;

  return (
    <span
      className={cn(
        "min-w-0 flex-1 truncate",
        completed && "text-muted-foreground line-through",
        className
      )}
      data-slot="queue-item-content"
      {...rest}
    />
  );
};

export const QueueItemActions = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex shrink-0 items-center gap-0.5",
        "opacity-0",
        "group-hover/queue-item:opacity-100",
        "group-focus-within/queue-item:opacity-100",
        "transition-opacity duration-150",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="queue-item-actions"
      {...rest}
    />
  );
};

export const QueueItemAction = (props: React.ComponentProps<typeof Button>) => {
  const {
    className,
    size = "icon-xs",
    type = "button",
    variant = "ghost",
    ...rest
  } = props;

  return (
    <Button
      className={cn(
        "text-muted-foreground hover:text-foreground",
        "[&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      data-slot="queue-item-action"
      size={size}
      type={type}
      variant={variant}
      {...rest}
    />
  );
};
