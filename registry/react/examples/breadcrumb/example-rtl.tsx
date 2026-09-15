"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/react/components/breadcrumb";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">{values.home}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">{values.components}</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{values.breadcrumb}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const translations = {
  ar: {
    values: {
      breadcrumb: "مسار التنقل",
      components: "المكونات",
      home: "الرئيسية",
    },
  },
  en: {
    values: {
      breadcrumb: "Breadcrumb",
      components: "Components",
      home: "Home",
    },
  },
  he: {
    values: {
      breadcrumb: "ניווט שביל",
      components: "רכיבים",
      home: "בית",
    },
  },
};

export default Example;
