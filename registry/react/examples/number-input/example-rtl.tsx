"use client";

import { useLocale } from "@/registry/react/components/locale";
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputInput,
} from "@/registry/react/components/number-input";

const Example = () => {
  const { locale } = useLocale();

  return (
    <NumberInput className="w-full max-w-48" defaultValue="1" locale={locale}>
      <NumberInputGroup>
        <NumberInputDecrement />
        <NumberInputInput />
        <NumberInputIncrement />
      </NumberInputGroup>
    </NumberInput>
  );
};

export default Example;
