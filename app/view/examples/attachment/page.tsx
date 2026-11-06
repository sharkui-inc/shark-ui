import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleActions from "@/registry/react/examples/attachment/example-actions";
import ExampleDefault from "@/registry/react/examples/attachment/example-default";
import ExampleGroup from "@/registry/react/examples/attachment/example-group";
import ExampleImage from "@/registry/react/examples/attachment/example-image";
import ExampleOrientationHorizontal from "@/registry/react/examples/attachment/example-orientation-horizontal";
import ExampleOrientationVertical from "@/registry/react/examples/attachment/example-orientation-vertical";
import ExampleRtl from "@/registry/react/examples/attachment/example-rtl";
import ExampleSizeDefault from "@/registry/react/examples/attachment/example-size-default";
import ExampleSizeLg from "@/registry/react/examples/attachment/example-size-lg";
import ExampleSizeSm from "@/registry/react/examples/attachment/example-size-sm";
import ExampleSizeXs from "@/registry/react/examples/attachment/example-size-xs";
import ExampleSizes from "@/registry/react/examples/attachment/example-sizes";
import ExampleStateDone from "@/registry/react/examples/attachment/example-state-done";
import ExampleStateError from "@/registry/react/examples/attachment/example-state-error";
import ExampleStateIdle from "@/registry/react/examples/attachment/example-state-idle";
import ExampleStateProcessing from "@/registry/react/examples/attachment/example-state-processing";
import ExampleStateUploading from "@/registry/react/examples/attachment/example-state-uploading";
import ExampleStates from "@/registry/react/examples/attachment/example-states";
import ExampleTrigger from "@/registry/react/examples/attachment/example-trigger";
import ExampleTypeFile from "@/registry/react/examples/attachment/example-type-file";
import ExampleTypeIcon from "@/registry/react/examples/attachment/example-type-icon";
import ExampleTypeImage from "@/registry/react/examples/attachment/example-type-image";

const AttachmentExamplePage = () => (
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
          aria-labelledby="actions-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="actions-heading"
          >
            Actions
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleActions />
          </div>
        </section>
        <section
          aria-labelledby="group-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="group-heading">
            Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGroup />
          </div>
        </section>
        <section
          aria-labelledby="image-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="image-heading">
            Image
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleImage />
          </div>
        </section>
        <section
          aria-labelledby="orientation-horizontal-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="orientation-horizontal-heading"
          >
            Orientation Horizontal
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOrientationHorizontal />
          </div>
        </section>
        <section
          aria-labelledby="orientation-vertical-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="orientation-vertical-heading"
          >
            Orientation Vertical
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOrientationVertical />
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
          aria-labelledby="size-default-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-default-heading"
          >
            Size Default
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeDefault />
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
          aria-labelledby="size-xs-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-xs-heading"
          >
            Size XS
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeXs />
          </div>
        </section>
        <section
          aria-labelledby="sizes-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="sizes-heading">
            Sizes
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizes />
          </div>
        </section>
        <section
          aria-labelledby="state-done-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="state-done-heading"
          >
            State Done
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStateDone />
          </div>
        </section>
        <section
          aria-labelledby="state-error-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="state-error-heading"
          >
            State Error
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStateError />
          </div>
        </section>
        <section
          aria-labelledby="state-idle-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="state-idle-heading"
          >
            State Idle
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStateIdle />
          </div>
        </section>
        <section
          aria-labelledby="state-processing-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="state-processing-heading"
          >
            State Processing
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStateProcessing />
          </div>
        </section>
        <section
          aria-labelledby="state-uploading-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="state-uploading-heading"
          >
            State Uploading
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStateUploading />
          </div>
        </section>
        <section
          aria-labelledby="states-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="states-heading">
            States
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStates />
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
          aria-labelledby="type-file-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="type-file-heading"
          >
            Type File
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTypeFile />
          </div>
        </section>
        <section
          aria-labelledby="type-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="type-icon-heading"
          >
            Type Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTypeIcon />
          </div>
        </section>
        <section
          aria-labelledby="type-image-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="type-image-heading"
          >
            Type Image
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTypeImage />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default AttachmentExamplePage;
