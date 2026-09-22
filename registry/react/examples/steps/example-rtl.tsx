"use client";

import { ChevronLeftIcon, ChevronRight } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNext,
  StepsPrevious,
  StepsSeparator,
  StepsTrigger,
} from "@/registry/react/components/steps";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Steps className="size-full max-w-md" count={values.steps.length}>
      <StepsList>
        {values.steps.map((step) => (
          <StepsItem index={step.index} key={step.index}>
            <StepsTrigger>
              <StepsIndicator>{step.number}</StepsIndicator>
            </StepsTrigger>
            <StepsSeparator />
          </StepsItem>
        ))}
      </StepsList>
      {values.steps.map((step) => (
        <StepsContent
          className="flex h-full items-center justify-center rounded-md border"
          index={step.index}
          key={step.index}
        >
          <p className="text-muted-foreground text-sm">{step.label}</p>
        </StepsContent>
      ))}

      <StepsCompletedContent className="flex h-full items-center justify-center rounded-md border">
        <p className="text-muted-foreground text-sm">{values.completed}</p>
      </StepsCompletedContent>

      <div className="flex flex-row-reverse gap-2">
        <StepsNext asChild>
          <Button>
            {values.next}
            <ChevronRight className="rtl:rotate-180" data-icon="inline-end" />
          </Button>
        </StepsNext>
        <StepsPrevious asChild>
          <Button variant="outline">
            <ChevronLeftIcon
              className="rtl:rotate-180"
              data-icon="inline-start"
            />
            {values.back}
          </Button>
        </StepsPrevious>
      </div>
    </Steps>
  );
};

const translations = {
  ar: {
    values: {
      back: "السابق",
      completed: "اكتملت جميع الخطوات. كل شيء جاهز!",
      next: "التالي",
      steps: [
        { index: 0, label: "الخطوة ١", number: "١" },
        { index: 1, label: "الخطوة ٢", number: "٢" },
        { index: 2, label: "الخطوة ٣", number: "٣" },
      ],
    },
  },
  en: {
    values: {
      back: "Back",
      completed: "All steps completed. You&apos;re all set!",
      next: "Next",
      steps: [
        { index: 0, label: "Step 1", number: "1" },
        { index: 1, label: "Step 2", number: "2" },
        { index: 2, label: "Step 3", number: "3" },
      ],
    },
  },
  he: {
    values: {
      back: "הקודם",
      completed: "כל השלבים הושלמו. הכול מוכן!",
      next: "הבא",
      steps: [
        { index: 0, label: "שלב 1", number: "1" },
        { index: 1, label: "שלב 2", number: "2" },
        { index: 2, label: "שלב 3", number: "3" },
      ],
    },
  },
};

export default Example;
