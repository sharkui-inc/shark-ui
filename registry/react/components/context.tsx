"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import { XIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { CircularProgress } from "@/registry/react/components/circular-progress";
import { FormatNumber } from "@/registry/react/components/format";
import {
  Popover,
  PopoverBody,
  PopoverClose,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/react/components/popover";
import { Progress } from "@/registry/react/components/progress";

interface ContextProps extends React.ComponentProps<typeof Popover> {
  costLabel?: string;
  maxTokens: number;
  usedTokens: number;
}

type ContextValue = Pick<
  ContextProps,
  "costLabel" | "maxTokens" | "usedTokens"
> & {
  usedPercent: number;
};

const [ContextValueProvider, useContextValue] = createContext<ContextValue>({
  name: "ContextValueContext",
  providerName: "Context",
});

export const Context = (props: ContextProps) => {
  const {
    costLabel,
    maxTokens,
    usedTokens,
    modal = false,
    positioning,
    ...rest
  } = props;

  const usedPercent = maxTokens > 0 ? Math.min(1, usedTokens / maxTokens) : 0;

  return (
    <ContextValueProvider
      value={{ costLabel, maxTokens, usedPercent, usedTokens }}
    >
      <Popover
        data-slot="context"
        modal={modal}
        positioning={{
          flip: ["top", "bottom", "left", "right"],
          placement: "top",
          ...positioning,
        }}
        {...rest}
      />
    </ContextValueProvider>
  );
};

interface ContextIconProps {
  className?: string;
}

export const ContextIcon = (props: ContextIconProps) => {
  const { className } = props;

  const { usedPercent } = useContextValue();

  return (
    <CircularProgress
      aria-hidden="true"
      className={cn(
        "size-5 shrink-0",
        "**:data-[slot=circular-progress-track]:stroke-foreground/24",
        className
      )}
      size={20}
      thickness={3}
      value={usedPercent * 100}
    />
  );
};

export const ContextTriggerLabel = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, children, ...rest } = props;

  const { usedPercent } = useContextValue();

  return (
    <ark.span
      className={cn("inline-flex items-center gap-1.5", className)}
      data-slot="context-trigger-label"
      {...rest}
    >
      {children ?? (
        <>
          <span>
            <span className="sr-only">Context used </span>
            <FormatNumber
              maximumFractionDigits={1}
              style="percent"
              value={usedPercent}
            />
          </span>
          <ContextIcon />
        </>
      )}
    </ark.span>
  );
};

export const ContextTrigger = (
  props: React.ComponentProps<typeof PopoverTrigger>
) => {
  const { children, ...rest } = props;

  return (
    <PopoverTrigger data-slot="context-trigger" {...rest} asChild>
      {children}
    </PopoverTrigger>
  );
};

export const ContextContent = (
  props: React.ComponentProps<typeof PopoverContent>
) => {
  const { className, ...rest } = props;

  return (
    <PopoverContent
      className={cn(
        "[--space:--spacing(3)]",
        "w-72",
        "gap-0",
        "p-0",
        className
      )}
      data-slot="context-content"
      {...rest}
    />
  );
};

interface ContextHeaderProps
  extends Omit<React.ComponentProps<typeof PopoverHeader>, "title"> {
  /**
   * The title of the context panel.
   */
  title?: string;
}

export const ContextHeader = (props: ContextHeaderProps) => {
  const { title, className, children, ...rest } = props;

  return (
    <PopoverHeader
      className={cn("flex flex-col gap-2", "border-b", "pt-2", className)}
      data-slot="context-header"
      {...rest}
    >
      {!!title && <ContextTitle>{title}</ContextTitle>}
      {!title && typeof children === "string" ? (
        <ContextTitle>{children}</ContextTitle>
      ) : (
        children
      )}
    </PopoverHeader>
  );
};

export const ContextClose = (props: React.ComponentProps<typeof Button>) => {
  const { className, children, ...rest } = props;

  return (
    <PopoverClose asChild>
      <Button
        aria-label="Close"
        className={cn(
          "text-muted-foreground",
          "hover:text-foreground",
          className
        )}
        data-slot="context-close"
        size="icon-xs"
        variant="ghost"
        {...rest}
      >
        {children ?? <XIcon aria-hidden="true" />}
      </Button>
    </PopoverClose>
  );
};

interface ContextTitleProps extends React.ComponentProps<typeof PopoverTitle> {
  /**
   * Show a close button beside the title.
   *
   * @default false
   */
  showCloseButton?: boolean;
}

export const ContextTitle = (props: ContextTitleProps) => {
  const { showCloseButton = false, className, ...rest } = props;

  return (
    <ark.div
      className="flex items-center justify-between gap-2"
      data-slot="context-title"
    >
      <PopoverTitle
        className={cn("text-muted-foreground text-xs font-normal", className)}
        {...rest}
      />

      {!!showCloseButton && <ContextClose />}
    </ark.div>
  );
};

export interface ContextSegment {
  /**
   * Segment fill color. Prefer theme chart tokens such as `var(--chart-1)`.
   */
  color: string;
  /**
   * The category label for the segment.
   */
  title: string;
  /**
   * The number of tokens for the segment.
   */
  value: number;
}

interface ContextMeterProps extends React.ComponentProps<typeof ark.div> {
  /**
   * Optional category breakdown. When set, the default meter renders a
   * segmented track and legend instead of the mono progress bar.
   */
  segments?: ContextSegment[];
}

type ContextMeterContextValue = Pick<ContextMeterProps, "segments">;

const [ContextMeterValueProvider, useContextMeterValue] =
  createContext<ContextMeterContextValue>({
    name: "ContextMeterValueContext",
    providerName: "ContextMeter",
  });

