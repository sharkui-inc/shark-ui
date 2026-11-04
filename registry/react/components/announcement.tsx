"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const announcementVariants = tv({
  base: [
    "group/announcement",
    "relative",
    "max-w-full min-w-0",
    "inline-flex items-center gap-2",
    "py-0.5 ps-3 pe-3",
    "bg-input/8",
    "border-input rounded-2xl border",
    "transition-colors",
    "outline-hidden",
    "focus-visible:border-ring/64 focus-visible:ring-ring/24 focus-visible:ring-2",
    "[&_svg]:size-3.5 [&_svg]:shrink-0",
    "has-data-[slot=badge]:ps-0.5",
    "[button&,a&]:hover:bg-accent [button&,a&]:cursor-pointer",
    "[&>svg]:text-muted-foreground",
    "**:data-[slot=badge]:h-6.5 **:data-[slot=badge]:rounded-xl **:data-[slot=badge]:px-2 **:data-[slot=badge]:sm:text-xs",
    "motion-reduce:transition-none",
  ],
});

interface AnnouncementProps
  extends Omit<React.ComponentProps<typeof ark.div>, "role">,
    VariantProps<typeof announcementVariants> {}

export const Announcement = (props: AnnouncementProps) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(announcementVariants(), className)}
      data-slot="announcement"
      {...rest}
    />
  );
};

export const AnnouncementTitle = (
  props: React.ComponentProps<typeof ark.span>
) => {
  const { className, ...rest } = props;

  return (
    <ark.span
      className={cn(
        "min-w-0",
        "flex-1",
        "inline-flex items-center gap-1",
        "truncate text-sm font-medium",
        "select-none",
        className
      )}
      data-slot="announcement-title"
      {...rest}
    />
  );
};
