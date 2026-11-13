import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleActionBar from "@/registry/react/examples/table/example-action-bar";
import ExampleActions from "@/registry/react/examples/table/example-actions";
import ExampleCustomSpacing from "@/registry/react/examples/table/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/table/example-default";
import ExampleFooter from "@/registry/react/examples/table/example-footer";
import ExampleNotHoverable from "@/registry/react/examples/table/example-not-hoverable";
import ExampleRtl from "@/registry/react/examples/table/example-rtl";
import ExampleSizeComfortable from "@/registry/react/examples/table/example-size-comfortable";
import ExampleSizeCompact from "@/registry/react/examples/table/example-size-compact";
import ExampleSizeDefault from "@/registry/react/examples/table/example-size-default";
import ExampleStriped from "@/registry/react/examples/table/example-striped";

const TableExamplePage = () => (
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
          aria-labelledby="action-bar-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="action-bar-heading"
          >
            Action Bar
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleActionBar />
          </div>
        </section>
        <section
          aria-labelledby="actions-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="actions-heading"
          >
            Actions
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleActions />
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
          aria-labelledby="footer-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="footer-heading">
            Footer
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFooter />
          </div>
        </section>
        <section
          aria-labelledby="not-hoverable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="not-hoverable-heading"
          >
            Not Hoverable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNotHoverable />
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
          aria-labelledby="size-comfortable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-comfortable-heading"
          >
            Size Comfortable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeComfortable />
          </div>
        </section>
        <section
          aria-labelledby="size-compact-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-compact-heading"
          >
            Size Compact
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeCompact />
          </div>
        </section>
        <section
          aria-labelledby="size-default-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-default-heading"
          >
            Size Default
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeDefault />
          </div>
        </section>
        <section
          aria-labelledby="striped-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="striped-heading"
          >
            Striped
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStriped />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default TableExamplePage;
