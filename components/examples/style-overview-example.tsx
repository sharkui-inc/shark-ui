"use client";

import {
  getBaseColor,
  getBorderRadius,
  getPrimaryColor,
} from "@/lib/theme/catalog";
import { getThemeFont } from "@/lib/theme/fonts";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import { useConfig } from "@/store/config";

export const StyleOverviewExample = (props: React.ComponentProps<"div">) => {
  const config = useConfig();
  const primary = getPrimaryColor(config.primaryColor);
  const base = getBaseColor(config.baseColor);
  const radius = getBorderRadius(config.borderRadius);
  const heading = getThemeFont(config.fontHeading);
  const sans = getThemeFont(config.fontSans);

  return (
    <Card {...props}>
      <CardHeader
        description={`${primary.label} · ${base.label}`}
        title="Style overview"
      />
      <CardContent className="flex flex-col gap-5">
        <div className="flex h-16 overflow-hidden rounded-xl border">
          {TOKENS.map((item) => (
            <div
              className="relative min-w-0 flex-1 after:pointer-events-none after:absolute after:inset-0 after:border-border after:border-e last:after:border-e-0"
              key={item.token}
              style={{ background: `var(--${item.token})` }}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {TOKENS.map((item) => (
            <div
              className="flex min-w-0 items-center gap-2 px-1 py-1"
              key={item.token}
            >
              <span
                className={cn(
                  "relative size-4 shrink-0 rounded-sm",
                  "after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten"
                )}
                style={{ background: `var(--${item.token})` }}
              />
              <span className="min-w-0 truncate font-medium text-sm">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-end justify-between gap-3 border-t pt-4">
          <div className="min-w-0">
            <p className="truncate font-heading font-semibold text-xl tracking-[-0.02em]">
              {heading.label}
            </p>
            <p className="truncate text-muted-foreground text-sm">
              {sans.label}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="size-10 shrink-0 bg-primary"
            style={{ borderRadius: "var(--radius-lg)" }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const TOKENS = [
  { name: "Background", token: "background" },
  { name: "Foreground", token: "foreground" },
  { name: "Primary", token: "primary" },
  { name: "Secondary", token: "secondary" },
  { name: "Muted", token: "muted" },
  { name: "Accent", token: "accent" },
  { name: "Destructive", token: "destructive" },
  { name: "Success", token: "success" },
  { name: "Info", token: "info" },
  { name: "Warning", token: "warning" },
] as const;
