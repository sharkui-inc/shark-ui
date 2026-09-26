"use client";

import { Frame as ArkFrame } from "@ark-ui/react/frame";
import type React from "react";

export const Iframe = (props: React.ComponentProps<typeof ArkFrame>) => (
  <ArkFrame data-slot="iframe" {...props} />
);
