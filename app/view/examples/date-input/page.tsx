import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/date-input/example-controlled";
import ExampleCustomSeparator from "@/registry/react/examples/date-input/example-custom-separator";
import ExampleDefault from "@/registry/react/examples/date-input/example-default";
import ExampleDisabled from "@/registry/react/examples/date-input/example-disabled";
import ExampleForm from "@/registry/react/examples/date-input/example-form";
import ExampleGranularity from "@/registry/react/examples/date-input/example-granularity";
import ExampleInvalid from "@/registry/react/examples/date-input/example-invalid";
import ExampleLeadingZeros from "@/registry/react/examples/date-input/example-leading-zeros";
import ExampleMinMax from "@/registry/react/examples/date-input/example-min-max";
import ExampleRange from "@/registry/react/examples/date-input/example-range";
import ExampleRtl from "@/registry/react/examples/date-input/example-rtl";
import ExampleSizeLg from "@/registry/react/examples/date-input/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/date-input/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/date-input/example-size-sm";
import ExampleTimeOnly from "@/registry/react/examples/date-input/example-time-only";
import ExampleWithClearButton from "@/registry/react/examples/date-input/example-with-clear-button";
import ExampleWithField from "@/registry/react/examples/date-input/example-with-field";

const DateInputExamplePage = () => (
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
          aria-labelledby="custom-separator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-separator-heading"
          >
            Custom Separator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSeparator />
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
            Form Integration
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleForm />
          </div>
        </section>
        <section
          aria-labelledby="granularity-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="granularity-heading"
          >
            Granularity
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGranularity />
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
          aria-labelledby="leading-zeros-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="leading-zeros-heading"
          >
            Leading Zeros
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLeadingZeros />
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
          aria-labelledby="size-lg-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-lg-heading"
          >
            Size LG
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeLg />
          </div>
        </section>
        <section
          aria-labelledby="size-md-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-md-heading"
          >
            Size MD
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeMd />
          </div>
        </section>
        <section
          aria-labelledby="size-sm-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-sm-heading"
          >
            Size SM
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeSm />
          </div>
        </section>
        <section
          aria-labelledby="time-only-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="time-only-heading"
          >
            Time Only
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTimeOnly />
          </div>
        </section>
        <section
          aria-labelledby="with-clear-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-clear-button-heading"
          >
            With Clear Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithClearButton />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default DateInputExamplePage;
