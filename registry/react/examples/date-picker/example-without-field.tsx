"use client";

import { CalendarIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  DatePicker,
  DatePickerLabel,
  DatePickerTrigger,
  DatePickerValue,
} from "@/registry/react/components/date-picker";

const Example = () => (
  <DatePicker>
    <DatePickerLabel className="mb-2">Date of birth</DatePickerLabel>
    <DatePickerTrigger asChild>
      <Button className="w-full max-w-64 justify-start" variant="outline">
        <CalendarIcon />
        <DatePickerValue placeholder="Pick a date" />
      </Button>
    </DatePickerTrigger>
  </DatePicker>
);

export default Example;
