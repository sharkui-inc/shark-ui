import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCancelled from "@/registry/react/examples/tool-result/example-cancelled";
import ExampleControlled from "@/registry/react/examples/tool-result/example-controlled";
import ExampleDefault from "@/registry/react/examples/tool-result/example-default";
import ExampleError from "@/registry/react/examples/tool-result/example-error";
import ExampleIcon from "@/registry/react/examples/tool-result/example-icon";
import ExampleRtl from "@/registry/react/examples/tool-result/example-rtl";
import ExampleRunning from "@/registry/react/examples/tool-result/example-running";
import ExampleSuccess from "@/registry/react/examples/tool-result/example-success";
import ExampleWithDiffStats from "@/registry/react/examples/tool-result/example-with-diff-stats";
import ExampleWithoutTrigger from "@/registry/react/examples/tool-result/example-without-trigger";

const ToolResultExamplePage = () => (
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
          aria-labelledby="cancelled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="cancelled-heading"
          >
            Cancelled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCancelled />
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
          aria-labelledby="error-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="error-heading">
            Error
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleError />
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
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="running-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="running-heading"
          >
            Running
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRunning />
          </div>
        </section>
        <section
          aria-labelledby="success-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="success-heading"
          >
            Success
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSuccess />
          </div>
        </section>
        <section
          aria-labelledby="with-diff-stats-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-diff-stats-heading"
          >
            With Diff Stats
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithDiffStats />
          </div>
        </section>
        <section
          aria-labelledby="without-trigger-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="without-trigger-heading"
          >
            Without Trigger
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithoutTrigger />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ToolResultExamplePage;
