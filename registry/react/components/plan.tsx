"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import {
  CircleCheckIcon,
  CircleIcon,
  CircleXIcon,
  ListChecksIcon,
} from "lucide-react";
import React from "react";
import { tv } from "tailwind-variants";
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

const planHeaderVariants = tv({
  base: [
    "w-full min-w-0",
    "flex items-center gap-3",
    "px-3 py-2",
    "text-start",
    "border border-transparent",
    "hover:bg-muted/48",
    "focus-visible:border-ring/64 focus-visible:ring-ring/24 focus-visible:ring-2 focus-visible:outline-hidden",
    "transition-colors duration-150",
    "motion-reduce:transition-none",
  ],
  defaultVariants: {
    description: false,
  },
  variants: {
    description: {
      false: "min-h-10",
      true: "min-h-14",
    },
  },
});

const planHeaderTitleStackVariants = tv({
  base: ["min-w-0 flex-1", "flex flex-col"],
  defaultVariants: {
    description: false,
  },
  variants: {
    description: {
      true: "gap-0.5",
    },
  },
});

const planItemTriggerVariants = tv({
  base: [
    "min-h-9 w-full min-w-0",
    "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2",
    "px-2 py-1.5",
    "text-start",
    "rounded-lg",
    "transition-colors duration-150",
    "motion-reduce:transition-none",
    "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  ],
  defaultVariants: {
    collapsible: false,
    status: "pending",
  },
  variants: {
    collapsible: {
      false: "",
      true: [
        "border border-transparent",
        "cursor-pointer",
        "hover:bg-muted",
        "focus-visible:border-ring/64 focus-visible:ring-ring/24 focus-visible:ring-2 focus-visible:outline-hidden",
      ],
    },
    status: {
      completed: "",
      error: "",
      "in-progress": "bg-muted/64",
      pending: "",
    },
  },
});

const planItemTitleVariants = tv({
  base: ["min-w-0", "truncate"],
  defaultVariants: {
    status: "pending",
  },
  variants: {
    status: {
      completed: "text-muted-foreground",
      error: "",
      "in-progress": "",
      pending: "",
    },
  },
});

const planHeaderStatusVariants = tv({
  base: ["shrink-0", "flex items-center", "text-muted-foreground"],
  defaultVariants: {
    status: "pending",
  },
  variants: {
    status: {
      completed: "text-success-foreground",
      error: "text-destructive-foreground",
      "in-progress": [
        "text-foreground",
        "transition-[opacity,scale] duration-150 ease-out",
        "group-data-[state=open]/collapsible:pointer-events-none group-data-[state=open]/collapsible:scale-75 group-data-[state=open]/collapsible:opacity-0",
        "motion-reduce:transition-none",
      ],
      pending: "",
    },
  },
});

const planStatusIconVariants = tv({
  base: "size-3.5 shrink-0",
  defaultVariants: {
    status: "pending",
  },
  variants: {
    status: {
      completed: "text-success-foreground",
      error: "text-destructive-foreground",
      "in-progress": "",
      pending: "text-muted-foreground",
    },
  },
});

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
          "w-full min-w-0",
          "bg-card",
          "text-card-foreground",
          "rounded-xl border",
          "overflow-hidden",
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
  const { title, className, children, description, ...rest } = props;

  const { status } = usePlan();
  const hasDescription = !!description;

  return (
    <CollapsibleTrigger
      className={cn(
        planHeaderVariants({ description: hasDescription }),
        className
      )}
      data-align="start"
      data-slot="plan-header"
      {...rest}
    >
      <ListChecksIcon
        aria-hidden
        className={cn(
          "h-lh w-4 shrink-0",
          "self-start",
          "text-muted-foreground"
        )}
      />
      <span
        className={planHeaderTitleStackVariants({
          description: hasDescription,
        })}
      >
        {title ? <PlanTitle>{title}</PlanTitle> : (children ?? null)}
        {description ? (
          <span className="text-muted-foreground text-xs">{description}</span>
        ) : null}
      </span>
      <PlanHeaderStatus status={status} />
      <CollapsibleIndicator
        className={cn("size-3.5 shrink-0", "ms-auto", "text-muted-foreground")}
      />
    </CollapsibleTrigger>
  );
};

