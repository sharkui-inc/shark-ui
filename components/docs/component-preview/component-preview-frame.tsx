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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import {
  ToggleTooltip,
  ToggleTooltipContent,
  ToggleTooltipTrigger,
} from "@/registry/react/components/toggle-tooltip";

interface ComponentPreviewFrameProps extends React.ComponentProps<"div"> {
  /**
   * Size the preview to its content.
   *
   * @default false
   */
  autoHeight?: boolean;
  /**
   * The content to display in the preview pane.
   */
  preview: React.ReactNode;
  /**
   * Optional controls displayed above the preview content.
   */
  previewHeader?: React.ReactNode;
  /**
   * Whether to show the dashed padding guide borders around the preview.
   *
   * @default true
   */
  showBorders?: boolean;
  /**
   * The source code to display in the code pane.
   */
  source: React.ReactNode;
}

export const ComponentPreviewFrame = (props: ComponentPreviewFrameProps) => {
  const {
    autoHeight = false,
    preview,
    previewHeader,
    source,
    showBorders = true,
    className,
    ...rest
  } = props;

  return (
    <Tabs
      {...rest}
      className={cn("group relative mt-4 mb-12", className)}
      defaultValue="preview"
    >
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>

      <div className="group/stage relative overflow-hidden rounded-2xl border">
        <div
          className={cn(
            "relative w-full",
            "flex flex-col bg-code",
            "group-has-[[data-slot=tab-code]:not([hidden])]/stage:pointer-events-none",
            "group-has-[[data-slot=tab-code]:not([hidden])]/stage:invisible"
          )}
          data-slot="preview"
        >
          {previewHeader}
          <div
            className={cn(
              "relative",
              autoHeight ? "min-h-[450px]" : "h-[450px] min-h-0",
              "flex items-center justify-center",
              autoHeight ? "px-4 py-8 sm:px-10 sm:py-16" : "p-4 sm:p-10",
              "overflow-y-auto"
            )}
            data-slot="preview-content"
          >
            {showBorders ? (
              <>
                <div className="absolute inset-x-0 top-4 border border-border/64 border-dashed max-sm:hidden sm:top-10" />
                <div className="absolute inset-x-0 bottom-4 border border-border/64 border-dashed max-sm:hidden sm:bottom-10" />
                <div className="absolute inset-s-4 inset-y-0 border border-border/64 border-dashed max-sm:hidden sm:inset-s-10" />
                <div className="absolute inset-e-4 inset-y-0 border border-border/64 border-dashed max-sm:hidden sm:inset-e-10" />
              </>
            ) : null}
            {preview}
          </div>
        </div>
        <TabsContent
          className="absolute inset-0"
          data-slot="tab-code"
          dir="ltr"
          value="code"
        >
          <div
            className="h-full overflow-hidden **:[figure]:m-0! **:[figure]:h-full **:[figure]:border-0"
            data-slot="code"
          >
            {source}
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

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

type RTLPreviewProviderProps = React.ComponentProps<"div">;

type RTLPreviewContentProps = React.ComponentProps<"div"> & {
  /** Size the preview content to its height instead of filling the frame. */
  autoHeight?: boolean;
};

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
            <InfoIcon aria-hidden />
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
  const { autoHeight = false, children, ...rest } = props;

  const { locale: language } = usePreviewLocale();
  const { locale } = getPreviewLocale(language);

  return (
    <LocaleProvider locale={locale}>
      <RTLPreviewLocalizedContent autoHeight={autoHeight} {...rest}>
        {children}
      </RTLPreviewLocalizedContent>
    </LocaleProvider>
  );
};

const RTLPreviewLocalizedContent = (props: RTLPreviewContentProps) => {
  const { autoHeight = false, children, className, ...rest } = props;

  const { dir, locale } = useLocale();

  return (
    <div
      className={cn(
        autoHeight ? "w-full" : "size-full min-h-0",
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
