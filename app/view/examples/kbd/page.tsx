import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleButton from "@/registry/react/examples/kbd/example-button";
import ExampleDefault from "@/registry/react/examples/kbd/example-default";
import ExampleGroup from "@/registry/react/examples/kbd/example-group";
import ExampleInputGroup from "@/registry/react/examples/kbd/example-input-group";
import ExampleRtl from "@/registry/react/examples/kbd/example-rtl";
import ExampleTooltip from "@/registry/react/examples/kbd/example-tooltip";
import ExampleVariantDefault from "@/registry/react/examples/kbd/example-variant-default";
import ExampleVariantOutline from "@/registry/react/examples/kbd/example-variant-outline";

const KbdExamplePage = () => (
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
          aria-labelledby="button-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="button-heading">
            Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleButton />
          </div>
        </section>
        <section
          aria-labelledby="group-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="group-heading">
            Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGroup />
          </div>
        </section>
        <section
          aria-labelledby="input-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="input-group-heading"
          >
            Input Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInputGroup />
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
          aria-labelledby="tooltip-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="tooltip-heading"
          >
            Tooltip
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTooltip />
          </div>
        </section>
        <section
          aria-labelledby="variant-default-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-default-heading"
          >
            Variant Default
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantDefault />
          </div>
        </section>
        <section
          aria-labelledby="variant-outline-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-outline-heading"
          >
            Variant Outline
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantOutline />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default KbdExamplePage;
