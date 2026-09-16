"use client";

import {
  ColorPicker as ArkColorPicker,
  parseColor as parseColorArk,
  useColorPickerContext,
} from "@ark-ui/react/color-picker";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { CheckIcon, Pipette } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/registry/react/components/button";

export const parseColor = parseColorArk;
export const useColorPicker = useColorPickerContext;

export interface ColorPickerProps
  extends Omit<
    React.ComponentProps<typeof ArkColorPicker.Root>,
    "defaultValue" | "value"
  > {
  /**
   * The default value of the color picker.
   */
  defaultValue?: string;
  /**
   * The value of the color picker.
   */
  value?: string;
}

export const ColorPicker = (props: ColorPickerProps) => {
  const {
    value,
    defaultValue,
    positioning,
    lazyMount = true,
    unmountOnExit = true,
    onValueChange,
    className,
    children,
    ...rest
  } = props;

  return (
    <ArkColorPicker.Root
      className={cn("group/color-picker", "w-fit", "flex gap-2", className)}
      data-slot="color-picker"
      defaultValue={defaultValue ? parseColor(defaultValue) : undefined}
      lazyMount={lazyMount}
      onValueChange={onValueChange}
      positioning={{
        placement: "top-start",
        ...positioning,
      }}
      unmountOnExit={unmountOnExit}
      value={value ? parseColor(value) : undefined}
      {...rest}
    >
      {children}

      <ArkColorPicker.HiddenInput />
    </ArkColorPicker.Root>
  );
};

export const ColorPickerControl = (
  props: React.ComponentProps<typeof ArkColorPicker.Control>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.Control
      className={cn("flex flex-row items-center gap-2", className)}
      data-slot="color-picker-control"
      {...rest}
    />
  );
};

export const ColorPickerTrigger = (
  props: React.ComponentProps<typeof ArkColorPicker.Trigger>
) => <ArkColorPicker.Trigger data-slot="color-picker-trigger" {...props} />;

export const ColorPickerTransparencyGrid = (
  props: React.ComponentProps<typeof ArkColorPicker.TransparencyGrid>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.TransparencyGrid
      className={cn(
        "size-full rounded-[max(0px,calc(var(--radius)*0.5-0.5px))]",
        "bg-[linear-gradient(45deg,#e4e4e4_25%,transparent_25%),linear-gradient(-45deg,#e4e4e4_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e4e4e4_75%),linear-gradient(-45deg,transparent_75%,#e4e4e4_75%)]",
        "bg-position-[0_0,0_4px,4px_-4px,-4px_0] bg-size-(--spacing(2))",
        className
      )}
      {...rest}
    />
  );
};

export const ColorPickerContent = (
  props: React.ComponentProps<typeof ArkColorPicker.Content>
) => {
  const { className, ...rest } = props;

  return (
    <Portal>
      <ArkColorPicker.Positioner data-slot="color-picker-positioner">
        <ArkColorPicker.Content
          className={cn(
            "[--space:--spacing(3)]",
            "z-[calc(50+var(--layer-index,0))]",
            "relative",
            "w-full min-w-56",
            "flex flex-col gap-4",
            "p-(--space)",
            "bg-popover",
            "rounded-xl border shadow-lg/4",
            "outline-hidden",
            "origin-(--transform-origin)",
            "duration-150 ease-out",
            "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
            "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:animate-out",
            "motion-reduce:data-[state=closed]:zoom-out-100 motion-reduce:data-[state=open]:zoom-in-100",
            className
          )}
          data-slot="color-picker-content"
          {...rest}
        />
      </ArkColorPicker.Positioner>
    </Portal>
  );
};

export const ColorPickerView = (
  props: React.ComponentProps<typeof ArkColorPicker.View>
) => {
  const { className, ...rest } = props;
  return (
    <ArkColorPicker.View
      className={cn("relative flex size-full flex-1 flex-col gap-4", className)}
      data-slot="color-picker-view"
      {...rest}
    />
  );
};

