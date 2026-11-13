"use client";

import type React from "react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoiceShortcut,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireInput,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/react/components/questionnaire";
import { toast } from "@/registry/react/components/toast";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { items, values } = translations[locale];

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const answers = new FormData(event.currentTarget);

    const selections = items.flatMap((question) => {
      const labels = answers.getAll(question.name).map((value) => {
        const answer = String(value);

        return (
          question.choices.find((choice) => choice.value === answer)?.label ??
          answer
        );
      });

      return labels.length ? [labels.join("\n")] : [];
    });

    toast.create({
      description: selections.join(" · "),
      title: values.toastTitle,
      type: "success",
    });
  };

  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <Questionnaire items={items} onSubmit={handleSubmit} shortcuts="letters">
        <QuestionnaireProgress aria-label={values.progress} />
        {items.map((question) => (
          <QuestionnaireItem key={question.name} name={question.name}>
            <QuestionnaireTitle>{question.title}</QuestionnaireTitle>
            <QuestionnaireDescription>
              {question.description}
            </QuestionnaireDescription>
            <QuestionnaireChoices>
              {question.choices.map((choice) => (
                <QuestionnaireChoice
                  className="py-1.5"
                  key={choice.value}
                  value={choice.value}
                >
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="font-medium">{choice.label}</span>
                    <span className="text-muted-foreground">
                      {choice.description}
                    </span>
                  </span>
                  <QuestionnaireChoiceShortcut />
                </QuestionnaireChoice>
              ))}
              {question.input ? (
                <QuestionnaireInput
                  aria-label={question.input.label}
                  placeholder={question.input.placeholder}
                />
              ) : null}
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>
        ))}
        <QuestionnaireActions>
          <QuestionnairePrevious>{values.previous}</QuestionnairePrevious>
          <QuestionnaireNext>{values.next}</QuestionnaireNext>
          <QuestionnaireSubmit>{values.submit}</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
};

