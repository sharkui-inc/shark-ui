import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/slider/example-controlled";
import ExampleDefault from "@/registry/react/examples/slider/example-default";
import ExampleDisabled from "@/registry/react/examples/slider/example-disabled";
import ExampleForm from "@/registry/react/examples/slider/example-form";
import ExampleLargeStep from "@/registry/react/examples/slider/example-large-step";
import ExampleMarks from "@/registry/react/examples/slider/example-marks";
import ExampleMinMax from "@/registry/react/examples/slider/example-min-max";
import ExampleRange from "@/registry/react/examples/slider/example-range";
import ExampleRtl from "@/registry/react/examples/slider/example-rtl";
import ExampleStep from "@/registry/react/examples/slider/example-step";
import ExampleThumbCollision from "@/registry/react/examples/slider/example-thumb-collision";
import ExampleVertical from "@/registry/react/examples/slider/example-vertical";
import ExampleWithField from "@/registry/react/examples/slider/example-with-field";
import ExampleWithLabel from "@/registry/react/examples/slider/example-with-label";
import SliderMultiple from "./_examples/slider-multiple";

const SliderExamplePage = () => (
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
        <section aria-labelledby="form-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="form-heading">
            Form
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleForm />
          </div>
        </section>
        <section
          aria-labelledby="large-step-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="large-step-heading"
          >
            Large Step
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLargeStep />
          </div>
        </section>
        <section
          aria-labelledby="marks-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="marks-heading">
            Marks
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMarks />
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
            Min Max
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
        <section aria-labelledby="step-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="step-heading">
            Step
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStep />
          </div>
        </section>
        <section
          aria-labelledby="thumb-collision-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="thumb-collision-heading"
          >
            Thumb Collision
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleThumbCollision />
          </div>
        </section>
        <section
          aria-labelledby="vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="vertical-heading"
          >
            Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVertical />
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
          aria-labelledby="with-label-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-label-heading"
          >
            With Label
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithLabel />
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
            <SliderMultiple />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default SliderExamplePage;
