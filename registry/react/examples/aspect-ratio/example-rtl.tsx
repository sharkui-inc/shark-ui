"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { AspectRatio } from "@/registry/react/components/aspect-ratio";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <figure className="w-full max-w-48">
      <AspectRatio className="w-full rounded-xl border bg-muted">
        <div className="flex size-full items-center justify-center">
          <span className="select-none text-muted-foreground text-xs">1:1</span>
        </div>
      </AspectRatio>
      <figcaption className="mt-2 text-center text-muted-foreground text-sm">
        {values.caption}
      </figcaption>
    </figure>
  );
};

const translations = {
  ar: {
    values: {
      caption: "منظر طبيعي جميل",
    },
  },
  en: {
    values: {
      caption: "Beautiful landscape",
    },
  },
  he: {
    values: {
      caption: "נוף יפה",
    },
  },
};

export default Example;
