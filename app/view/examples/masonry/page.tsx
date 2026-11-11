import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleColumns from "@/registry/react/examples/masonry/example-columns";
import ExampleDefault from "@/registry/react/examples/masonry/example-default";
import ExampleExpandableItems from "@/registry/react/examples/masonry/example-expandable-items";
import ExampleReflowBalanced from "@/registry/react/examples/masonry/example-reflow-balanced";
import ExampleReflowStable from "@/registry/react/examples/masonry/example-reflow-stable";
import ExampleRtl from "@/registry/react/examples/masonry/example-rtl";
import ExampleSpacing from "@/registry/react/examples/masonry/example-spacing";

const MasonryExamplePage = () => (
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
          aria-labelledby="expandable-items-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="expandable-items-heading"
          >
            Expandable Items
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleExpandableItems />
          </div>
        </section>
        <section
          aria-labelledby="columns-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="columns-heading"
          >
            Columns
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleColumns />
          </div>
        </section>
        <section
          aria-labelledby="reflow-balanced-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="reflow-balanced-heading"
          >
            Reflow Balanced
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleReflowBalanced />
          </div>
        </section>
        <section
          aria-labelledby="reflow-stable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="reflow-stable-heading"
          >
            Reflow Stable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleReflowStable />
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
          aria-labelledby="spacing-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="spacing-heading"
          >
            Spacing
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSpacing />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default MasonryExamplePage;