export const PlanTitle = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("min-w-0", "truncate text-sm font-medium", className)}
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
      className={cn("flex flex-col gap-0.5", "p-2", "border-t", className)}
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
    onOpenChange,
    open,
    status = "pending",
    ...rest
  } = props;
  const isOpenControlled = open !== undefined;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(
    () => defaultOpen ?? status === "in-progress"
  );
  const previousStatus = React.useRef(status);

  React.useEffect(() => {
    if (previousStatus.current === status) {
      return;
    }

    const was = previousStatus.current;
    previousStatus.current = status;

    if (
      !isOpenControlled &&
      status === "in-progress" &&
      was !== "in-progress"
    ) {
      setUncontrolledOpen(true);
    }
  }, [isOpenControlled, status]);

  const handleOpenChange = (details: { open: boolean }) => {
    if (!isOpenControlled) {
      setUncontrolledOpen(details.open);
    }

    onOpenChange?.(details);
  };

  return (
    <PlanItemProvider value={{ collapsible, status }}>
      <Collapsible
        className={cn(
          "w-full min-w-0",
          "text-sm",
          "*:data-[slot=collapsible-content]:w-full",
          "*:data-[slot=collapsible-content]:min-w-0",
          className
        )}
        data-slot="plan-item"
        data-status={status}
        onOpenChange={handleOpenChange}
        open={isOpenControlled ? open : uncontrolledOpen}
        {...rest}
      />
    </PlanItemProvider>
  );
};

interface PlanItemTriggerProps
  extends Omit<
    React.ComponentProps<typeof CollapsibleTrigger>,
    "ref" | "title"
  > {
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
      <span className={planItemTitleVariants({ status })}>
        <span className="sr-only">{statusLabels[status]}: </span>
        {title}
      </span>
    </>
  );

  if (!collapsible) {
    return (
      <ark.button
        className={cn(
          planItemTriggerVariants({ collapsible: false, status }),
          className
        )}
        data-slot="plan-item-trigger"
        type="button"
        {...rest}
        disabled
      >
        {content}
      </ark.button>
    );
  }

  return (
    <CollapsibleTrigger
      className={cn(
        planItemTriggerVariants({ collapsible: true, status }),
        className
      )}
      data-align="start"
      data-slot="plan-item-trigger"
      {...rest}
    >
      {content}
      <CollapsibleIndicator
        className={cn("size-3.5", "text-muted-foreground")}
      />
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
        "ms-7 me-2 px-3 pt-1 pb-2",
        "border-s",
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
      className={cn("min-w-0", "leading-6", className)}
      data-slot="plan-item-detail"
      {...rest}
    />
  );
};

export const PlanItemDetailFile = (
  props: React.ComponentProps<typeof Badge>
) => {
  const { variant = "outline", className, style, ...rest } = props;

  return (
    <Badge
      className={cn(
        "w-fit max-w-full",
        "align-baseline",
        "mx-1",
        "truncate font-mono text-xs",
        className
      )}
      data-slot="plan-item-detail-file"
      {...rest}
      dir="ltr"
      size="sm"
      style={{ unicodeBidi: "isolate", ...style }}
      variant={variant}
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

const PlanHeaderStatus = (props: { status: PlanStatus }) => {
  const { status } = props;

  return (
    <span
      aria-live="polite"
      className={planHeaderStatusVariants({ status })}
      data-slot="plan-header-status"
      data-status={status}
    >
      <PlanStatusIcon className="size-4" status={status} />
      <span className="sr-only">{planStatusDescriptions[status]}</span>
    </span>
  );
};

const PlanStatusIcon = (props: {
  className?: string;
  status: PlanItemStatus;
}) => {
  const { className, status } = props;
  if (status === "in-progress") {
    return (
      <Spinner
        aria-hidden
        className={cn(planStatusIconVariants({ status }), className)}
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
      aria-hidden
      className={cn(planStatusIconVariants({ status }), className)}
    />
  );
};
