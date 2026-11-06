"use client";

import { DownloadIcon, FileTextIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import { DownloadTrigger } from "@/registry/react/components/download-trigger";
import { Item, ItemTitle } from "@/registry/react/components/item";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex flex-col gap-4">
      <Item variant="outline">
        <FileTextIcon />
        <ItemTitle>{values.content}</ItemTitle>
      </Item>
      <DownloadTrigger
        asChild
        data={values.content}
        fileName="hello.txt"
        mimeType="text/plain"
      >
        <Button size="lg" variant="outline">
          <DownloadIcon data-icon="inline-start" />
          {values.button}
        </Button>
      </DownloadTrigger>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      button: "تنزيل",
      content: "مرحبًا بالعالم! هذا ملف نصي تجريبي.",
    },
  },
  en: {
    values: {
      button: "Download",
      content: "Hello, World! This is a sample text file.",
    },
  },
  he: {
    values: {
      button: "הורדה",
      content: "שלום עולם! זהו קובץ טקסט לדוגמה.",
    },
  },
};

export default Example;
