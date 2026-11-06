"use client";

import { DateInput } from "@/registry/react/components/date-input";
import { useLocale } from "@/registry/react/components/locale";

const Example = () => {
  const { locale } = useLocale();

  return <DateInput className="w-full max-w-64" locale={locale} />;
};

export default Example;
