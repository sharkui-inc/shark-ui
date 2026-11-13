import ExampleCustomStyle from "@/registry/react/examples/highlight/example-custom-style";
import ExampleDefault from "@/registry/react/examples/highlight/example-default";
import ExampleMultiple from "@/registry/react/examples/highlight/example-multiple";
import ExampleSearchQuery from "@/registry/react/examples/highlight/example-search-query";
import ExampleSquiggle from "@/registry/react/examples/highlight/example-squiggle";
import ExampleVariantDefault from "@/registry/react/examples/highlight/example-variant-default";
import ExampleVariantGhost from "@/registry/react/examples/highlight/example-variant-ghost";

const HighlightExamplePage = () => (
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
        aria-labelledby="custom-style-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="custom-style-heading"
        >
          Custom Style
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleCustomStyle />
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
      <section
        aria-labelledby="search-query-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="search-query-heading"
        >
          Search Query
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleSearchQuery />
        </div>
      </section>
      <section
        aria-labelledby="squiggle-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="squiggle-heading">
          Squiggle
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleSquiggle />
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
        aria-labelledby="variant-ghost-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="variant-ghost-heading"
        >
          Variant Ghost
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleVariantGhost />
        </div>
      </section>
    </div>
  </div>
);

export default HighlightExamplePage;
