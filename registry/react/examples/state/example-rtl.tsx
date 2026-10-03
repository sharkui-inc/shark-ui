"use client";

import { ArrowUpRightIcon, FolderCodeIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  State,
  StateContent,
  StateDescription,
  StateHeader,
  StateMedia,
  StateTitle,
} from "@/registry/react/components/state";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <State>
      <StateHeader>
        <StateMedia variant="icon">
          <FolderCodeIcon aria-hidden />
        </StateMedia>
        <StateTitle asChild>
          <h2>{values.title}</h2>
        </StateTitle>
        <StateDescription>{values.description}</StateDescription>
      </StateHeader>
      <StateContent>
        <div className="flex gap-2">
          <Button>{values.create}</Button>
          <Button variant="outline">{values.importProject}</Button>
        </div>
      </StateContent>
      <Button
        asChild
        className="text-muted-foreground"
        size="sm"
        variant="link"
      >
        <a aria-label={values.learnLabel} href="#">
          {values.learn} <ArrowUpRightIcon aria-hidden data-icon="inline-end" />
        </a>
      </Button>
    </State>
  );
};

const translations = {
  ar: {
    values: {
      create: "إنشاء مشروع",
      description: "لم تنشئ أي مشاريع بعد. ابدأ بإنشاء مشروعك الأول.",
      importProject: "استيراد مشروع",
      learn: "اعرف المزيد",
      learnLabel: "اعرف المزيد عن إنشاء المشاريع",
      title: "لا توجد مشاريع بعد",
    },
  },
  en: {
    values: {
      create: "Create Project",
      description:
        "You haven&apos;t created any projects yet. Get started by creating your first project.",
      importProject: "Import Project",
      learn: "Learn More",
      learnLabel: "Learn more about creating projects",
      title: "No Projects Yet",
    },
  },
  he: {
    values: {
      create: "צור פרויקט",
      description: "עדיין לא יצרת פרויקטים. התחל ביצירת הפרויקט הראשון שלך.",
      importProject: "ייבא פרויקט",
      learn: "מידע נוסף",
      learnLabel: "מידע נוסף על יצירת פרויקטים",
      title: "אין פרויקטים עדיין",
    },
  },
};

export default Example;
