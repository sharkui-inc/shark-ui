"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <MessageBubble>
        <MessageBubbleContent>{values.text}</MessageBubbleContent>
      </MessageBubble>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      text: "هل تحتاج إلى مساعدة في بناء السجل؟",
    },
  },
  en: {
    values: {
      text: "Need a hand with the registry build?",
    },
  },
  he: {
    values: {
      text: "צריך עזרה עם בניית ה-registry?",
    },
  },
};

export default Example;
