"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/registry/react/components/dialog";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{values.open}</Button>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader description={values.description} title={values.title} />
        <DialogBody>
          <p className="text-muted-foreground text-sm">{values.body}</p>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">{values.close}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const translations = {
  ar: {
    values: {
      body: "حوار بحجم كبير واتجاه من اليمين لليسار.",
      close: "إغلاق",
      description: "اختبر الحجم مع RTL.",
      open: "فتح",
      title: "حجم LG RTL",
    },
  },
  en: {
    values: {
      body: "Large dialog with right-to-left direction.",
      close: "Close",
      description: "Exercise size with RTL.",
      open: "Open",
      title: "Size LG RTL",
    },
  },
  he: {
    values: {
      body: "דיאלוג גדול עם כיוון מימין לשמאל.",
      close: "סגור",
      description: "בדוק גודל עם RTL.",
      open: "פתח",
      title: "גודל LG RTL",
    },
  },
};

export default Example;
