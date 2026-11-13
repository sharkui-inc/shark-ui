"use client";

import { CircleIcon } from "lucide-react";
import type React from "react";
import { PRIMARY_TONES } from "@/lib/theme/catalog";
import type { PrimaryTone } from "@/lib/theme/config";
import { cn } from "@/lib/utils";
import { Switch } from "@/registry/react/components/switch";

interface ThemePrimaryToneSwitchProps {
  className?: string;
  disabled?: boolean;
  onPointerEnterTone?: (tone: PrimaryTone) => void;
  onPointerLeave?: () => void;
  onValueChange: (value: PrimaryTone) => void;
  value: PrimaryTone;
}

export const ThemePrimaryToneSwitch = (props: ThemePrimaryToneSwitchProps) => {
  const {
    value,
    disabled,
    onPointerEnterTone,
    onPointerLeave,
    onValueChange,
    className,
  } = props;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!onPointerEnterTone) {
      return;
    }

    const { left, width } = event.currentTarget.getBoundingClientRect();
    const isDark = event.clientX > left + width / 2;

    onPointerEnterTone(isDark ? "dark" : "light");
  };

  return (
    <div
      className={cn(
        "border-input relative overflow-hidden border bg-transparent shadow-xs/4",
        "dark:bg-input/32",
        "has-focus-visible:border-ring/64 has-focus-visible:ring-ring/24 has-focus-visible:ring-2",
        "transition-[color,box-shadow]",
        className
      )}
      dir="ltr"
      onPointerLeave={onPointerLeave}
      onPointerMove={handlePointerMove}
    >
      <Switch
        aria-label="Primary tone"
        checked={value === "dark"}
        className={cn(
          "size-full rounded-none border-transparent p-0 shadow-none",
          "data-focus-visible:border-transparent data-focus-visible:ring-0",
          "data-[state=checked]:bg-transparent data-[state=unchecked]:bg-transparent",
          "dark:data-[state=unchecked]:bg-transparent",
          "**:data-[slot=switch-thumb]:hidden"
        )}
        disabled={disabled}
        onCheckedChange={({ checked }) =>
          onValueChange(checked ? "dark" : "light")
        }
      />
      <span
        aria-hidden="true"
        className={cn(
          "bg-primary absolute inset-y-0 inset-s-0 w-1/2",
          "pointer-events-none",
          "transition-transform duration-200 ease-out",
          "motion-reduce:transition-none",
          value === "dark" && "translate-x-full"
        )}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex"
      >
        {PRIMARY_TONES.map((tone) => (
          <span
            className={cn(
              "flex flex-1 items-center justify-center",
              value === tone.value
                ? "text-primary-foreground"
                : "text-muted-foreground"
            )}
            key={tone.value}
          >
            <CircleIcon
              className={cn("size-4", tone.value === "dark" && "fill-current")}
            />
          </span>
        ))}
      </div>
    </div>
  );
};
