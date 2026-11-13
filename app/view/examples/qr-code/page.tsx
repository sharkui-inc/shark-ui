import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/qr-code/example-controlled";
import ExampleDefault from "@/registry/react/examples/qr-code/example-default";
import ExampleDownload from "@/registry/react/examples/qr-code/example-download";
import ExampleErrorCorrection from "@/registry/react/examples/qr-code/example-error-correction";
import ExampleOverlay from "@/registry/react/examples/qr-code/example-overlay";
import ExampleRtl from "@/registry/react/examples/qr-code/example-rtl";
import ExampleSize from "@/registry/react/examples/qr-code/example-size";

const QrCodeExamplePage = () => (
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
          aria-labelledby="download-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="download-heading"
          >
            Download
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDownload />
          </div>
        </section>
        <section
          aria-labelledby="error-correction-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="error-correction-heading"
          >
            Error Correction
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleErrorCorrection />
          </div>
        </section>
        <section
          aria-labelledby="overlay-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="overlay-heading"
          >
            Overlay
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOverlay />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default QrCodeExamplePage;
