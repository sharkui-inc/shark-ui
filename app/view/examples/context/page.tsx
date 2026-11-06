import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCustomSpacing from "@/registry/react/examples/context/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/context/example-default";
import ExampleIconOnlyTrigger from "@/registry/react/examples/context/example-icon-only-trigger";
import ExampleRtl from "@/registry/react/examples/context/example-rtl";
import ExampleTitleCloseButton from "@/registry/react/examples/context/example-title-close-button";
import ExampleTooltip from "@/registry/react/examples/context/example-tooltip";
import ExampleWithoutCost from "@/registry/react/examples/context/example-without-cost";

const ContextExamplePage = () => (
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
          aria-labelledby="icon-only-trigger-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="icon-only-trigger-heading"
          >
            Icon Only Trigger
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIconOnlyTrigger />
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
          aria-labelledby="title-close-button-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="title-close-button-heading"
          >
            Title Close Button
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTitleCloseButton />
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
          aria-labelledby="without-cost-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="without-cost-heading"
          >
            Without Cost
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithoutCost />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ContextExamplePage;
