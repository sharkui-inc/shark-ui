import type React from "react";
import { cn } from "@/lib/utils";

export const ExamplePreview = (props: React.ComponentProps<"section">) => {
  const { className, ...rest } = props;

  return (
    <section
      className={cn(
        "relative",
        "h-full min-h-0 min-w-0",
        "max-sm:-mx-4",
        "bg-background",
        "overflow-hidden",
        "rounded-xl border max-sm:rounded-none max-sm:border-x-0",
        className
      )}
      {...rest}
    />
  );
};
