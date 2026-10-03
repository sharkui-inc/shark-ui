"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/registry/react/components/reasoning";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Reasoning className="max-w-lg" duration={8} isStreaming>
      <ReasoningTrigger>{values.trigger}</ReasoningTrigger>
      <ReasoningContent>{values.content}</ReasoningContent>
    </Reasoning>
  );
};

const translations = {
  ar: {
    values: {
      content:
        "تظل الطلبات في حالة `pending` لأن webhook الدفع قد يصل قبل تثبيت الصف. ينبغي أن أجعل `handlePaymentEvent` عديم التأثير الجانبي عند التكرار وأن أُجري upsert حسب `payment_intent_id`.",
      trigger: "فكّر لمدة ٨ ثوانٍ",
    },
  },
  en: {
    values: {
      content:
        "Orders stall in `pending` because the payment webhook can arrive before the row is committed. I should make `handlePaymentEvent` idempotent and upsert by `payment_intent_id`.",
      trigger: "Thought for 8s",
    },
  },
  he: {
    values: {
      content:
        "הזמנות נתקעות ב-`pending` כי ה-webhook של התשלום יכול להגיע לפני שהשורה נשמרת. עלי להפוך את `handlePaymentEvent` לאידמפוטנטי ולבצע upsert לפי `payment_intent_id`.",
      trigger: "חשב במשך 8 שניות",
    },
  },
};

export default Example;
