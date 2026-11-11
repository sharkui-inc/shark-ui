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
import { Card, CardContent } from "@/registry/react/components/card";
import { Field, FieldError } from "@/registry/react/components/field";

const Example = () => (
  <Field className="w-fit" invalid>
    <Card className="[--space:--spacing(2)]">
      <CardContent>
        <Calendar invalid>
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
    </Card>
    <FieldError>Select a valid date.</FieldError>
  </Field>
);

export default Example;
