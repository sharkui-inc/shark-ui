"use client";

import { ArrowRightIcon } from "lucide-react";
import { DateInput } from "@/registry/react/components/date-input";

const Example = () => (
  <DateInput
    className="w-full max-w-64"
    selectionMode="range"
    separator={<ArrowRightIcon aria-hidden />}
  />
);

export default Example;
