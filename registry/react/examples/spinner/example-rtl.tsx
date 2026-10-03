"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import { Spinner } from "@/registry/react/components/spinner";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Item className="border- rounded-full" variant="muted">
        <ItemMedia>
          <Spinner aria-label={values.loading} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">{values.generating}</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">{values.percent}</span>
        </ItemContent>
      </Item>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      generating: "جارٍ إنشاء الصورة…",
      loading: "جارٍ التحميل",
      percent: "٧٨٪",
    },
  },
  en: {
    values: {
      generating: "Generating image...",
      loading: "Loading",
      percent: "78%",
    },
  },
  he: {
    values: {
      generating: "מחולל תמונה…",
      loading: "טוען",
      percent: "78%",
    },
  },
};

export default Example;
