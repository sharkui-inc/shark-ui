import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/steps/example-controlled";
import ExampleDefault from "@/registry/react/examples/steps/example-default";
import ExampleDescription from "@/registry/react/examples/steps/example-description";
import ExampleIcon from "@/registry/react/examples/steps/example-icon";
import ExampleLoading from "@/registry/react/examples/steps/example-loading";
import ExampleRtl from "@/registry/react/examples/steps/example-rtl";
import ExampleTitle from "@/registry/react/examples/steps/example-title";
import ExampleVertical from "@/registry/react/examples/steps/example-vertical";

const StepsExamplePage = () => (
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
          aria-labelledby="description-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="description-heading"
          >
            Description
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDescription />
          </div>
        </section>
        <section aria-labelledby="icon-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="icon-heading">
            Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIcon />
          </div>
        </section>
        <section
          aria-labelledby="loading-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="loading-heading"
          >
            Loading
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLoading />
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
          aria-labelledby="title-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="title-heading">
            Title
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTitle />
          </div>
        </section>
        <section
          aria-labelledby="vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="vertical-heading"
          >
            Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVertical />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default StepsExamplePage;
