"use client";

import { createListCollection } from "@ark-ui/react";
import {
  CheckIcon,
  CircleIcon,
  ClipboardIcon,
  Shuffle,
  Undo,
  WandSparklesIcon,
} from "lucide-react";
import React from "react";
import { CopyThemeCodeDialog } from "@/components/dialog/copy-theme";
import { ThemePresetPicker } from "@/components/theme-preset-picker";
import { loadThemeFontPreviews } from "@/lib/theme/apply";
import {
  BASE_COLORS,
  BORDER_RADIUS,
  getPrimaryFillCss,
  PRIMARY_COLORS,
  PRIMARY_TONES,
} from "@/lib/theme/catalog";
import {
  type BaseColor,
  type BorderRadius,
  DEFAULT_PRIMARY_TONE,
  type PrimaryColor,
  type PrimaryTone,
  THEME_FIELDS,
  THEME_FONT_SLOTS,
} from "@/lib/theme/config";
import type { ThemeFont, ThemeFontName } from "@/lib/theme/fonts";
import { useThemeCustomization } from "@/lib/theme/provider";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/registry/react/components/alert-dialog";
import { Button } from "@/registry/react/components/button";
import { DialogTrigger } from "@/registry/react/components/dialog";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { useHotkey } from "@/registry/react/components/hotkeys";
import { Kbd } from "@/registry/react/components/kbd";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupLabel,
} from "@/registry/react/components/radio-group";
import {
  SegmentGroup,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const hideRadioChrome = cn(
  "**:data-[slot=radio-group-item-control]:hidden",
  "**:data-[slot=radio-group-item-text]:contents"
);

interface FontPickerProps {
  fonts: readonly ThemeFont[];
  label: string;
  onValueChange: (value: ThemeFontName) => void;
  value: ThemeFontName;
}

const FontPicker = (props: FontPickerProps) => {
  const { fonts, label, onValueChange, value } = props;
  const collection = React.useMemo(
    () => createListCollection({ items: [...fonts] }),
    [fonts]
  );
  const selectedFont = fonts.find((font) => font.value === value);

  const handleValueChange = ({ value: next }: { value: string[] }) => {
    const [selected] = next;
    if (selected) {
      onValueChange(selected as ThemeFontName);
    }
  };

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Select
        collection={collection}
        onValueChange={handleValueChange}
        value={[value]}
      >
        <SelectTrigger className="w-full">
          <span className="flex min-w-0 items-center gap-2">
            <span
              aria-hidden="true"
              className="w-4 text-center font-medium text-sm"
              style={{ fontFamily: selectedFont?.family }}
            >
              Ag
            </span>
            <SelectValue placeholder={`Select ${label.toLowerCase()}`} />
          </span>
        </SelectTrigger>
        <SelectContent>
          {collection.items.map((item) => (
            <SelectItem item={item} key={item.value}>
              <span
                aria-hidden="true"
                className="w-4 text-center font-medium text-sm"
                style={{ fontFamily: item.family }}
              >
                Ag
              </span>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
};

export const HeaderCustomize = () => {
  const {
    config,
    isDefault,
    randomize,
    reset,
    setBaseColor,
    setBorderRadius,
    setFontHeading,
    setFontSans,
    setPrimaryColor,
    setPrimaryTone,
  } = useThemeCustomization();

  const [isOpen, setIsOpen] = React.useState(false);

  useHotkey({
    action: () => setIsOpen((open) => !open),
    hotkey: "c",
    options: { preventDefault: true },
  });

  React.useEffect(() => {
    if (isOpen) {
      loadThemeFontPreviews();
    }
  }, [isOpen]);

  const primaryTone = config.primaryTone ?? DEFAULT_PRIMARY_TONE;

  return (
    <Sheet
      closeOnInteractOutside
      modal={false}
      onOpenChange={({ open }) => setIsOpen(open)}
      open={isOpen}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <SheetTrigger asChild>
            <Button aria-label="Customize" size="icon-md" variant="ghost">
              <WandSparklesIcon />
            </Button>
          </SheetTrigger>
        </TooltipTrigger>
        <TooltipContent>
          Customize <Kbd>C</Kbd>
        </TooltipContent>
      </Tooltip>

      <SheetContent className="max-sm:w-full max-sm:max-w-full" variant="inset">
        <SheetHeader
          description="Change the theme to match your style."
          title="Make it yours"
        />

        <SheetBody>
          <FieldGroup className="gap-6">
            <Field>
              <ThemePresetPicker variant="bar" />
            </Field>

            <Field>
              <RadioGroup
                className={cn(hideRadioChrome, "flex flex-col gap-2")}
                onValueChange={({ value }) => setBaseColor(value as BaseColor)}
                value={config.baseColor}
              >
                <RadioGroupLabel>
                  {THEME_FIELDS.baseColor.label}
                </RadioGroupLabel>
                <div className="flex h-11 gap-px overflow-hidden rounded-xl border border-input bg-border">
                  {BASE_COLORS.map((color) => (
                    <RadioGroupItem
                      aria-label={color.label}
                      className={cn(
                        "group h-full min-w-0 flex-1 justify-center p-0",
                        "rounded-none border-0",
                        "data-[state=checked]:z-10 data-[state=checked]:outline-2 data-[state=checked]:outline-foreground data-[state=checked]:-outline-offset-2",
                        "data-focus-visible:z-20 data-focus-visible:outline-2 data-focus-visible:outline-ring data-focus-visible:-outline-offset-2",
                        "pointer-coarse:after:hidden"
                      )}
                      key={color.value}
                      value={color.value}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span
                            className={cn(
                              "relative flex size-full items-center justify-center",
                              "before:absolute before:inset-0 before:bg-black/0 group-data-[state=checked]:before:bg-black/12",
                              color.hex
                            )}
                          >
                            <CheckIcon
                              aria-hidden="true"
                              className="relative z-10 size-4 text-white opacity-0 transition-opacity group-data-[state=checked]:opacity-100"
                            />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>{color.label}</TooltipContent>
                      </Tooltip>
                    </RadioGroupItem>
                  ))}
                </div>
              </RadioGroup>
            </Field>

            <Field>
              <RadioGroup
                className={cn(hideRadioChrome, "flex flex-col gap-2")}
                onValueChange={({ value }) =>
                  setPrimaryColor(value as PrimaryColor)
                }
                value={config.primaryColor}
              >
                <RadioGroupLabel>
                  {THEME_FIELDS.primaryColor.label}
                </RadioGroupLabel>
                <div className="grid grid-cols-9 gap-px overflow-hidden rounded-xl border border-input">
                  {PRIMARY_COLORS.map((color) => (
                    <RadioGroupItem
                      aria-label={color.label}
                      className={cn(
                        "group relative aspect-square justify-center p-0",
                        "rounded-none border-0",
                        "data-[state=checked]:z-10 data-[state=checked]:outline-2 data-[state=checked]:outline-foreground data-[state=checked]:-outline-offset-2",
                        "data-focus-visible:z-20 data-focus-visible:outline-2 data-focus-visible:outline-ring data-focus-visible:-outline-offset-2",
                        "pointer-coarse:after:hidden"
                      )}
                      key={color.value}
                      value={color.value}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span
                            className="relative flex size-full items-center justify-center before:absolute before:inset-0 before:bg-black/0 group-data-[state=checked]:before:bg-black/12"
                            style={{
                              backgroundColor: getPrimaryFillCss(
                                color.value,
                                primaryTone
                              ),
                            }}
                          >
                            <CheckIcon
                              aria-hidden="true"
                              className="relative z-10 size-4 text-white opacity-0 transition-opacity group-data-[state=checked]:opacity-100"
                            />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>{color.label}</TooltipContent>
                      </Tooltip>
                    </RadioGroupItem>
                  ))}
                </div>
              </RadioGroup>
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium text-muted-foreground text-xs">
                  {THEME_FIELDS.primaryTone.label}
                </span>
                <div className="h-8 w-40 rounded-lg border border-input shadow-xs/5 transition-[color,box-shadow] has-[:focus-visible]:border-primary has-[:focus-visible]:ring-[3px] has-[:focus-visible]:ring-ring/32">
                  <SegmentGroup
                    aria-label="Primary tone"
                    className={cn(
                      "size-full gap-0 overflow-hidden rounded-[inherit] bg-transparent dark:bg-input/30",
                      "*:data-[slot=segment-group-indicator]:rounded-none",
                      "*:data-[slot=segment-group-indicator]:bg-primary"
                    )}
                    onValueChange={(details) => {
                      if (details.value) {
                        setPrimaryTone(details.value as PrimaryTone);
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
              </div>
            </Field>

            <FieldGroup className="gap-3">
              <FontPicker
                fonts={THEME_FONT_SLOTS.sans.fonts}
                label={THEME_FONT_SLOTS.sans.label}
                onValueChange={setFontSans}
                value={config.fontSans}
              />
              <FontPicker
                fonts={THEME_FONT_SLOTS.heading.fonts}
                label={THEME_FONT_SLOTS.heading.label}
                onValueChange={setFontHeading}
                value={config.fontHeading}
              />
            </FieldGroup>

            <Field>
              <RadioGroup
                className={cn(hideRadioChrome, "grid grid-cols-5 gap-2")}
                onValueChange={({ value }) =>
                  setBorderRadius(value as BorderRadius)
                }
                value={config.borderRadius}
              >
                <RadioGroupLabel className="col-span-5">
                  {THEME_FIELDS.borderRadius.label}
                </RadioGroupLabel>
                {BORDER_RADIUS.map((radius) => (
                  <RadioGroupItem
                    className={cn(
                      "flex flex-col items-center gap-2",
                      "rounded-xl border border-input bg-muted/40 p-2.5",
                      "pointer-coarse:after:hidden",
                      "data-[state=checked]:border-primary data-[state=checked]:bg-primary/10 data-[state=checked]:ring-1 data-[state=checked]:ring-primary/48 data-[state=checked]:ring-inset",
                      "data-focus-visible:ring-[3px] data-focus-visible:ring-ring/32 data-focus-visible:ring-inset"
                    )}
                    key={radius.value}
                    value={radius.value}
                  >
                    <span
                      aria-hidden="true"
                      className="size-9 bg-primary"
                      style={{ borderRadius: radius.cssVars.radius }}
                    />
                    <span className="text-muted-foreground text-xs">
                      {radius.value}
                    </span>
                  </RadioGroupItem>
                ))}
              </RadioGroup>
            </Field>
          </FieldGroup>
        </SheetBody>

        <SheetFooter>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button disabled={isDefault ? true : undefined} variant="outline">
                <Undo aria-hidden />
                Reset
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader
                description="This will restore colors, radius, fonts, and locks to their default values."
                title="Reset theme to default?"
              />
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogClose asChild>
                  <AlertDialogAction onClick={reset}>
                    Reset theme
                  </AlertDialogAction>
                </AlertDialogClose>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button onClick={randomize} variant="outline">
            <Shuffle aria-hidden />
            Shuffle
          </Button>

          <CopyThemeCodeDialog>
            <DialogTrigger asChild>
              <Button className="sm:ms-auto">
                <ClipboardIcon />
                Copy theme
              </Button>
            </DialogTrigger>
          </CopyThemeCodeDialog>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
