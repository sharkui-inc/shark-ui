import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleBookedDates from "@/registry/react/examples/calendar/example-booked-dates";
import ExampleControlled from "@/registry/react/examples/calendar/example-controlled";
import ExampleCustomCellSize from "@/registry/react/examples/calendar/example-custom-cell-size";
import ExampleDefault from "@/registry/react/examples/calendar/example-default";
import ExampleFixedWeeks from "@/registry/react/examples/calendar/example-fixed-weeks";
import ExampleForm from "@/registry/react/examples/calendar/example-form";
import ExampleInvalid from "@/registry/react/examples/calendar/example-invalid";
import ExampleMaxSelected from "@/registry/react/examples/calendar/example-max-selected";
import ExampleMinMax from "@/registry/react/examples/calendar/example-min-max";
import ExampleMonthYearSelector from "@/registry/react/examples/calendar/example-month-year-selector";
import ExampleMultipleMonths from "@/registry/react/examples/calendar/example-multiple-months";
import ExamplePresets from "@/registry/react/examples/calendar/example-presets";
import ExampleRange from "@/registry/react/examples/calendar/example-range";
import ExampleRtl from "@/registry/react/examples/calendar/example-rtl";
import ExampleSelectToday from "@/registry/react/examples/calendar/example-select-today";
import ExampleWeekNumbers from "@/registry/react/examples/calendar/example-week-numbers";
import CalendarCaption from "./_examples/calendar-caption";
import CalendarCustomDays from "./_examples/calendar-custom-days";
import CalendarHijri from "./_examples/calendar-hijri";
import CalendarMultiple from "./_examples/calendar-multiple";
import CalendarTime from "./_examples/calendar-time";

const CalendarExamplePage = () => (
  <PreviewLocaleProvider>
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
      <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
        <section
          aria-labelledby="default-heading"
          className="flex flex-col gap-5"
        >
          <h1
            className="text-muted-foreground font-medium"
            id="default-heading"
          >
            Default
          </h1>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDefault />
          </div>
        </section>
        <section
          aria-labelledby="booked-dates-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="booked-dates-heading"
          >
            Booked Dates
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleBookedDates />
          </div>
        </section>
        <section
          aria-labelledby="controlled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="controlled-heading"
          >
            Controlled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleControlled />
          </div>
        </section>
        <section
          aria-labelledby="invalid-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="invalid-heading"
          >
            Invalid
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInvalid />
          </div>
        </section>
        <section
          aria-labelledby="custom-cell-size-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-cell-size-heading"
          >
            Custom Cell Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomCellSize />
          </div>
        </section>
        <section
          aria-labelledby="fixed-weeks-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="fixed-weeks-heading"
          >
            Fixed Weeks
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFixedWeeks />
          </div>
        </section>
        <section aria-labelledby="form-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="form-heading">
            Form Integration
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleForm />
          </div>
        </section>
        <section
          aria-labelledby="max-selected-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="max-selected-heading"
          >
            Max Selected
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMaxSelected />
          </div>
        </section>
        <section
          aria-labelledby="min-max-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="min-max-heading"
          >
            Min and Max
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMinMax />
          </div>
        </section>
        <section
          aria-labelledby="month-year-selector-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="month-year-selector-heading"
          >
            Month Year Selector
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMonthYearSelector />
          </div>
        </section>
        <section
          aria-labelledby="multiple-months-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="multiple-months-heading"
          >
            Multiple Months
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMultipleMonths />
          </div>
        </section>
        <section
          aria-labelledby="presets-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="presets-heading"
          >
            Presets
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePresets />
          </div>
        </section>
        <section
          aria-labelledby="range-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="range-heading">
            Range
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRange />
          </div>
        </section>
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="select-today-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="select-today-heading"
          >
            Select Today
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSelectToday />
          </div>
        </section>
        <section
          aria-labelledby="week-numbers-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="week-numbers-heading"
          >
            Week Numbers
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWeekNumbers />
          </div>
        </section>
        <section
          aria-labelledby="local-caption-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-caption-heading"
          >
            Caption
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CalendarCaption />
          </div>
        </section>
        <section
          aria-labelledby="local-custom-days-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-custom-days-heading"
          >
            Custom Days
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CalendarCustomDays />
          </div>
        </section>
        <section
          aria-labelledby="local-hijri-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-hijri-heading"
          >
            Hijri
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CalendarHijri />
          </div>
        </section>
        <section
          aria-labelledby="local-multiple-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-multiple-heading"
          >
            Multiple
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CalendarMultiple />
          </div>
        </section>
        <section
          aria-labelledby="local-time-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-time-heading"
          >
            Time
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CalendarTime />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default CalendarExamplePage;
