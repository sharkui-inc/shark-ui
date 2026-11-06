import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/date-picker/example-controlled";
import ExampleCustomFormat from "@/registry/react/examples/date-picker/example-custom-format";
import ExampleDefault from "@/registry/react/examples/date-picker/example-default";
import ExampleDisabled from "@/registry/react/examples/date-picker/example-disabled";
import ExampleForm from "@/registry/react/examples/date-picker/example-form";
import ExampleInvalid from "@/registry/react/examples/date-picker/example-invalid";
import ExampleRange from "@/registry/react/examples/date-picker/example-range";
import ExampleRtl from "@/registry/react/examples/date-picker/example-rtl";
import ExampleWithField from "@/registry/react/examples/date-picker/example-with-field";
import ExampleWithInput from "@/registry/react/examples/date-picker/example-with-input";
import ExampleWithPresets from "@/registry/react/examples/date-picker/example-with-presets";
import DatePickerDob from "./_examples/date-picker-dob";
import DatePickerInput from "./_examples/date-picker-input";
import DatePickerNaturalLanguage from "./_examples/date-picker-natural-language";

const DatePickerExamplePage = () => (
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
          aria-labelledby="custom-format-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-format-heading"
          >
            Custom Format
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomFormat />
          </div>
        </section>
        <section
          aria-labelledby="disabled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="disabled-heading"
          >
            Disabled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDisabled />
          </div>
        </section>
        <section aria-labelledby="form-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="form-heading">
            Form
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleForm />
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
          aria-labelledby="with-field-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-field-heading"
          >
            With Field
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithField />
          </div>
        </section>
        <section
          aria-labelledby="with-input-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-input-heading"
          >
            With Input
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithInput />
          </div>
        </section>
        <section
          aria-labelledby="with-presets-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-presets-heading"
          >
            With Presets
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithPresets />
          </div>
        </section>
        <section
          aria-labelledby="local-dob-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-dob-heading"
          >
            DOB
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <DatePickerDob />
          </div>
        </section>
        <section
          aria-labelledby="local-input-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-input-heading"
          >
            Input
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <DatePickerInput />
          </div>
        </section>
        <section
          aria-labelledby="local-natural-language-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-natural-language-heading"
          >
            Natural Language
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <DatePickerNaturalLanguage />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default DatePickerExamplePage;
