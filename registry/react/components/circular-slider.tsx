"use client";

import {
  AngleSlider as ArkAngleSlider,
  useAngleSlider as useArkAngleSlider,
  useAngleSliderContext as useArkAngleSliderContext,
} from "@ark-ui/react/angle-slider";
import { createContext } from "@ark-ui/react/utils";
import React from "react";
import { cn } from "@/lib/utils";
import { FieldLabel } from "@/registry/react/components/field";
import { FormatNumber } from "@/registry/react/components/format";

export const useCircularSlider = useArkAngleSlider;
export const useCircularSliderContext = useArkAngleSliderContext;

interface CircularSliderContextValue {
  ringRadius: number;
  size: number;
  thickness: number;
  thumbSize: number;
}

const [CircularSliderContextProvider, _useCircularSlider] =
  createContext<CircularSliderContextValue>({
    name: "CircularSliderContext",
    providerName: "CircularSlider",
  });

export interface CircularSliderRootProviderProps
  extends React.ComponentProps<typeof ArkAngleSlider.RootProvider>,
    Partial<Pick<CircularSliderContextValue, "thickness" | "size">> {}

export const CircularSliderRootProvider = (
  props: CircularSliderRootProviderProps
) => {
  const { size = 100, thickness = 6, children, ...rest } = props;

  return (
    <CircularSliderContextProvider
      value={getCircularSliderContextValue(size, thickness)}
    >
      <ArkAngleSlider.RootProvider {...rest}>
        {children}
      </ArkAngleSlider.RootProvider>
    </CircularSliderContextProvider>
  );
};

export interface CircularSliderProps
  extends React.ComponentProps<typeof ArkAngleSlider.Root>,
    Partial<Pick<CircularSliderContextValue, "thickness" | "size">> {
  markers?: boolean | number[];
  markersAtSteps?: boolean;
}

export const CircularSlider = (props: CircularSliderProps) => {
  const {
    className,
    children,
    size = 100,
    thickness = 6,
    markers,
    markersAtSteps = false,
    step = 1,
    style,
    ...rest
  } = props;

  const markerValues = React.useMemo(() => {
    if (Array.isArray(markers) && markers.length > 0) {
      return markers;
    }
    if (markers === true) {
      return markersAtSteps
        ? Array.from({ length: Math.floor(360 / step) }, (_, i) => i * step)
        : CLOCK_MARKER_ANGLES;
    }
    return null;
  }, [markers, markersAtSteps, step]);

  const values = React.useMemo(
    () => getCircularSliderContextValue(size, thickness),
    [size, thickness]
  );

  return (
    <CircularSliderContextProvider value={values}>
      <ArkAngleSlider.Root
        className={cn(
          "relative",
          "flex flex-col items-center justify-center",
          "data-disabled:pointer-events-none data-disabled:opacity-64",
          className
        )}
        data-slot="circular-slider"
        step={step}
        {...rest}
        style={
          {
            ...style,
            "--thickness": `${thickness}px`,
            height: size,
            width: size,
          } as React.CSSProperties
        }
      >
        <ArkAngleSlider.Control
          className="group/circular-slider-control absolute inset-0 cursor-grab active:cursor-grabbing"
          data-slot="circular-slider-control"
        >
          <CircularSliderProgressRing />
          {markerValues ? (
            <CircularSliderMarkerGroup>
              {markerValues.map((value) => (
                <CircularSliderMarker key={value} value={value} />
              ))}
            </CircularSliderMarkerGroup>
          ) : null}
          <CircularSliderThumb />
        </ArkAngleSlider.Control>

        {children}

        <ArkAngleSlider.HiddenInput />
      </ArkAngleSlider.Root>
    </CircularSliderContextProvider>
  );
};

