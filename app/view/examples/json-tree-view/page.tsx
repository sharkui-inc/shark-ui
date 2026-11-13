import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleDefault from "@/registry/react/examples/json-tree-view/example-default";
import ExampleExpandDepth from "@/registry/react/examples/json-tree-view/example-expand-depth";
import ExampleMapSet from "@/registry/react/examples/json-tree-view/example-map-set";
import ExampleRtl from "@/registry/react/examples/json-tree-view/example-rtl";

const JsonTreeViewExamplePage = () => (
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
          aria-labelledby="expand-depth-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="expand-depth-heading"
          >
            Expand Depth
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleExpandDepth />
          </div>
        </section>
        <section
          aria-labelledby="map-set-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="map-set-heading"
          >
            Map Set
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMapSet />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default JsonTreeViewExamplePage;
