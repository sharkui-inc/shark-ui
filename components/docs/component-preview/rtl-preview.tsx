"use client";

import { InfoIcon } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { LocaleProvider } from "@/registry/react/components/locale";
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
    locale: "en-US",
  },
  {
    a11yLabel: "معلومات عن الترجمة",
    content: "تمت ترجمة النص في هذا المثال تلقائيًا وقد يحتوي على أخطاء.",
    dir: "rtl",
    label: "Arabic (عربي)",
    locale: "ar-SA",
  },
  {
    a11yLabel: "מידע על התרגום",
    content: "הטקסט בדוגמה זו תורגם באופן אוטומטי ועשוי להכיל שגיאות.",
    dir: "rtl",
    label: "Hebrew (עברית)",
    locale: "he-IL",
  },
] as const;

export type RTLPreviewLocale = (typeof previewLocales)[number]["locale"];

interface RTLPreviewProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  children?: React.ReactNode | ((locale: RTLPreviewLocale) => React.ReactNode);
  contentClassName?: string;
}

export const RTLPreview = (props: RTLPreviewProps) => {
  const { children, className, contentClassName, ...rest } = props;

  const [locale, setLocale] = React.useState<RTLPreviewLocale>("ar-SA");
  const current =
    previewLocales.find((item) => item.locale === locale) ?? previewLocales[0];

  const content = typeof children === "function" ? children(locale) : children;

  return (
    <div
      className={cn("w-full", "flex flex-col", className)}
      data-slot="rtl-preview"
      {...rest}
    >
      <div
        className={cn("flex items-center justify-between", "p-4", "border-b")}
      >
        <NativeSelect
          aria-label="Preview language"
          onChange={(event) =>
            setLocale(event.target.value as RTLPreviewLocale)
          }
          value={locale}
        >
          {previewLocales.map((item) => (
            <NativeSelectOption key={item.locale} value={item.locale}>
              {item.label}
            </NativeSelectOption>
          ))}
        </NativeSelect>

        <ToggleTooltip positioning={{ placement: "bottom-start" }}>
          <ToggleTooltipTrigger asChild>
            <Button
              aria-label={current.a11yLabel}
              size="icon-sm"
              variant="ghost"
            >
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
                key={item.locale}
                lang={item.locale}
              >
                {item.content}
              </p>
            ))}
          </ToggleTooltipContent>
        </ToggleTooltip>
      </div>

      <LocaleProvider locale={locale}>
        <div
          className={cn(
            "min-w-0 flex-1",
            "flex items-center justify-center",
            "p-4",
            contentClassName
          )}
          dir={current.dir}
          lang={locale}
        >
          {content}
        </div>
      </LocaleProvider>
    </div>
  );
};
