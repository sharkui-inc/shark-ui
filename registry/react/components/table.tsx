"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const tableVariants = tv({
  base: ["group/table", "w-full", "caption-bottom", "text-foreground text-sm"],
  defaultVariants: {
    size: "default",
  },
  variants: {
    size: {
      comfortable: "[--space:--spacing(4)]",
      compact: "[--space:--spacing(1)]",
      default: "[--space:--spacing(2)]",
    },
  },
});

interface TableProps
  extends React.ComponentProps<typeof ark.table>,
    VariantProps<typeof tableVariants> {
  /**
   * Whether the table rows are hoverable.
   *
   * @default true
   */
  isHoverable?: boolean;
  /**
   * The variant of the table.
   *
   * @default "plain"
   */
  variant?: "plain" | "striped";
}

export const Table = (props: TableProps) => {
  const {
    variant = "plain",
    size = "default",
    isHoverable = true,
    className,
    ...rest
  } = props;

  return (
    <div
      className={cn(
        "relative",
        "w-full",
        "overflow-auto",
        "scrollbar-thumb-foreground/24 scrollbar-thin scrollbar-track-transparent"
      )}
      data-slot="table-wrapper"
    >
      <ark.table
        className={cn(tableVariants({ size }), className)}
        data-hoverable={isHoverable}
        data-size={size}
        data-slot="table"
        data-variant={variant}
        {...rest}
      />
    </div>
  );
};

export const TableHeader = (props: React.ComponentProps<typeof ark.thead>) => {
  const { className, ...rest } = props;

  return (
    <ark.thead
      className={cn("[&_tr]:border-b", className)}
      data-slot="table-header"
      {...rest}
    />
  );
};

export interface TableBodyProps
  extends React.ComponentProps<typeof ark.tbody> {}

export const TableBody = (props: TableBodyProps) => {
  const { className, ...rest } = props;

  return (
    <ark.tbody
      className={cn("[&_tr:last-child]:border-0", className)}
      data-slot="table-body"
      {...rest}
    />
  );
};

export const TableFooter = (props: React.ComponentProps<typeof ark.tfoot>) => {
  const { className, ...rest } = props;

  return (
    <ark.tfoot
      className={cn(
        "border-t",
        "bg-muted/48",
        "font-medium",
        "last:[&>tr]:border-b-0",
        className
      )}
      data-slot="table-footer"
      {...rest}
    />
  );
};

export const TableRow = (props: React.ComponentProps<typeof ark.tr>) => {
  const { className, ...rest } = props;

  return (
    <ark.tr
      className={cn(
        "border-b",
        "data-[state=selected]:bg-muted",
        "group-data-[variant=striped]/table:even:bg-muted/32",
        "group-data-[hoverable=true]/table:[&:has(td):hover]:bg-muted/48",
        className
      )}
      data-slot="table-row"
      {...rest}
    />
  );
};

export const TableHead = (props: React.ComponentProps<typeof ark.th>) => {
  const { className, ...rest } = props;

  return (
    <ark.th
      className={cn(
        "align-middle",
        "px-2 py-(--space) has-[[role=checkbox]]:ps-2 has-[[role=checkbox]]:pe-0",
        "text-muted-foreground text-start font-medium has-[[role=checkbox]]:leading-none",
        "*:data-[slot=checkbox]:align-middle *:[[role=checkbox]]:align-middle",
        className
      )}
      data-slot="table-head"
      {...rest}
    />
  );
};

export const TableCell = (props: React.ComponentProps<typeof ark.td>) => {
  const { className, ...rest } = props;

  return (
    <ark.td
      className={cn(
        "align-middle",
        "px-2 py-(--space) has-[[role=checkbox]]:ps-2 has-[[role=checkbox]]:pe-0",
        "whitespace-nowrap has-[[role=checkbox]]:leading-none",
        "*:data-[slot=checkbox]:align-middle *:[[role=checkbox]]:align-middle",
        className
      )}
      data-slot="table-cell"
      {...rest}
    />
  );
};

export const TableCaption = (
  props: React.ComponentProps<typeof ark.caption>
) => {
  const { className, ...rest } = props;

  return (
    <ark.caption
      className={cn("mt-4", "text-muted-foreground text-sm", className)}
      data-slot="table-caption"
      {...rest}
    />
  );
};
