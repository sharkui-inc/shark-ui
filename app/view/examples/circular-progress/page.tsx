import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/circular-progress/example-controlled";
import ExampleDefault from "@/registry/react/examples/circular-progress/example-default";
import ExampleIndeterminate from "@/registry/react/examples/circular-progress/example-indeterminate";
import ExampleRtl from "@/registry/react/examples/circular-progress/example-rtl";
import ExampleSize from "@/registry/react/examples/circular-progress/example-size";
import ExampleThickness from "@/registry/react/examples/circular-progress/example-thickness";
import ExampleWithValue from "@/registry/react/examples/circular-progress/example-with-value";

const CircularProgressExamplePage = () => (
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
          aria-labelledby="indeterminate-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="indeterminate-heading"
          >
            Indeterminate
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIndeterminate />
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
        <section aria-labelledby="size-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="size-heading">
            Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSize />
          </div>
        </section>
        <section
          aria-labelledby="thickness-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="thickness-heading"
          >
            Thickness
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleThickness />
          </div>
        </section>
        <section
          aria-labelledby="with-value-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-value-heading"
          >
            With Value
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithValue />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default CircularProgressExamplePage;
