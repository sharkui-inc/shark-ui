import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCustomActions from "@/registry/react/examples/code-block/example-custom-actions";
import ExampleDefault from "@/registry/react/examples/code-block/example-default";
import ExampleHighlightedLines from "@/registry/react/examples/code-block/example-highlighted-lines";
import ExampleLanguageSelector from "@/registry/react/examples/code-block/example-language-selector";
import ExampleMinimal from "@/registry/react/examples/code-block/example-minimal";
import ExampleMultipleFiles from "@/registry/react/examples/code-block/example-multiple-files";
import ExampleRtl from "@/registry/react/examples/code-block/example-rtl";
import ExampleScrollable from "@/registry/react/examples/code-block/example-scrollable";
import ExampleScrollableHorizontal from "@/registry/react/examples/code-block/example-scrollable-horizontal";
import ExampleStreaming from "@/registry/react/examples/code-block/example-streaming";
import ExampleWithDiff from "@/registry/react/examples/code-block/example-with-diff";

const CodeBlockExamplePage = () => (
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
          aria-labelledby="custom-actions-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-actions-heading"
          >
            Custom Actions
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomActions />
          </div>
        </section>
        <section
          aria-labelledby="highlighted-lines-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="highlighted-lines-heading"
          >
            Highlighted Lines
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHighlightedLines />
          </div>
        </section>
        <section
          aria-labelledby="language-selector-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="language-selector-heading"
          >
            Language Selector
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLanguageSelector />
          </div>
        </section>
        <section
          aria-labelledby="minimal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="minimal-heading"
          >
            Minimal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMinimal />
          </div>
        </section>
        <section
          aria-labelledby="multiple-files-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="multiple-files-heading"
          >
            Multiple Files
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMultipleFiles />
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
          aria-labelledby="scrollable-horizontal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="scrollable-horizontal-heading"
          >
            Scrollable Horizontal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleScrollableHorizontal />
          </div>
        </section>
        <section
          aria-labelledby="scrollable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="scrollable-heading"
          >
            Scrollable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleScrollable />
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
          aria-labelledby="with-diff-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-diff-heading"
          >
            With Diff
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithDiff />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default CodeBlockExamplePage;
