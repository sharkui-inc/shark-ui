"use client";

import DatePickerBasic from "./_examples/date-picker-basic";
import DatePickerDob from "./_examples/date-picker-dob";
import DatePickerInput from "./_examples/date-picker-input";
import DatePickerNaturalLanguage from "./_examples/date-picker-natural-language";
import DatePickerRange from "./_examples/date-picker-range";
import DatePickerRtl from "./_examples/date-picker-rtl";
import DatePickerTime from "./_examples/date-picker-time";

const DatePickerExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <DatePickerBasic />
        </div>
      </section>

      <section aria-labelledby="dob-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="dob-heading">
          Date of Birth
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <DatePickerDob />
        </div>
      </section>

      <section aria-labelledby="input-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="input-heading">
          Input
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <DatePickerInput />
        </div>
      </section>

      <section
        aria-labelledby="natural-language-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="natural-language-heading"
        >
          Natural Language
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <DatePickerNaturalLanguage />
        </div>
      </section>

      <section aria-labelledby="range-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="range-heading">
          Range
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <DatePickerRange />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <DatePickerRtl />
        </div>
      </section>

      <section aria-labelledby="time-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="time-heading">
          Time
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <DatePickerTime />
        </div>
      </section>
    </div>
  </div>
);

export default DatePickerExamplePage;
