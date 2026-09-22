"use client";

import {
  Slider as ArkSlider,
  useSlider as useArkSlider,
  useSliderContext as useArkSliderContext,
} from "@ark-ui/react/slider";
import type React from "react";
import { cn } from "@/lib/utils";
import { FieldLabel } from "@/registry/react/components/field";

export const useSlider = useArkSlider;
export const useSliderContext = useArkSliderContext;
export const SliderRootProvider = ArkSlider.RootProvider;

interface SliderProps extends React.ComponentProps<typeof ArkSlider.Root> {
  /**
   * The interval between markers.
   *
   * @default 1
   */
  markerInterval?: number;
  /**
   * The labels to show on the markers.
   *
   * @default []
   */
  markerLabels?: string[];
  /**
   * Whether to show markers.
   *
   * @default false
   */
  showMarkers?: boolean;
}

export const Slider = (props: SliderProps) => {
  const {
    value,
    defaultValue,
    min = 0,
    max = 100,
    markerInterval = 1,
    showMarkers = false,
    markerLabels = [],
    tabIndex,
    className,
    children,
    ...rest
  } = props;

  let thumbCount = 1;
  if (Array.isArray(value)) {
    thumbCount = value.length;
  } else if (Array.isArray(defaultValue)) {
    thumbCount = defaultValue.length;
  }

  return (
    <ArkSlider.Root
      className={cn(
        "flex flex-col gap-3",
        "data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:h-full",
        className
      )}
      data-slot="slider"
      defaultValue={defaultValue}
      max={max}
      min={min}
      value={value}
      {...rest}
    >
      {children}

      <ArkSlider.Control
        className={cn(
          "relative",
          "w-full",
          "flex items-center",
          "touch-none select-none",
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-40 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
          "has-data-[slot=slider-marker]:data-[orientation=horizontal]:mb-5",
          "has-data-[slot=slider-marker]:data-[orientation=vertical]:me-5",
          "data-disabled:pointer-events-none data-disabled:opacity-64"
        )}
        data-slot="slider-control"
      >
        <ArkSlider.Track
          className={cn(
            "grow",
            "bg-input/64",
            "rounded-full",
            "select-none overflow-hidden",
            "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
            "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2"
          )}
          data-slot="slider-track"
        >
          <ArkSlider.Range
            className={cn(
              "absolute",
              "bg-primary",
              "select-none",
              "data-[orientation=horizontal]:h-full",
              "data-[orientation=vertical]:w-full data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch"
            )}
            data-slot="slider-range"
          />
        </ArkSlider.Track>

        {Array.from({ length: thumbCount }, (_, index) => {
          const key = `slider-thumb-${index}`;

          return (
            <ArkSlider.Thumb
              className={cn(
                "relative",
                "shrink-0",
                "h-4.5 w-[calc(--spacing(4.5)*1.375)]",
                "data-[orientation=vertical]:h-[calc(--spacing(4.5)*1.375)] data-[orientation=vertical]:w-4.5",
                "bg-white",
                "rounded-full border border-input shadow-xs/4",
                "cursor-grab select-none",
                "origin-left data-[orientation=vertical]:origin-bottom rtl:origin-right",
                "transition-[box-shadow,scale] duration-150 ease-out",
                "focus-visible:border-ring/64 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring/24",
                "data-dragging:scale-105 data-dragging:cursor-grabbing",
                "pointer-coarse:after:absolute pointer-coarse:after:h-full pointer-coarse:after:min-h-11",
                "motion-reduce:transition-none"
              )}
              data-slot="slider-thumb"
              index={index}
              key={key}
              tabIndex={tabIndex ?? undefined}
            >
              <ArkSlider.HiddenInput />
            </ArkSlider.Thumb>
          );
        })}

        {showMarkers ? (
          <ArkSlider.MarkerGroup
            className={cn(
              "absolute!",
              "font-medium text-muted-foreground text-xs",
              "pointer-events-none",
              "data-[orientation=horizontal]:inset-x-[calc(var(--slider-thumb-width)/-4)] data-[orientation=horizontal]:top-full data-[orientation=horizontal]:mt-2",
              "data-[orientation=vertical]:inset-s-full data-[orientation=vertical]:inset-y-[calc(var(--slider-thumb-height)/-4)] data-[orientation=vertical]:ms-2"
            )}
            data-slot="slider-marker-group"
          >
            {Array.from({ length: max - min + 1 }, (_, index) => {
              const markerValue = min + index;

              return (
                <ArkSlider.Marker
                  className={cn(
                    "group/marker",
                    "flex items-center justify-center gap-2",
                    "data-[orientation=horizontal]:w-0 data-[orientation=horizontal]:flex-col",
                    "data-[orientation=vertical]:h-0 data-[orientation=vertical]:flex-row",
                    "data-[state=at-value]:text-foreground data-[state=under-value]:text-foreground"
                  )}
                  data-interval={
                    markerValue % markerInterval === 0 ? undefined : ""
                  }
                  data-slot="slider-marker"
                  key={String(markerValue)}
                  value={markerValue}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "bg-muted-foreground/64 group-data-[state=at-value]/marker:bg-foreground group-data-[state=under-value]/marker:bg-foreground",
                      "group-data-[orientation=horizontal]/marker:h-1 group-data-[orientation=horizontal]/marker:w-px",
                      "group-data-[orientation=vertical]/marker:h-px group-data-[orientation=vertical]/marker:w-1",
                      "group-data-interval/marker:group-data-[orientation=horizontal]/marker:h-0.5",
                      "group-data-interval/marker:group-data-[orientation=vertical]/marker:w-0.5"
                    )}
                  />

                  <span className="group-data-interval/marker:opacity-0">
                    {markerLabels?.[index] ?? markerValue}
                  </span>
                </ArkSlider.Marker>
              );
            })}
          </ArkSlider.MarkerGroup>
        ) : null}
      </ArkSlider.Control>
    </ArkSlider.Root>
  );
};

export const SliderLabel = (
  props: React.ComponentProps<typeof ArkSlider.Label>
) => {
  const { children, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkSlider.Label data-slot="slider-label" {...rest}>
        {children}
      </ArkSlider.Label>
    </FieldLabel>
  );
};

export const SliderValue = (
  props: React.ComponentProps<typeof ArkSlider.ValueText>
) => {
  const { className, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkSlider.ValueText
        className={cn("ms-auto tabular-nums", className)}
        data-slot="slider-value"
        {...rest}
      />
    </FieldLabel>
  );
};
