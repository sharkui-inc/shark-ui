"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="w-full max-w-md">
      <JsonTreeView data={values.data} defaultExpandedDepth={1} />
    </div>
  );
};

const translations = {
  ar: {
    values: {
      data: {
        address: {
          city: "Anytown",
          state: "CA",
          street: "123 Main St",
          zip: "12345",
        },
        age: 30,
        email: "john.doe@example.com",
        name: "John Doe",
      },
    },
  },
  en: {
    values: {
      data: {
        address: {
          city: "Anytown",
          state: "CA",
          street: "123 Main St",
          zip: "12345",
        },
        age: 30,
        email: "john.doe@example.com",
        name: "John Doe",
      },
    },
  },
  he: {
    values: {
      data: {
        address: {
          city: "Anytown",
          state: "CA",
          street: "123 Main St",
          zip: "12345",
        },
        age: 30,
        email: "john.doe@example.com",
        name: "John Doe",
      },
    },
  },
};

export default Example;
