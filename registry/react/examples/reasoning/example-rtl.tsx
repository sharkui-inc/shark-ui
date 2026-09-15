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
    <Reasoning className="max-w-lg" duration={8}>
      <ReasoningTrigger duration={8} isStreaming>
        {values.trigger}
      </ReasoningTrigger>
      <ReasoningContent>{values.content}</ReasoningContent>
    </Reasoning>
  );
};

const translations = {
  ar: {
    values: {
      content:
        "يتحقق النموذج بالفعل من الحقول الفارغة. يجب أن أضيف فحص التنسيق بعد ذلك إلى `validateForm` وأحتفظ بالتعبير النمطي في دالة مساعدة لإعادة استخدامه في الواجهة.",
      trigger: "فكّر لمدة ٨ ثوانٍ",
    },
  },
  en: {
    values: {
      content:
        "The form already validates empty fields. I should add a format check next to `validateForm` and keep the regex in a helper so the UI can reuse it.",
      trigger: "Thought for 8s",
    },
  },
  he: {
    values: {
      content:
        "הטופס כבר מאמת שדות ריקים. עלי להוסיף בדיקת פורמט ל-`validateForm` ולשמור את ה-regex בפונקציית עזר כך שהממשק יוכל לעשות בו שימוש חוזר.",
      trigger: "חשב במשך 8 שניות",
    },
  },
};

export default Example;
