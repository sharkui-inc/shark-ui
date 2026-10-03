"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";

export const LinkBox = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "relative",
        "[&_a[href]:not([data-slot=link-overlay])]:relative [&_a[href]:not([data-slot=link-overlay])]:z-1",
        className
      )}
      data-slot="link-box"
      {...rest}
    />
  );
};

export const LinkOverlay = (props: React.ComponentProps<typeof ark.a>) => {
  const { className, ...rest } = props;

  return (
    <ark.a
      className={cn(
        "static",
        "-mx-1 -my-0.5 px-1 py-0.5",
        "rounded-md border border-transparent",
        "before:absolute before:inset-0 before:z-0 before:block before:h-full before:w-full before:cursor-inherit before:content-['']",
        "border border-transparent outline-hidden focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
        className
      )}
      data-slot="link-overlay"
      {...rest}
    />
  );
};