export const ColorPickerSlider = (
  props: React.ComponentProps<typeof ArkColorPicker.ChannelSlider>
) => {
  const { className, children, ...rest } = props;
  const { dragging } = useColorPicker();

  return (
    <ArkColorPicker.ChannelSlider
      className={cn(
        "relative",
        "flex items-center",
        "touch-none select-none",
        "rounded-full border",
        "data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        "group-data-disabled/color-picker:pointer-events-none group-data-disabled/color-picker:cursor-not-allowed group-data-disabled/color-picker:opacity-64",
        className
      )}
      data-slot="color-picker-channel-slider"
      {...rest}
    >
      {children}

      <ArkColorPicker.ChannelSliderTrack
        className={cn(
          "grow",
          "rounded-full",
          "select-none overflow-hidden",
          "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2"
        )}
        data-slot="color-picker-channel-slider-track"
      />
      <ArkColorPicker.ChannelSliderThumb
        className={cn(
          "relative shrink-0",
          "size-4.5",
          "-translate-1/2",
          "rounded-full border-[3px] border-white shadow-[0_0_0_1px_rgb(0_0_0/0.08),inset_0_0_0_1px_rgb(0_0_0/0.08)]",
          "outline-hidden ring-1 ring-border/64",
          "origin-left data-[orientation=vertical]:origin-bottom rtl:origin-right",
          "cursor-grab",
          dragging && "cursor-grabbing"
        )}
        data-slot="color-picker-channel-slider-thumb"
      />
    </ArkColorPicker.ChannelSlider>
  );
};

interface ColorPickerEyeDropperTrigger
  extends React.ComponentProps<typeof ArkColorPicker.EyeDropperTrigger>,
    ButtonProps {}

export const ColorPickerEyeDropperTrigger = (
  props: ColorPickerEyeDropperTrigger
) => {
  const { variant = "outline", size = "icon-md", children, ...rest } = props;

  return (
    <ArkColorPicker.EyeDropperTrigger
      data-slot="color-picker-eye-dropper"
      {...rest}
      asChild
    >
      <Button size={size} variant={variant}>
        {children || <Pipette />}
      </Button>
    </ArkColorPicker.EyeDropperTrigger>
  );
};

export const ColorPickerSwatchGroup = (
  props: React.ComponentProps<typeof ArkColorPicker.SwatchGroup>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.SwatchGroup
      className={cn("flex flex-wrap items-center gap-2", className)}
      data-slot="color-picker-swatch-group"
      {...rest}
    />
  );
};

export const ColorPickerSwatchTrigger = (
  props: React.ComponentProps<typeof ArkColorPicker.SwatchTrigger>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.SwatchTrigger
      className={cn(
        "relative",
        "size-8",
        "flex items-center justify-center",
        "rounded-full border border-transparent",
        "transition-[border-color,box-shadow] duration-[120ms] ease-out will-change-transform",
        "outline-hidden focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        "data-[state=checked]:shadow-sm/4 data-[state=checked]:ring-2 data-[state=checked]:ring-foreground/24",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="color-picker-swatch-trigger"
      {...rest}
    />
  );
};

export const ColorPickerSwatch = (
  props: React.ComponentProps<typeof ArkColorPicker.Swatch>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.Swatch
      className={cn(
        "size-full",
        "shrink-0",
        "overflow-hidden",
        "rounded-[inherit]",
        "transition-transform duration-[120ms] ease-out will-change-transform",
        "[@media(hover:hover)_and_(pointer:fine)]:not-[data-state=checked]:hover:scale-110",
        "data-[state=checked]:scale-[0.8]",
        "motion-reduce:transition-none",
        className
      )}
      data-slot="color-picker-swatch"
      {...rest}
    />
  );
};

