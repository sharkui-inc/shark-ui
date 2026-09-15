"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Tour,
  TourContent,
  TourDescription,
  TourFooter,
  TourHeader,
  TourNextStep,
  TourPreviousStep,
  TourProgressText,
  type TourStepType,
  TourTitle,
  TourTrigger,
} from "@/registry/react/components/tour";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Tour steps={values.steps}>
      <TourTrigger asChild>
        <Button variant="outline">{values.open}</Button>
      </TourTrigger>
      <TourContent>
        <TourHeader>
          <TourProgressText />
          <TourTitle />
          <TourDescription />
        </TourHeader>
        <TourFooter>
          <TourPreviousStep />
          <TourNextStep />
        </TourFooter>
      </TourContent>
    </Tour>
  );
};

const translations = {
  ar: {
    values: {
      open: "فتح",
      steps: [
        {
          actions: [{ action: "next" as const, label: "ابدأ الجولة" }],
          description: "ستتعلم كيفية تثبيت المكوّن واستخدامه.",
          id: "step-1",
          title: "مرحبًا بك في الجولة",
          type: "dialog",
        },
        {
          actions: [
            { action: "prev" as const, label: "السابق" },
            { action: "next" as const, label: "التالي" },
          ],
          description: "لنقم بجولة سريعة في موقع التوثيق لمساعدتك على البدء.",
          id: "step-2",
          target: () => document.querySelector("#installation"),
          title: "خطوة التثبيت",
          type: "tooltip",
        },
        {
          actions: [
            { action: "prev" as const, label: "السابق" },
            { action: "next" as const, label: "التالي" },
          ],
          description: "هكذا تستخدم المكوّن.",
          id: "step-3",
          target: () => document.querySelector("#usage"),
          title: "خطوة الاستخدام",
          type: "tooltip",
        },
        {
          actions: [{ action: "dismiss" as const, label: "إنهاء الجولة" }],
          description: "أكملت الجولة. شكرًا على وقتك!",
          id: "step-4",
          title: "هذا كل شيء!",
          type: "dialog",
        },
      ] as TourStepType[],
    },
  },
  en: {
    values: {
      open: "Open",
      steps: [
        {
          actions: [{ action: "next" as const, label: "Start Tour" }],
          description:
            "You gonna learn how to use to install and use the component.",
          id: "step-1",
          title: "Welcome to the tour",
          type: "dialog",
        },
        {
          actions: [
            { action: "prev" as const, label: "Previous" },
            { action: "next" as const, label: "Next" },
          ],
          description:
            "Let's take a quick tour of the documentation site to help you get started。",
          id: "step-2",
          target: () => document.querySelector("#installation"),
          title: "Installation Step",
          type: "tooltip",
        },
        {
          actions: [
            { action: "prev" as const, label: "Previous" },
            { action: "next" as const, label: "Next" },
          ],
          description: "This is how to use the component.",
          id: "step-3",
          target: () => document.querySelector("#usage"),
          title: "Usage Step",
          type: "tooltip",
        },
        {
          actions: [{ action: "dismiss" as const, label: "Finish Tour" }],
          description: "You've completed the tour. Thank you for your time!",
          id: "step-4",
          title: "That's all folks!",
          type: "dialog",
        },
      ] as TourStepType[],
    },
  },
  he: {
    values: {
      open: "פתח",
      steps: [
        {
          actions: [{ action: "next" as const, label: "התחל סיור" }],
          description: "תלמד כיצד להתקין ולהשתמש ברכיב.",
          id: "step-1",
          title: "ברוכים הבאים לסיור",
          type: "dialog",
        },
        {
          actions: [
            { action: "prev" as const, label: "הקודם" },
            { action: "next" as const, label: "הבא" },
          ],
          description: "בואו נעשה סיור מהיר באתר התיעוד שיעזור לכם להתחיל.",
          id: "step-2",
          target: () => document.querySelector("#installation"),
          title: "שלב התקנה",
          type: "tooltip",
        },
        {
          actions: [
            { action: "prev" as const, label: "הקודם" },
            { action: "next" as const, label: "הבא" },
          ],
          description: "כך משתמשים ברכיב.",
          id: "step-3",
          target: () => document.querySelector("#usage"),
          title: "שלב שימוש",
          type: "tooltip",
        },
        {
          actions: [{ action: "dismiss" as const, label: "סיום סיור" }],
          description: "השלמת את הסיור. תודה על זמנך!",
          id: "step-4",
          title: "זה הכל!",
          type: "dialog",
        },
      ] as TourStepType[],
    },
  },
};

export default Example;
