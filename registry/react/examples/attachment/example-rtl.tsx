"use client";

import { FileTextIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/registry/react/components/attachment";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Attachment state="done">
      <AttachmentMedia>
        <FileTextIcon aria-hidden />
      </AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>{values.fileName}</AttachmentTitle>
        <AttachmentDescription>{values.metadata}</AttachmentDescription>
      </AttachmentContent>
    </Attachment>
  );
};

const translations = {
  ar: {
    values: {
      fileName: "brief.pdf",
      metadata: "بي دي إف · ٢٤٠ ك.ب",
    },
  },
  en: {
    values: {
      fileName: "brief.pdf",
      metadata: "PDF · 240 KB",
    },
  },
  he: {
    values: {
      fileName: "brief.pdf",
      metadata: "PDF · 240 ק״ב",
    },
  },
};

export default Example;
