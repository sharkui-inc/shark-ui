"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

export const Suggestions = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "w-full",
        "flex flex-wrap items-center justify-center gap-2",
        className
      )}
      data-slot="suggestions"
      {...rest}
    />
  );
};

export const Suggestion = (props: React.ComponentProps<typeof Button>) => {
  const {
    variant = "secondary",
    size = "sm",
    pill = true,
    className,
    ...rest
  } = props;

  return (
    <Button
      className={cn("font-normal", className)}
      data-slot="suggestion"
      pill={pill}
      size={size}
      variant={variant}
      {...rest}
    />
  );
};
