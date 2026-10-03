"use client";

import CalendarBasic from "./_examples/calendar-basic";
import CalendarBookedDates from "./_examples/calendar-booked-dates";
import CalendarCaption from "./_examples/calendar-caption";
import CalendarCustomDays from "./_examples/calendar-custom-days";
import CalendarHijri from "./_examples/calendar-hijri";
import CalendarMultiple from "./_examples/calendar-multiple";
import CalendarPresets from "./_examples/calendar-presets";
import CalendarRange from "./_examples/calendar-range";
import CalendarRtl from "./_examples/calendar-rtl";
import CalendarTime from "./_examples/calendar-time";
import CalendarWeekNumbers from "./_examples/calendar-week-numbers";

const CalendarExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CalendarBasic />
        </div>
      </section>

      <section
        aria-labelledby="booked-dates-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="booked-dates-heading"
        >
          Booked Dates
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CalendarBookedDates />
        </div>
      </section>

      <section
        aria-labelledby="caption-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="caption-heading">
          Caption
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CalendarCaption />
        </div>
      </section>

      <section
        aria-labelledby="custom-days-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="custom-days-heading"
        >
          Custom Days
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CalendarCustomDays />
        </div>
      </section>

      <section aria-labelledby="hijri-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="hijri-heading">
          Hijri
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CalendarHijri />
        </div>
      </section>

      <section
        aria-labelledby="multiple-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="multiple-heading">
          Multiple
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CalendarMultiple />
        </div>
      </section>

      <section
        aria-labelledby="presets-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="presets-heading">
          Presets
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CalendarPresets />
        </div>
      </section>

      <section aria-labelledby="range-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="range-heading">
          Range
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CalendarRange />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CalendarRtl />
        </div>
      </section>

      <section aria-labelledby="time-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="time-heading">
          Time
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CalendarTime />
        </div>
      </section>

      <section
        aria-labelledby="week-numbers-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="week-numbers-heading"
        >
          Week Numbers
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CalendarWeekNumbers />
        </div>
      </section>
    </div>
  </div>
);

export default CalendarExamplePage;
