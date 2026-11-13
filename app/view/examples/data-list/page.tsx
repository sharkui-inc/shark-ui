import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleDefault from "@/registry/react/examples/data-list/example-default";
import ExampleInfoTip from "@/registry/react/examples/data-list/example-info-tip";
import ExampleOrientationHorizontal from "@/registry/react/examples/data-list/example-orientation-horizontal";
import ExampleOrientationVertical from "@/registry/react/examples/data-list/example-orientation-vertical";
import ExampleRtl from "@/registry/react/examples/data-list/example-rtl";
import ExampleSeparator from "@/registry/react/examples/data-list/example-separator";

const DataListExamplePage = () => (
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
          aria-labelledby="info-tip-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="info-tip-heading"
          >
            Info Tip
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInfoTip />
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
          aria-labelledby="separator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="separator-heading"
          >
            Separator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSeparator />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default DataListExamplePage;
