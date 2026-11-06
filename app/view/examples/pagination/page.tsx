import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/pagination/example-controlled";
import ExampleDefault from "@/registry/react/examples/pagination/example-default";
import ExampleFirstLast from "@/registry/react/examples/pagination/example-first-last";
import ExampleLinks from "@/registry/react/examples/pagination/example-links";
import ExamplePageRange from "@/registry/react/examples/pagination/example-page-range";
import ExampleRtl from "@/registry/react/examples/pagination/example-rtl";
import ExampleTable from "@/registry/react/examples/pagination/example-table";
import PaginationIconsOnly from "./_examples/pagination-icons-only";
import PaginationSimple from "./_examples/pagination-simple";

const PaginationExamplePage = () => (
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
          aria-labelledby="first-last-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="first-last-heading"
          >
            First Last
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFirstLast />
          </div>
        </section>
        <section
          aria-labelledby="links-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="links-heading">
            Links
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLinks />
          </div>
        </section>
        <section
          aria-labelledby="page-range-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="page-range-heading"
          >
            Page Range
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePageRange />
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
          aria-labelledby="table-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="table-heading">
            Table
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTable />
          </div>
        </section>
        <section
          aria-labelledby="local-icons-only-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-icons-only-heading"
          >
            Icons Only
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <PaginationIconsOnly />
          </div>
        </section>
        <section
          aria-labelledby="local-simple-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-simple-heading"
          >
            Simple
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <PaginationSimple />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default PaginationExamplePage;
