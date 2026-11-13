import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCircle from "@/registry/react/examples/skeleton/example-circle";
import ExampleDefault from "@/registry/react/examples/skeleton/example-default";
import ExampleLoadingCard from "@/registry/react/examples/skeleton/example-loading-card";
import ExampleRectangle from "@/registry/react/examples/skeleton/example-rectangle";
import ExampleRtl from "@/registry/react/examples/skeleton/example-rtl";
import ExampleText from "@/registry/react/examples/skeleton/example-text";

const SkeletonExamplePage = () => (
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
          aria-labelledby="circle-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="circle-heading">
            Circle
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCircle />
          </div>
        </section>
        <section
          aria-labelledby="loading-card-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="loading-card-heading"
          >
            Loading Card
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLoadingCard />
          </div>
        </section>
        <section
          aria-labelledby="rectangle-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="rectangle-heading"
          >
            Rectangle
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRectangle />
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
        <section aria-labelledby="text-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="text-heading">
            Text
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleText />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default SkeletonExamplePage;
