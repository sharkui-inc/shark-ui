import ExampleAutofocus from "@/registry/react/examples/focus-trap/example-autofocus";
import ExampleDefault from "@/registry/react/examples/focus-trap/example-default";
import ExampleInitialFocus from "@/registry/react/examples/focus-trap/example-initial-focus";

const FocusTrapExamplePage = () => (
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
        aria-labelledby="autofocus-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="autofocus-heading"
        >
          Autofocus
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleAutofocus />
        </div>
      </section>
      <section
        aria-labelledby="initial-focus-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="initial-focus-heading"
        >
          Initial Focus
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleInitialFocus />
        </div>
      </section>
    </div>
  </div>
);

export default FocusTrapExamplePage;
