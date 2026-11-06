import ExampleCustomSrcDoc from "@/registry/react/examples/iframe/example-custom-src-doc";
import ExampleDefault from "@/registry/react/examples/iframe/example-default";
import ExampleInjectingScript from "@/registry/react/examples/iframe/example-injecting-script";

const IframeExamplePage = () => (
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
        aria-labelledby="custom-src-doc-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="custom-src-doc-heading"
        >
          Custom Src Doc
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleCustomSrcDoc />
        </div>
      </section>
      <section
        aria-labelledby="injecting-script-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="injecting-script-heading"
        >
          Injecting Script
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleInjectingScript />
        </div>
      </section>
    </div>
  </div>
);

export default IframeExamplePage;
