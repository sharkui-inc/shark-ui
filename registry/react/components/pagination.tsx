"use client";

import {
  Pagination as ArkPagination,
  usePagination as useArkPagination,
  usePaginationContext as useArkPaginationContext,
} from "@ark-ui/react/pagination";
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisIcon,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";
import { FormatNumber } from "@/registry/react/components/format";

export const usePagination = useArkPagination;
export const usePaginationContext = useArkPaginationContext;
export const PaginationRootProvider = ArkPagination.RootProvider;

const PaginationTypeContext = React.createContext<"button" | "link">("button");

interface PaginationProps
  extends React.ComponentProps<typeof ArkPagination.Root> {}

export const Pagination = (props: PaginationProps) => {
  const { type = "button", className, ...rest } = props;

  return (
    <PaginationTypeContext.Provider value={type}>
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
    </PaginationTypeContext.Provider>
  );
};

const PaginationButton = (props: ButtonProps) => {
  const { children, ...rest } = props;
  const type = React.useContext(PaginationTypeContext);

  if (type === "link") {
    return (
      <Button asChild {...rest}>
        <a>{children}</a>
      </Button>
    );
  }

  return <Button {...rest}>{children}</Button>;
};

interface PaginationFirstProps
  extends React.ComponentProps<typeof ArkPagination.FirstTrigger>,
    ButtonProps {
  /**
   * Whether to show the label.
   */
  withLabel?: boolean;
}

export const PaginationFirst = (props: PaginationFirstProps) => {
  const { withLabel = true, variant = "ghost", children, ...rest } = props;

  return (
    <ArkPagination.FirstTrigger asChild data-slot="pagination-first">
      <PaginationButton variant={variant} {...rest}>
        <ChevronFirstIcon className="rtl:rotate-180" />
        <span className={cn({ "sr-only": !withLabel })}>
          {children ?? "First"}
        </span>
      </PaginationButton>
    </ArkPagination.FirstTrigger>
  );
};

interface PaginationPreviousProps
  extends React.ComponentProps<typeof ArkPagination.PrevTrigger>,
    ButtonProps {
  /**
   * Whether to show the label.
   */
  withLabel?: boolean;
}

export const PaginationPrevious = (props: PaginationPreviousProps) => {
  const { withLabel = true, variant = "ghost", children, ...rest } = props;

  return (
    <ArkPagination.PrevTrigger asChild data-slot="pagination-previous">
      <PaginationButton variant={variant} {...rest}>
        <ChevronLeftIcon className="rtl:rotate-180" />
        <span className={cn({ "sr-only": !withLabel })}>
          {children ?? "Previous"}
        </span>
      </PaginationButton>
    </ArkPagination.PrevTrigger>
  );
};

interface PaginationNextProps
  extends React.ComponentProps<typeof ArkPagination.NextTrigger>,
    ButtonProps {
  /**
   * Whether to show the label.
   */
  withLabel?: boolean;
}

export const PaginationNext = (props: PaginationNextProps) => {
  const { withLabel = true, variant = "ghost", children, ...rest } = props;

  return (
    <ArkPagination.NextTrigger asChild data-slot="pagination-next">
      <PaginationButton variant={variant} {...rest}>
        <span className={cn({ "sr-only": !withLabel })}>
          {children ?? "Next"}
        </span>
        <ChevronRightIcon className="rtl:rotate-180" />
      </PaginationButton>
    </ArkPagination.NextTrigger>
  );
};

interface PaginationLastProps
  extends React.ComponentProps<typeof ArkPagination.LastTrigger>,
    ButtonProps {
  /**
   * Whether to show the label.
   */
  withLabel?: boolean;
}

export const PaginationLast = (props: PaginationLastProps) => {
  const { withLabel = true, variant = "ghost", children, ...rest } = props;

  return (
    <ArkPagination.LastTrigger asChild data-slot="pagination-last">
      <PaginationButton variant={variant} {...rest}>
        <span className={cn({ "sr-only": !withLabel })}>
          {children ?? "Last"}
        </span>
        <ChevronLastIcon className="rtl:rotate-180" />
      </PaginationButton>
    </ArkPagination.LastTrigger>
  );
};

export const PaginationItem = (
  props: React.ComponentProps<typeof ArkPagination.Item>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkPagination.Item asChild data-slot="pagination-item" {...rest}>
      <PaginationButton
        className={cn(
          "tabular-nums",
          "data-selected:not-[hover]:bg-transparent dark:data-selected:not-[hover]:bg-input/32",
          "data-selected:not-[hover]:text-foreground",
          "data-selected:not-[hover]:border-input",
          className
        )}
        size="icon-md"
        variant="ghost"
      >
        {children}
      </PaginationButton>
    </ArkPagination.Item>
  );
};

type PaginationItemsProps = Omit<
  React.ComponentProps<typeof ArkPagination.Context>,
  "children"
>;

export const PaginationItems = (props: PaginationItemsProps) => (
  <ArkPagination.Context data-slot="pagination-item s" {...props}>
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
      <EllipsisIcon />
    </ArkPagination.Ellipsis>
  );
};
