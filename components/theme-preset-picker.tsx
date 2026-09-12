"use client";

import { CheckIcon } from "lucide-react";
import {
  getActiveThemePreset,
  THEME_PRESET_FIELD,
  THEME_PRESETS,
} from "@/lib/theme/config";
import { useThemeCustomization } from "@/lib/theme/provider";
import { cn } from "@/lib/utils";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
} from "@/registry/react/components/radio-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const hideRadioChrome = cn(
  "**:data-[slot=radio-group-item-control]:hidden",
  "**:data-[slot=radio-group-item-text]:contents"
);

interface ThemePresetPickerProps {
  onSelect?: () => void;
  variant?: "bar" | "grid";
}

export const ThemePresetPicker = (props: ThemePresetPickerProps) => {
  const { onSelect, variant = "grid" } = props;

  switch (variant) {
    case "bar":
      return <ThemePresetBar onSelect={onSelect} />;
    case "grid":
      return <ThemePresetGrid onSelect={onSelect} />;
    default: {
      const _exhaustive: never = variant;
      return _exhaustive;
    }
  }
};

const ThemePresetBar = (props: { onSelect?: () => void }) => {
  const { onSelect } = props;
  const { applyPreset, config } = useThemeCustomization();
  const activePreset = getActiveThemePreset(config);

  return (
    <RadioGroup
      className={cn(hideRadioChrome, "flex flex-col gap-2")}
      onValueChange={({ value }) => {
        const preset = THEME_PRESETS.find((item) => item.label === value);

        if (!preset) {
          return;
        }

        applyPreset(preset);
        onSelect?.();
      }}
      value={activePreset?.label ?? ""}
    >
      <RadioGroupLabel>{THEME_PRESET_FIELD.label}</RadioGroupLabel>
      <div className="flex h-11 gap-px overflow-hidden rounded-xl border border-input bg-border">
        {THEME_PRESETS.map((preset) => (
          <RadioGroupItem
            aria-label={preset.label}
            className={cn(
              "group h-full min-w-0 flex-1 justify-center p-0",
              "rounded-none border-0",
              "data-[state=checked]:z-10 data-[state=checked]:outline-2 data-[state=checked]:outline-foreground data-[state=checked]:-outline-offset-2",
              "data-focus-visible:z-20 data-focus-visible:outline-2 data-focus-visible:outline-ring data-focus-visible:-outline-offset-2",
              "pointer-coarse:after:hidden"
            )}
            key={preset.label}
            value={preset.label}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  className={cn(
                    "relative flex size-full items-center justify-center before:absolute before:inset-0 before:bg-black/0 group-data-[state=checked]:before:bg-black/12",
                    preset.swatchClass
                  )}
                >
                  <CheckIcon
                    aria-hidden="true"
                    className="relative z-10 size-4 text-white opacity-0 transition-opacity group-data-[state=checked]:opacity-100"
                  />
                </span>
              </TooltipTrigger>
              <TooltipContent>{preset.label}</TooltipContent>
            </Tooltip>
          </RadioGroupItem>
        ))}
      </div>
    </RadioGroup>
  );
};

const ThemePresetGrid = (props: { onSelect?: () => void }) => {
  const { onSelect } = props;
  const { applyPreset, config } = useThemeCustomization();
  const activePreset = getActiveThemePreset(config);

  return (
    <RadioGroup
      aria-label={THEME_PRESET_FIELD.label}
      className={cn(hideRadioChrome, "grid grid-cols-3 gap-2")}
      onValueChange={({ value }) => {
        const preset = THEME_PRESETS.find((item) => item.label === value);

        if (!preset) {
          return;
        }

        applyPreset(preset);
        onSelect?.();
      }}
      value={activePreset?.label ?? ""}
    >
      {THEME_PRESETS.map((preset) => (
        <RadioGroupItem
          aria-label={`Apply ${preset.label} theme`}
          className={cn(
            "group flex flex-col items-center gap-1.5 rounded-lg p-1",
            "cursor-pointer outline-none",
            "focus-visible:ring-[3px] focus-visible:ring-ring/32 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
          key={preset.label}
          value={preset.label}
        >
          <span
            className={cn(
              "size-8 rounded-full",
              preset.swatchClass,
              "group-data-[state=checked]:ring-2 group-data-[state=checked]:ring-foreground/25 group-data-[state=checked]:ring-offset-2 group-data-[state=checked]:ring-offset-background"
            )}
          />
          <span className="text-muted-foreground text-xs group-data-[state=checked]:text-foreground">
            {preset.label}
          </span>
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
};
