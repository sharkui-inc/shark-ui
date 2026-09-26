"use client";

import { createToaster } from "@ark-ui/react/toast";
import { Toaster } from "@/registry/react/components/toast";

export const toast = createToaster({
  max: 3,
  offsets: {
    bottom: "1rem",
    left: "1rem",
    right: "1rem",
    top: "calc(var(--header-height) + 0.75rem)",
  },
  overlap: true,
  placement: "top",
});

export const ExampleToaster = () => <Toaster toaster={toast} />;
