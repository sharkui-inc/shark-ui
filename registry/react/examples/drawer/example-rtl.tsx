"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const swipeDirections = [undefined, "up", "start", "end"] as const;

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {values.drawers.map((drawer, index) => (
        <Drawer key={drawer.title} swipeDirection={swipeDirections[index]}>
          <DrawerTrigger asChild>
            <Button variant="outline">{drawer.trigger}</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader title={drawer.title} />
            <DrawerBody>
              <p className="text-muted-foreground text-sm">{drawer.body}</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
};

const translations = {
  ar: {
    values: {
      drawers: [
        {
          body: "اسحب لأسفل لإغلاق هذا المقبض.",
          title: "مقبض سفلي",
          trigger: "أسفل",
        },
        {
          body: "اسحب لأعلى لإغلاق هذا المقبض.",
          title: "مقبض علوي",
          trigger: "أعلى",
        },
        {
          body: "اسحب لليمين لإغلاق هذا المقبض.",
          title: "مقبض البداية",
          trigger: "يمين",
        },
        {
          body: "اسحب لليسار لإغلاق هذا المقبض.",
          title: "مقبض النهاية",
          trigger: "يسار",
        },
      ],
    },
  },
  en: {
    values: {
      drawers: [
        {
          body: "Swipe down to close this drawer.",
          title: "Bottom Drawer",
          trigger: "Bottom",
        },
        {
          body: "Swipe up to close this drawer.",
          title: "Top Drawer",
          trigger: "Top",
        },
        {
          body: "Swipe left to close this drawer.",
          title: "Start Drawer",
          trigger: "Left",
        },
        {
          body: "Swipe right to close this drawer.",
          title: "End Drawer",
          trigger: "Right",
        },
      ],
    },
  },
  he: {
    values: {
      drawers: [
        {
          body: "גרור למטה כדי לסגור את המגירה הזו.",
          title: "מגירה תחתונה",
          trigger: "למטה",
        },
        {
          body: "גרור למעלה כדי לסגור את המגירה הזו.",
          title: "מגירה עליונה",
          trigger: "למעלה",
        },
        {
          body: "גרור ימינה כדי לסגור את המגירה הזו.",
          title: "מגירת התחלה",
          trigger: "ימין",
        },
        {
          body: "גרור שמאלה כדי לסגור את המגירה הזו.",
          title: "מגירת סיום",
          trigger: "שמאל",
        },
      ],
    },
  },
};

export default Example;
