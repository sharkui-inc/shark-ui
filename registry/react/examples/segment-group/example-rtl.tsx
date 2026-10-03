"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  SegmentGroup,
  SegmentGroupItem,
  SegmentGroupItemText,
} from "@/registry/react/components/segment-group";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <SegmentGroup className="rounded-lg" defaultValue="Profile">
      {values.items.map((item) => (
        <SegmentGroupItem
          className="px-2 py-1.5 text-sm"
          key={item.value}
          value={item.value}
        >
          <SegmentGroupItemText>{item.label}</SegmentGroupItemText>
        </SegmentGroupItem>
      ))}
    </SegmentGroup>
  );
};

const translations = {
  ar: {
    values: {
      items: [
        { label: "الملف الشخصي", value: "Profile" },
        { label: "الحساب", value: "Account" },
        { label: "الأمان", value: "Security" },
        { label: "الإشعارات", value: "Notifications" },
      ],
    },
  },
  en: {
    values: {
      items: [
        { label: "Profile", value: "Profile" },
        { label: "Account", value: "Account" },
        { label: "Security", value: "Security" },
        { label: "Notifications", value: "Notifications" },
      ],
    },
  },
  he: {
    values: {
      items: [
        { label: "פרופיל", value: "Profile" },
        { label: "חשבון", value: "Account" },
        { label: "אבטחה", value: "Security" },
        { label: "התראות", value: "Notifications" },
      ],
    },
  },
};

export default Example;
