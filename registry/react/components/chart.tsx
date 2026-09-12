"use client";

import { ark } from "@ark-ui/react/factory";
import { createContext } from "@ark-ui/react/utils";
import React from "react";
import {
  type DefaultLegendContentProps,
  type DefaultTooltipContentProps,
  Legend,
  ResponsiveContainer,
  Tooltip,
  type TooltipValueType,
} from "recharts";
import { cn } from "@/lib/utils";

const THEMES = { dark: ".dark", light: "" } as const;

const INITIAL_DIMENSION = { height: 200, width: 320 } as const;

type TooltipNameType = number | string;

export type ChartConfig = Record<
  string,
  (
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
    | { color?: string; theme?: never }
  ) & {
    icon?: React.ComponentType;
    label?: React.ReactNode;
  }
>;

type ChartTooltipContentProps = React.ComponentProps<typeof Tooltip> &
  React.ComponentProps<"div"> & {
    hideIndicator?: boolean;
    hideLabel?: boolean;
    indicator?: "dashed" | "dot" | "line";
    labelKey?: string;
    nameKey?: string;
  } & Omit<
    DefaultTooltipContentProps<TooltipValueType, TooltipNameType>,
    "accessibilityLayer"
  >;

type ChartLegendContentProps = React.ComponentProps<"div"> &
  DefaultLegendContentProps & {
    hideIcon?: boolean;
    nameKey?: string;
  };

type TooltipPayloadItem = NonNullable<
  ChartTooltipContentProps["payload"]
>[number];

interface ChartContextProps {
  config: ChartConfig;
}

const [ChartProvider, useChart] = createContext<ChartContextProps>({
  hookName: "useChart",
  name: "ChartContext",
  providerName: "ChartContainer",
});

interface ChartContainerProps extends React.ComponentProps<typeof ark.div> {
  children: React.ComponentProps<typeof ResponsiveContainer>["children"];
  config: ChartConfig;
  initialDimension?: {
    height: number;
    width: number;
  };
}

export const ChartContainer = (props: ChartContainerProps) => {
  const {
    children,
    className,
    config,
    id,
    initialDimension = INITIAL_DIMENSION,
    ...rest
  } = props;

  const uniqueId = React.useId();
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`;

  return (
    <ChartProvider value={{ config }}>
      <ark.div
        className={cn(
          "flex justify-center",
          "aspect-video",
          "text-xs",
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
          "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50",
          "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border",
          "[&_.recharts-dot[stroke='#fff']]:stroke-transparent",
          "[&_.recharts-layer]:outline-hidden",
          "[&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border",
          "[&_.recharts-radial-bar-background-sector]:fill-muted",
          "[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted",
          "[&_.recharts-reference-line_[stroke='#ccc']]:stroke-border",
          "[&_.recharts-sector]:outline-hidden",
          "[&_.recharts-sector[stroke='#fff']]:stroke-transparent",
          "[&_.recharts-surface]:outline-hidden",
          className
        )}
        data-chart={chartId}
        data-slot="chart"
        {...rest}
      >
        <ChartStyle config={config} id={chartId} />
        <ResponsiveContainer initialDimension={initialDimension}>
          {children}
        </ResponsiveContainer>
      </ark.div>
    </ChartProvider>
  );
};

export const ChartStyle = ({
  config,
  id,
}: {
  config: ChartConfig;
  id: string;
}) => {
  const colorConfig = Object.entries(config).filter(
    ([, itemConfig]) => itemConfig.theme ?? itemConfig.color
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
            ${prefix} [data-chart=${id}] {
            ${colorConfig
              .map(([key, itemConfig]) => {
                const color =
                  itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ??
                  itemConfig.color;
                return color ? `  --color-${key}: ${color};` : null;
              })
              .join("\n")}
            }
            `
          )
          .join("\n"),
      }}
    />
  );
};

const formatTooltipValue = (value: unknown) => {
  if (typeof value === "number") {
    return value.toLocaleString();
  }

  if (value === undefined || value === null) {
    return null;
  }

  return String(value);
};

