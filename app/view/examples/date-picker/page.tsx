"use client";

import DatePickerBasic from "./_examples/date-picker-basic";
import DatePickerDob from "./_examples/date-picker-dob";
import DatePickerInput from "./_examples/date-picker-input";
import DatePickerNaturalLanguage from "./_examples/date-picker-natural-language";
import DatePickerRange from "./_examples/date-picker-range";
import DatePickerRtl from "./_examples/date-picker-rtl";

const DatePickerExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="text-muted-foreground font-medium" id="basic-heading">
          Basic
        </h1>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <DatePickerBasic />
        </div>
      </section>

      <section aria-labelledby="dob-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="dob-heading">
          Date of Birth
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <DatePickerDob />
        </div>
      </section>

      <section aria-labelledby="input-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="input-heading">
          With Input
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <DatePickerInput />
        </div>
      </section>

      <section
        aria-labelledby="natural-language-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="natural-language-heading"
        >
          Natural Language
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <DatePickerNaturalLanguage />
        </div>
      </section>

      <section aria-labelledby="range-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="range-heading">
          Range
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <DatePickerRange />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rtl-heading">
          RTL
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <DatePickerRtl />
        </div>
      </section>
    </div>
  </div>
);

export default DatePickerExamplePage;
