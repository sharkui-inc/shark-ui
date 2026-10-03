"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
} from "@/registry/react/components/data-list";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <DataList>
      {values.rows.map((item) => (
        <DataListItem key={item.label}>
          <DataListItemLabel>{item.label}</DataListItemLabel>
          <DataListItemValue>{item.value}</DataListItemValue>
        </DataListItem>
      ))}
    </DataList>
  );
};

const translations = {
  ar: {
    values: {
      rows: [
        { label: "مستخدمون جدد", value: "٢٣٤" },
        { label: "المبيعات", value: "£١٢٬٣٤٠" },
        { label: "الإيرادات", value: "٣٬٤٥٠" },
      ],
    },
  },
  en: {
    values: {
      rows: [
        { label: "New Users", value: "234" },
        { label: "Sales", value: "£12,340" },
        { label: "Revenue", value: "3,450" },
      ],
    },
  },
  he: {
    values: {
      rows: [
        { label: "משתמשים חדשים", value: "234" },
        { label: "מכירות", value: "£12,340" },
        { label: "הכנסות", value: "3,450" },
      ],
    },
  },
};

export default Example;
