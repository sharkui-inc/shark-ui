"use client";

import { CheckIcon, XIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableControl,
  EditableInput,
  EditablePreview,
  EditableSubmitTrigger,
} from "@/registry/react/components/editable";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Card className="w-full max-w-sm">
      <CardHeader description={values.description} title={values.title} />
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel>{values.name}</FieldLabel>
            <Editable defaultValue="Vinicius Vicentini">
              <EditableArea>
                <EditableInput asChild>
                  <Input />
                </EditableInput>
                <EditablePreview />
              </EditableArea>
              <EditableControl>
                <EditableCancelTrigger asChild>
                  <Button size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </EditableCancelTrigger>
                <EditableSubmitTrigger asChild>
                  <Button size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </EditableSubmitTrigger>
              </EditableControl>
            </Editable>
          </Field>
          <Field>
            <FieldLabel>{values.username}</FieldLabel>
            <Editable defaultValue="@vinihvc">
              <EditableArea>
                <EditableInput asChild>
                  <Input />
                </EditableInput>
                <EditablePreview />
              </EditableArea>
              <EditableControl>
                <EditableCancelTrigger asChild>
                  <Button size="icon-md" variant="outline">
                    <XIcon />
                  </Button>
                </EditableCancelTrigger>
                <EditableSubmitTrigger asChild>
                  <Button size="icon-md" variant="outline">
                    <CheckIcon />
                  </Button>
                </EditableSubmitTrigger>
              </EditableControl>
            </Editable>
          </Field>
        </FieldGroup>
      </CardContent>
    </Card>
  );
};

const translations = {
  ar: {
    values: {
      description: "انقر على الحقل أو زر التعديل لبدء التحرير",
      name: "الاسم",
      title: "تعديل المستخدم",
      username: "اسم المستخدم",
    },
  },
  en: {
    values: {
      description: "Click in the field or edit button to start editing",
      name: "Name",
      title: "Edit user",
      username: "Username",
    },
  },
  he: {
    values: {
      description: "לחץ על השדה או על כפתור העריכה כדי להתחיל לערוך",
      name: "שם",
      title: "עריכת משתמש",
      username: "שם משתמש",
    },
  },
};

export default Example;
