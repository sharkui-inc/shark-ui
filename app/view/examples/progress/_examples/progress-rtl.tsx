"use client";

import { LocaleProvider } from "@/registry/react/components/locale";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/react/components/progress";

const ProgressRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <Progress className="w-full max-w-sm" value={56}>
        <ProgressLabel>تقدم الرفع</ProgressLabel>
        <ProgressValue />
      </Progress>
    </LocaleProvider>
  </div>
);

export default ProgressRtl;
