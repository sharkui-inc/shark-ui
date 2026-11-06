import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCustomHeader from "@/registry/react/examples/diff/example-custom-header";
import ExampleDefault from "@/registry/react/examples/diff/example-default";
import ExampleHunk from "@/registry/react/examples/diff/example-hunk";
import ExampleIcon from "@/registry/react/examples/diff/example-icon";
import ExampleLongLineNumbers from "@/registry/react/examples/diff/example-long-line-numbers";
import ExampleNoHeader from "@/registry/react/examples/diff/example-no-header";
import ExampleRtl from "@/registry/react/examples/diff/example-rtl";
import ExampleScrollable from "@/registry/react/examples/diff/example-scrollable";
import ExampleScrollableHorizontal from "@/registry/react/examples/diff/example-scrollable-horizontal";

const DiffExamplePage = () => (
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
          aria-labelledby="custom-header-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-header-heading"
          >
            Custom Header
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomHeader />
          </div>
        </section>
        <section aria-labelledby="hunk-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="hunk-heading">
            Hunk
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHunk />
          </div>
        </section>
        <section aria-labelledby="icon-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="icon-heading">
            Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIcon />
          </div>
        </section>
        <section
          aria-labelledby="long-line-numbers-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="long-line-numbers-heading"
          >
            Long Line Numbers
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLongLineNumbers />
          </div>
        </section>
        <section
          aria-labelledby="no-header-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="no-header-heading"
          >
            No Header
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNoHeader />
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
          aria-labelledby="scrollable-horizontal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="scrollable-horizontal-heading"
          >
            Scrollable Horizontal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleScrollableHorizontal />
          </div>
        </section>
        <section
          aria-labelledby="scrollable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="scrollable-heading"
          >
            Scrollable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleScrollable />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default DiffExamplePage;
