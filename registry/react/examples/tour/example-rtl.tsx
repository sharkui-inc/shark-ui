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
  useTour,
} from "@/registry/react/components/tour";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];
  const tour = useTour({ steps: values.steps });

  return (
    <Tour tour={tour}>
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
          description: "ثبّت هذا المكوّن واستخدمه.",
          id: "step-1",
          title: "مرحبًا بك في الجولة",
          type: "dialog" as const,
        },
        {
          actions: [
            { action: "prev" as const, label: "السابق" },
            { action: "next" as const, label: "التالي" },
          ],
          description: "أضف المكوّن من هذا القسم.",
          id: "step-2",
          target: () => document.querySelector("#installation"),
          title: "التثبيت",
          type: "tooltip" as const,
        },
        {
          actions: [
            { action: "prev" as const, label: "السابق" },
            { action: "next" as const, label: "التالي" },
          ],
          description: "كيفية استخدام المكوّن.",
          id: "step-3",
          target: () => document.querySelector("#usage"),
          title: "الاستخدام",
          type: "tooltip" as const,
        },
        {
          actions: [{ action: "dismiss" as const, label: "إنهاء الجولة" }],
          description: "انتهت الجولة.",
          id: "step-4",
          title: "هذا كل شيء",
          type: "dialog" as const,
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
          description: "Install and use this component.",
          id: "step-1",
          title: "Welcome to the tour",
          type: "dialog" as const,
        },
        {
          actions: [
            { action: "prev" as const, label: "Previous" },
            { action: "next" as const, label: "Next" },
          ],
          description: "Add the component from this section.",
          id: "step-2",
          target: () => document.querySelector("#installation"),
          title: "Installation",
          type: "tooltip" as const,
        },
        {
          actions: [
            { action: "prev" as const, label: "Previous" },
            { action: "next" as const, label: "Next" },
          ],
          description: "How to use the component.",
          id: "step-3",
          target: () => document.querySelector("#usage"),
          title: "Usage",
          type: "tooltip" as const,
        },
        {
          actions: [{ action: "dismiss" as const, label: "Finish Tour" }],
          description: "The tour is finished.",
          id: "step-4",
          title: "That's it",
          type: "dialog" as const,
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
          description: "התקנה ושימוש ברכיב הזה.",
          id: "step-1",
          title: "ברוכים הבאים לסיור",
          type: "dialog" as const,
        },
        {
          actions: [
            { action: "prev" as const, label: "הקודם" },
            { action: "next" as const, label: "הבא" },
          ],
          description: "הוסף את הרכיב מהסעיף הזה.",
          id: "step-2",
          target: () => document.querySelector("#installation"),
          title: "התקנה",
          type: "tooltip" as const,
        },
        {
          actions: [
            { action: "prev" as const, label: "הקודם" },
            { action: "next" as const, label: "הבא" },
          ],
          description: "איך להשתמש ברכיב.",
          id: "step-3",
          target: () => document.querySelector("#usage"),
          title: "שימוש",
          type: "tooltip" as const,
        },
        {
          actions: [{ action: "dismiss" as const, label: "סיום סיור" }],
          description: "הסיור הסתיים.",
          id: "step-4",
          title: "זהו",
          type: "dialog" as const,
        },
      ] as TourStepType[],
    },
  },
};

export default Example;
