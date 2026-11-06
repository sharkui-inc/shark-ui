import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleDefault from "@/registry/react/examples/announcement/example-default";
import ExampleRtl from "@/registry/react/examples/announcement/example-rtl";
import ExampleVariantDefault from "@/registry/react/examples/announcement/example-variant-default";
import ExampleVariantDestructive from "@/registry/react/examples/announcement/example-variant-destructive";
import ExampleVariantInfo from "@/registry/react/examples/announcement/example-variant-info";
import ExampleVariantSuccess from "@/registry/react/examples/announcement/example-variant-success";
import ExampleVariantWarning from "@/registry/react/examples/announcement/example-variant-warning";
import ExampleWithIcon from "@/registry/react/examples/announcement/example-with-icon";
import ExampleWithLink from "@/registry/react/examples/announcement/example-with-link";
import ExampleWithoutBadge from "@/registry/react/examples/announcement/example-without-badge";

const AnnouncementExamplePage = () => (
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
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="variant-default-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-default-heading"
          >
            Variant Default
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantDefault />
          </div>
        </section>
        <section
          aria-labelledby="variant-destructive-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-destructive-heading"
          >
            Variant Destructive
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantDestructive />
          </div>
        </section>
        <section
          aria-labelledby="variant-info-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-info-heading"
          >
            Variant Info
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantInfo />
          </div>
        </section>
        <section
          aria-labelledby="variant-success-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-success-heading"
          >
            Variant Success
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantSuccess />
          </div>
        </section>
        <section
          aria-labelledby="variant-warning-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-warning-heading"
          >
            Variant Warning
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantWarning />
          </div>
        </section>
        <section
          aria-labelledby="with-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-icon-heading"
          >
            With Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithIcon />
          </div>
        </section>
        <section
          aria-labelledby="with-link-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-link-heading"
          >
            With Link
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithLink />
          </div>
        </section>
        <section
          aria-labelledby="without-badge-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="without-badge-heading"
          >
            Without Badge
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithoutBadge />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default AnnouncementExamplePage;
