"use client";

import React from "react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { SkeletonText } from "@/registry/react/components/skeleton";
import {
  Toc,
  TocContent,
  TocItem,
  TocLink,
  TocList,
  TocNav,
  TocTitle,
} from "@/registry/react/components/toc";

const Example = () => {
  const contentRef = React.useRef<HTMLElement>(null);

  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Toc
      className="size-full rounded-lg border p-4"
      items={values.items}
      scrollEl={() => contentRef.current}
    >
      <TocContent className="h-80 overflow-y-auto pe-4" ref={contentRef}>
        <Article items={values.items} />
      </TocContent>
      <TocNav>
        <TocTitle>{values.title}</TocTitle>
        <TocList>
          {values.items.map((item) => (
            <TocItem item={item} key={item.value}>
              <TocLink href={`#${item.value}`}>{item.label}</TocLink>
            </TocItem>
          ))}
        </TocList>
      </TocNav>
    </Toc>
  );
};

interface TocItemProps {
  depth: number;
  label: string;
  lines: number;
  value: string;
}

const Article = ({ items }: { items: TocItemProps[] }) => (
  <>
    {items.map((item) => (
      <section className="flex flex-col gap-3 pb-8" key={item.value}>
        <h2 className="font-semibold text-lg" id={item.value}>
          {item.label}
        </h2>
        <SkeletonText
          aria-hidden="true"
          className="animate-none **:[div]:h-2"
          lines={item.lines}
        />
      </section>
    ))}
  </>
);

const translations = {
  ar: {
    values: {
      items: [
        {
          depth: 2,
          label: "مقدمة",
          lines: 12,
          value: "01-introduction",
        },
        {
          depth: 2,
          label: "ابدأ الآن",
          lines: 10,
          value: "01-getting-started",
        },
        {
          depth: 2,
          label: "التثبيت",
          lines: 8,
          value: "01-installation",
        },
        {
          depth: 2,
          label: "الاستخدام",
          lines: 14,
          value: "01-usage",
        },
        {
          depth: 2,
          label: "الخاتمة",
          lines: 10,
          value: "01-conclusion",
        },
      ],
      title: "في هذه الصفحة",
    },
  },
  en: {
    values: {
      items: [
        {
          depth: 2,
          label: "Introduction",
          lines: 12,
          value: "01-introduction",
        },
        {
          depth: 2,
          label: "Getting Started",
          lines: 10,
          value: "01-getting-started",
        },
        {
          depth: 2,
          label: "Installation",
          lines: 8,
          value: "01-installation",
        },
        { depth: 2, label: "Usage", lines: 14, value: "01-usage" },
        { depth: 2, label: "Conclusion", lines: 10, value: "01-conclusion" },
      ],
      title: "On this page",
    },
  },
  he: {
    values: {
      items: [
        {
          depth: 2,
          label: "מבוא",
          lines: 12,
          value: "01-introduction",
        },
        {
          depth: 2,
          label: "התחלה",
          lines: 10,
          value: "01-getting-started",
        },
        {
          depth: 2,
          label: "התקנה",
          lines: 8,
          value: "01-installation",
        },
        {
          depth: 2,
          label: "שימוש",
          lines: 14,
          value: "01-usage",
        },
        {
          depth: 2,
          label: "סיכום",
          lines: 10,
          value: "01-conclusion",
        },
      ],
      title: "בדף זה",
    },
  },
};

export default Example;
