import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/reasoning/example-controlled";
import ExampleDefault from "@/registry/react/examples/reasoning/example-default";
import ExampleRtl from "@/registry/react/examples/reasoning/example-rtl";
import ExampleStreaming from "@/registry/react/examples/reasoning/example-streaming";
import ExampleTranslations from "@/registry/react/examples/reasoning/example-translations";

const ReasoningExamplePage = () => (
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
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="streaming-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="streaming-heading"
          >
            Streaming
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStreaming />
          </div>
        </section>
        <section
          aria-labelledby="translations-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="translations-heading"
          >
            Translations
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTranslations />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ReasoningExamplePage;
