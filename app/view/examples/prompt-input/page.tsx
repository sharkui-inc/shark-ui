import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/prompt-input/example-controlled";
import ExampleDefault from "@/registry/react/examples/prompt-input/example-default";
import ExampleDisabled from "@/registry/react/examples/prompt-input/example-disabled";
import ExampleFileUpload from "@/registry/react/examples/prompt-input/example-file-upload";
import ExampleRtl from "@/registry/react/examples/prompt-input/example-rtl";
import ExampleStatusError from "@/registry/react/examples/prompt-input/example-status-error";
import ExampleStatusStreaming from "@/registry/react/examples/prompt-input/example-status-streaming";

const PromptInputExamplePage = () => (
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
          aria-labelledby="disabled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="disabled-heading"
          >
            Disabled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDisabled />
          </div>
        </section>
        <section
          aria-labelledby="file-upload-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="file-upload-heading"
          >
            File Upload
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFileUpload />
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
          aria-labelledby="status-error-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="status-error-heading"
          >
            Status Error
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStatusError />
          </div>
        </section>
        <section
          aria-labelledby="status-streaming-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="status-streaming-heading"
          >
            Status Streaming
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStatusStreaming />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default PromptInputExamplePage;
