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
import { FormatNumber } from "@/registry/react/components/format";

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

interface ChartTooltipContentProps
  extends Omit<React.ComponentProps<"div">, "content">,
    Omit<
      DefaultTooltipContentProps<TooltipValueType, TooltipNameType>,
      "accessibilityLayer"
    > {
  active?: boolean;
  color?: string;
  hideIndicator?: boolean;
  hideLabel?: boolean;
  indicator?: "dashed" | "dot" | "line";
  labelKey?: string;
  nameKey?: string;
}

interface ChartLegendContentProps
  extends React.ComponentProps<"div">,
    Pick<DefaultLegendContentProps, "payload" | "verticalAlign"> {
  hideIcon?: boolean;
  nameKey?: string;
}

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
    config,
    id,
    initialDimension = INITIAL_DIMENSION,
    className,
    children,
    ...rest
  } = props;

  const uniqueId = React.useId();
  const chartId = `chart-${id ?? uniqueId.replace(/:/gu, "")}`;

  return (
    <ChartProvider value={{ config }}>
      <ark.div
        className={cn(
          "flex justify-center",
          "aspect-video",
          "text-xs",
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
          "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/48",
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

interface ChartStyleProps {
  config: ChartConfig;
  id: string;
}

export const ChartStyle = (props: ChartStyleProps) => {
  const { config, id } = props;

  const colorConfig = Object.entries(config).filter(
    ([, itemConfig]) => itemConfig.theme ?? itemConfig.color
  );

  if (!colorConfig.length) {
    return null;
  }

  const styles = Object.entries(THEMES)
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
    .join("\n");

  return <style>{styles}</style>;
};

const formatTooltipValue = (value: unknown) => {
  if (typeof value === "number") {
    return <FormatNumber value={value} />;
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

interface ChartTooltipItemProps {
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
}

const ChartTooltipItem = (props: ChartTooltipItemProps) => {
  const {
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
  } = props;

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
          "shrink-0",
          "bg-(--color-bg)",
          "border-border rounded-sm",
          {
            "my-0.5": nestLabel && indicator === "dashed",
            "size-2.5": indicator === "dot",
            [cn("w-0", "bg-transparent", "border-[1.5px] border-dashed")]:
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
        "[&>svg]:text-muted-foreground [&>svg]:size-2.5",
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
              "flex-1",
              "flex justify-between gap-3",
              "leading-none",
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
              <span
                className="text-foreground font-mono font-medium tabular-nums"
                dir="ltr"
                style={{ unicodeBidi: "isolate" }}
              >
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
    className,
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
        "border-border/48 rounded-lg border shadow-lg/4",
        className
      )}
      data-slot="chart-tooltip-content"
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
            key={`${item.name ?? item.dataKey ?? "value"}`}
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
    hideIcon = false,
    nameKey,
    payload,
    verticalAlign = "bottom",
    className,
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
      data-slot="chart-legend-content"
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
                "[&>svg]:text-muted-foreground [&>svg]:size-3"
              )}
              key={`${item.value ?? item.dataKey ?? "value"}`}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className={cn("size-2 shrink-0", "rounded-sm")}
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
