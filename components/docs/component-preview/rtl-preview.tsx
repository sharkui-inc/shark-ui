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

export type RTLPreviewLocale = (typeof previewLocales)[number]["locale"];
export type RTLPreviewLanguage = (typeof previewLocales)[number]["language"];

const RTLPreviewContext = React.createContext<
  (typeof previewLocales)[number] | null
>(null);
const RTLPreviewLanguageSetterContext = React.createContext<
  ((language: RTLPreviewLanguage) => void) | null
>(null);

interface RTLPreviewProps
  extends Omit<React.ComponentProps<"div">, "children"> {
  children?:
    | React.ReactNode
    | ((language: RTLPreviewLanguage) => React.ReactNode);
  contentClassName?: string;
}

type RTLPreviewProviderProps = React.ComponentProps<"div">;

type RTLPreviewContentProps = React.ComponentProps<"div">;

export const useRTLPreviewLanguage = () => {
  const current = React.useContext(RTLPreviewContext);

  if (!current) {
    throw new Error("RTL preview parts must be used within RTLPreviewProvider");
  }

  return current;
};

export const RTLPreviewProvider = (props: RTLPreviewProviderProps) => {
  const { children, className, ...rest } = props;
  const [language, setLanguage] = React.useState<RTLPreviewLanguage>("ar");
  const current =
    previewLocales.find((item) => item.language === language) ??
    previewLocales[0];

  return (
    <RTLPreviewLanguageSetterContext.Provider value={setLanguage}>
      <RTLPreviewContext.Provider value={current}>
        <div
          className={cn("w-full", "flex flex-col", className)}
          data-slot="rtl-preview"
          {...rest}
        >
          {children}
        </div>
      </RTLPreviewContext.Provider>
    </RTLPreviewLanguageSetterContext.Provider>
  );
};

export const RTLPreviewHeader = () => {
  const current = useRTLPreviewLanguage();
  const setLanguage = React.useContext(RTLPreviewLanguageSetterContext);

  if (!setLanguage) {
    throw new Error("RTLPreviewHeader must be used within RTLPreviewProvider");
  }

  return (
    <div
      className={cn("flex items-center justify-between", "p-4", "border-b")}
      dir="ltr"
    >
      <NativeSelect
        aria-label="Preview language"
        onChange={(event) =>
          setLanguage(event.target.value as RTLPreviewLanguage)
        }
        value={current.language}
      >
        {previewLocales.map((item) => (
          <NativeSelectOption key={item.locale} value={item.language}>
            {item.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>

      <ToggleTooltip positioning={{ placement: "bottom-start" }}>
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
              key={item.locale}
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
  const { dir, locale } = useRTLPreviewLanguage();

  return (
    <LocaleProvider locale={locale}>
      <div data-slot="rtl-preview-content" dir={dir} lang={locale} {...rest}>
        {children}
      </div>
    </LocaleProvider>
  );
};

export const RTLPreview = (props: RTLPreviewProps) => {
  const { children, className, contentClassName, ...rest } = props;

  return (
    <RTLPreviewProvider className={className} {...rest}>
      <RTLPreviewHeader />
      <RTLPreviewLayout contentClassName={contentClassName}>
        {children}
      </RTLPreviewLayout>
    </RTLPreviewProvider>
  );
};

interface RTLPreviewLayoutProps {
  children: RTLPreviewProps["children"];
  contentClassName?: string;
}

const RTLPreviewLayout = (props: RTLPreviewLayoutProps) => {
  const { children, contentClassName } = props;
  const { language } = useRTLPreviewLanguage();
  const content =
    typeof children === "function" ? children(language) : children;

  return (
    <RTLPreviewContent
      className={cn(
        "min-w-0 flex-1",
        "flex items-center justify-center",
        "p-4",
        contentClassName
      )}
    >
      {content}
    </RTLPreviewContent>
  );
};
