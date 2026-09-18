"use client";

import type { ComponentProps } from "react";
import { CopyButton } from "@/components/copy-button";
import {
  getBaseColor,
  getBorderRadius,
  getPrimaryColor,
} from "@/lib/theme/catalog";
import { DEFAULT_PRIMARY_TONE } from "@/lib/theme/config";
import { createThemeExportCss } from "@/lib/theme/copy";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/registry/react/components/dialog";
import { useConfig } from "@/store/config";

export const CopyThemeCodeDialog = (props: ComponentProps<typeof Dialog>) => {
  const { children, ...rest } = props;
  const cfg = useConfig();

  const primary = getPrimaryColor(cfg.primaryColor);
  const base = getBaseColor(cfg.baseColor);
  const radius = getBorderRadius(cfg.borderRadius);
  const primaryTone = cfg.primaryTone ?? DEFAULT_PRIMARY_TONE;
  const cssCode = createThemeExportCss(
    primary.cssVars,
    base.cssVars,
    radius.cssVars,
    primaryTone
  );

  return (
    <Dialog {...rest}>
      {children}

      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Theme Tokens</DialogTitle>
          <DialogDescription>
            Copy the CSS variables for this preset.
          </DialogDescription>
        </DialogHeader>

        <DialogBody>
          <ThemeCodeFigure code={cssCode} language="css" title="globals.css" />
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

const ThemeCodeFigure = ({
  code,
  language,
  title,
}: {
  code: string;
  language: string;
  title: string;
}) => {
  const lines = code.split("\n");

  return (
    <figure
      className="relative mt-0 w-full min-w-0 overflow-hidden rounded-2xl border bg-code text-code-foreground"
      data-slot="theme-code"
    >
      <figcaption
        className="flex min-h-11 items-center gap-2 border-b px-4 py-2.5 font-mono text-[.8125rem] text-muted-foreground"
        data-language={language}
      >
        {title}
      </figcaption>
      <CopyButton className="absolute inset-e-1.5 top-1.5" value={code} />
      <div className="max-h-72 w-full min-w-0 overflow-auto">
        <pre className="m-0 w-max min-w-full bg-code px-4 py-3.5 font-mono text-sm leading-6">
          <code
            className="flex w-max min-w-full flex-col"
            data-language={language}
          >
            {lines.map((line, index) => {
              const key = line ? `line-${index}` : `blank-${index}`;

              return (
                <span
                  className="min-h-6 w-max min-w-full whitespace-pre pe-4 text-code-foreground"
                  key={key}
                >
                  {line || "\u00a0"}
                </span>
              );
            })}
          </code>
        </pre>
      </div>
    </figure>
  );
};
