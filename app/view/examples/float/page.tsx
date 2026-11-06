import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleDefault from "@/registry/react/examples/float/example-default";
import ExamplePlacement from "@/registry/react/examples/float/example-placement";
import ExamplePlacementRtl from "@/registry/react/examples/float/example-placement-rtl";
import ExampleRtl from "@/registry/react/examples/float/example-rtl";

const FloatExamplePage = () => (
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
          aria-labelledby="placement-rtl-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="placement-rtl-heading"
          >
            Placement RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePlacementRtl />
          </div>
        </section>
        <section
          aria-labelledby="placement-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="placement-heading"
          >
            Placement
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePlacement />
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

export default FloatExamplePage;
