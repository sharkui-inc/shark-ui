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
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/react/components/native-select";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{values.open}</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader description={values.description} title={values.title} />
        <DialogBody>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel>{values.name}</FieldLabel>
                <Input placeholder={values.namePlaceholder} />
              </Field>

              <Field>
                <FieldLabel>{values.branch}</FieldLabel>
                <NativeSelect>
                  <NativeSelectOption value="main">main</NativeSelectOption>
                  <NativeSelectOption value="develop">
                    develop
                  </NativeSelectOption>
                  <NativeSelectOption value="feature/123">
                    feature/123
                  </NativeSelectOption>
                  <NativeSelectOption value="release/1.0.0">
                    release/1.0.0
                  </NativeSelectOption>
                </NativeSelect>
              </Field>
            </FieldGroup>
          </FieldSet>
        </DialogBody>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">{values.cancel}</Button>
          </DialogClose>

          <DialogClose asChild>
            <Button>{values.save}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const translations = {
  ar: {
    values: {
      branch: "الفرع الرئيسي",
      cancel: "إلغاء",
      description: "قم بإجراء تغييرات على إعدادات مشروعك.",
      name: "الاسم",
      namePlaceholder: "مشروعي",
      open: "فتح",
      save: "حفظ",
      title: "تعديل المشروع",
    },
  },
  en: {
    values: {
      branch: "Main branch",
      cancel: "Cancel",
      description: "Make changes to your project settings.",
      name: "Name",
      namePlaceholder: "My Project",
      open: "Open",
      save: "Save",
      title: "Edit project",
    },
  },
  he: {
    values: {
      branch: "ענף ראשי",
      cancel: "ביטול",
      description: "בצע שינויים בהגדרות הפרויקט שלך.",
      name: "שם",
      namePlaceholder: "הפרויקט שלי",
      open: "פתח",
      save: "שמור",
      title: "עריכת פרויקט",
    },
  },
};

export default Example;
