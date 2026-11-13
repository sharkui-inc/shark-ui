import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/progress/example-controlled";
import ExampleDefault from "@/registry/react/examples/progress/example-default";
import ExampleIndeterminate from "@/registry/react/examples/progress/example-indeterminate";
import ExampleOrientationHorizontal from "@/registry/react/examples/progress/example-orientation-horizontal";
import ExampleOrientationVertical from "@/registry/react/examples/progress/example-orientation-vertical";
import ExampleRtl from "@/registry/react/examples/progress/example-rtl";
import ExampleWithLabel from "@/registry/react/examples/progress/example-with-label";
import ProgressLabel from "./_examples/progress-label";

const ProgressExamplePage = () => (
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
          aria-labelledby="indeterminate-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="indeterminate-heading"
          >
            Indeterminate
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIndeterminate />
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
          aria-labelledby="local-label-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-label-heading"
          >
            Label
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ProgressLabel />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ProgressExamplePage;
