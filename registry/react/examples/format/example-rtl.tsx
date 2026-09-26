"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";
import { FormatByte } from "@/registry/react/components/format";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <Attachment state="done">
      <AttachmentMedia format="pdf" variant="file" />
      <AttachmentContent>
        <AttachmentTitle>{values.title}</AttachmentTitle>
        <AttachmentDescription>
          PDF · <FormatByte value={120_000} />
        </AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  );
};

const translations = {
  ar: {
    values: {
      title: "إرشادات-العلامة.pdf",
    },
  },
  en: {
    values: {
      title: "brand-guidelines.pdf",
    },
  },
  he: {
    values: {
      title: "הנחיות-מותג.pdf",
    },
  },
};

export default Example;
