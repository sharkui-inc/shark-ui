"use client";

import type React from "react";
import { BASE_COLORS } from "@/lib/theme/catalog";
import type { BaseColor } from "@/lib/theme/config";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Card } from "@/registry/react/components/card";
import { useUpdateConfig } from "@/store/config";

function formatScaleTitle(label: string) {
  return label.trim().replaceAll(/\s+/gu, "-");
}

export const ColorsConcept = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  const updateConfig = useUpdateConfig();

  const handleSelectColor = (color: BaseColor) => {
    updateConfig({
      baseColor: color,
    });
  };

  return (
    <div
      className={cn(
        "mt-10",
        "not-prose",
        "grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] items-start gap-3",
        className
      )}
      {...rest}
    >
      {BASE_COLORS.map((color) => (
        <Button
          aria-label={`Select ${color.label} color`}
          className="h-auto min-h-36 w-full items-stretch rounded-xl p-0 md:h-auto"
          key={color.value}
          onClick={() => handleSelectColor(color.value)}
          variant="ghost"
        >
          <Card
            className={cn(
              "[--space:--spacing(0)]",
              "w-full",
              "gap-0",
              "bg-background"
            )}
          >
            <div className="flex items-center px-3 py-2.5">
              <span className="font-mono text-[0.65rem] font-medium tracking-wide uppercase">
                {formatScaleTitle(color.label)}
              </span>
            </div>
            <div className="p-1 pt-0">
              <div
                className={cn(
                  "min-h-24",
                  "shadow-xs/4",
                  "flex items-end justify-center",
                  "pb-2",
                  "rounded-lg",
                  color.hex
                )}
              >
                <span className="font-mono text-xs font-medium text-white drop-shadow-xs/4">
                  500
                </span>
              </div>
            </div>
          </Card>
        </Button>
      ))}
    </div>
  );
};
