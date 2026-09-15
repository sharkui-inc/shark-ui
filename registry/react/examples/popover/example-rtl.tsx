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
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/registry/react/components/popover";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">{values.open}</Button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <PopoverHeader description={values.description} title={values.title} />
        <PopoverBody>
          <FieldGroup className="gap-2">
            <Field className="grid grid-cols-3 items-center gap-4">
              <FieldLabel>{values.width}</FieldLabel>
              <Input className="col-span-2" defaultValue="100%" />
            </Field>

            <Field className="grid grid-cols-3 items-center gap-4">
              <FieldLabel>{values.maxWidth}</FieldLabel>
              <Input className="col-span-2" defaultValue="300px" />
            </Field>

            <Field className="grid grid-cols-3 items-center gap-4">
              <FieldLabel>{values.height}</FieldLabel>
              <Input className="col-span-2" defaultValue="25px" />
            </Field>

            <Field className="grid grid-cols-3 items-center gap-4">
              <FieldLabel>{values.maxHeight}</FieldLabel>
              <Input className="col-span-2" defaultValue="none" />
            </Field>
          </FieldGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const translations = {
  ar: {
    values: {
      description: "اضبط أبعاد الطبقة.",
      height: "الارتفاع",
      maxHeight: "الحد الأقصى للارتفاع",
      maxWidth: "الحد الأقصى للعرض",
      open: "فتح",
      title: "الأبعاد",
      width: "العرض",
    },
  },
  en: {
    values: {
      description: "Set the dimensions for the layer.",
      height: "Height",
      maxHeight: "Max. height",
      maxWidth: "Max. width",
      open: "Open",
      title: "Dimensions",
      width: "Width",
    },
  },
  he: {
    values: {
      description: "הגדר את המידות לשכבה.",
      height: "גובה",
      maxHeight: "גובה מקסימלי",
      maxWidth: "רוחב מקסימלי",
      open: "פתח",
      title: "מידות",
      width: "רוחב",
    },
  },
};

export default Example;
