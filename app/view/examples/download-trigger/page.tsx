import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleDefault from "@/registry/react/examples/download-trigger/example-default";
import ExampleDownloadSvg from "@/registry/react/examples/download-trigger/example-download-svg";
import ExamplePromise from "@/registry/react/examples/download-trigger/example-promise";
import ExampleRtl from "@/registry/react/examples/download-trigger/example-rtl";

const DownloadTriggerExamplePage = () => (
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
          aria-labelledby="download-svg-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="download-svg-heading"
          >
            Download Svg
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDownloadSvg />
          </div>
        </section>
        <section
          aria-labelledby="promise-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="promise-heading"
          >
            Promise
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePromise />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default DownloadTriggerExamplePage;
