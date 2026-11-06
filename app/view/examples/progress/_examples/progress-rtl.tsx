"use client";

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/react/components/progress";

const ProgressRtl = () => (
  <Progress className="w-full max-w-sm" value={56}>
    <ProgressLabel>تقدم الرفع</ProgressLabel>
    <ProgressValue />
  </Progress>
);

export default ProgressRtl;
