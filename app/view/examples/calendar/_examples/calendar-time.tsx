import { ClockIcon } from "lucide-react";
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
  CardFooter,
} from "@/registry/react/components/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/registry/react/components/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/react/components/input-group";

const CalendarTime = () => (
  <Card className="w-fit [--space:--spacing(2)]">
    <CardContent>
      <Calendar>
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
    </CardContent>
    <CardFooter className="bg-card">
      <FieldGroup>
        <Field>
          <FieldLabel>Start Time</FieldLabel>
          <InputGroup>
            <InputGroupInput
              className="[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              defaultValue="10:30:00"
              step="1"
              type="time"
            />
            <InputGroupAddon>
              <ClockIcon aria-hidden="true" className="text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
        </Field>
        <Field>
          <FieldLabel>End Time</FieldLabel>
          <InputGroup>
            <InputGroupInput
              className="[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              defaultValue="12:30:00"
              step="1"
              type="time"
            />
            <InputGroupAddon>
              <ClockIcon aria-hidden="true" className="text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </FieldGroup>
    </CardFooter>
  </Card>
);

export default CalendarTime;