const getPayload = (config: ChartConfig, payload: unknown, key: string) => {
  if (typeof payload !== "object" || payload === null) {
    return;
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
};

const ChartTooltipItem = ({
  color,
  config,
  formatter,
  hideIndicator,
  index,
  indicator,
  item,
  nameKey,
  nestLabel,
  tooltipLabel,
}: {
  color?: string;
  config: ChartConfig;
  formatter: ChartTooltipContentProps["formatter"];
  hideIndicator: boolean;
  index: number;
  indicator: "dashed" | "dot" | "line";
  item: TooltipPayloadItem;
  nameKey?: string;
  nestLabel: boolean;
  tooltipLabel: React.JSX.Element | null;
}) => {
  const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
  const itemConfig = getPayload(config, item, key);
  const indicatorColor = color ?? item.payload?.fill ?? item.color;
  const formattedValue = formatTooltipValue(item.value);

  let swatch: React.ReactNode = null;

  if (itemConfig?.icon) {
    swatch = <itemConfig.icon />;
  } else if (!hideIndicator) {
    swatch = (
      <div
        className={cn(
          "shrink-0 rounded-sm border-(--color-border) bg-(--color-bg)",
          {
            "h-2.5 w-2.5": indicator === "dot",
            "my-0.5": nestLabel && indicator === "dashed",
            "w-0 border-[1.5px] border-dashed bg-transparent":
              indicator === "dashed",
            "w-1": indicator === "line",
          }
        )}
        style={
          {
            "--color-bg": indicatorColor,
            "--color-border": indicatorColor,
          } as React.CSSProperties
        }
      />
    );
  }

  return (
    <div
      className={cn(
        "w-full",
        "flex flex-wrap items-stretch gap-2",
        "[&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
        indicator === "dot" && "items-center"
      )}
    >
      {formatter && item?.value !== undefined && item.name ? (
        formatter(item.value, item.name, item, index, item.payload)
      ) : (
        <>
          {swatch}
          <div
            className={cn(
              "flex flex-1 justify-between leading-none",
              nestLabel ? "items-end" : "items-center"
            )}
          >
            <div className="grid gap-1.5">
              {nestLabel ? tooltipLabel : null}
              <span className="text-muted-foreground">
                {itemConfig?.label ?? item.name}
              </span>
            </div>
            {formattedValue === null ? null : (
              <span className="font-medium font-mono text-foreground tabular-nums">
                {formattedValue}
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export const ChartTooltip = Tooltip;

export const ChartTooltipContent = (props: ChartTooltipContentProps) => {
  const {
    active,
    className,
    color,
    formatter,
    hideIndicator = false,
    hideLabel = false,
    indicator = "dot",
    label,
    labelClassName,
    labelFormatter,
    labelKey,
    nameKey,
    payload,
  } = props;

  const { config } = useChart();

  const tooltipLabel = React.useMemo((): React.JSX.Element | null => {
    if (hideLabel || !payload?.length) {
      return null;
    }

    const [item] = payload;
    const key = `${labelKey ?? item?.dataKey ?? item?.name ?? "value"}`;
    const itemConfig = getPayload(config, item, key);
    const value =
      !labelKey && typeof label === "string"
        ? (config[label]?.label ?? label)
        : itemConfig?.label;

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null;
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>;
  }, [
    config,
    hideLabel,
    label,
    labelClassName,
    labelFormatter,
    labelKey,
    payload,
  ]);

  if (!(active && payload?.length)) {
    return null;
  }

  const nestLabel = payload.length === 1 && indicator !== "dot";
  const items = payload.filter((item) => item.type !== "none");

  return (
    <div
      className={cn(
        "min-w-32",
        "grid items-start gap-1.5",
        "px-2.5 py-1.5",
        "bg-background",
        "text-xs",
        "rounded-lg border border-border/50 shadow-lg/5",
        className
      )}
    >
      {nestLabel ? null : <div className="contents">{tooltipLabel}</div>}
      <div className="grid gap-1.5">
        {items.map((item, index) => (
          <ChartTooltipItem
            color={color}
            config={config}
            formatter={formatter}
            hideIndicator={hideIndicator}
            index={index}
            indicator={indicator}
            item={item}
            key={`${nameKey ?? item.name ?? item.dataKey ?? "value"}`}
            nameKey={nameKey}
            nestLabel={nestLabel}
            tooltipLabel={tooltipLabel}
          />
        ))}
      </div>
    </div>
  );
};

export const ChartLegend = Legend;

export const ChartLegendContent = (props: ChartLegendContentProps) => {
  const {
    className,
    hideIcon = false,
    nameKey,
    payload,
    verticalAlign = "bottom",
  } = props;

  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item) => {
          const key = `${nameKey ?? item.dataKey ?? "value"}`;
          const itemConfig = getPayload(config, item, key);

          return (
            <div
              className={cn(
                "flex items-center gap-1.5",
                "[&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
              key={key}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="size-2 shrink-0 rounded-sm"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
};