export const ColorPickerSwatchIndicator = (
  props: React.ComponentProps<typeof ArkColorPicker.SwatchIndicator>
) => {
  const { className, children, ...rest } = props;

  return (
    <ArkColorPicker.SwatchIndicator
      className={cn(
        "absolute inset-0 z-10",
        "flex items-center justify-center",
        "text-white",
        "pointer-events-none",
        "zoom-in-5 animate-in blur-in-md",
        "[&_svg]:size-1/2",
        "motion-reduce:animate-none",
        className
      )}
      data-slot="color-picker-swatch-indicator"
      {...rest}
    >
      {children || <CheckIcon />}
    </ArkColorPicker.SwatchIndicator>
  );
};

export const ColorPickerValue = (
  props: React.ComponentProps<typeof ArkColorPicker.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.ValueText
      className={cn("font-medium text-sm", className)}
      data-slot="color-picker-value"
      {...rest}
    />
  );
};

export const ColorPickerValueSwatch = (
  props: React.ComponentProps<typeof ArkColorPicker.ValueSwatch>
) => {
  const { className, ...rest } = props;

  return (
    <ArkColorPicker.ValueSwatch
      className={cn(
        "relative size-8 shrink-0",
        "overflow-hidden",
        "rounded-full border",
        className
      )}
      data-slot="color-picker-value-swatch"
      {...rest}
    />
  );
};

interface ColorPickerAreaProps
  extends React.ComponentProps<typeof ArkColorPicker.Area> {
  /**
   *
   */
  showDots?: boolean;
}

export const ColorPickerArea = (props: ColorPickerAreaProps) => {
  const { className, showDots = false, children, ...rest } = props;

  return (
    <ArkColorPicker.Area
      className={cn(
        "relative",
        "aspect-square size-full",
        "rounded-xl border",
        "touch-none",
        {
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(circle,#fff3_1px,#0000_1px)] after:bg-size-[8px_8px]":
            showDots,
        },
        className
      )}
      data-slot="color-picker-area"
      {...rest}
    >
      <ArkColorPicker.AreaBackground
        className="size-full rounded-[inherit]"
        data-slot="color-picker-area-background"
      />

      {children}
    </ArkColorPicker.Area>
  );
};

export const ColorPickerAreaThumb = (
  props: React.ComponentProps<typeof ArkColorPicker.AreaThumb>
) => {
  const { className, ...rest } = props;
  const { dragging } = useColorPicker();

  return (
    <ArkColorPicker.AreaThumb
      className={cn(
        "size-4.5",
        "rounded-full border-[3px] border-white shadow-[0_0_0_1px_rgb(0_0_0/0.08),inset_0_0_0_1px_rgb(0_0_0/0.08)]",
        "outline-hidden ring-border/64",
        "cursor-grab",
        dragging && "cursor-grabbing",
        "data-disabled:pointer-events-none data-disabled:opacity-64",
        className
      )}
      data-slot="color-picker-area-thumb"
      {...rest}
    />
  );
};

export const ColorPickerInput = (
  props: Partial<React.ComponentProps<typeof ArkColorPicker.ChannelInput>>
) => {
  const { channel = "hex", ...rest } = props;

  return (
    <ArkColorPicker.ChannelInput
      channel={channel}
      data-slot="color-picker-input"
      {...rest}
    />
  );
};

export const ColorPickerSwatchPreview = (
  props: React.ComponentProps<typeof ark.div>
) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "relative",
        "size-8",
        "shrink-0",
        "rounded-full border",
        "pointer-events-none overflow-hidden",
        "group-data-[size=lg]/input-group:size-5",
        "group-data-[size=md]/input-group:size-4",
        "group-data-[size=sm]/input-group:size-3.5",
        "group-data-disabled/color-input:opacity-64",
        className
      )}
      data-slot="color-picker-input-swatch"
      {...rest}
    >
      <ColorPickerTransparencyGrid />
      <ArkColorPicker.ValueSwatch className="z-1 size-full" />
    </ark.div>
  );
};
