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
  MessageFooter,
} from "@/registry/react/components/message";
import {
  MessageBubble,
  MessageBubbleContent,
} from "@/registry/react/components/message-bubble";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Message align="end">
        <MessageAvatar>
          <Avatar size="sm">
            <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
            <AvatarFallback>VV</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageBubble align="end">
            <MessageBubbleContent>{values.deploying}</MessageBubbleContent>
          </MessageBubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar size="sm">
            <AvatarImage
              alt="@segunadebayo"
              src="https://github.com/segunadebayo.png"
            />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageBubble variant="secondary">
            <MessageBubbleContent>{values.fridayTime}</MessageBubbleContent>
          </MessageBubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar size="sm">
            <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
            <AvatarFallback>VV</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageBubble align="end">
            <MessageBubbleContent>{values.oneLineChange}</MessageBubbleContent>
          </MessageBubble>
          <MessageFooter>{values.delivered}</MessageFooter>
        </MessageContent>
      </Message>
      <Marker role="status">
        <MarkerContent className="shimmer">
          <span className="font-medium">Sage</span>
          {values.typingSuffix}
        </MarkerContent>
      </Marker>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      delivered: "تم التسليم",
      deploying: "أنشر إلى بيئة الإنتاج حالًا.",
      fridayTime: "إنها ٤:٥٥ مساءً. يوم الجمعة.",
      oneLineChange: "إنه تغيير من سطر واحد.",
      typingSuffix: " يكتب...",
    },
  },
  en: {
    values: {
      delivered: "Delivered",
      deploying: "Deploying to prod real quick.",
      fridayTime: "It's 4:55 PM. On a Friday.",
      oneLineChange: "It's a one-line change.",
      typingSuffix: " is typing...",
    },
  },
  he: {
    values: {
      delivered: "נמסר",
      deploying: "מעלה ל-prod בזריזות.",
      fridayTime: "השעה 16:55. ביום שישי.",
      oneLineChange: "זה שינוי של שורה אחת.",
      typingSuffix: " מקליד...",
    },
  },
};

export default Example;
