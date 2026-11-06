import ExampleDefault from "@/registry/react/examples/use-async-list/example-default";
import ExampleDependencies from "@/registry/react/examples/use-async-list/example-dependencies";
import ExampleFilter from "@/registry/react/examples/use-async-list/example-filter";
import ExampleInfiniteLoading from "@/registry/react/examples/use-async-list/example-infinite-loading";
import ExampleSortClientSide from "@/registry/react/examples/use-async-list/example-sort-client-side";
import ExampleSortServerSide from "@/registry/react/examples/use-async-list/example-sort-server-side";

const UseAsyncListExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section
        aria-labelledby="default-heading"
        className="flex flex-col gap-5"
      >
        <h1 className="text-muted-foreground font-medium" id="default-heading">
          Default
        </h1>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleDefault />
        </div>
      </section>
      <section
        aria-labelledby="dependencies-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="dependencies-heading"
        >
          Dependencies
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleDependencies />
        </div>
      </section>
      <section aria-labelledby="filter-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="filter-heading">
          Filter
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleFilter />
        </div>
      </section>
      <section
        aria-labelledby="infinite-loading-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="infinite-loading-heading"
        >
          Infinite Loading
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleInfiniteLoading />
        </div>
      </section>
      <section
        aria-labelledby="sort-client-side-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="sort-client-side-heading"
        >
          Sort Client Side
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleSortClientSide />
        </div>
      </section>
      <section
        aria-labelledby="sort-server-side-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="sort-server-side-heading"
        >
          Sort Server Side
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleSortServerSide />
        </div>
      </section>
    </div>
  </div>
);

export default UseAsyncListExamplePage;
