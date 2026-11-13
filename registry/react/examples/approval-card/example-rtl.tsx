"use client";

import { CornerDownLeftIcon, MessageCircleQuestionIcon } from "lucide-react";
import type React from "react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  ApprovalCard,
  ApprovalCardChoice,
  ApprovalCardChoiceShortcut,
  ApprovalCardChoices,
  ApprovalCardContent,
  ApprovalCardFooter,
  ApprovalCardHeader,
  ApprovalCardItem,
  ApprovalCardItemDescription,
  ApprovalCardItemTitle,
  ApprovalCardNext,
  ApprovalCardPrevious,
  ApprovalCardSkip,
  ApprovalCardSubmit,
  ApprovalCardTitle,
} from "@/registry/react/components/approval-card";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const answers = {
      direction: formData.get("direction"),
      signals: formData.getAll("signals"),
      timing: formData.get("timing"),
    };

    toast.create({
      description: `${answers.direction} · ${answers.signals.length} ${values.signals} · ${answers.timing}`,
      title: values.toastTitle,
      type: "success",
    });
  };

  return (
    <div className="w-full max-w-lg">
      <ApprovalCard
        items={values.items}
        onSubmit={handleSubmit}
        shortcuts="letters"
      >
        <ApprovalCardHeader>
          <MessageCircleQuestionIcon aria-hidden="true" />
          <ApprovalCardTitle>{values.title}</ApprovalCardTitle>
        </ApprovalCardHeader>
        <ApprovalCardContent>
          {values.items.map((item) => (
            <ApprovalCardItem key={item.name} name={item.name}>
              <ApprovalCardItemTitle>{item.title}</ApprovalCardItemTitle>
              <ApprovalCardItemDescription>
                {item.description}
              </ApprovalCardItemDescription>
              <ApprovalCardChoices>
                {item.choices.map((choice) => (
                  <ApprovalCardChoice key={choice.value} value={choice.value}>
                    {choice.label}
                    <ApprovalCardChoiceShortcut />
                  </ApprovalCardChoice>
                ))}
              </ApprovalCardChoices>
            </ApprovalCardItem>
          ))}
        </ApprovalCardContent>
        <ApprovalCardFooter>
          <ApprovalCardPrevious>{values.previous}</ApprovalCardPrevious>
          <ApprovalCardSkip>{values.skip}</ApprovalCardSkip>
          <ApprovalCardNext>
            {values.next}
            <CornerDownLeftIcon />
          </ApprovalCardNext>
          <ApprovalCardSubmit>
            {values.submit}
            <CornerDownLeftIcon />
          </ApprovalCardSubmit>
        </ApprovalCardFooter>
      </ApprovalCard>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      items: [
        {
          choices: [
            {
              description: "اعرض ما نفّذه الوكيل وما عاد به.",
              label: "الجدول الزمني لاستدعاءات الأدوات",
              value: "tool-calls",
            },
            {
              description: "اسأل قبل القيام بأي إجراء حساس أو مدمر.",
              label: "نقاط تفتيش الموافقة",
              value: "approvals",
            },
            {
              description: "اجعل العمل المفوَّض ونتائجه أسهل في المتابعة.",
              label: "تسليمات الوكلاء الفرعيين",
              value: "handoffs",
            },
          ],
          description: "اختر اتجاهًا أو صف مهمة أخرى.",
          input: {
            label: "ميزة وكيل أخرى",
            placeholder: "صف ميزة أخرى…",
          },
          name: "direction",
          required: true,
          title: "ما الذي يجب أن يبنيه الوكيل بعد ذلك؟",
        },
        {
          choices: [
            { label: "التقدم", value: "progress" },
            { label: "القرارات", value: "decisions" },
            { label: "المخاطر", value: "risks" },
            { label: "الخطوة التالية", value: "next-step" },
          ],
          description: "اختر كل ما ينطبق، أو تخطَّ هذا السؤال.",
          multiple: true,
          name: "signals",
          required: false,
          title: "ما الذي يجب أن يتضمنه كل تحديث تقدم؟",
        },
        {
          choices: [
            { label: "ابدأ الآن", value: "now" },
            { label: "دورة التطوير التالية", value: "next-cycle" },
            { label: "أضِفها إلى قائمة الانتظار", value: "backlog" },
          ],
          description: "اختر متى يبدأ الوكيل العمل.",
          name: "timing",
          required: true,
          title: "متى يجب أن يبدأ العمل؟",
        },
      ] as const,
      next: "التالي",
      previous: "السابق",
      progressLabel: "تقدم السؤال",
      signals: "إشارات",
      skip: "تخطَّ",
      submit: "اعتماد التسليم",
      title: "جهّز التسليم",
      toastTitle: "تم اعتماد التسليم",
    },
  },
  en: {
    values: {
      items: [
        {
          choices: [
            {
              description: "Show what the agent ran and what came back.",
              label: "Tool call timeline",
              value: "tool-calls",
            },
            {
              description: "Ask before sensitive or destructive actions.",
              label: "Approval checkpoints",
              value: "approvals",
            },
            {
              description: "Make delegated work and results easier to follow.",
              label: "Sub-agent handoffs",
              value: "handoffs",
            },
          ],
          description: "Choose a direction or describe another task.",
          input: {
            label: "Another agent feature",
            placeholder: "Describe another feature…",
          },
          name: "direction",
          required: true,
          title: "What should the agent build next?",
        },
        {
          choices: [
            { label: "Progress", value: "progress" },
            { label: "Decisions", value: "decisions" },
            { label: "Risks", value: "risks" },
            { label: "Next step", value: "next-step" },
          ],
          description: "Select all that apply, or skip this question.",
          multiple: true,
          name: "signals",
          required: false,
          title: "What should every progress update include?",
        },
        {
          choices: [
            { label: "Start now", value: "now" },
            { label: "Next development cycle", value: "next-cycle" },
            { label: "Add it to the backlog", value: "backlog" },
          ],
          description: "Choose when the agent should begin the work.",
          name: "timing",
          required: true,
          title: "When should work begin?",
        },
      ] as const,
      next: "Next",
      previous: "Previous",
      progressLabel: "Question progress",
      signals: "signals",
      skip: "Skip",
      submit: "Approve handoff",
      title: "Prepare the handoff",
      toastTitle: "Handoff approved",
    },
  },
  he: {
    values: {
      items: [
        {
          choices: [
            {
              description: "הצג מה ה-Agent הרץ ומה החזיר.",
              label: "ציר זמן של קריאות לכלים",
              value: "tool-calls",
            },
            {
              description: "שאל לפני פעולות רגישות או הרסניות.",
              label: "נקודות אימות לאישור",
              value: "approvals",
            },
            {
              description: "הפוך משימות מואצלות ותוצאותיהן לקלות יותר למעקב.",
              label: "העברות ל-Agentים משניים",
              value: "handoffs",
            },
          ],
          description: "בחרו כיוון או תארו משימה אחרת.",
          input: {
            label: "תכונת Agent נוספת",
            placeholder: "תאר תכונה נוספת…",
          },
          name: "direction",
          required: true,
          title: "מה צריך ה-Agent לבנות עכשיו?",
        },
        {
          choices: [
            { label: "התקדמות", value: "progress" },
            { label: "החלטות", value: "decisions" },
            { label: "סיכונים", value: "risks" },
            { label: "השלב הבא", value: "next-step" },
          ],
          description: "בחרו את כל מה שרלוונטי, או דלגו על שאלה זו.",
          multiple: true,
          name: "signals",
          required: false,
          title: "מה כל עדכון התקדמות צריך לכלול?",
        },
        {
          choices: [
            { label: "התחל עכשיו", value: "now" },
            { label: "מחזור הפיתוח הבא", value: "next-cycle" },
            { label: "הוסף לבלאוג", value: "backlog" },
          ],
          description: "בחרו מתי ה-Agent יתחיל בעבודה.",
          name: "timing",
          required: true,
          title: "מתי העבודה צריכה להתחיל?",
        },
      ] as const,
      next: "הבא",
      previous: "הקודם",
      progressLabel: "התקדמות שאלה",
      signals: "אותות",
      skip: "דלג",
      submit: "אשר את ההעברה",
      title: "הכן את ההעברה",
      toastTitle: "ההעברה אושרה",
    },
  },
};

export default Example;
