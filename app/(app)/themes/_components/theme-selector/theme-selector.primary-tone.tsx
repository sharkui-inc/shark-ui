"use client";

import { CircleIcon } from "lucide-react";
import { useCallback } from "react";
import { PRIMARY_TONES } from "@/lib/theme/catalog";
import {
  DEFAULT_PRIMARY_TONE,
  type PrimaryTone,
  THEME_FIELDS,
} from "@/lib/theme/config";
import { useThemeCustomization } from "@/lib/theme/provider";
import { cn } from "@/lib/utils";
import { Field } from "@/registry/react/components/field";
import { useHotkey } from "@/registry/react/components/hotkeys";
import {
  SegmentGroup,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";
import { ThemeSelectorHeading } from "./theme-selector.heading";

export const ThemeSelectorPrimaryTone = () => {
  const { config, locks, setPrimaryTone } = useThemeCustomization();
  const primaryTone = config.primaryTone ?? DEFAULT_PRIMARY_TONE;

  const handleToggleTone = useCallback(() => {
    if (locks.primaryTone) {
      return;
    }

    setPrimaryTone(config.primaryTone === "light" ? "dark" : "light");
  }, [config, locks.primaryTone, setPrimaryTone]);

  useHotkey({
    action: handleToggleTone,
    hotkey: "t",
    options: { preventDefault: true },
  });

  return (
    <Field className="w-fit">
      <ThemeSelectorHeading
        description={THEME_FIELDS.primaryTone.description}
        hotkey="T"
        lockKey="primaryTone"
        title={THEME_FIELDS.primaryTone.label}
      />
      <div className="h-8 rounded-lg border border-input shadow-xs/5 transition-[color,box-shadow] has-focus-visible:border-primary has-focus-visible:ring-[3px] has-focus-visible:ring-ring/32">
        <SegmentGroup
          className={cn(
            "size-full gap-0 overflow-hidden rounded-[inherit] bg-transparent dark:bg-input/30",
            "*:data-[slot=segment-group-indicator]:rounded-none",
            "*:data-[slot=segment-group-indicator]:bg-primary"
          )}
          onValueChange={({ value }) => {
            if (value) {
              setPrimaryTone(value as PrimaryTone);
            }
          }}
          value={primaryTone}
        >
          {PRIMARY_TONES.map((tone) => (
            <SegmentGroupItem
              aria-label={tone.label}
              className="relative h-auto min-w-0 flex-1 gap-0 rounded-none p-0 text-muted-foreground data-focus-visible:border-transparent data-[state=checked]:text-primary-foreground data-focus-visible:ring-0"
              key={tone.value}
              value={tone.value}
            >
              <SegmentGroupItemText className="absolute inset-0 z-1 flex items-center justify-center">
                <CircleIcon
                  aria-hidden
                  className={cn(
                    "size-4",
                    tone.value === "dark" && "fill-current"
                  )}
                />
              </SegmentGroupItemText>
            </SegmentGroupItem>
          ))}
        </SegmentGroup>
      </div>
    </Field>
  );
};
