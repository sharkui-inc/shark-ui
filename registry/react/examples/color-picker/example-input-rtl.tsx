"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  ColorPicker,
  ColorPickerControl,
  ColorPickerInput,
} from "@/registry/react/components/color-picker";
import {
  Field,
  FieldHelper,
  FieldLabel,
} from "@/registry/react/components/field";
import { Input } from "@/registry/react/components/input";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <ColorPicker className="w-full max-w-64" defaultValue="#eb5e41">
      <Field>
        <FieldLabel>{values.color}</FieldLabel>
        <ColorPickerControl>
          <ColorPickerInput asChild>
            <Input />
          </ColorPickerInput>
        </ColorPickerControl>
        <FieldHelper>{values.helper}</FieldHelper>
      </Field>
    </ColorPicker>
  );
};

const translations = {
  ar: {
    values: {
      color: "اللون",
      helper: "أدخل اللون الأساسي لعلامتك التجارية",
    },
  },
  en: {
    values: {
      color: "Color",
      helper: "Enter your brand's primary color",
    },
  },
  he: {
    values: {
      color: "צבע",
      helper: "הזן את הצבע הראשי של המותג שלך",
    },
  },
};

export default Example;
