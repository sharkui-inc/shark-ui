"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { AspectRatio } from "@/registry/react/components/aspect-ratio";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <figure className="w-full max-w-48">
      <AspectRatio className="bg-muted w-full rounded-xl border">
        <div className="flex size-full items-center justify-center">
          <span className="text-muted-foreground text-xs select-none">1:1</span>
        </div>
      </AspectRatio>
      <figcaption className="text-muted-foreground mt-2 text-center text-sm">
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
