"use client";

import {
  ArchiveIcon,
  DownloadIcon,
  PencilIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  ActionBar,
  ActionBarBody,
  ActionBarClose,
  ActionBarContent,
  ActionBarSeparator,
  ActionBarTrigger,
  ActionBarValue,
} from "@/registry/react/components/action-bar";
import { Button } from "@/registry/react/components/button";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <ActionBar>
      <ActionBarTrigger asChild>
        <Button variant="outline">{values.open}</Button>
      </ActionBarTrigger>
      <ActionBarContent aria-label={values.bulkActions}>
        <ActionBarValue count={3} />
        <ActionBarSeparator />
        <ActionBarBody>
          <Button variant="ghost">
            <PencilIcon data-icon="inline-start" />
            <span className="max-sm:sr-only">{values.edit}</span>
          </Button>
          <Button variant="ghost">
            <DownloadIcon data-icon="inline-start" />
            <span className="max-sm:sr-only">{values.export}</span>
          </Button>
          <Button variant="ghost">
            <ArchiveIcon data-icon="inline-start" />
            <span className="max-sm:sr-only">{values.archive}</span>
          </Button>
          <ActionBarSeparator />
          <Button variant="destructive">
            <Trash2Icon data-icon="inline-start" />
            <span className="max-sm:sr-only">{values.delete}</span>
          </Button>
        </ActionBarBody>
        <ActionBarSeparator />
        <ActionBarClose asChild>
          <Button size="icon-md" variant="ghost">
            <XIcon />
          </Button>
        </ActionBarClose>
      </ActionBarContent>
    </ActionBar>
  );
};

const translations = {
  ar: {
    values: {
      archive: "أرشفة",
      bulkActions: "إجراءات جماعية",
      delete: "حذف",
      edit: "تعديل",
      export: "تصدير",
      open: "فتح",
    },
  },
  en: {
    values: {
      archive: "Archive",
      bulkActions: "Bulk actions",
      delete: "Delete",
      edit: "Edit",
      export: "Export",
      open: "Open",
    },
  },
  he: {
    values: {
      archive: "ארכיון",
      bulkActions: "פעולות בכמות",
      delete: "מחיקה",
      edit: "עריכה",
      export: "ייצוא",
      open: "פתח",
    },
  },
};

export default Example;