export interface ContextUsageRowProps
  extends React.ComponentProps<typeof ark.div> {
  /**
   * Optional swatch color. Prefer theme chart tokens such as `var(--chart-1)`.
   */
  color?: string;
  /**
   * The title of the usage row.
   */
  title: string;
  /**
   * The number of tokens for the row.
   */
  value: number;
}

export const ContextUsageRow = (props: ContextUsageRowProps) => {
  const { title, value, color, className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex items-center justify-between gap-2",
        "text-xs",
        className
      )}
      data-slot="context-usage-row"
      {...rest}
    >
      <span className="flex min-w-0 items-center gap-1.5">
        {!!color && (
          <span
            aria-hidden="true"
            className="size-2.5 shrink-0 rounded-sm"
            style={{ backgroundColor: color }}
          />
        )}
        <span className="text-foreground truncate">{title}</span>
      </span>
      <span className="text-muted-foreground shrink-0 tabular-nums">
        <FormatNumber notation="compact" value={value} />
      </span>
    </ark.div>
  );
};

export const ContextMeterSummary = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  const { maxTokens, usedPercent, usedTokens } = useContextValue();

  return (
    <ark.div
      className={cn(
        "flex items-center justify-between gap-2",
        "text-xs",
        className
      )}
      data-slot="context-meter-summary"
      {...rest}
    >
      <span className="text-foreground font-medium">
        <FormatNumber
          maximumFractionDigits={1}
          style="percent"
          value={usedPercent}
        />
      </span>
      <span className="text-muted-foreground tabular-nums">
        <FormatNumber notation="compact" value={usedTokens} /> /{" "}
        <FormatNumber notation="compact" value={maxTokens} />
      </span>
    </ark.div>
  );
};

export const ContextMeterBar = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  const { maxTokens, usedPercent, usedTokens } = useContextValue();
  const { segments } = useContextMeterValue();

  const activeSegments = segments && segments.length > 0 ? segments : undefined;

  const segmentSummary = activeSegments
    ?.map((segment) => `${segment.title} ${segment.value}`)
    .join(", ");

  const segmentTotal = activeSegments
    ? activeSegments.reduce(
        (total, segment) => total + Math.max(0, segment.value),
        0
      )
    : 0;

  const remainingTokens = Math.max(0, maxTokens - usedTokens);

  if (!activeSegments) {
    return (
      <ark.div
        className={cn("w-full", className)}
        data-slot="context-meter-bar"
        {...rest}
      >
        <Progress value={usedPercent * 100} />
      </ark.div>
    );
  }

  return (
    <ark.div
      aria-label={`Context used ${Math.round(usedPercent * 1000) / 10} percent. ${segmentSummary}`}
      className={cn(
        "flex w-full items-center gap-0.5",
        "h-2",
        "*:rounded-full",
        className
      )}
      data-slot="context-meter-bar"
      role="img"
      {...rest}
    >
      {activeSegments.map((segment) => {
        if (segment.value <= 0 || segmentTotal <= 0 || usedTokens <= 0) {
          return null;
        }

        const flexValue =
          (Math.max(0, segment.value) / segmentTotal) * usedTokens;

        return (
          <div
            className="h-full min-w-0"
            key={segment.title}
            style={{
              backgroundColor: segment.color,
              flex: `${flexValue} 0 0`,
            }}
          />
        );
      })}
      {remainingTokens > 0 && (
        <div
          aria-hidden="true"
          className="bg-input h-full min-w-0"
          style={{ flex: `${remainingTokens} 0 0` }}
        />
      )}
    </ark.div>
  );
};

export const ContextMeterLegend = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  const { segments } = useContextMeterValue();

  if (!segments || segments.length === 0) {
    return null;
  }

  return (
    <ark.div
      className={cn("mt-1.5 flex flex-col gap-2", className)}
      data-slot="context-meter-legend"
      {...rest}
    >
      {segments.map((segment) => (
        <ContextUsageRow
          color={segment.color}
          key={segment.title}
          title={segment.title}
          value={segment.value}
        />
      ))}
    </ark.div>
  );
};

export const ContextMeter = (props: ContextMeterProps) => {
  const { segments, className, children, ...rest } = props;

  const activeSegments = segments && segments.length > 0 ? segments : undefined;

  return (
    <ContextMeterValueProvider value={{ segments: activeSegments }}>
      <ark.div
        className={cn("flex flex-col gap-2", className)}
        data-slot="context-meter"
        {...rest}
      >
        {children ?? (
          <>
            <ContextMeterSummary />
            <ContextMeterBar />
            {activeSegments ? <ContextMeterLegend /> : null}
          </>
        )}
      </ark.div>
    </ContextMeterValueProvider>
  );
};

export const ContextBody = (
  props: React.ComponentProps<typeof PopoverBody>
) => {
  const { className, ...rest } = props;

  return (
    <PopoverBody
      className={cn("flex flex-col gap-2", className)}
      data-slot="context-body"
      {...rest}
    />
  );
};

interface ContextFooterProps
  extends Omit<React.ComponentProps<typeof PopoverFooter>, "title"> {
  /**
   * The label for the total cost row.
   *
   * @default "Total cost"
   */
  title?: string;
}

export const ContextFooter = (props: ContextFooterProps) => {
  const { title = "Total cost", className, children, ...rest } = props;

  const { costLabel } = useContextValue();

  return (
    <PopoverFooter
      className={cn(
        "flex-row items-center justify-between sm:justify-between",
        "py-(--space)",
        "text-xs",
        className
      )}
      data-slot="context-footer"
      {...rest}
    >
      {children ?? (
        <>
          <span className="text-foreground">{title}</span>
          <span className="text-muted-foreground font-medium tabular-nums">
            {costLabel ?? "-"}
          </span>
        </>
      )}
    </PopoverFooter>
  );
};

export { useContextValue };
