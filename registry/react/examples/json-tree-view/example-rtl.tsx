"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { JsonTreeView } from "@/registry/react/components/json-tree-view";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <JsonTreeView
      className="w-full max-w-xl"
      data={values.data}
      defaultExpandedDepth={1}
    />
  );
};

const translations = {
  ar: {
    values: {
      data: {
        ticket: {
          id: "SUP-1048",
          requester: {
            email: "layla.hassan@example.com",
            name: "ليلى حسن",
          },
          status: "open",
        },
        workspace: "Onda Commerce",
      },
    },
  },
  en: {
    values: {
      data: {
        ticket: {
          id: "SUP-1048",
          requester: {
            email: "jordan.lee@example.com",
            name: "Jordan Lee",
          },
          status: "open",
        },
        workspace: "Onda Commerce",
      },
    },
  },
  he: {
    values: {
      data: {
        ticket: {
          id: "SUP-1048",
          requester: {
            email: "maya.levi@example.com",
            name: "מאיה לוי",
          },
          status: "open",
        },
        workspace: "Onda Commerce",
      },
    },
  },
};

export default Example;
