"use client";

import { Button } from "@registry/react/components/button";
import type React from "react";
import { BASE_COLORS } from "@/lib/theme/catalog";
import type { BaseColor } from "@/lib/theme/config";
import { cn } from "@/lib/utils";
import { Card } from "@/registry/react/components/card";
import { useUpdateConfig } from "@/store/config";

function formatScaleTitle(label: string) {
  return label.trim().replaceAll(/\s+/g, "-");
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
        "grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] gap-3",
        className
      )}
      {...rest}
    >
      {BASE_COLORS.map((color) => (
        <Button
          aria-label={`Select ${color.label} color`}
          className="h-auto w-full rounded-xl p-0"
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
              <span className="font-medium font-mono text-[0.65rem] uppercase tracking-wide">
                {formatScaleTitle(color.label)}
              </span>
            </div>
            <div className="p-1 pt-0">
              <div
                className={cn(
                  "min-h-24",
                  "shadow-xs/5",
                  "flex items-end justify-center",
                  "pb-2",
                  "rounded-lg",
                  color.hex
                )}
              >
                <span className="font-medium font-mono text-white text-xs drop-shadow-xs">
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
