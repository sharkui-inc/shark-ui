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
        "w-full min-w-0",
        "bg-card",
        "text-card-foreground",
        "rounded-xl border shadow-xs/4",
        "overflow-hidden",
        "flex flex-col",
        "[--code-surface-gutter-min:--spacing(11)] [--code-surface-header-height:--spacing(9)] [--code-surface-inline-padding:--spacing(3)] [--code-surface-line-height:--spacing(6)]",
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
  const { style, className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "[text-align:match-parent]",
        "min-w-0 flex-1",
        "text-muted-foreground truncate text-sm",
        className
      )}
      data-slot="diff-file"
      {...rest}
      dir="ltr"
      style={{ unicodeBidi: "isolate", ...style }}
    />
  );
};

export const DiffHeader = (props: DiffHeaderProps) => {
  const { title, className, children, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "min-h-(--code-surface-header-height) min-w-0",
        "flex items-center gap-2",
        "px-(--code-surface-inline-padding) py-1",
        "border-b",
        "text-muted-foreground text-sm",
        "[&>svg]:text-muted-foreground [&>svg]:order-first [&>svg]:shrink-0",
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
      className={cn(
        "shrink-0",
        "flex items-center gap-1",
        "ms-auto",
        className
      )}
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
  const { added = 0, removed = 0, className, ...rest } = props;

  return (
    <ark.span
      aria-label={`${added} added, ${removed} removed`}
      className={cn(
        "shrink-0",
        "inline-flex items-center gap-2",
        "ms-auto",
        "text-sm tabular-nums",
        className
      )}
      data-slot="diff-stats"
      {...rest}
      dir="ltr"
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
        "flex-1",
        "flex flex-col",
        "overflow-hidden",
        className
      )}
      data-slot="diff-content"
      {...rest}
      dir="ltr"
    >
      <ScrollArea className="flex-1" dir="ltr" overscrollContain>
        <div
          className={cn(
            "w-max min-w-full",
            "grid grid-cols-[minmax(var(--code-surface-gutter-min),max-content)_minmax(max-content,1fr)]",
            "py-3",
            "font-mono text-sm leading-(--code-surface-line-height)"
          )}
        >
          {children}
        </div>
      </ScrollArea>
    </ark.div>
  );
};

const diffLineVariants = tv({
  defaultVariants: {
    type: "context",
  },
  slots: {
    code: [
      "ps-(--code-surface-inline-padding) pe-(--code-surface-inline-padding)",
      "text-muted-foreground whitespace-pre",
    ],
    gutter: [
      "sticky start-0 z-1",
      "w-full min-w-0",
      "flex items-center",
      "bg-card",
      "before:pointer-events-none before:absolute before:inset-y-0 before:start-0 before:w-0.75 before:content-['']",
    ],
    number: [
      "w-full",
      "px-(--code-surface-inline-padding)",
      "text-muted-foreground text-end tabular-nums",
      "select-none",
    ],
    root: [
      "min-h-(--code-surface-line-height) w-full min-w-max",
      "col-span-2 grid grid-cols-subgrid items-stretch",
    ],
  },
  variants: {
    type: {
      add: {
        code: "text-foreground",
        gutter: [
          "bg-[color-mix(in_srgb,var(--color-success)_10%,var(--card))]",
          "before:bg-success",
        ],
        number: "text-success-foreground",
        root: "bg-[color-mix(in_srgb,var(--color-success)_10%,var(--card))]",
      },
      context: {
        gutter: "before:bg-transparent",
        root: "text-muted-foreground",
      },
      delete: {
        code: "text-foreground",
        gutter: [
          "bg-[color-mix(in_srgb,var(--color-destructive)_10%,var(--card))]",
          "before:bg-destructive",
        ],
        number: "text-destructive-foreground",
        root: "bg-[color-mix(in_srgb,var(--color-destructive)_10%,var(--card))]",
      },
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
  const { type = "context", line, className, children, ...rest } = props;

  const lineType: DiffLineType = type ?? "context";
  const { code, gutter, number, root } = diffLineVariants({ type: lineType });

  return (
    <ark.div
      aria-label={getDiffLineAriaLabel(lineType, line)}
      className={cn(root(), className)}
      data-slot="diff-line"
      data-type={lineType}
      role="group"
      {...rest}
    >
      <span className={gutter()}>
        <span className={number()} data-slot="diff-line-number">
          {line ?? ""}
        </span>
      </span>
      <code className={code()} data-slot="diff-line-code">
        {children}
      </code>
    </ark.div>
  );
};
