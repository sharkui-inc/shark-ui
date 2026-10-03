"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Resizable,
  ResizablePanel,
  ResizableResizeTrigger,
} from "@/registry/react/components/resizable";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Resizable
      className="rounded-md border"
      defaultSize={[50, 50]}
      panels={[
        { id: "1", minSize: 10 },
        { id: "2", minSize: 10 },
      ]}
    >
      <ResizablePanel
        className="flex h-full items-center justify-center"
        id="1"
      >
        {values.one}
      </ResizablePanel>

      <ResizableResizeTrigger id="1:2" />

      <ResizablePanel id="2">
        <Resizable
          defaultSize={[50, 50]}
          orientation="vertical"
          panels={[
            { id: "3", minSize: 10 },
            { id: "4", minSize: 10 },
          ]}
        >
          <ResizablePanel className="flex items-center justify-center" id="3">
            {values.two}
          </ResizablePanel>

          <ResizableResizeTrigger id="3:4" />

          <ResizablePanel className="flex items-center justify-center" id="4">
            {values.three}
          </ResizablePanel>
        </Resizable>
      </ResizablePanel>
    </Resizable>
  );
};

const translations = {
  ar: {
    values: {
      one: "واحد",
      three: "ثلاثة",
      two: "اثنان",
    },
  },
  en: {
    values: {
      one: "One",
      three: "Three",
      two: "Two",
    },
  },
  he: {
    values: {
      one: "אחד",
      three: "שלוש",
      two: "שתיים",
    },
  },
};

export default Example;
