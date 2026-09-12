"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import {
  CircleCheckIcon,
  CircleIcon,
  CircleXIcon,
  ListChecksIcon,
} from "lucide-react";
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
export type PlanStatus = PlanItemStatus;

interface PlanContextValue {
  status: PlanStatus;
}

const [PlanProvider, usePlan] = createContext<PlanContextValue>({
  name: "PlanContext",
  providerName: "Plan",
});

interface PlanItemContextValue {
  collapsible: boolean;
  status: PlanItemStatus;
}

const [PlanItemProvider, usePlanItem] = createContext<PlanItemContextValue>({
  name: "PlanItemContext",
  providerName: "PlanItem",
});

interface PlanProps extends React.ComponentProps<typeof Collapsible> {
  /**
   * The current state of the agent plan.
   */
  status?: PlanStatus;
}

export const Plan = (props: PlanProps) => {
  const {
    children,
    className,
    defaultOpen = true,
    status = "pending",
    ...rest
  } = props;

  return (
    <PlanProvider value={{ status }}>
      <Collapsible
        className={cn(
          "w-full min-w-0 overflow-hidden rounded-xl border bg-card text-card-foreground",
          className
        )}
        data-slot="plan"
        data-status={status}
        defaultOpen={defaultOpen}
        {...rest}
      >
        {children}
      </Collapsible>
    </PlanProvider>
  );
};

interface PlanHeaderProps
  extends React.ComponentProps<typeof CollapsibleTrigger> {
  /**
   * Supporting context for the plan.
   */
  description?: string;
  /**
   * The title of the plan.
   */
  title?: string;
}

export const PlanHeader = (props: PlanHeaderProps) => {
  const { status } = usePlan();
  const { title, className, children, description, ...rest } = props;

  return (
    <CollapsibleTrigger
      className={cn(
        "flex w-full min-w-0 items-center gap-3 px-3 py-2 text-start",
        description ? "min-h-14" : "min-h-10",
        "hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "transition-colors duration-150 motion-reduce:transition-none",
        className
      )}
      data-align="start"
      data-slot="plan-header"
      {...rest}
    >
      <ListChecksIcon
        aria-hidden="true"
        className="h-lh w-4 shrink-0 self-start text-muted-foreground"
      />
      <span
        className={cn("flex min-w-0 flex-1 flex-col", description && "gap-0.5")}
      >
        {title ? <PlanTitle>{title}</PlanTitle> : (children ?? null)}
        {description ? (
          <span className="text-muted-foreground text-xs">{description}</span>
        ) : null}
      </span>
      <PlanHeaderStatus status={status} />
      <CollapsibleIndicator className="ms-auto size-3.5 shrink-0 text-muted-foreground" />
    </CollapsibleTrigger>
  );
};

export const PlanTitle = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("min-w-0 truncate font-medium text-sm", className)}
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
      className={cn("flex flex-col gap-0.5 border-t p-2", className)}
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
      <PlanStatusIcon status={status} />
      <span
        className={cn(
          "min-w-0 truncate",
          status === "completed" && "text-muted-foreground"
        )}
      >
        <span className="sr-only">{statusLabels[status]}: </span>
        {title}
      </span>
    </>
  );

  const sharedClassName = cn(
    "grid min-h-9 w-full min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-lg px-2 py-1.5 text-start",
    collapsible &&
      "cursor-pointer hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    status === "in-progress" && "bg-muted/70",
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
        "ms-7 me-2 flex min-w-0 flex-col gap-1 border-s px-3 pt-1 pb-2",
        "text-muted-foreground text-sm leading-6",
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

const statusLabels: Record<PlanItemStatus, string> = {
  completed: "Completed",
  error: "Failed",
  "in-progress": "In progress",
  pending: "Pending",
};

const planStatusDescriptions: Record<PlanStatus, string> = {
  completed: "Plan completed",
  error: "Plan needs attention",
  "in-progress": "Plan in progress",
  pending: "Plan ready",
};

const PlanHeaderStatus = ({ status }: { status: PlanStatus }) => (
  <span
    aria-live="polite"
    className={cn(
      "flex shrink-0 items-center text-muted-foreground",
      status === "in-progress" &&
        "text-foreground transition-[opacity,transform] duration-150 ease-out group-data-[state=open]/collapsible:pointer-events-none group-data-[state=open]/collapsible:scale-75 group-data-[state=open]/collapsible:opacity-0 motion-reduce:transition-none",
      status === "completed" && "text-success-foreground",
      status === "error" && "text-destructive-foreground"
    )}
    data-slot="plan-header-status"
    data-status={status}
  >
    <PlanStatusIcon className="size-4" status={status} />
    <span className="sr-only">{planStatusDescriptions[status]}</span>
  </span>
);

const PlanStatusIcon = ({
  className,
  status,
}: {
  className?: string;
  status: PlanItemStatus;
}) => {
  if (status === "in-progress") {
    return (
      <Spinner
        aria-hidden="true"
        className={cn("size-3.5 shrink-0", className)}
      />
    );
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
        status === "pending" && "text-muted-foreground",
        className
      )}
    />
  );
};
