"use client";

import { BellIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { Float } from "@/registry/react/components/float";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="relative">
      <Button size="icon-lg" variant="outline">
        <BellIcon />
      </Button>
      <Float>
        <Badge pill size="sm" variant="default">
          {values.count}
        </Badge>
      </Float>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      count: "٩+",
    },
  },
  en: {
    values: {
      count: "9+",
    },
  },
  he: {
    values: {
      count: "9+",
    },
  },
};

export default Example;
