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
      <SheetContent placement="left" variant="inset">
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
            <Button>{values.save}</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button variant="outline">{values.cancel}</Button>
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
      description: "ورقة inset من اليسار مع اتجاه من اليمين لليسار.",
      name: "الاسم",
      open: "فتح",
      save: "حفظ التغييرات",
      title: "Inset يسار RTL",
      username: "اسم المستخدم",
    },
  },
  en: {
    values: {
      cancel: "Cancel",
      description: "Inset sheet from the left with right-to-left direction.",
      name: "Name",
      open: "Open",
      save: "Save changes",
      title: "Inset Left RTL",
      username: "Username",
    },
  },
  he: {
    values: {
      cancel: "ביטול",
      description: "גיליון inset משמאל עם כיוון מימין לשמאל.",
      name: "שם",
      open: "פתח",
      save: "שמור שינויים",
      title: "Inset שמאל RTL",
      username: "שם משתמש",
    },
  },
};

export default Example;
