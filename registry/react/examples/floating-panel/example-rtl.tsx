"use client";

import { createListCollection } from "@ark-ui/react";
import { TypeIcon, XIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import { Field, FieldLabel } from "@/registry/react/components/field";
import {
  FloatingPanel,
  FloatingPanelBody,
  FloatingPanelCloseTrigger,
  FloatingPanelContent,
  FloatingPanelControl,
  FloatingPanelFooter,
  FloatingPanelHeader,
  FloatingPanelMaximize,
  FloatingPanelMinimize,
  FloatingPanelRestore,
  FloatingPanelTitle,
  FloatingPanelTrigger,
} from "@/registry/react/components/floating-panel";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectList,
  SelectTrigger,
  SelectValue,
} from "@/registry/react/components/select";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <FloatingPanel defaultSize={{ height: 300, width: 360 }}>
      <FloatingPanelTrigger asChild>
        <Button variant="outline">{values.open}</Button>
      </FloatingPanelTrigger>
      <FloatingPanelContent>
        <FloatingPanelHeader>
          <TypeIcon aria-hidden="true" />
          <FloatingPanelTitle>{values.title}</FloatingPanelTitle>
          <FloatingPanelControl>
            <FloatingPanelMinimize />
            <FloatingPanelMaximize />
            <FloatingPanelRestore />
            <FloatingPanelCloseTrigger asChild>
              <Button aria-label={values.close} size="icon-xs">
                <XIcon aria-hidden="true" />
              </Button>
            </FloatingPanelCloseTrigger>
          </FloatingPanelControl>
        </FloatingPanelHeader>
        <FloatingPanelBody>
          <Field>
            <FieldLabel>{values.fontFamily}</FieldLabel>
            <Select collection={collection} defaultValue={["Inter"]}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectList>
                  {collection.items.map((item) => (
                    <SelectItem item={item} key={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectList>
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel>{values.fontSize}</FieldLabel>
            <NumberInput className="w-full" defaultValue="16">
              <NumberInputGroup>
                <NumberInputDecrement />
                <NumberInputInput />
                <NumberInputIncrement />
              </NumberInputGroup>
            </NumberInput>
          </Field>
        </FloatingPanelBody>
        <FloatingPanelFooter>
          <Button variant="outline">{values.save}</Button>
        </FloatingPanelFooter>
      </FloatingPanelContent>
    </FloatingPanel>
  );
};

const collection = createListCollection({
  items: ["Inter", "Roboto", "Helvetica", "Geist"],
});

const translations = {
  ar: {
    values: {
      close: "إغلاق",
      fontFamily: "عائلة الخط",
      fontSize: "حجم الخط",
      open: "فتح",
      save: "حفظ",
      title: "الإعدادات",
    },
  },
  en: {
    values: {
      close: "Close",
      fontFamily: "Font family",
      fontSize: "Font size",
      open: "Open",
      save: "Save",
      title: "Settings",
    },
  },
  he: {
    values: {
      close: "סגירה",
      fontFamily: "משפחת גופנים",
      fontSize: "גודל גופן",
      open: "פתח",
      save: "שמור",
      title: "הגדרות",
    },
  },
};

export default Example;
