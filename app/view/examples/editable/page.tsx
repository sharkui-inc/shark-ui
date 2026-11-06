import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleActivationClick from "@/registry/react/examples/editable/example-activation-click";
import ExampleActivationFocus from "@/registry/react/examples/editable/example-activation-focus";
import ExampleActivationNone from "@/registry/react/examples/editable/example-activation-none";
import ExampleControlled from "@/registry/react/examples/editable/example-controlled";
import ExampleDblclick from "@/registry/react/examples/editable/example-dblclick";
import ExampleDefault from "@/registry/react/examples/editable/example-default";
import ExampleForm from "@/registry/react/examples/editable/example-form";
import ExampleOrientationHorizontal from "@/registry/react/examples/editable/example-orientation-horizontal";
import ExampleOrientationVertical from "@/registry/react/examples/editable/example-orientation-vertical";
import ExampleRtl from "@/registry/react/examples/editable/example-rtl";
import ExampleSizeLg from "@/registry/react/examples/editable/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/editable/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/editable/example-size-sm";
import ExampleWithTextarea from "@/registry/react/examples/editable/example-with-textarea";
import ExampleWithoutControls from "@/registry/react/examples/editable/example-without-controls";

const EditableExamplePage = () => (
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
          aria-labelledby="activation-click-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="activation-click-heading"
          >
            Activation Click
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleActivationClick />
          </div>
        </section>
        <section
          aria-labelledby="activation-focus-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="activation-focus-heading"
          >
            Activation Focus
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleActivationFocus />
          </div>
        </section>
        <section
          aria-labelledby="activation-none-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="activation-none-heading"
          >
            Activation None
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleActivationNone />
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
          aria-labelledby="dblclick-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="dblclick-heading"
          >
            Dblclick
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDblclick />
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
          aria-labelledby="orientation-horizontal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="orientation-horizontal-heading"
          >
            Orientation Horizontal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOrientationHorizontal />
          </div>
        </section>
        <section
          aria-labelledby="orientation-vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="orientation-vertical-heading"
          >
            Orientation Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOrientationVertical />
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
          aria-labelledby="with-textarea-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-textarea-heading"
          >
            With Textarea
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithTextarea />
          </div>
        </section>
        <section
          aria-labelledby="without-controls-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="without-controls-heading"
          >
            Without Controls
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithoutControls />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default EditableExamplePage;
