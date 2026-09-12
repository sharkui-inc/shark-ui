"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import { CircleCheckIcon, CircleIcon, CircleXIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/registry/react/components/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import { Spinner } from "@/registry/react/components/spinner";

export type PlanItemStatus = "completed" | "error" | "in-progress" | "pending";

interface PlanItemContextValue {
  collapsible: boolean;
  status: PlanItemStatus;
}

const [PlanItemProvider, usePlanItem] = createContext<PlanItemContextValue>({
  name: "PlanItemContext",
  providerName: "PlanItem",
});

export const Plan = (props: React.ComponentProps<typeof Collapsible>) => {
  const { children, className, defaultOpen = true, ...rest } = props;

  return (
    <Collapsible
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-xl border bg-card text-card-foreground shadow-xs/5",
        className
      )}
      data-slot="plan"
      defaultOpen={defaultOpen}
      {...rest}
    >
      {children}
    </Collapsible>
  );
};

interface PlanHeaderProps
  extends React.ComponentProps<typeof CollapsibleTrigger> {
  /**
   * The title of the plan.
   */
  title?: string;
}

export const PlanHeader = (props: PlanHeaderProps) => {
  const { title, className, children, ...rest } = props;

  return (
    <CollapsibleTrigger
      className={cn(
        "flex min-h-11 w-full min-w-0 items-center gap-2 px-3 py-2 text-start",
        "hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "transition-colors duration-150 motion-reduce:transition-none",
        className
      )}
      data-align="start"
      data-slot="plan-header"
      {...rest}
    >
      {title ? <PlanTitle>{title}</PlanTitle> : (children ?? null)}
      <CollapsibleIndicator className="ms-auto size-4 shrink-0 text-muted-foreground" />
    </CollapsibleTrigger>
  );
};

export const PlanTitle = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("min-w-0 flex-1 truncate font-medium text-sm", className)}
      data-slot="plan-title"
      {...rest}
    />
  );
};

export const PlanContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn("flex flex-col gap-0.5 border-t p-1.5", className)}
      data-slot="plan-content"
      {...rest}
    />
  );
};

interface PlanItemProps extends React.ComponentProps<typeof Collapsible> {
  /**
   * Enables details and the item disclosure control.
   */
  collapsible?: boolean;
  /**
   * The status of the plan item.
   */
  status?: PlanItemStatus;
}

export const PlanItem = (props: PlanItemProps) => {
  const {
    className,
    collapsible = false,
    defaultOpen,
    status = "pending",
    ...rest
  } = props;

  return (
    <PlanItemProvider value={{ collapsible, status }}>
      <Collapsible
        className={cn(
          "w-full min-w-0 text-sm",
          "[&>[data-slot=collapsible-content]]:w-full",
          "[&>[data-slot=collapsible-content]]:min-w-0",
          className
        )}
        data-slot="plan-item"
        data-status={status}
        defaultOpen={defaultOpen ?? status === "in-progress"}
        {...rest}
      />
    </PlanItemProvider>
  );
};

interface PlanItemTriggerProps
  extends Omit<React.ComponentProps<typeof CollapsibleTrigger>, "title"> {
  /**
   * The status of the plan item.
   */
  status?: PlanItemStatus;
  /**
   * The title of the plan item.
   */
  title: string;
}

export const PlanItemTrigger = (props: PlanItemTriggerProps) => {
  const { collapsible, status: inheritedStatus } = usePlanItem();
  const {
    status = inheritedStatus,
    title,
    className,
    children,
    ...rest
  } = props;

  const content = children ?? (
    <>
      <PlanItemStatusIcon status={status} />
      <span
        className={cn(
          "min-w-0 truncate",
          status === "completed" && "text-muted-foreground",
          status === "error" && "text-destructive-foreground"
        )}
      >
        <span className="sr-only">{statusLabels[status]}: </span>
        {title}
      </span>
    </>
  );

  const sharedClassName = cn(
    "grid min-h-9 w-full min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-lg px-2 py-1 text-start",
    collapsible &&
      "cursor-pointer hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    "transition-colors duration-150 motion-reduce:transition-none",
    "[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:shrink-0",
    className
  );

  if (!collapsible) {
    return (
      <ark.div
        className={sharedClassName}
        data-slot="plan-item-trigger"
        {...rest}
      >
        {content}
      </ark.div>
    );
  }

  return (
    <CollapsibleTrigger
      className={sharedClassName}
      data-align="start"
      data-slot="plan-item-trigger"
      {...rest}
    >
      {content}
      <CollapsibleIndicator className="size-3.5 text-muted-foreground" />
    </CollapsibleTrigger>
  );
};

export const PlanItemContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn(
        "ms-6 me-2 mt-0.5 min-w-0 rounded-md bg-muted/50 px-3 py-2",
        "text-muted-foreground text-sm",
        className
      )}
      data-slot="plan-item-content"
      {...rest}
    />
  );
};

export const PlanItemDetail = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("min-w-0 leading-6", className)}
      data-slot="plan-item-detail"
      {...rest}
    />
  );
};

export const PlanItemDetailFile = (
  props: React.ComponentProps<typeof Badge>
) => {
  const { variant = "outline", className, ...rest } = props;

  return (
    <Badge
      className={cn(
        "mx-1 w-fit max-w-full truncate align-baseline font-mono text-xs",
        className
      )}
      data-slot="plan-item-detail-file"
      size="sm"
      variant={variant}
      {...rest}
    />
  );
};

interface PlanProgressProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The number of completed plan items.
   */
  completed: number;
  /**
   * The total number of plan items.
   */
  total: number;
}

export const PlanProgress = (props: PlanProgressProps) => {
  const { className, completed, total, ...rest } = props;
  const value = total > 0 ? Math.min(Math.max(completed, 0), total) : 0;
  const percentage = total > 0 ? (value / total) * 100 : 0;
  const label = `${value} of ${total} items complete`;

  return (
    <ark.div
      className={cn("border-t px-3 py-2", className)}
      data-slot="plan-progress"
      {...rest}
    >
      <div className="flex items-center justify-between gap-3 text-muted-foreground text-xs tabular-nums">
        <span>{label}</span>
        <span aria-hidden="true">{Math.round(percentage)}%</span>
      </div>
      <div
        aria-label="Plan progress"
        aria-valuemax={total}
        aria-valuemin={0}
        aria-valuenow={value}
        aria-valuetext={label}
        className="mt-2 h-1 overflow-hidden rounded-full bg-muted"
        role="progressbar"
      >
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-200 motion-reduce:transition-none"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </ark.div>
  );
};

const statusLabels: Record<PlanItemStatus, string> = {
  completed: "Completed",
  error: "Failed",
  "in-progress": "In progress",
  pending: "Pending",
};

const PlanItemStatusIcon = ({ status }: { status: PlanItemStatus }) => {
  if (status === "in-progress") {
    return <Spinner aria-hidden="true" className="size-3.5 shrink-0" />;
  }

  let Icon = CircleIcon;
  if (status === "completed") {
    Icon = CircleCheckIcon;
  }
  if (status === "error") {
    Icon = CircleXIcon;
  }

  return (
    <Icon
      aria-hidden="true"
      className={cn(
        "size-3.5 shrink-0",
        status === "completed" && "text-success-foreground",
        status === "error" && "text-destructive-foreground",
        status === "pending" && "text-muted-foreground"
      )}
    />
  );
};
