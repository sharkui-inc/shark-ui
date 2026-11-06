import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCloseTrigger from "@/registry/react/examples/action-bar/example-close-trigger";
import ExampleControlled from "@/registry/react/examples/action-bar/example-controlled";
import ExampleCustomSpacing from "@/registry/react/examples/action-bar/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/action-bar/example-default";
import ExampleDialog from "@/registry/react/examples/action-bar/example-dialog";
import ExampleGutter from "@/registry/react/examples/action-bar/example-gutter";
import ExampleMenu from "@/registry/react/examples/action-bar/example-menu";
import ExamplePositioning from "@/registry/react/examples/action-bar/example-positioning";
import ExampleRtl from "@/registry/react/examples/action-bar/example-rtl";
import ExampleTable from "@/registry/react/examples/action-bar/example-table";

const ActionBarExamplePage = () => (
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
          aria-labelledby="close-trigger-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="close-trigger-heading"
          >
            Close Trigger
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCloseTrigger />
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
          aria-labelledby="gutter-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="gutter-heading">
            Gutter
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGutter />
          </div>
        </section>
        <section aria-labelledby="menu-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="menu-heading">
            Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMenu />
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
        <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="rtl-heading">
            RTL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRtl />
          </div>
        </section>
        <section
          aria-labelledby="table-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="table-heading">
            Table
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleTable />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ActionBarExamplePage;
