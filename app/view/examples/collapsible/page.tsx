import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/collapsible/example-controlled";
import ExampleDefault from "@/registry/react/examples/collapsible/example-default";
import ExampleDisabled from "@/registry/react/examples/collapsible/example-disabled";
import ExampleNested from "@/registry/react/examples/collapsible/example-nested";
import ExamplePartialCollapse from "@/registry/react/examples/collapsible/example-partial-collapse";
import ExampleRtl from "@/registry/react/examples/collapsible/example-rtl";
import CollapsibleFileTree from "./_examples/collapsible-file-tree";
import CollapsibleSettings from "./_examples/collapsible-settings";

const CollapsibleExamplePage = () => (
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
          aria-labelledby="nested-heading"
          className="flex flex-col gap-5 sm:col-span-2"
        >
          <h2 className="text-muted-foreground font-medium" id="nested-heading">
            Nested
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNested />
          </div>
        </section>
        <section
          aria-labelledby="partial-collapse-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="partial-collapse-heading"
          >
            Partial Collapse
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePartialCollapse />
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
          aria-labelledby="local-file-tree-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-file-tree-heading"
          >
            File Tree
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CollapsibleFileTree />
          </div>
        </section>
        <section
          aria-labelledby="local-settings-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-settings-heading"
          >
            Settings
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CollapsibleSettings />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default CollapsibleExamplePage;
