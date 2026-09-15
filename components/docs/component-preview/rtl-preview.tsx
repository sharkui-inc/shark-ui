"use client";

import { InfoIcon } from "lucide-react";
import type React from "react";
import {
  type PreviewLanguage,
  PreviewLocaleProvider,
  usePreviewLocale,
} from "@/hooks/use-preview-locale";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { LocaleProvider, useLocale } from "@/registry/react/components/locale";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";
import {
  ToggleTooltip,
  ToggleTooltipContent,
  ToggleTooltipTrigger,
} from "@/registry/react/components/toggle-tooltip";

const previewLocales = [
  {
    a11yLabel: "Translation information",
    content:
      "The text in this example is automatically translated and may contain errors.",
    dir: "ltr",
    label: "English",
    language: "en",
    locale: "en-US",
  },
  {
    a11yLabel: "معلومات عن الترجمة",
    content: "تمت ترجمة النص في هذا المثال تلقائيًا وقد يحتوي على أخطاء.",
    dir: "rtl",
    label: "Arabic (عربي)",
    language: "ar",
    locale: "ar-SA",
  },
  {
    a11yLabel: "מידע על התרגום",
    content: "הטקסט בדוגמה זו תורגם באופן אוטומטי ועשוי להכיל שגיאות.",
    dir: "rtl",
    label: "Hebrew (עברית)",
    language: "he",
    locale: "he-IL",
  },
] as const;

const getPreviewLocale = (language: PreviewLanguage) =>
  previewLocales.find((item) => item.language === language) ??
  previewLocales[0];

interface RTLPreviewProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  children?: React.ReactNode | ((language: PreviewLanguage) => React.ReactNode);
}

type RTLPreviewProviderProps = React.ComponentProps<"div">;

type RTLPreviewContentProps = React.ComponentProps<"div">;

export const RTLPreviewProvider = (props: RTLPreviewProviderProps) => {
  const { children, className, ...rest } = props;

  return (
    <PreviewLocaleProvider>
      <div
        className={cn("w-full", "flex flex-col", className)}
        data-slot="rtl-preview"
        dir="ltr"
        {...rest}
      >
        {children}
      </div>
    </PreviewLocaleProvider>
  );
};

export const RTLPreviewHeader = () => {
  const { locale, setLocale } = usePreviewLocale();

  const current = getPreviewLocale(locale);

  return (
    <div
      className={cn("flex items-center justify-between", "p-4", "border-b")}
      dir="ltr"
    >
      <NativeSelect
        aria-label="Preview language"
        onChange={(event) => setLocale(event.target.value as PreviewLanguage)}
        value={locale}
      >
        {previewLocales.map((item) => (
          <NativeSelectOption key={item.language} value={item.language}>
            {item.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>

      <ToggleTooltip positioning={{ placement: "bottom-end" }}>
        <ToggleTooltipTrigger asChild>
          <Button aria-label={current.a11yLabel} size="icon-sm" variant="ghost">
            <InfoIcon aria-hidden="true" />
          </Button>
        </ToggleTooltipTrigger>
        <ToggleTooltipContent
          className={cn(
            "max-w-64",
            "p-0",
            "bg-background",
            "text-foreground text-sm leading-6",
            "divide-y divide-border border"
          )}
          showArrow={false}
        >
          {previewLocales.map((item) => (
            <p
              className="px-2 py-1.5 text-start"
              dir={item.dir}
              key={item.language}
              lang={item.locale}
            >
              {item.content}
            </p>
          ))}
        </ToggleTooltipContent>
      </ToggleTooltip>
    </div>
  );
};

export const RTLPreviewContent = (props: RTLPreviewContentProps) => {
  const { children, ...rest } = props;

  const { locale: language } = usePreviewLocale();
  const { locale } = getPreviewLocale(language);

  return (
    <LocaleProvider locale={locale}>
      <RTLPreviewLocalizedContent {...rest}>
        {children}
      </RTLPreviewLocalizedContent>
    </LocaleProvider>
  );
};

const RTLPreviewLocalizedContent = (props: RTLPreviewContentProps) => {
  const { children, className, ...rest } = props;

  const { dir, locale } = useLocale();

  return (
    <div
      className={cn(
        "w-full min-w-0",
        "flex items-center justify-center",
        className
      )}
      data-slot="rtl-preview-content"
      dir={dir}
      lang={locale}
      {...rest}
    >
      {children}
    </div>
  );
};

export const RTLPreview = (props: RTLPreviewProps) => {
  const { children, className, ...rest } = props;

  return (
    <RTLPreviewProvider className={className} {...rest}>
      <RTLPreviewHeader />
      <RTLPreviewLayout>{children}</RTLPreviewLayout>
    </RTLPreviewProvider>
  );
};

interface RTLPreviewLayoutProps
  extends Omit<React.ComponentProps<typeof RTLPreviewContent>, "children"> {
  children: RTLPreviewProps["children"];
}

const RTLPreviewLayout = (props: RTLPreviewLayoutProps) => {
  const { children, ...rest } = props;

  const { locale } = usePreviewLocale();
  const content = typeof children === "function" ? children(locale) : children;

  return (
    <RTLPreviewContent
      className={cn(
        "min-w-0 flex-1",
        "flex items-center justify-center",
        "p-4",
        "rounded-xl border"
      )}
      {...rest}
    >
      {content}
    </RTLPreviewContent>
  );
};
