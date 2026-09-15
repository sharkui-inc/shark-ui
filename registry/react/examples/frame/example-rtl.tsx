"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/registry/react/components/frame";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Frame className="w-full max-w-md">
      <FrameHeader>
        <FrameTitle>{values.header}</FrameTitle>
        <FrameDescription>{values.headerDescription}</FrameDescription>
      </FrameHeader>
      <FramePanel>
        <h2 className="font-semibold text-sm">{values.title}</h2>
        <p className="text-muted-foreground text-sm">{values.description}</p>
      </FramePanel>
      <FrameFooter>
        <p className="text-muted-foreground text-sm">{values.footer}</p>
      </FrameFooter>
    </Frame>
  );
};

const translations = {
  ar: {
    values: {
      description: "وصف القسم",
      footer: "التذييل",
      header: "رأس القسم",
      headerDescription: "وصف مختصر عن القسم",
      title: "عنوان القسم",
    },
  },
  en: {
    values: {
      description: "Section description",
      footer: "Footer",
      header: "Section header",
      headerDescription: "Brief description about the section",
      title: "Section title",
    },
  },
  he: {
    values: {
      description: "תיאור הקטע",
      footer: "כותרת תחתונה",
      header: "ראש הקטע",
      headerDescription: "תיאור קצר על הקטע",
      title: "כותרת הקטע",
    },
  },
};

export default Example;
