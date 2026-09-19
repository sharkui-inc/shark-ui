"use client";

import { createListCollection } from "@ark-ui/react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { createWavesAvatar } from "@/lib/dicebear";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  const collection = createListCollection({ items: values.items });

  return (
    <Listbox
      className="w-full max-w-sm"
      collection={collection}
      defaultValue={["camille"]}
    >
      <ListboxContent className="rounded-2xl border shadow-xs/4">
        {collection.items.map((item) => (
          <ListboxItem
            className="flex w-full items-center gap-3 rounded-xl border border-transparent px-2 py-2.5"
            item={item}
            key={item.value}
          >
            <Avatar size="md">
              <AvatarImage alt="" src={item.avatar} />
              <AvatarFallback>{item.initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <ListboxItemText className="block truncate font-medium text-sm">
                {item.label}
              </ListboxItemText>
              <p className="truncate text-muted-foreground text-xs" dir="ltr">
                {item.email}
              </p>
            </div>
          </ListboxItem>
        ))}
      </ListboxContent>
    </Listbox>
  );
};

const translations = {
  ar: {
    values: {
      items: [
        {
          avatar: createWavesAvatar("camille-dubois", "purple"),
          email: "camille@onda.co",
          initials: "س د",
          label: "سارة الدوسري",
          value: "camille",
        },
        {
          avatar: createWavesAvatar("edward-lee", "blue"),
          email: "edward@onda.co",
          initials: "ع ل",
          label: "عمر العلي",
          value: "edward",
        },
        {
          avatar: createWavesAvatar("mila-jensen", "orange"),
          email: "mila@onda.co",
          initials: "ل م",
          label: "ليان محمد",
          value: "mila",
        },
        {
          avatar: createWavesAvatar("dario-rossi", "green-dark"),
          email: "dario@onda.co",
          initials: "ن ح",
          label: "نورة الحربي",
          value: "dario",
        },
      ],
    },
  },
  en: {
    values: {
      items: [
        {
          avatar: createWavesAvatar("camille-dubois", "purple"),
          email: "camille@onda.co",
          initials: "CD",
          label: "Camille Dubois",
          value: "camille",
        },
        {
          avatar: createWavesAvatar("edward-lee", "blue"),
          email: "edward@onda.co",
          initials: "EL",
          label: "Edward Lee",
          value: "edward",
        },
        {
          avatar: createWavesAvatar("mila-jensen", "orange"),
          email: "mila@onda.co",
          initials: "MJ",
          label: "Mila Jensen",
          value: "mila",
        },
        {
          avatar: createWavesAvatar("dario-rossi", "green-dark"),
          email: "dario@onda.co",
          initials: "DR",
          label: "Dario Rossi",
          value: "dario",
        },
      ],
    },
  },
  he: {
    values: {
      items: [
        {
          avatar: createWavesAvatar("camille-dubois", "purple"),
          email: "camille@onda.co",
          initials: "ש כ",
          label: "שירה כהן",
          value: "camille",
        },
        {
          avatar: createWavesAvatar("edward-lee", "blue"),
          email: "edward@onda.co",
          initials: "א ל",
          label: "אורי לוי",
          value: "edward",
        },
        {
          avatar: createWavesAvatar("mila-jensen", "orange"),
          email: "mila@onda.co",
          initials: "נ מ",
          label: "נועה מזרחי",
          value: "mila",
        },
        {
          avatar: createWavesAvatar("dario-rossi", "green-dark"),
          email: "dario@onda.co",
          initials: "ת א",
          label: "תומר אברהם",
          value: "dario",
        },
      ],
    },
  },
};

export default Example;
