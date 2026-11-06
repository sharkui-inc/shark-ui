import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/toggle-tooltip/example-controlled";
import ExampleDefault from "@/registry/react/examples/toggle-tooltip/example-default";
import ExampleInfoIcon from "@/registry/react/examples/toggle-tooltip/example-info-icon";
import ExampleRtl from "@/registry/react/examples/toggle-tooltip/example-rtl";
import ExampleSide from "@/registry/react/examples/toggle-tooltip/example-side";
import ExampleWithLink from "@/registry/react/examples/toggle-tooltip/example-with-link";
import ExampleWithoutArrow from "@/registry/react/examples/toggle-tooltip/example-without-arrow";

const ToggleTooltipExamplePage = () => (
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
          aria-labelledby="info-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="info-icon-heading"
          >
            Info Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInfoIcon />
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
        <section aria-labelledby="side-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="side-heading">
            Side
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSide />
          </div>
        </section>
        <section
          aria-labelledby="with-link-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-link-heading"
          >
            With Link
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithLink />
          </div>
        </section>
        <section
          aria-labelledby="without-arrow-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="without-arrow-heading"
          >
            Without Arrow
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithoutArrow />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ToggleTooltipExamplePage;
