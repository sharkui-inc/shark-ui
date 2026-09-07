"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/registry/react/components/scroll-area";

type DiffLineType = "add" | "context" | "delete";

function getDiffLineAriaLabel(
  lineType: DiffLineType,
  line: number | null | undefined
): string | undefined {
  const hasLine = typeof line === "number";

  switch (lineType) {
    case "add":
      return hasLine ? `Line ${line}, added` : "Added line";
    case "delete":
      return hasLine ? `Line ${line}, deleted` : "Deleted line";
    case "context":
      return hasLine ? `Line ${line}` : undefined;
    default: {
      const _exhaustive: never = lineType;
      return _exhaustive;
    }
  }
}

export const Diff = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-full min-w-0 overflow-hidden rounded-xl border bg-card text-card-foreground",
        "flex flex-col",
        "[--code-surface-header-height:--spacing(9)] [--code-surface-inline-padding:--spacing(3)]",
        className
      )}
      data-slot="diff"
      {...rest}
    />
  );
};

interface DiffHeaderProps extends React.ComponentProps<typeof ark.div> {
  /**
   * The file path shown in the header.
   */
  title?: string;
}

export const DiffFile = (props: React.ComponentProps<typeof ark.span>) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "min-w-0 flex-1 truncate text-muted-foreground text-sm",
        className
      )}
      data-slot="diff-file"
      {...rest}
    />
  );
};

export const DiffHeader = (props: DiffHeaderProps) => {
  const { title, className, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex min-h-(--code-surface-header-height) min-w-0 items-center gap-2 px-(--code-surface-inline-padding) py-1",
        "border-b",
        "text-muted-foreground text-sm",
        "[&>svg]:order-first [&>svg]:shrink-0 [&>svg]:text-muted-foreground",
        "[&>svg:not([class*='size-'])]:size-3.5",
        className
      )}
      data-slot="diff-header"
      {...rest}
    >
      {!!title && <DiffFile>{title}</DiffFile>}
      {!title && typeof children === "string" ? (
        <DiffFile>{children}</DiffFile>
      ) : (
        children
      )}
    </ark.div>
  );
};

export const DiffAction = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn("ms-auto flex shrink-0 items-center gap-1", className)}
      data-slot="diff-action"
      {...rest}
    />
  );
};

interface DiffStatsProps extends React.ComponentProps<typeof ark.span> {
  /**
   * The number of added lines.
   */
  added?: number;
  /**
   * The number of removed lines.
   */
  removed?: number;
}

export const DiffStats = (props: DiffStatsProps) => {
  const { className, added = 0, removed = 0, ...rest } = props;

  return (
    <ark.span
      aria-label={`${added} added, ${removed} removed`}
      className={cn(
        "inline-flex shrink-0 items-center gap-2",
        "ms-auto",
        "text-sm tabular-nums",
        className
      )}
      data-slot="diff-stats"
      {...rest}
    >
      <span className="text-success-foreground">+{added}</span>
      <span className="text-destructive-foreground">-{removed}</span>
    </ark.span>
  );
};

export const DiffContent = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-h-0 w-full min-w-0",
        "flex flex-1 flex-col",
        "overflow-hidden",
        className
      )}
      data-slot="diff-content"
      dir="ltr"
      {...rest}
    >
      <ScrollArea className="min-h-0 w-full flex-1">
        <div className="w-max min-w-full py-3 font-mono text-sm leading-6">
          {children}
        </div>
      </ScrollArea>
    </ark.div>
  );
};

const diffLineVariants = tv({
  base: ["min-h-6 w-full min-w-max", "flex items-stretch"],
  defaultVariants: {
    type: "context",
  },
  variants: {
    type: {
      add: "bg-[color-mix(in_srgb,var(--color-success)_10%,var(--card))]",
      context: "text-muted-foreground",
      delete:
        "bg-[color-mix(in_srgb,var(--color-destructive)_10%,var(--card))]",
    },
  },
});

const diffGutterVariants = tv({
  base: [
    "sticky left-0 z-1",
    "flex w-11 shrink-0 items-center",
    "bg-card",
    "before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:w-[3px] before:content-['']",
  ],
  defaultVariants: {
    type: "context",
  },
  variants: {
    type: {
      add: [
        "bg-[color-mix(in_srgb,var(--color-success)_10%,var(--card))]",
        "before:bg-success",
      ],
      context: "before:bg-transparent",
      delete: [
        "bg-[color-mix(in_srgb,var(--color-destructive)_10%,var(--card))]",
        "before:bg-destructive",
      ],
    },
  },
});

interface DiffLineProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof diffLineVariants> {
  /**
   * The line number to display.
   */
  line?: number | null;
}

export const DiffLine = (props: DiffLineProps) => {
  const { className, type = "context", children, line, ...rest } = props;

  const lineType: DiffLineType = type ?? "context";

  return (
    <ark.div
      aria-label={getDiffLineAriaLabel(lineType, line)}
      className={cn(diffLineVariants({ type: lineType }), className)}
      data-slot="diff-line"
      data-type={lineType}
      role="group"
      {...rest}
    >
      <span className={diffGutterVariants({ type: lineType })}>
        <span
          className={cn(
            "w-full pe-3",
            "select-none text-end text-muted-foreground tabular-nums",
            lineType === "add" && "text-success-foreground",
            lineType === "delete" && "text-destructive-foreground"
          )}
          data-slot="diff-line-number"
        >
          {line ?? ""}
        </span>
      </span>
      <code
        className={cn(
          "ps-(--code-surface-inline-padding) pe-(--code-surface-inline-padding)",
          "whitespace-pre text-muted-foreground leading-6",
          (lineType === "add" || lineType === "delete") && "text-foreground"
        )}
        data-slot="diff-line-code"
      >
        {children}
      </code>
    </ark.div>
  );
};
