"use client";

import { ark } from "@ark-ui/react/factory";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/registry/react/components/separator";

interface BreadcrumbProps extends React.ComponentProps<typeof ark.nav> {
  /**
   * Accessible label for the breadcrumb navigation landmark.
   *
   * @default "Breadcrumb"
   */
  "aria-label"?: string;
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { "aria-label": ariaLabel = "Breadcrumb", ...rest } = props;

  return <ark.nav aria-label={ariaLabel} data-slot="breadcrumb" {...rest} />;
};

export const BreadcrumbList = (props: React.ComponentProps<typeof ark.ol>) => {
  const { className, ...rest } = props;

  return (
    <ark.ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 sm:gap-2.5",
        "text-muted-foreground text-sm wrap-break-word",
        className
      )}
      data-slot="breadcrumb-list"
      role="list"
      {...rest}
    />
  );
};

export const BreadcrumbItem = (props: React.ComponentProps<typeof ark.li>) => {
  const { className, ...rest } = props;

  return (
    <ark.li
      className={cn("inline-flex items-center gap-1.5", className)}
      data-slot="breadcrumb-item"
      {...rest}
    />
  );
};

export const BreadcrumbLink = (props: React.ComponentProps<typeof ark.a>) => {
  const { className, ...rest } = props;

  return (
    <ark.a
      className={cn(
        "relative",
        "-mx-1 px-1",
        "text-nowrap",
        "rounded-md border border-transparent",
        "outline-hidden",
        "transition-colors",
        "hover:text-foreground",
        "focus-visible:border-ring/64 focus-visible:ring-ring/24 focus-visible:z-10 focus-visible:ring-2",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="breadcrumb-link"
      {...rest}
    />
  );
};

export const BreadcrumbPage = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn("text-foreground font-normal", className)}
      data-slot="breadcrumb-page"
      {...rest}
      aria-current="page"
    />
  );
};

export const BreadcrumbSeparator = (
  props: React.ComponentProps<typeof ark.li>
) => {
  const { className, children, ...rest } = props;

  return (
    <Separator
      asChild
      className={cn(
        "bg-transparent",
        "opacity-64",
        "data-[orientation=horizontal]:h-auto data-[orientation=horizontal]:w-auto",
        "[&_svg]:size-4",
        className
      )}
    >
      <ark.li
        data-slot="breadcrumb-separator"
        {...rest}
        aria-hidden="true"
        role="presentation"
      >
        {children ?? (
          <ChevronRightIcon
            aria-hidden="true"
            className={cn("size-4", "rtl:rotate-180")}
          />
        )}
      </ark.li>
    </Separator>
  );
};

export const BreadcrumbEllipsis = (
  props: React.ComponentProps<typeof ark.span>
) => (
  <ark.span
    data-slot="breadcrumb-ellipsis"
    {...props}
    aria-hidden="true"
    role="presentation"
  >
    <MoreHorizontalIcon aria-hidden="true" className="size-4" />
  </ark.span>
);
