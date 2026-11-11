import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleDefault from "@/registry/react/examples/resizable/example-default";
import ExampleHandle from "@/registry/react/examples/resizable/example-handle";
import ExampleMinMax from "@/registry/react/examples/resizable/example-min-max";
import ExampleMultiplePanels from "@/registry/react/examples/resizable/example-multiple-panels";
import ExampleOrientationHorizontal from "@/registry/react/examples/resizable/example-orientation-horizontal";
import ExampleOrientationVertical from "@/registry/react/examples/resizable/example-orientation-vertical";
import ExampleRtl from "@/registry/react/examples/resizable/example-rtl";
import ResizableVertical from "./_examples/resizable-vertical";

const ResizableExamplePage = () => (
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
          aria-labelledby="handle-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="handle-heading">
            Handle
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHandle />
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
          aria-labelledby="multiple-panels-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="multiple-panels-heading"
          >
            Multiple Panels
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMultiplePanels />
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
          aria-labelledby="local-vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-vertical-heading"
          >
            Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ResizableVertical />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ResizableExamplePage;
