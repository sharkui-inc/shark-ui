"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/react/components/card";
import { Message, MessageContent } from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";
import {
  PromptInput,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
} from "@/registry/react/components/prompt-input";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <Card className="w-full max-w-md gap-0 overflow-hidden rounded-3xl py-0">
      <CardHeader
        className="border-b py-4"
        description={values.description}
        title={values.title}
      />
      <CardContent className="flex flex-col gap-4 px-6 py-5">
        <Message align="end">
          <MessageContent>
            <MessageBubble align="end" variant="secondary">
              <MessageBubbleContent>{values.question}</MessageBubbleContent>
            </MessageBubble>
          </MessageContent>
        </Message>
        <Message align="start">
          <MessageContent>
            <MessageBubble align="start" variant="ghost">
              <MessageBubbleContent>{values.answer}</MessageBubbleContent>
            </MessageBubble>
          </MessageContent>
        </Message>
      </CardContent>
      <CardFooter className="rounded-none border-0 bg-transparent py-4">
        <PromptInput className="w-full">
          <PromptInputTextarea
            aria-label={values.prompt}
            placeholder={values.prompt}
            readOnly
          />
          <PromptInputFooter>
            <PromptInputSubmit aria-label={values.send} />
          </PromptInputFooter>
        </PromptInput>
      </CardFooter>
    </Card>
  );
};

const translations = {
  ar: {
    values: {
      answer: "يمكنك تحديث إعدادات حسابك من صفحة الملف الشخصي.",
      description: "كيف يمكنني مساعدتك اليوم؟",
      prompt: "اكتب رسالتك…",
      question: "كيف أغيّر إعدادات حسابي؟",
      send: "إرسال الرسالة",
      title: "محادثة جديدة",
    },
  },
  en: {
    values: {
      answer: "You can update your account settings from the profile page.",
      description: "How can I help you today?",
      prompt: "Write your message…",
      question: "How do I change my account settings?",
      send: "Send message",
      title: "New Chat",
    },
  },
  he: {
    values: {
      answer: "אפשר לעדכן את הגדרות החשבון מדף הפרופיל.",
      description: "איך אפשר לעזור היום?",
      prompt: "כתבו הודעה…",
      question: "איך משנים את הגדרות החשבון שלי?",
      send: "שליחת הודעה",
      title: "שיחה חדשה",
    },
  },
};

export default Example;
