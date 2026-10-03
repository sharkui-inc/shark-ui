"use client";

import {
  CornerDownLeftIcon,
  EllipsisIcon,
  PencilIcon,
  Trash2Icon,
} from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Kbd } from "@/registry/react/components/kbd";
import {
  Queue,
  QueueItem,
  QueueItemAction,
  QueueItemActions,
  QueueItemContent,
  QueueList,
  QueueSection,
  QueueSectionAction,
  QueueSectionContent,
  QueueSectionHeader,
} from "@/registry/react/components/queue";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Queue className="w-full max-w-md">
      <QueueSection>
        <QueueSectionHeader title={values.sectionTitle}>
          <QueueSectionAction>
            <QueueItemAction size="xs">
              {values.startMultitasking}
            </QueueItemAction>
          </QueueSectionAction>
        </QueueSectionHeader>
        <QueueSectionContent>
          <QueueList>
            {values.items.map((item) => (
              <QueueItem key={item}>
                <QueueItemContent>{item}</QueueItemContent>
                <QueueItemActions>
                  <QueueItemAction size="xs">
                    {values.sendNow}
                    <Kbd className="border-0 bg-transparent px-0">
                      <CornerDownLeftIcon aria-hidden />
                    </Kbd>
                  </QueueItemAction>
                  <QueueItemAction aria-label={`${values.edit} ${item}`}>
                    <PencilIcon aria-hidden />
                  </QueueItemAction>
                  <QueueItemAction aria-label={`${values.remove} ${item}`}>
                    <Trash2Icon aria-hidden />
                  </QueueItemAction>
                  <QueueItemAction aria-label={`${values.more} ${item}`}>
                    <EllipsisIcon aria-hidden />
                  </QueueItemAction>
                </QueueItemActions>
              </QueueItem>
            ))}
          </QueueList>
        </QueueSectionContent>
      </QueueSection>
    </Queue>
  );
};

const translations = {
  ar: {
    values: {
      edit: "تحرير",
      items: [
        "لخّص موجز الإطلاق",
        "اكتب ملاحظات الإصدار",
        "افتح PR للوحة قائمة الانتظار",
        "انشر معاينة التوثيق",
      ],
      more: "مزيد من الإجراءات لـ",
      remove: "إزالة",
      sectionTitle: "٤ رسائل في قائمة الانتظار",
      sendNow: "أرسل الآن",
      startMultitasking: "ابدأ تعدد المهام",
    },
  },
  en: {
    values: {
      edit: "Edit",
      items: [
        "Summarize the launch brief",
        "Draft release notes",
        "Open a PR for the queue panel",
        "Ship the docs preview",
      ],
      more: "More actions for",
      remove: "Remove",
      sectionTitle: "4 Queued Messages",
      sendNow: "Send Now",
      startMultitasking: "Start Multitasking",
    },
  },
  he: {
    values: {
      edit: "עריכה",
      items: [
        "סכם את תקציר ההשקה",
        "ניסח הערות שחרור",
        "פתח PR ללוח התור",
        "שחרר את תצוגת התיעוד",
      ],
      more: "פעולות נוספות עבור",
      remove: "הסרה",
      sectionTitle: "4 הודעות בתור",
      sendNow: "שלח עכשיו",
      startMultitasking: "התחל ריבוי משימות",
    },
  },
};

export default Example;
