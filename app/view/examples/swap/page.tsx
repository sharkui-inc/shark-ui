import ExampleBlur from "@/registry/react/examples/swap/example-blur";
import ExampleDefault from "@/registry/react/examples/swap/example-default";
import ExampleFlip from "@/registry/react/examples/swap/example-flip";
import ExampleRotate from "@/registry/react/examples/swap/example-rotate";
import ExampleScale from "@/registry/react/examples/swap/example-scale";

const SwapExamplePage = () => (
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
      <section aria-labelledby="blur-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="blur-heading">
          Blur
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleBlur />
        </div>
      </section>
      <section aria-labelledby="flip-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="flip-heading">
          Flip
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleFlip />
        </div>
      </section>
      <section aria-labelledby="rotate-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rotate-heading">
          Rotate
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleRotate />
        </div>
      </section>
      <section aria-labelledby="scale-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="scale-heading">
          Scale
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ExampleScale />
        </div>
      </section>
    </div>
  </div>
);

export default SwapExamplePage;
