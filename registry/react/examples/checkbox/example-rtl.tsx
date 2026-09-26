"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Checkbox } from "@/registry/react/components/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];

  return (
    <FieldGroup className="w-full max-w-sm">
      <Field orientation="horizontal">
        <Checkbox defaultChecked />
        <FieldLabel>{values.acceptTerms}</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox />
        <FieldContent>
          <FieldLabel>{values.receiveNotifications}</FieldLabel>
          <FieldDescription>{values.notificationDescription}</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <Checkbox />
        <FieldContent>
          <FieldLabel>{values.receiveMarketing}</FieldLabel>
        </FieldContent>
      </Field>
    </FieldGroup>
  );
};

const translations = {
  ar: {
    values: {
      acceptTerms: "أوافق على الشروط والأحكام",
      notificationDescription: "ستصلك إشعارات عندما ينشر أحدهم تعليقًا",
      receiveMarketing: "استلام رسائل التسويق",
      receiveNotifications: "استلام الإشعارات",
    },
  },
  en: {
    values: {
      acceptTerms: "Accept terms and conditions",
      notificationDescription:
        "You'll receive a notification when someone posts a comment",
      receiveMarketing: "Receive marketing emails",
      receiveNotifications: "Receive notifications",
    },
  },
  he: {
    values: {
      acceptTerms: "אני מסכים לתנאים ולהתניות",
      notificationDescription: "תקבל הודעה כשמישהו מפרסם תגובה",
      receiveMarketing: "קבלת מיילים שיווקיים",
      receiveNotifications: "קבלת התראות",
    },
  },
};

export default Example;
