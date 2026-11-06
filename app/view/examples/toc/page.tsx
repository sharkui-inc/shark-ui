import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCollapsible from "@/registry/react/examples/toc/example-collapsible";
import ExampleDefault from "@/registry/react/examples/toc/example-default";
import ExampleIndicator from "@/registry/react/examples/toc/example-indicator";
import ExampleNested from "@/registry/react/examples/toc/example-nested";
import ExampleRail from "@/registry/react/examples/toc/example-rail";
import ExampleRtl from "@/registry/react/examples/toc/example-rtl";
import ExampleTreeView from "@/registry/react/examples/toc/example-tree-view";

const TocExamplePage = () => (
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
          aria-labelledby="collapsible-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="collapsible-heading"
          >
            Collapsible
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCollapsible />
          </div>
        </section>
        <section
          aria-labelledby="indicator-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="indicator-heading"
          >
            Indicator
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIndicator />
          </div>
        </section>
        <section
          aria-labelledby="nested-heading"
          className="flex flex-col gap-5 sm:col-span-2"
        >
          <h2 className="text-muted-foreground font-medium" id="nested-heading">
            Nested
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNested />
          </div>
        </section>
        <section aria-labelledby="rail-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rail-heading">
            Rail
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRail />
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
          aria-labelledby="tree-view-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="tree-view-heading"
          >
            Tree View
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTreeView />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default TocExamplePage;
