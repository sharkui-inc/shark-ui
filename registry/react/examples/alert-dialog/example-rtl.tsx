"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogClose,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/registry/react/components/alert-dialog";
import { Button } from "@/registry/react/components/button";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{values.open}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader
          description={values.description}
          title={values.title}
        />
        <AlertDialogFooter>
          <AlertDialogCancel>{values.cancel}</AlertDialogCancel>
          <AlertDialogClose asChild>
            <AlertDialogAction>{values.confirm}</AlertDialogAction>
          </AlertDialogClose>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const translations = {
  ar: {
    values: {
      cancel: "لا تسمح",
      confirm: "السماح",
      description: "هل تريد السماح للملحق USB بالاتصال بهذا الجهاز؟",
      open: "فتح",
      title: "السماح للملحق بالاتصال بالجهاز؟",
    },
  },
  en: {
    values: {
      cancel: "Don't allow",
      confirm: "Allow",
      description:
        "Do you want to allow the USB accessory to connect to this device?",
      open: "Open",
      title: "Allow accessory to connect?",
    },
  },
  he: {
    values: {
      cancel: "אסור",
      confirm: "אפשר",
      description: "האם ברצונך לאפשר לאביזר ה-USB להתחבר למכשיר זה?",
      open: "פתח",
      title: "לאפשר לאביזר להתחבר למכשיר?",
    },
  },
};

export default Example;
