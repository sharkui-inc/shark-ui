"use client";

import { createContext } from "@ark-ui/react/utils";
import React from "react";
import { useLocale } from "@/registry/react/components/locale";

const PREVIEW_LOCALES = ["ar", "en", "he"] as const;

export type PreviewLanguage = (typeof PREVIEW_LOCALES)[number];

interface PreviewLocaleValue {
  locale: PreviewLanguage;
  setLocale: (locale: PreviewLanguage) => void;
}

const [_PreviewLocaleProvider, _usePreviewLocale] =
  createContext<PreviewLocaleValue>({
    hookName: "usePreviewLocale",
    name: "PreviewLocale",
    providerName: "PreviewLocaleProvider",
  });

interface PreviewLocaleProviderProps extends React.PropsWithChildren {
  defaultLocale?: PreviewLanguage;
}

export const PreviewLocaleProvider = (props: PreviewLocaleProviderProps) => {
  const { children, defaultLocale = "ar" } = props;

  const [locale, setLocale] = React.useState<PreviewLanguage>(defaultLocale);

  return (
    <_PreviewLocaleProvider value={{ locale, setLocale }}>
      {children}
    </_PreviewLocaleProvider>
  );
};

export const usePreviewLocale = () => {
  const { dir } = useLocale();

  const { locale, setLocale } = _usePreviewLocale();

  return { dir, locale, setLocale };
};
