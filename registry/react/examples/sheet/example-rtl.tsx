"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/registry/react/components/sheet";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">{values.open}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader description={values.description} title={values.title} />
        <SheetBody>
          <FieldGroup>
            <Field>
              <FieldLabel>{values.name}</FieldLabel>
              <Input defaultValue="Vinicius Vicentini" />
            </Field>
            <Field>
              <FieldLabel>{values.username}</FieldLabel>
              <Input defaultValue="@vinihvc" />
            </Field>
          </FieldGroup>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">{values.cancel}</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button>{values.save}</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const translations = {
  ar: {
    values: {
      cancel: "إلغاء",
      description: "أجرِ التغييرات على حسابك هنا. انقر «حفظ» عند الانتهاء.",
      name: "الاسم",
      open: "فتح",
      save: "حفظ التغييرات",
      title: "تعديل المستخدم",
      username: "اسم المستخدم",
    },
  },
  en: {
    values: {
      cancel: "Cancel",
      description:
        "Make changes to your account here. Click save when you're done.",
      name: "Name",
      open: "Open",
      save: "Save changes",
      title: "Edit User",
      username: "Username",
    },
  },
  he: {
    values: {
      cancel: "ביטול",
      description: "בצע כאן שינויים לחשבון שלך. לחץ «שמור» כשתסיים.",
      name: "שם",
      open: "פתח",
      save: "שמור שינויים",
      title: "עריכת משתמש",
      username: "שם משתמש",
    },
  },
};

export default Example;
