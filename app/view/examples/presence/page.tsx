import ExampleDefault from "@/registry/react/examples/presence/example-default";
import ExampleHideMode from "@/registry/react/examples/presence/example-hide-mode";
import ExampleLazy from "@/registry/react/examples/presence/example-lazy";
import ExampleState from "@/registry/react/examples/presence/example-state";

const PresenceExamplePage = () => (
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
        aria-labelledby="hide-mode-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="hide-mode-heading"
        >
          Hide Mode
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleHideMode />
        </div>
      </section>
      <section aria-labelledby="lazy-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="lazy-heading">
          Lazy
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleLazy />
        </div>
      </section>
      <section aria-labelledby="state-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="state-heading">
          State
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleState />
        </div>
      </section>
    </div>
  </div>
);

export default PresenceExamplePage;
