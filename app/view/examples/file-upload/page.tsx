import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAcceptedFileTypes from "@/registry/react/examples/file-upload/example-accepted-file-types";
import ExampleClearTrigger from "@/registry/react/examples/file-upload/example-clear-trigger";
import ExampleControlled from "@/registry/react/examples/file-upload/example-controlled";
import ExampleCustomPreview from "@/registry/react/examples/file-upload/example-custom-preview";
import ExampleCustomSpacing from "@/registry/react/examples/file-upload/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/file-upload/example-default";
import ExampleDirectoryUpload from "@/registry/react/examples/file-upload/example-directory-upload";
import ExampleDisabled from "@/registry/react/examples/file-upload/example-disabled";
import ExampleDropzone from "@/registry/react/examples/file-upload/example-dropzone";
import ExampleForm from "@/registry/react/examples/file-upload/example-form";
import ExampleInvalid from "@/registry/react/examples/file-upload/example-invalid";
import ExampleMediaCapture from "@/registry/react/examples/file-upload/example-media-capture";
import ExampleMultipleFiles from "@/registry/react/examples/file-upload/example-multiple-files";
import ExampleReadOnly from "@/registry/react/examples/file-upload/example-read-only";
import ExampleRtl from "@/registry/react/examples/file-upload/example-rtl";
import ExampleTrigger from "@/registry/react/examples/file-upload/example-trigger";
import ExampleWithField from "@/registry/react/examples/file-upload/example-with-field";

const FileUploadExamplePage = () => (
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
          aria-labelledby="accepted-file-types-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="accepted-file-types-heading"
          >
            Accepted File Types
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAcceptedFileTypes />
          </div>
        </section>
        <section
          aria-labelledby="clear-trigger-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="clear-trigger-heading"
          >
            Clear Trigger
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleClearTrigger />
          </div>
        </section>
        <section
          aria-labelledby="custom-preview-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-preview-heading"
          >
            Custom Preview
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomPreview />
          </div>
        </section>
        <section
          aria-labelledby="custom-spacing-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-spacing-heading"
          >
            Custom Spacing
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomSpacing />
          </div>
        </section>
        <section
          aria-labelledby="directory-upload-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="directory-upload-heading"
          >
            Directory Upload
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDirectoryUpload />
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
          aria-labelledby="dropzone-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="dropzone-heading"
          >
            Dropzone
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDropzone />
          </div>
        </section>
        <section aria-labelledby="form-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="form-heading">
            Form Integration
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleForm />
          </div>
        </section>
        <section
          aria-labelledby="invalid-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="invalid-heading"
          >
            Invalid
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInvalid />
          </div>
        </section>
        <section
          aria-labelledby="media-capture-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="media-capture-heading"
          >
            Media Capture
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMediaCapture />
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
        <section
          aria-labelledby="read-only-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="read-only-heading"
          >
            Read-only
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleReadOnly />
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
          aria-labelledby="trigger-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="trigger-heading"
          >
            Trigger
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTrigger />
          </div>
        </section>
        <section
          aria-labelledby="with-field-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-field-heading"
          >
            With Field
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithField />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default FileUploadExamplePage;
