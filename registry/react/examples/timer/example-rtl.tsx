"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import {
  Timer,
  TimerArea,
  TimerItem,
  TimerItemGroup,
  TimerItemLabel,
  TimerSeparator,
} from "@/registry/react/components/timer";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Timer autoStart>
      <TimerArea>
        <TimerItemGroup>
          <TimerItem type="days" />
          <TimerItemLabel>{values.days}</TimerItemLabel>
        </TimerItemGroup>
        <TimerSeparator />
        <TimerItemGroup>
          <TimerItem type="hours" />
          <TimerItemLabel>{values.hours}</TimerItemLabel>
        </TimerItemGroup>
        <TimerSeparator />
        <TimerItemGroup>
          <TimerItem type="minutes" />
          <TimerItemLabel>{values.minutes}</TimerItemLabel>
        </TimerItemGroup>
        <TimerSeparator />
        <TimerItemGroup>
          <TimerItem type="seconds" />
          <TimerItemLabel>{values.seconds}</TimerItemLabel>
        </TimerItemGroup>
      </TimerArea>
    </Timer>
  );
};

const translations = {
  ar: {
    values: {
      days: "أيام",
      hours: "ساعات",
      minutes: "دقائق",
      seconds: "ثوانٍ",
    },
  },
  en: {
    values: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
  },
  he: {
    values: {
      days: "ימים",
      hours: "שעות",
      minutes: "דקות",
      seconds: "שניות",
    },
  },
};

export default Example;
