"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <Kbd>{values.key}</Kbd>
        <Kbd>⌘</Kbd>
        <Kbd>⌃</Kbd>
        <Kbd>⇧</Kbd>
      </div>
      <div className="flex gap-2">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <span>+</span>
          <Kbd>{values.key}</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      key: "ك",
    },
  },
  en: {
    values: {
      key: "K",
    },
  },
  he: {
    values: {
      key: "ק",
    },
  },
};

export default Example;
