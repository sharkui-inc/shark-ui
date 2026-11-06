"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/registry/react/components/drawer";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">{values.open}</Button>
      </DrawerTrigger>
      <DrawerContent showCloseButton variant="inset">
        <DrawerHeader description={values.description} title={values.title} />
        <DrawerBody>
          <div className="mx-auto w-full max-w-xs">
            <p className="text-muted-foreground text-sm">{values.body}</p>
          </div>
        </DrawerBody>
        <DrawerFooter>
          <div className="mx-auto w-full max-w-xs">
            <DrawerClose asChild>
              <Button className="w-full" variant="outline">
                {values.close}
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const translations = {
  ar: {
    values: {
      body: "الدرج inset مع اتجاه من اليمين لليسار.",
      close: "إغلاق",
      description: "اختبر inset مع RTL.",
      open: "فتح",
      title: "درج Inset RTL",
    },
  },
  en: {
    values: {
      body: "Inset drawer with right-to-left direction.",
      close: "Close",
      description: "Exercise inset with RTL.",
      open: "Open",
      title: "Inset Drawer RTL",
    },
  },
  he: {
    values: {
      body: "מגירת inset עם כיוון מימין לשמאל.",
      close: "סגור",
      description: "בדוק inset עם RTL.",
      open: "פתח",
      title: "מגירת Inset RTL",
    },
  },
};

export default Example;
