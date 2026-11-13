import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAspectRatio from "@/registry/react/examples/image-cropper/example-aspect-ratio";
import ExampleCircleCrop from "@/registry/react/examples/image-cropper/example-circle-crop";
import ExampleControlledZoom from "@/registry/react/examples/image-cropper/example-controlled-zoom";
import ExampleControls from "@/registry/react/examples/image-cropper/example-controls";
import ExampleCropPreview from "@/registry/react/examples/image-cropper/example-crop-preview";
import ExampleDefault from "@/registry/react/examples/image-cropper/example-default";
import ExampleEvents from "@/registry/react/examples/image-cropper/example-events";
import ExampleFixedCropArea from "@/registry/react/examples/image-cropper/example-fixed-crop-area";
import ExampleInitialCrop from "@/registry/react/examples/image-cropper/example-initial-crop";
import ExampleMinMaxSize from "@/registry/react/examples/image-cropper/example-min-max-size";
import ExampleRtl from "@/registry/react/examples/image-cropper/example-rtl";
import ExampleZoomLimits from "@/registry/react/examples/image-cropper/example-zoom-limits";

const ImageCropperExamplePage = () => (
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
          aria-labelledby="aspect-ratio-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="aspect-ratio-heading"
          >
            Aspect Ratio
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAspectRatio />
          </div>
        </section>
        <section
          aria-labelledby="circle-crop-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="circle-crop-heading"
          >
            Circle Crop
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCircleCrop />
          </div>
        </section>
        <section
          aria-labelledby="controlled-zoom-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="controlled-zoom-heading"
          >
            Controlled Zoom
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleControlledZoom />
          </div>
        </section>
        <section
          aria-labelledby="controls-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="controls-heading"
          >
            Controls
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleControls />
          </div>
        </section>
        <section
          aria-labelledby="crop-preview-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="crop-preview-heading"
          >
            Crop Preview
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCropPreview />
          </div>
        </section>
        <section
          aria-labelledby="events-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="events-heading">
            Events
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleEvents />
          </div>
        </section>
        <section
          aria-labelledby="fixed-crop-area-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="fixed-crop-area-heading"
          >
            Fixed Crop Area
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFixedCropArea />
          </div>
        </section>
        <section
          aria-labelledby="initial-crop-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="initial-crop-heading"
          >
            Initial Crop
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInitialCrop />
          </div>
        </section>
        <section
          aria-labelledby="min-max-size-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="min-max-size-heading"
          >
            Min Max Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMinMaxSize />
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
          aria-labelledby="zoom-limits-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="zoom-limits-heading"
          >
            Zoom Limits
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleZoomLimits />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ImageCropperExamplePage;
