"use client";

import { type DateValue, parseDate } from "@ark-ui/react";
import { CalendarCheckIcon, CalendarDaysIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/examples/example-toast";
import { Button } from "@/registry/react/components/button";
import {
  Calendar,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTable,
  CalendarTableDays,
  CalendarViewControl,
  CalendarViewDate,
  CalendarWeekDays,
} from "@/registry/react/components/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import { IconTile } from "@/registry/react/components/icon-tile";
import { Separator } from "@/registry/react/components/separator";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

export const BookAppointmentExample = (props: React.ComponentProps<"div">) => {
  const [value, setValue] = useState<DateValue[]>([today]);
  const [slot, setSlot] = useState(["slot-0"]);
  const [isBooked, setIsBooked] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const selectedDay = value[0] ?? today;
  const selectedSlot =
    slots.find((item) => item.value === slot[0])?.label ?? slots[0].label;

  return (
    <Card data-slot="example-book-appointment" {...props}>
      <CardHeader className="flex flex-row items-center gap-3">
        <IconTile aria-hidden="true" size="lg">
          <CalendarDaysIcon />
        </IconTile>
        <div className="flex min-w-0 flex-col gap-0.5">
          <CardTitle>Book a visit</CardTitle>
          <CardDescription>{formatWeekday(selectedDay)}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Calendar
          className="w-full"
          onValueChange={({ value: next }) => {
            if (next.length > 0) {
              setValue(next);
              setIsBooked(false);
            }
          }}
          value={value}
        >
          <CalendarViewControl>
            <CalendarPrevTrigger />
            <CalendarViewDate />
            <CalendarNextTrigger />
          </CalendarViewControl>
          <CalendarTable>
            <CalendarWeekDays />
            <CalendarTableDays />
          </CalendarTable>
        </Calendar>
        <Separator />
        <FieldGroup>
          <Field>
            <FieldLabel>Available times</FieldLabel>
            <ToggleGroup
              className="grid w-full grid-cols-2 items-stretch"
              disabled={isBooked}
              multiple={false}
              onValueChange={({ value: next }) => {
                if (next.length > 0) {
                  setSlot(next);
                }
              }}
              size="lg"
              spacing={2}
              value={slot}
              variant="outline"
            >
              {slots.map((item) => (
                <ToggleGroupItem
                  className="w-full justify-center tabular-nums"
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          disabled={isBooked}
          isLoading={isConfirming}
          onClick={async () => {
            setIsConfirming(true);
            await new Promise((resolve) => {
              window.setTimeout(resolve, 600);
            });
            setIsConfirming(false);
            setIsBooked(true);
            toast.success({
              description: `${formatWeekday(selectedDay)} at ${selectedSlot}.`,
              title: "Visit booked",
            });
          }}
        >
          <CalendarCheckIcon aria-hidden="true" />
          {isBooked ? "Booked" : "Confirm"}
        </Button>
      </CardFooter>
    </Card>
  );
};

const today = parseDate(new Date());

const formatWeekday = (date: DateValue) =>
  new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date(date.year, date.month - 1, date.day)
  );

const slots = [
  { label: "9:00 AM", value: "slot-0" },
  { label: "10:30 AM", value: "slot-1" },
  { label: "11:00 AM", value: "slot-2" },
  { label: "1:30 PM", value: "slot-3" },
];
