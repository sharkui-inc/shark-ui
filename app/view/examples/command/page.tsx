import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/command/example-controlled";
import ExampleDefault from "@/registry/react/examples/command/example-default";
import ExampleDialog from "@/registry/react/examples/command/example-dialog";
import ExampleDisabled from "@/registry/react/examples/command/example-disabled";
import ExampleDisabledItem from "@/registry/react/examples/command/example-disabled-item";
import ExampleFill from "@/registry/react/examples/command/example-fill";
import ExampleGroups from "@/registry/react/examples/command/example-groups";
import ExampleInset from "@/registry/react/examples/command/example-inset";
import ExampleInsetRtl from "@/registry/react/examples/command/example-inset-rtl";
import ExampleRtl from "@/registry/react/examples/command/example-rtl";
import ExampleScrollable from "@/registry/react/examples/command/example-scrollable";
import ExampleShortcuts from "@/registry/react/examples/command/example-shortcuts";
import ExampleVariantDefault from "@/registry/react/examples/command/example-variant-default";
import ExampleWithFooter from "@/registry/react/examples/command/example-with-footer";

const CommandExamplePage = () => (
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
          aria-labelledby="dialog-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="dialog-heading">
            Dialog
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDialog />
          </div>
        </section>
        <section
          aria-labelledby="disabled-item-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="disabled-item-heading"
          >
            Disabled Item
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDisabledItem />
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
        <section aria-labelledby="fill-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="fill-heading">
            Fill
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFill />
          </div>
        </section>
        <section
          aria-labelledby="groups-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="groups-heading">
            Groups
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGroups />
          </div>
        </section>
        <section
          aria-labelledby="inset-rtl-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="inset-rtl-heading"
          >
            Inset RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInsetRtl />
          </div>
        </section>
        <section
          aria-labelledby="inset-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="inset-heading">
            Inset
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInset />
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
          aria-labelledby="scrollable-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="scrollable-heading"
          >
            Scrollable
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleScrollable />
          </div>
        </section>
        <section
          aria-labelledby="shortcuts-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="shortcuts-heading"
          >
            Shortcuts
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleShortcuts />
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
          aria-labelledby="with-footer-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-footer-heading"
          >
            With Footer
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithFooter />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default CommandExamplePage;
