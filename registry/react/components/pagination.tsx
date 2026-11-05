"use client";

import {
  Pagination as ArkPagination,
  usePaginationContext as useArkPaginationContext,
} from "@ark-ui/react/pagination";
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisIcon,
} from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import {
  type ButtonProps,
  buttonVariants,
} from "@/registry/react/components/button";
import { FormatNumber } from "@/registry/react/components/format";

export const usePaginationContext = useArkPaginationContext;

interface PaginationProps
  extends React.ComponentProps<typeof ArkPagination.Root> {}

export const Pagination = (props: PaginationProps) => {
  const { type = "button", className, ...rest } = props;

  return (
    <ArkPagination.Root
      className={cn(
        "mx-auto",
        "w-full",
        "flex justify-center gap-1",
        className
      )}
      data-slot="pagination"
      type={type}
      {...rest}
    />
  );
};

type PaginationTriggerStyleProps = Pick<
  ButtonProps,
  "className" | "size" | "variant"
>;

interface PaginationTriggerProps extends PaginationTriggerStyleProps {
  /**
   * Whether to show the label.
   */
  withLabel?: boolean;
}

interface PaginationFirstProps
  extends Omit<
      React.ComponentProps<typeof ArkPagination.FirstTrigger>,
      "asChild" | keyof PaginationTriggerStyleProps
    >,
    PaginationTriggerProps {}

export const PaginationFirst = (props: PaginationFirstProps) => {
  const {
    withLabel = true,
    variant = "ghost",
    size,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkPagination.FirstTrigger
      className={cn(buttonVariants({ size, variant }), className)}
      data-slot="pagination-first"
      {...rest}
    >
      <ChevronFirstIcon aria-hidden="true" className="rtl:rotate-180" />
      <span className={cn({ "sr-only": !withLabel })}>
        {children ?? "First"}
      </span>
    </ArkPagination.FirstTrigger>
  );
};

interface PaginationPreviousProps
  extends Omit<
      React.ComponentProps<typeof ArkPagination.PrevTrigger>,
      "asChild" | keyof PaginationTriggerStyleProps
    >,
    PaginationTriggerProps {}

export const PaginationPrevious = (props: PaginationPreviousProps) => {
  const {
    withLabel = true,
    variant = "ghost",
    size,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkPagination.PrevTrigger
      className={cn(buttonVariants({ size, variant }), className)}
      data-slot="pagination-previous"
      {...rest}
    >
      <ChevronLeftIcon aria-hidden="true" className="rtl:rotate-180" />
      <span className={cn({ "sr-only": !withLabel })}>
        {children ?? "Previous"}
      </span>
    </ArkPagination.PrevTrigger>
  );
};

interface PaginationNextProps
  extends Omit<
      React.ComponentProps<typeof ArkPagination.NextTrigger>,
      "asChild" | keyof PaginationTriggerStyleProps
    >,
    PaginationTriggerProps {}

export const PaginationNext = (props: PaginationNextProps) => {
  const {
    withLabel = true,
    variant = "ghost",
    size,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkPagination.NextTrigger
      className={cn(buttonVariants({ size, variant }), className)}
      data-slot="pagination-next"
      {...rest}
    >
      <span className={cn({ "sr-only": !withLabel })}>
        {children ?? "Next"}
      </span>
      <ChevronRightIcon aria-hidden="true" className="rtl:rotate-180" />
    </ArkPagination.NextTrigger>
  );
};

interface PaginationLastProps
  extends Omit<
      React.ComponentProps<typeof ArkPagination.LastTrigger>,
      "asChild" | keyof PaginationTriggerStyleProps
    >,
    PaginationTriggerProps {}

export const PaginationLast = (props: PaginationLastProps) => {
  const {
    withLabel = true,
    variant = "ghost",
    size,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkPagination.LastTrigger
      className={cn(buttonVariants({ size, variant }), className)}
      data-slot="pagination-last"
      {...rest}
    >
      <span className={cn({ "sr-only": !withLabel })}>
        {children ?? "Last"}
      </span>
      <ChevronLastIcon aria-hidden="true" className="rtl:rotate-180" />
    </ArkPagination.LastTrigger>
  );
};

export const PaginationItem = (
  props: React.ComponentProps<typeof ArkPagination.Item>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkPagination.Item
      className={cn(
        buttonVariants({ size: "icon-md", variant: "ghost" }),
        "tabular-nums",
        "data-selected:not-[hover]:bg-transparent",
        "dark:data-selected:not-[hover]:bg-input/32",
        "data-selected:not-[hover]:text-foreground",
        "data-selected:not-[hover]:border-input",
        className
      )}
      data-slot="pagination-item"
      {...rest}
    >
      {children}
    </ArkPagination.Item>
  );
};

interface PaginationItemsProps
  extends Omit<
    React.ComponentProps<typeof ArkPagination.Context>,
    "children"
  > {}

export const PaginationItems = (props: PaginationItemsProps) => (
  <ArkPagination.Context data-slot="pagination-items" {...props}>
    {({ pages }) =>
      pages.map((page, index) =>
        page.type === "page" ? (
          <PaginationItem key={page.value} type="page" value={page.value}>
            <FormatNumber useGrouping={false} value={page.value} />
          </PaginationItem>
        ) : (
          <PaginationEllipsis
            index={index}
            key={`ellipsis-${pages
              .filter((candidate) => candidate.type === "ellipsis")
              .indexOf(page)}`}
          />
        )
      )
    }
  </ArkPagination.Context>
);

export const PaginationEllipsis = (
  props: React.ComponentProps<typeof ArkPagination.Ellipsis>
) => {
  const { className, ...rest } = props;

  return (
    <ArkPagination.Ellipsis
      className={cn(
        "h-8 w-12",
        "flex items-end justify-center",
        "text-muted-foreground",
        "pointer-events-none select-none",
        "[&_svg]:size-4",
        className
      )}
      data-slot="pagination-ellipsis"
      {...rest}
    >
      <EllipsisIcon aria-hidden="true" />
    </ArkPagination.Ellipsis>
  );
};