const translations = {
  ar: {
    items: [
      {
        choices: [
          {
            description: "أظهر ما نفّذه الوكيل وما عاد به.",
            label: "خط زمني لاستدعاءات الأدوات",
            value: "timeline",
          },
          {
            description: "اسأل قبل الإجراءات الحساسة أو التدميرية.",
            label: "نقاط تفتيش للموافقة",
            value: "approval",
          },
          {
            description: "اجعل العمل المسنَد ونتائجه أسهل في المتابعة.",
            label: "تسليمات الوكيل الفرعي",
            value: "handoffs",
          },
        ],
        description: "اختر اتجاهًا أو صف مهمة أخرى.",
        input: {
          label: "صِف ميزة أخرى",
          placeholder: "صِف ميزة أخرى…",
        },
        name: "direction",
        required: true,
        title: "ماذا يجب أن يبني الوكيل بعد ذلك؟",
      },
      {
        choices: [
          {
            description: "ملاحظة قصيرة بعد كل إنجاز.",
            label: "مقتضب",
            value: "concise",
          },
          {
            description: "القرارات والمخاطر والخطوات التالية.",
            label: "مفصّل",
            value: "detailed",
          },
          {
            description: "تسليم هندسي مكتمل.",
            label: "مراجعة كاملة",
            value: "full",
          },
        ],
        description: "اختر مقدار السياق الذي يجب أن يتضمنه كل تحديث.",
        input: undefined,
        name: "progress",
        required: true,
        title: "ماذا يجب أن يتضمن كل تحديث للتقدم؟",
      },
      {
        choices: [
          {
            description: "ابدأ فور استلام الموافقة.",
            label: "ابدأ الآن",
            value: "now",
          },
          {
            description: "جدولته بعد العمل الحالي.",
            label: "دورة التطوير التالية",
            value: "next",
          },
          {
            description: "أبقِه جاهزًا لقرار لاحق.",
            label: "أضِفه إلى المهام المؤجلة",
            value: "backlog",
          },
        ],
        description: "اختر متى يجب أن يبدأ العمل.",
        input: undefined,
        name: "start",
        required: true,
        title: "متى يجب أن يبدأ العمل؟",
      },
    ],
    values: {
      next: "التالي",
      previous: "السابق",
      progress: "تقدم الأسئلة",
      submit: "حفظ التفضيلات",
      toastTitle: "حُفظت الخطة",
    },
  },
  en: {
    items: [
      {
        choices: [
          {
            description: "Show what the agent ran and what came back.",
            label: "Tool call timeline",
            value: "timeline",
          },
          {
            description: "Ask before sensitive or destructive actions.",
            label: "Approval checkpoints",
            value: "approval",
          },
          {
            description: "Make delegated work and results easier to follow.",
            label: "Sub-agent handoffs",
            value: "handoffs",
          },
        ],
        description: "Choose a direction or describe another task.",
        input: {
          label: "Describe another feature",
          placeholder: "Describe another feature…",
        },
        name: "direction",
        required: true,
        title: "What should the agent build next?",
      },
      {
        choices: [
          {
            description: "A short note after each milestone.",
            label: "Concise",
            value: "concise",
          },
          {
            description: "Decisions, risks, and next steps.",
            label: "Detailed",
            value: "detailed",
          },
          {
            description: "A complete engineering handoff.",
            label: "Full review",
            value: "full",
          },
        ],
        description: "Choose how much context every update should include.",
        input: undefined,
        name: "progress",
        required: true,
        title: "What should every progress update include?",
      },
      {
        choices: [
          {
            description: "Begin as soon as approval is received.",
            label: "Start now",
            value: "now",
          },
          {
            description: "Schedule it after the current work.",
            label: "Next development cycle",
            value: "next",
          },
          {
            description: "Keep it ready for a later decision.",
            label: "Add it to the backlog",
            value: "backlog",
          },
        ],
        description: "Choose when the work should begin.",
        input: undefined,
        name: "start",
        required: true,
        title: "When should work begin?",
      },
    ],
    values: {
      next: "Next",
      previous: "Previous",
      progress: "Question progress",
      submit: "Save preferences",
      toastTitle: "Plan saved",
    },
  },
  he: {
    items: [
      {
        choices: [
          {
            description: "הצג מה הרץ הסוכן ומה חזר.",
            label: "ציר זמן של קריאות לכלים",
            value: "timeline",
          },
          {
            description: "שאל לפני פעולות רגישות או הרסניות.",
            label: "נקודות אימות",
            value: "approval",
          },
          {
            description: "הפוך עבודה ותוצאות של סוכני משנה לקלים יותר למעקב.",
            label: "העברות בין סוכני משנה",
            value: "handoffs",
          },
        ],
        description: "בחרי כיוון או תארי משימה אחרת.",
        input: {
          label: "תאר תכונה אחרת",
          placeholder: "תאר תכונה אחרת…",
        },
        name: "direction",
        required: true,
        title: "מה צריך לבנות הסוכן הבא?",
      },
      {
        choices: [
          {
            description: "הערה קצרה אחרי כל אבן דרך.",
            label: "קולע וקצר",
            value: "concise",
          },
          {
            description: "החלטות, סיכונים ושלבים הבאים.",
            label: "מפורט",
            value: "detailed",
          },
          {
            description: "מסירה הנדסית מלאה.",
            label: "סקירה מלאה",
            value: "full",
          },
        ],
        description: "בחר כמה הקשר צריך לכלול אותו בכל עדכון.",
        input: undefined,
        name: "progress",
        required: true,
        title: "מה צריך לכלול כל עדכון התקדמות?",
      },
      {
        choices: [
          {
            description: "התחל ברגע שמתקבל האישור.",
            label: "התחל עכשיו",
            value: "now",
          },
          {
            description: "תזמן אותה אחרי העבודה הנוכחית.",
            label: "מחזור הפיתוח הבא",
            value: "next",
          },
          {
            description: "שמור אותה מוכנה להחלטה מאוחרת יותר.",
            label: "הוסף ל-backlog",
            value: "backlog",
          },
        ],
        description: "בחר מתי העבודה צריכה להתחיל.",
        input: undefined,
        name: "start",
        required: true,
        title: "מתי העבודה אמורה להתחיל?",
      },
    ],
    values: {
      next: "הבא",
      previous: "הקודם",
      progress: "התקדמות השאלות",
      submit: "שמור העדפות",
      toastTitle: "התוכנית נשמרה",
    },
  },
};

export default Example;
