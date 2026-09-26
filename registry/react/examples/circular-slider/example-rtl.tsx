"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  CircularSlider,
  CircularSliderValue,
} from "@/registry/react/components/circular-slider";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <CircularSlider aria-label={values.angle} defaultValue={45}>
      <CircularSliderValue suffix="°" />
    </CircularSlider>
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
