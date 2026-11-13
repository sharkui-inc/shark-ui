"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Marker, MarkerContent } from "@/registry/react/components/marker";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageHeader,
} from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerViewport,
} from "@/registry/react/components/message-scroller";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <MessageScroller className="h-96 w-full max-w-md rounded-xl border">
      <MessageScrollerViewport className="px-4 py-6">
        <MessageScrollerContent>
          <MessageScrollerItem>
            <Marker variant="separator">
              <MarkerContent>{values.today}</MarkerContent>
            </Marker>
          </MessageScrollerItem>
          {values.turns.map((turn) => {
            const isYou = turn.from === "you";

            return (
              <MessageScrollerItem key={turn.text}>
                <Message align={isYou ? "end" : "start"}>
                  {isYou ? null : (
                    <MessageAvatar>
                      <Avatar size="sm">
                        <AvatarImage
                          alt="Ada"
                          src="https://github.com/shadcn.png"
                        />
                        <AvatarFallback>A</AvatarFallback>
                      </Avatar>
                    </MessageAvatar>
                  )}
                  <MessageContent>
                    {isYou ? null : <MessageHeader>Ada</MessageHeader>}
                    <MessageBubble
                      align={isYou ? "end" : "start"}
                      variant={isYou ? "secondary" : "default"}
                    >
                      <MessageBubbleContent>{turn.text}</MessageBubbleContent>
                    </MessageBubble>
                  </MessageContent>
                </Message>
              </MessageScrollerItem>
            );
          })}
        </MessageScrollerContent>
      </MessageScrollerViewport>
      <MessageScrollerButton />
    </MessageScroller>
  );
};

const translations = {
  ar: {
    values: {
      today: "اليوم",
      turns: [
        { from: "ada" as const, text: "صباح الخير. هل نُشرت المعاينة؟" },
        { from: "you" as const, text: "نعم. سأفحص بدائيات الدردشة بعد ذلك." },
        {
          from: "ada" as const,
          text: "الممرّ أولًا. أزرار القفز إذا ابتعدت بالتمرير.",
        },
        {
          from: "you" as const,
          text: "Ark ScrollArea، بدون حزمة إضافية بدون واجهة.",
        },
        { from: "ada" as const, text: "رائع. وسم لفاصل التاريخ؟" },
        { from: "you" as const, text: "نسخة الفاصل. قادمة." },
        { from: "ada" as const, text: "المرفقات أيضًا، إذا كان لديك وقت." },
        {
          from: "you" as const,
          text: "بطاقة الملف جاهزة. بطاقات الصور بعد الغداء.",
        },
        { from: "ada" as const, text: "أرسل مسودة عندما تُعرض صفحة التوثيق." },
        { from: "you" as const, text: "سأفعل." },
      ],
    },
  },
  en: {
    values: {
      today: "Today",
      turns: [
        { from: "ada" as const, text: "Morning. Did the preview deploy?" },
        {
          from: "you" as const,
          text: "Yes. Checking the chat primitives next.",
        },
        {
          from: "ada" as const,
          text: "Scroller first. Jump buttons if I scroll away.",
        },
        {
          from: "you" as const,
          text: "Ark ScrollArea, no extra headless package.",
        },
        { from: "ada" as const, text: "Nice. Marker for the date break?" },
        { from: "you" as const, text: "Separator variant. Coming up." },
        {
          from: "ada" as const,
          text: "Attachments too, if you still have time.",
        },
        {
          from: "you" as const,
          text: "File card is in. Image cards after lunch.",
        },
        {
          from: "ada" as const,
          text: "Ship a draft when the docs page renders.",
        },
        { from: "you" as const, text: "On it." },
      ],
    },
  },
  he: {
    values: {
      today: "היום",
      turns: [
        {
          from: "ada" as const,
          text: "בוקר טוב. האם התצוגה המקדימה עלתה לאוויר?",
        },
        {
          from: "you" as const,
          text: "כן. בודק את פרימיטיבי הצ'אט עכשיו.",
        },
        {
          from: "ada" as const,
          text: "הגלילה קודם. לחצני קפיצה אם אגלול למקום אחר.",
        },
        {
          from: "you" as const,
          text: "Ark ScrollArea, בלי חבילה headless נוספת.",
        },
        { from: "ada" as const, text: "נחמד. Marker עבור הפרדת התאריך?" },
        { from: "you" as const, text: "וריאנט Separator. בדרך." },
        {
          from: "ada" as const,
          text: "גם קבצים מצורפים, אם עדיין יש לך זמן.",
        },
        {
          from: "you" as const,
          text: "כרטיס הקובץ בפנים. כרטיסי תמונות אחרי הצהריים.",
        },
        {
          from: "ada" as const,
          text: "שלח טיוטה כשעמוד התיעוד מוצג.",
        },
        { from: "you" as const, text: "על זה." },
      ],
    },
  },
};

export default Example;
