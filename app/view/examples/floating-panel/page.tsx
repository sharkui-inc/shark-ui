import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlledPosition from "@/registry/react/examples/floating-panel/example-controlled-position";
import ExampleControlledSize from "@/registry/react/examples/floating-panel/example-controlled-size";
import ExampleCustomSpacing from "@/registry/react/examples/floating-panel/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/floating-panel/example-default";
import ExampleDisabledResize from "@/registry/react/examples/floating-panel/example-disabled-resize";
import ExampleRtl from "@/registry/react/examples/floating-panel/example-rtl";
import ExampleSizeLimits from "@/registry/react/examples/floating-panel/example-size-limits";

const FloatingPanelExamplePage = () => (
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
          aria-labelledby="controlled-position-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="controlled-position-heading"
          >
            Controlled Position
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleControlledPosition />
          </div>
        </section>
        <section
          aria-labelledby="controlled-size-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="controlled-size-heading"
          >
            Controlled Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleControlledSize />
          </div>
        </section>
        <section
          aria-labelledby="custom-spacing-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-spacing-heading"
          >
            Custom Spacing
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSpacing />
          </div>
        </section>
        <section
          aria-labelledby="disabled-resize-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="disabled-resize-heading"
          >
            Disable Resize
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDisabledResize />
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
          aria-labelledby="size-limits-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-limits-heading"
          >
            Size Limits
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeLimits />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default FloatingPanelExamplePage;
