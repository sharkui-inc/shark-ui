import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/number-input/example-controlled";
import ExampleDefault from "@/registry/react/examples/number-input/example-default";
import ExampleDisabled from "@/registry/react/examples/number-input/example-disabled";
import ExampleFieldOnly from "@/registry/react/examples/number-input/example-field-only";
import ExampleForm from "@/registry/react/examples/number-input/example-form";
import ExampleFormatted from "@/registry/react/examples/number-input/example-formatted";
import ExampleInvalid from "@/registry/react/examples/number-input/example-invalid";
import ExampleKeyboardStep from "@/registry/react/examples/number-input/example-keyboard-step";
import ExampleMouseWheel from "@/registry/react/examples/number-input/example-mouse-wheel";
import ExampleRange from "@/registry/react/examples/number-input/example-range";
import ExampleRtl from "@/registry/react/examples/number-input/example-rtl";
import ExampleScrub from "@/registry/react/examples/number-input/example-scrub";
import ExampleSizeLg from "@/registry/react/examples/number-input/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/number-input/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/number-input/example-size-sm";
import ExampleStep from "@/registry/react/examples/number-input/example-step";
import ExampleWithField from "@/registry/react/examples/number-input/example-with-field";
import ExampleWithInputGroup from "@/registry/react/examples/number-input/example-with-input-group";

const NumberInputExamplePage = () => (
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
        <section
          aria-labelledby="field-only-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="field-only-heading"
          >
            Field Only
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFieldOnly />
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
          aria-labelledby="formatted-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="formatted-heading"
          >
            Formatted
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFormatted />
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
          aria-labelledby="keyboard-step-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="keyboard-step-heading"
          >
            Keyboard Step
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleKeyboardStep />
          </div>
        </section>
        <section
          aria-labelledby="mouse-wheel-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="mouse-wheel-heading"
          >
            Mouse Wheel
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMouseWheel />
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
          aria-labelledby="scrub-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="scrub-heading">
            Scrub
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleScrub />
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
        <section aria-labelledby="step-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="step-heading">
            Step
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStep />
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
          aria-labelledby="with-input-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-input-group-heading"
          >
            With Input Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithInputGroup />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default NumberInputExamplePage;
