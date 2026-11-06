import ExampleDefault from "@/registry/react/examples/use-list-selection/example-default";
import ExampleMultiple from "@/registry/react/examples/use-list-selection/example-multiple";
import ExampleRange from "@/registry/react/examples/use-list-selection/example-range";

const UseListSelectionExamplePage = () => (
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
        aria-labelledby="multiple-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="multiple-heading">
          Multiple
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleMultiple />
        </div>
      </section>
      <section aria-labelledby="range-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="range-heading">
          Range
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleRange />
        </div>
      </section>
    </div>
  </div>
);

export default UseListSelectionExamplePage;