const CircularSliderProgressRing = () => {
  const api = useCircularSliderContext();
  const { size, thickness, ringRadius } = _useCircularSlider();

  const center = size / 2;
  const radians = (api.value * Math.PI) / 180;
  const endX = center + ringRadius * Math.sin(radians);
  const endY = center - ringRadius * Math.cos(radians);
  const largeArcFlag = api.value > 180 ? 1 : 0;
  const progressPath =
    api.value === 0
      ? null
      : `M ${center} ${center - ringRadius} A ${ringRadius} ${ringRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;

  return (
    <svg
      aria-hidden
      className="pointer-events-none"
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
    >
      <circle
        className="stroke-muted"
        cx={center}
        cy={center}
        fill="transparent"
        r={ringRadius}
        strokeWidth={thickness}
      />
      {progressPath ? (
        <g
          className="rtl:-scale-x-100"
          style={{ transformOrigin: `${center}px ${center}px` }}
        >
          <path
            className="stroke-primary [stroke-linecap:round]"
            d={progressPath}
            fill="transparent"
            strokeWidth={thickness}
          />
        </g>
      ) : null}
    </svg>
  );
};

export const CircularSliderLabel = (
  props: React.ComponentProps<typeof ArkAngleSlider.Label>
) => {
  const { children, ...rest } = props;

  return (
    <FieldLabel asChild>
      <ArkAngleSlider.Label data-slot="circular-slider-label" {...rest}>
        {children}
      </ArkAngleSlider.Label>
    </FieldLabel>
  );
};

export const CircularSliderThumb = (
  props: React.ComponentProps<typeof ArkAngleSlider.Thumb>
) => {
  const { className, style, ...rest } = props;

  const { dragging } = useCircularSliderContext();
  const { thumbSize, ringRadius } = _useCircularSlider();

  const halfThumb = thumbSize / 2;

  return (
    <ArkAngleSlider.Thumb
      className={cn(
        "absolute inset-0 z-10 flex items-center justify-center",
        "outline-hidden",
        "focus-visible:[&_span]:border-ring/64 focus-visible:[&_span]:outline-hidden focus-visible:[&_span]:ring-2 focus-visible:[&_span]:ring-ring/24",
        "active:[&_span]:scale-110",
        "rtl:pointer-events-none",
        className
      )}
      data-slot="circular-slider-thumb"
      {...rest}
      style={
        {
          ...style,
          "--size": `${thumbSize}px`,
        } as React.CSSProperties
      }
    >
      <span
        className={cn(
          "absolute",
          "shrink-0",
          "bg-white",
          "size-(--size)",
          "rounded-full shadow-xs/4 ring-2 ring-border",
          "transition-[box-shadow,scale]",
          "cursor-grab hover:ring-[3px]",
          dragging && "cursor-grabbing",
          "motion-reduce:transition-none"
        )}
        style={
          {
            insetBlockStart: `calc(50% - ${ringRadius}px - ${halfThumb}px)`,
            insetInlineStart: `calc(50% - ${halfThumb}px)`,
          } as React.CSSProperties
        }
      />
    </ArkAngleSlider.Thumb>
  );
};

interface CircularSliderValueProps
  extends Omit<
    React.ComponentProps<typeof ArkAngleSlider.ValueText>,
    "prefix"
  > {
  prefix?: React.ReactNode | string;
  suffix?: React.ReactNode | string;
}

export const CircularSliderValue = (props: CircularSliderValueProps) => {
  const { prefix = "", suffix = "", className, ...rest } = props;

  const { value } = useCircularSliderContext();

  return (
    <FieldLabel asChild>
      <ArkAngleSlider.ValueText
        className={cn(
          "gap-1",
          "tabular-nums",
          "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          className
        )}
        data-slot="circular-slider-value"
        {...rest}
      >
        {prefix} <FormatNumber useGrouping={false} value={value} /> {suffix}
      </ArkAngleSlider.ValueText>
    </FieldLabel>
  );
};

export const CircularSliderMarkerGroup = (
  props: React.ComponentProps<typeof ArkAngleSlider.MarkerGroup>
) => {
  const { className, ...rest } = props;

  return (
    <ArkAngleSlider.MarkerGroup
      className={cn(
        "absolute inset-0 z-0",
        "rounded-full",
        "pointer-events-none",
        className
      )}
      data-slot="circular-slider-marker-group"
      {...rest}
    />
  );
};

export const CircularSliderMarker = (
  props: React.ComponentProps<typeof ArkAngleSlider.Marker>
) => {
  const { className, style, ...rest } = props;

  const { size, thickness } = _useCircularSlider();

  const ringRadius = size / 2 - thickness / 2;
  const markerHeight = Math.max(8, Math.min(thickness * 1.1, 16));
  const markerWidth = Math.max(4, Math.min(thickness * 0.4, 6));
  const markerOffset =
    size / 2 - ringRadius - markerHeight / 2 + (thickness + 4);

  return (
    <ArkAngleSlider.Marker
      className={cn(
        "absolute inset-s-[calc(50%-1px)] top-0 bottom-0 w-0.5",
        "before:absolute before:inset-s-1/2 before:top-(--marker-offset) before:-translate-x-1/2",
        "before:h-(--marker-height) before:w-(--marker-width) before:rounded-md before:bg-border",
        "data-[state=at-value]:before:bg-primary",
        "data-[state=under-value]:before:bg-primary",
        className
      )}
      data-slot="circular-slider-marker"
      style={
        {
          ...style,
          "--marker-height": `${markerHeight}px`,
          "--marker-offset": `${markerOffset}px`,
          "--marker-width": `${markerWidth}px`,
        } as React.CSSProperties
      }
      {...rest}
    />
  );
};

const getCircularSliderContextValue = (size: number, thickness: number) => ({
  ringRadius: size / 2 - thickness / 2,
  size,
  thickness,
  thumbSize: Math.max(thickness + 8, 16),
});

const CLOCK_MARKER_ANGLES = [0, 60, 120, 180, 240, 300];
