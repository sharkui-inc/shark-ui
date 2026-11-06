import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCustomColor from "@/registry/react/examples/file-thumbnail/example-custom-color";
import ExampleCustomSize from "@/registry/react/examples/file-thumbnail/example-custom-size";
import ExampleDefault from "@/registry/react/examples/file-thumbnail/example-default";
import ExampleDocuments from "@/registry/react/examples/file-thumbnail/example-documents";
import ExampleFormats from "@/registry/react/examples/file-thumbnail/example-formats";
import ExampleImages from "@/registry/react/examples/file-thumbnail/example-images";
import ExampleNoExtension from "@/registry/react/examples/file-thumbnail/example-no-extension";
import ExamplePdf from "@/registry/react/examples/file-thumbnail/example-pdf";
import ExamplePresentations from "@/registry/react/examples/file-thumbnail/example-presentations";
import ExampleProgrammingLanguages from "@/registry/react/examples/file-thumbnail/example-programming-languages";
import ExampleRtl from "@/registry/react/examples/file-thumbnail/example-rtl";
import ExampleSizeLg from "@/registry/react/examples/file-thumbnail/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/file-thumbnail/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/file-thumbnail/example-size-sm";
import ExampleSpreadsheets from "@/registry/react/examples/file-thumbnail/example-spreadsheets";
import ExampleTone from "@/registry/react/examples/file-thumbnail/example-tone";
import ExampleUnsupportedFormats from "@/registry/react/examples/file-thumbnail/example-unsupported-formats";

const FileThumbnailExamplePage = () => (
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
          aria-labelledby="custom-color-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-color-heading"
          >
            Custom Color
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomColor />
          </div>
        </section>
        <section
          aria-labelledby="custom-size-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-size-heading"
          >
            Custom Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSize />
          </div>
        </section>
        <section
          aria-labelledby="documents-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="documents-heading"
          >
            Documents
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDocuments />
          </div>
        </section>
        <section
          aria-labelledby="formats-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="formats-heading"
          >
            Formats
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFormats />
          </div>
        </section>
        <section
          aria-labelledby="images-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="images-heading">
            Images
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleImages />
          </div>
        </section>
        <section
          aria-labelledby="no-extension-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="no-extension-heading"
          >
            No Extension
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNoExtension />
          </div>
        </section>
        <section aria-labelledby="pdf-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="pdf-heading">
            Pdf
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePdf />
          </div>
        </section>
        <section
          aria-labelledby="presentations-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="presentations-heading"
          >
            Presentations
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePresentations />
          </div>
        </section>
        <section
          aria-labelledby="programming-languages-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="programming-languages-heading"
          >
            Programming Languages
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleProgrammingLanguages />
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
          aria-labelledby="size-lg-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-lg-heading"
          >
            Size LG
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeLg />
          </div>
        </section>
        <section
          aria-labelledby="size-md-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-md-heading"
          >
            Size MD
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeMd />
          </div>
        </section>
        <section
          aria-labelledby="size-sm-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-sm-heading"
          >
            Size SM
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeSm />
          </div>
        </section>
        <section
          aria-labelledby="spreadsheets-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="spreadsheets-heading"
          >
            Spreadsheets
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSpreadsheets />
          </div>
        </section>
        <section aria-labelledby="tone-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="tone-heading">
            Tone
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTone />
          </div>
        </section>
        <section
          aria-labelledby="unsupported-formats-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="unsupported-formats-heading"
          >
            Unsupported Formats
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleUnsupportedFormats />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default FileThumbnailExamplePage;
