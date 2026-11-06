import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/circular-slider/example-controlled";
import ExampleCustomMarkers from "@/registry/react/examples/circular-slider/example-custom-markers";
import ExampleDefault from "@/registry/react/examples/circular-slider/example-default";
import ExampleDisabled from "@/registry/react/examples/circular-slider/example-disabled";
import ExampleForm from "@/registry/react/examples/circular-slider/example-form";
import ExampleRtl from "@/registry/react/examples/circular-slider/example-rtl";
import ExampleSize from "@/registry/react/examples/circular-slider/example-size";
import ExampleStep from "@/registry/react/examples/circular-slider/example-step";
import ExampleThickness from "@/registry/react/examples/circular-slider/example-thickness";
import ExampleWithField from "@/registry/react/examples/circular-slider/example-with-field";
import ExampleWithMarkers from "@/registry/react/examples/circular-slider/example-with-markers";
import ExampleWithValue from "@/registry/react/examples/circular-slider/example-with-value";

const CircularSliderExamplePage = () => (
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
          aria-labelledby="custom-markers-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-markers-heading"
          >
            Custom Markers
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomMarkers />
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
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section aria-labelledby="size-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="size-heading">
            Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSize />
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
          aria-labelledby="thickness-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="thickness-heading"
          >
            Thickness
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleThickness />
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
          aria-labelledby="with-markers-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-markers-heading"
          >
            With Markers
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithMarkers />
          </div>
        </section>
        <section
          aria-labelledby="with-value-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-value-heading"
          >
            With Value
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithValue />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default CircularSliderExamplePage;
