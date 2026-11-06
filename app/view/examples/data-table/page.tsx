import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleBasic from "@/registry/react/examples/data-table/example-basic";
import ExampleDefault from "@/registry/react/examples/data-table/example-default";
import ExampleExpandable from "@/registry/react/examples/data-table/example-expandable";
import ExampleGlobalFilter from "@/registry/react/examples/data-table/example-global-filter";
import ExampleManualPagination from "@/registry/react/examples/data-table/example-manual-pagination";
import ExamplePagination from "@/registry/react/examples/data-table/example-pagination";
import ExampleRtl from "@/registry/react/examples/data-table/example-rtl";
import ExampleSortable from "@/registry/react/examples/data-table/example-sortable";

const DataTableExamplePage = () => (
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
          aria-labelledby="basic-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="basic-heading">
            Basic
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleBasic />
          </div>
        </section>
        <section
          aria-labelledby="expandable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="expandable-heading"
          >
            Expandable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleExpandable />
          </div>
        </section>
        <section
          aria-labelledby="global-filter-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="global-filter-heading"
          >
            Global Filter
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGlobalFilter />
          </div>
        </section>
        <section
          aria-labelledby="manual-pagination-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="manual-pagination-heading"
          >
            Manual Pagination
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleManualPagination />
          </div>
        </section>
        <section
          aria-labelledby="pagination-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="pagination-heading"
          >
            Pagination
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePagination />
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
          aria-labelledby="sortable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="sortable-heading"
          >
            Sortable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSortable />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default DataTableExamplePage;
