import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAction from "@/registry/react/examples/toast/example-action";
import ExampleClosable from "@/registry/react/examples/toast/example-closable";
import ExampleDedupe from "@/registry/react/examples/toast/example-dedupe";
import ExampleDefault from "@/registry/react/examples/toast/example-default";
import ExampleDuration from "@/registry/react/examples/toast/example-duration";
import ExamplePositioning from "@/registry/react/examples/toast/example-positioning";
import ExamplePromise from "@/registry/react/examples/toast/example-promise";
import ExampleRtl from "@/registry/react/examples/toast/example-rtl";
import ExampleVariants from "@/registry/react/examples/toast/example-variants";

const ToastExamplePage = () => (
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
          aria-labelledby="action-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="action-heading">
            Action
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAction />
          </div>
        </section>
        <section
          aria-labelledby="closable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="closable-heading"
          >
            Closable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleClosable />
          </div>
        </section>
        <section
          aria-labelledby="dedupe-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="dedupe-heading">
            Dedupe
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDedupe />
          </div>
        </section>
        <section
          aria-labelledby="duration-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="duration-heading"
          >
            Duration
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDuration />
          </div>
        </section>
        <section
          aria-labelledby="positioning-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="positioning-heading"
          >
            Positioning
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePositioning />
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
        <section
          aria-labelledby="variants-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variants-heading"
          >
            Variants
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariants />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ToastExamplePage;
