"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  CircularSlider,
  useCircularSlider,
} from "@/registry/react/components/circular-slider";
import { useLocale } from "@/registry/react/components/locale";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <CircularSlider aria-label={values.angle} defaultValue={45}>
      <RtlValue suffix="°" />
    </CircularSlider>
  );
};

const RtlValue = (props: { suffix?: string }) => {
  const { suffix = "" } = props;
  const { locale } = useLocale();
  const { value } = useCircularSlider();

  const formatValue = new Intl.NumberFormat(locale, { useGrouping: false })
    .format;

  return (
    <span className="relative z-1 tabular-nums">
      {formatValue(value)}
      {suffix}
    </span>
  );
};

const translations = {
  ar: {
    values: {
      angle: "الزاوية",
    },
  },
  en: {
    values: {
      angle: "Angle",
    },
  },
  he: {
    values: {
      angle: "זווית",
    },
  },
};

export default Example;
