"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Marker, MarkerContent } from "@/registry/react/components/marker";
import { Message, MessageContent } from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Message>
        <MessageContent>
          <MessageBubble variant="secondary">
            <MessageBubbleContent>{values.earlier}</MessageBubbleContent>
          </MessageBubble>
        </MessageContent>
      </Message>
      <Marker variant="separator">
        <MarkerContent>{values.today}</MarkerContent>
      </Marker>
      <Message align="end">
        <MessageContent>
          <MessageBubble align="end">
            <MessageBubbleContent>{values.later}</MessageBubbleContent>
          </MessageBubble>
        </MessageContent>
      </Message>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      earlier: "هل نكمل هذا غدًا؟",
      later: "نعم. سأبدأ بالملخص.",
      today: "اليوم",
    },
  },
  en: {
    values: {
      earlier: "Can we pick this up tomorrow?",
      later: "Yes. Starting with the summary.",
      today: "Today",
    },
  },
  he: {
    values: {
      earlier: "נמשיך עם זה מחר?",
      later: "כן. מתחיל מהסיכום.",
      today: "היום",
    },
  },
};

export default Example;
