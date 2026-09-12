"use client";

import { type ComponentProps, useState } from "react";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CopyButton } from "@/components/copy-button";
import { packageManagerCommandVariants } from "@/lib/shadcn-command";
import {
  getBaseColor,
  getBorderRadius,
  getPrimaryColor,
} from "@/lib/theme/catalog";
import { DEFAULT_PRIMARY_TONE } from "@/lib/theme/config";
import {
  createNextFontSnippet,
  createThemeExportCss,
  createThemeFontInstallCommand,
} from "@/lib/theme/copy";
import { getThemeFont, type ThemeFont } from "@/lib/theme/fonts";
import { Button } from "@/registry/react/components/button";
import {
  Clipboard,
  ClipboardTrigger,
} from "@/registry/react/components/clipboard";
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/registry/react/components/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import { useConfig } from "@/store/config";

type CopyThemeTab = "cli" | "manual";

const isCopyThemeTab = (value: string): value is CopyThemeTab =>
  value === "cli" || value === "manual";

export const CopyThemeCodeDialog = (props: ComponentProps<typeof Dialog>) => {
  const { children, ...rest } = props;
  const [tab, setTab] = useState<CopyThemeTab>("manual");
  const cfg = useConfig();

  const primary = getPrimaryColor(cfg.primaryColor);
  const base = getBaseColor(cfg.baseColor);
  const radius = getBorderRadius(cfg.borderRadius);
  const primaryTone = cfg.primaryTone ?? DEFAULT_PRIMARY_TONE;
  const fonts = {
    fontHeading: cfg.fontHeading,
    fontSans: cfg.fontSans,
  };
  const sans = getThemeFont(cfg.fontSans);
  const heading = getThemeFont(cfg.fontHeading);
  const cssCode = createThemeExportCss(
    primary.cssVars,
    base.cssVars,
    radius.cssVars,
    fonts,
    primaryTone
  );
  const fontInstallCommand = createThemeFontInstallCommand(fonts);
  const nextFontSnippet = createNextFontSnippet(fonts);
  const packageManager = cfg.packageManager || "pnpm";
  const commandVariants = packageManagerCommandVariants(fontInstallCommand);
  const commandToCopy = commandVariants?.[packageManager] ?? fontInstallCommand;

  const copyValue = (() => {
    switch (tab) {
      case "cli":
        return commandToCopy;
      case "manual":
        return cssCode;
      default: {
        const exhaustive: never = tab;
        return exhaustive;
      }
    }
  })();

  const copyLabel = (() => {
    switch (tab) {
      case "cli":
        return "Copy command";
      case "manual":
        return "Copy Theme";
      default: {
        const exhaustive: never = tab;
        return exhaustive;
      }
    }
  })();

  return (
    <Dialog {...rest}>
      {children}

      <DialogContent size="lg">
        <Tabs
          className="flex min-h-0 flex-1 flex-col gap-0"
          onValueChange={({ value }) => {
            if (isCopyThemeTab(value)) {
              setTab(value);
            }
          }}
          value={tab}
        >
          <DialogHeader className="flex-row items-center pe-12">
            <DialogTitle className="sr-only">Copy theme</DialogTitle>
            <DialogDescription className="sr-only">
              Copy theme tokens or install the selected fonts.
            </DialogDescription>
            <TabsList pill>
              <TabsTrigger value="manual">Manual</TabsTrigger>
              <TabsTrigger value="cli">CLI</TabsTrigger>
            </TabsList>
          </DialogHeader>

          <DialogBody>
            <TabsContent className="flex flex-col gap-4" value="manual">
              <CopyThemeSectionHeader
                description="Copy the CSS variables for this preset."
                title="Theme Tokens"
              />
              <ThemeCodeFigure
                code={cssCode}
                language="css"
                title="globals.css"
              />
              <ThemeFontsSummary heading={heading} sans={sans} />
            </TabsContent>

            <TabsContent className="flex flex-col gap-4" value="cli">
              <CopyThemeSectionHeader
                description="Install the selected typefaces with your package manager, or use next/font in a Next.js app."
                title="Fonts"
              />
              <CodeBlockCommand __npm__={fontInstallCommand} className="mt-0" />
              <ThemeCodeFigure
                code={nextFontSnippet}
                language="tsx"
                title="layout.tsx"
              />
              <ThemeFontsSummary heading={heading} sans={sans} />
            </TabsContent>
          </DialogBody>

          <DialogFooter className="sm:flex-col sm:justify-stretch">
            <Clipboard className="w-full" value={copyValue}>
              <ClipboardTrigger asChild>
                <Button className="w-full">{copyLabel}</Button>
              </ClipboardTrigger>
            </Clipboard>
          </DialogFooter>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

const CopyThemeSectionHeader = ({
  description,
  title,
}: {
  description: string;
  title: string;
}) => (
  <div className="flex flex-col gap-1.5">
    <p className="font-heading font-semibold text-lg leading-none">{title}</p>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

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
        <pre className="m-0 w-max min-w-full bg-code px-4 py-3.5 font-mono text-sm leading-6 outline-none">
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

const ThemeFontsSummary = ({
  heading,
  sans,
}: {
  heading: ThemeFont;
  sans: ThemeFont;
}) => (
  <div className="flex flex-col gap-2">
    <ThemeFontRow font={sans} label="Sans" />
    <ThemeFontRow font={heading} label="Heading" />
  </div>
);

const ThemeFontRow = ({ font, label }: { font: ThemeFont; label: string }) => (
  <div className="flex items-baseline justify-between gap-4">
    <span className="text-muted-foreground text-sm">{label}</span>
    <span className="text-sm" style={{ fontFamily: font.family }}>
      {font.label}
    </span>
  </div>
);
