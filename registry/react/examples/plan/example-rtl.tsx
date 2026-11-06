"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Plan,
  PlanContent,
  PlanHeader,
  PlanItem,
  PlanItemContent,
  PlanItemDetailFile,
  PlanItemTrigger,
} from "@/registry/react/components/plan";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Plan className="max-w-lg" status="in-progress">
      <PlanHeader title={values.title} />
      <PlanContent>
        <PlanItem collapsible status="completed">
          <PlanItemTrigger title={values.readValidator} />
          <PlanItemContent>
            <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
          </PlanItemContent>
        </PlanItem>
        <PlanItem collapsible status="in-progress">
          <PlanItemTrigger title={values.patchValidator} />
          <PlanItemContent>
            <PlanItemDetailFile>src/utils/helpers.ts</PlanItemDetailFile>
            <PlanItemDetailFile>src/app.tsx</PlanItemDetailFile>
          </PlanItemContent>
        </PlanItem>
        <PlanItem status="pending">
          <PlanItemTrigger title={values.runTests} />
        </PlanItem>
      </PlanContent>
    </Plan>
  );
};

const translations = {
  ar: {
    values: {
      patchValidator: "تصحيح isValidEmail",
      readValidator: "قراءة المُتحقِّق الحالي",
      runTests: "تشغيل اختبارات الوحدة",
      title: "إضافة التحقق من البريد الإلكتروني",
    },
  },
  en: {
    values: {
      patchValidator: "Patch isValidEmail",
      readValidator: "Read current validator",
      runTests: "Run unit tests",
      title: "Add email validation",
    },
  },
  he: {
    values: {
      patchValidator: "תיקון isValidEmail",
      readValidator: "קריאת ה-validator הנוכחי",
      runTests: "הרצת בדיקות יחידה",
      title: "הוספת אימות אימייל",
    },
  },
};

export default Example;
