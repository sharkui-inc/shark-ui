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

const [PlanItemStatusProvider, usePlanItem] = createContext<PlanItemStatus>({
  name: "PlanItemStatusContext",
  providerName: "PlanItem",
});

interface PlanProps extends React.ComponentProps<typeof Collapsible> {
  /**
   * The number of completed plan items.
   */
  completed?: number;
  /**
   * The total number of plan items.
   */
  total?: number;
}

export const Plan = (props: PlanProps) => {
  const {
    children,
    className,
    completed,
    defaultOpen = true,
    total,
    ...rest
  } = props;

  const hasProgress = completed !== undefined && total !== undefined;

  return (
    <Collapsible
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-xl border bg-card text-card-foreground",
        className
      )}
      data-slot="plan"
      defaultOpen={defaultOpen}
      {...rest}
    >
      {children}
      {hasProgress ? (
        <span
          aria-live="polite"
          className="border-t px-3 py-1 text-muted-foreground text-sm tabular-nums"
          data-slot="plan-progress"
        >
          {completed} of {total} items complete
        </span>
      ) : null}
    </Collapsible>
  );
};

interface PlanHeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The title of the plan.
   */
  title?: string;
}

export const PlanHeader = (props: PlanHeaderProps) => {
  const { title, className, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex min-h-9 min-w-0 items-center gap-2 px-3 py-1",
        className
      )}
      data-slot="plan-header"
      {...rest}
    >
      {!!title && <PlanTitle>{title}</PlanTitle>}
      {!title && typeof children === "string" ? (
        <PlanTitle>{children}</PlanTitle>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const PlanTitle = (props: React.ComponentProps<typeof ark.p>) => {
  const { className, ...rest } = props;

  return (
    <ark.p
      className={cn(
        "min-w-0 flex-1 truncate text-muted-foreground text-sm",
        className
      )}
      data-slot="plan-title"
      {...rest}
    />
  );
};

export const PlanAction = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("ms-auto flex shrink-0 items-center gap-1", className)}
      data-slot="plan-action"
      {...rest}
    />
  );
};

export const PlanTrigger = (
  props: React.ComponentProps<typeof CollapsibleTrigger>
) => {
  const { className, children, ...rest } = props;

  return (
    <CollapsibleTrigger
      className={cn(
        "rounded-lg p-1 text-muted-foreground [&_svg:not([class*='size-'])]:size-3.5",
        className
      )}
      data-slot="plan-trigger"
      {...rest}
    >
      {children ?? <CollapsibleIndicator className="size-3.5" />}
    </CollapsibleTrigger>
  );
};

export const PlanContent = (
  props: React.ComponentProps<typeof CollapsibleContent>
) => {
  const { className, ...rest } = props;

  return (
    <CollapsibleContent
      className={cn("flex flex-col gap-0.5 border-t p-1", className)}
      data-slot="plan-content"
      {...rest}
    />
  );
};

interface PlanItemProps extends React.ComponentProps<typeof Collapsible> {
  /**
   * The status of the plan item.
   */
  status?: PlanItemStatus;
}

export const PlanItem = (props: PlanItemProps) => {
  const { className, defaultOpen, status = "pending", ...rest } = props;

  return (
    <PlanItemStatusProvider value={status}>
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
    </PlanItemStatusProvider>
  );
};

interface PlanItemTriggerProps
  extends React.ComponentProps<typeof CollapsibleTrigger> {
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
  const inheritedStatus = usePlanItem();
  const {
    status = inheritedStatus ?? "pending",
    title,
    className,
    children,
    ...rest
  } = props;

  return (
    <CollapsibleTrigger
      className={cn(
        "w-full min-w-0",
        "flex min-h-8 items-center gap-2",
        "px-2 py-1",
        "text-start",
        "rounded-lg",
        "transition-colors",
        "hover:bg-muted",
        "[&_svg:not([class*='size-'])]:size-3.5 [&_svg]:shrink-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      data-slot="plan-item-trigger"
      {...rest}
    >
      {children ?? (
        <>
          <PlanItemStatusIcon status={status} />
          <span
            className={cn(
              "min-w-0 flex-1 truncate",
              status === "completed" && "text-muted-foreground",
              status === "error" && "text-destructive-foreground"
            )}
          >
            <span className="sr-only">{statusLabels[status]}: </span>
            {title}
          </span>
          <CollapsibleIndicator className="size-3.5 text-muted-foreground" />
        </>
      )}
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
        "min-w-0",
        "flex flex-col gap-1",
        "ms-4 ps-4 pt-1",
        "border-s",
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
      className={cn(
        "min-w-0",
        "px-2 py-1",
        "text-muted-foreground text-sm leading-6",
        "rounded-md",
        className
      )}
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
        "w-fit max-w-full",
        "truncate",
        "align-baseline",
        "mx-1",
        "font-mono text-xs",
        className
      )}
      data-slot="plan-item-detail-file"
      size="sm"
      variant={variant}
      {...rest}
    />
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
