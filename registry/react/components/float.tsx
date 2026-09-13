"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const floatVariants = tv({
  base: ["pointer-events-auto absolute z-10"],
  defaultVariants: {
    placement: "top-end",
  },
  variants: {
    placement: {
      "bottom-center":
        "start-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rtl:translate-x-1/2",
      "bottom-end":
        "inset-e-0 bottom-0 translate-x-1/2 translate-y-1/2 rtl:-translate-x-1/2",
      "bottom-start":
        "inset-s-0 bottom-0 -translate-x-1/2 translate-y-1/2 rtl:translate-x-1/2",
      "middle-center":
        "start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2",
      "middle-end":
        "inset-e-0 top-1/2 translate-x-1/2 -translate-y-1/2 rtl:-translate-x-1/2",
      "middle-start":
        "inset-s-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2",
      "top-center":
        "start-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2",
      "top-end":
        "inset-e-0 top-0 translate-x-1/2 -translate-y-1/2 rtl:-translate-x-1/2",
      "top-start":
        "inset-s-0 top-0 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2",
    },
  },
});

interface FloatProps
  extends React.ComponentProps<typeof ark.div>,
    VariantProps<typeof floatVariants> {}

export const Float = (props: FloatProps) => {
  const { placement = "top-end", className, ...rest } = props;

  return (
    <ark.div
      className={cn(floatVariants({ placement }), className)}
      data-placement={placement}
      data-slot="float"
      {...rest}
    />
  );
};
