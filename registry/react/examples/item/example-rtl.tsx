"use client";

import { BadgeCheck, ChevronRight, Ellipsis } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>{values.basicItem}</ItemTitle>
          <ItemDescription>{values.description}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="icon-sm" variant="outline">
            <Ellipsis />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <BadgeCheck className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{values.verified}</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRight className="size-4 rtl:rotate-180" />
        </ItemActions>
      </Item>
    </div>
  );
};

const translations = {
  ar: {
    values: {
      basicItem: "عنصر أساسي",
      description: "عنصر بسيط مع عنوان ووصف.",
      verified: "تم التحقق من ملفك الشخصي.",
    },
  },
  en: {
    values: {
      basicItem: "Basic Item",
      description: "A simple item with title and description.",
      verified: "Your profile has been verified.",
    },
  },
  he: {
    values: {
      basicItem: "פריט בסיסי",
      description: "פריט פשוט עם כותרת ותיאור.",
      verified: "הפרופיל שלך אומת.",
    },
  },
};

export default Example;
