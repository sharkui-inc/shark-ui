import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAnsi from "@/registry/react/examples/terminal/example-ansi";
import ExampleChildren from "@/registry/react/examples/terminal/example-children";
import ExampleDefault from "@/registry/react/examples/terminal/example-default";
import ExampleIcon from "@/registry/react/examples/terminal/example-icon";
import ExampleNoHeader from "@/registry/react/examples/terminal/example-no-header";
import ExampleRtl from "@/registry/react/examples/terminal/example-rtl";
import ExampleWithAction from "@/registry/react/examples/terminal/example-with-action";

const TerminalExamplePage = () => (
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
        <section aria-labelledby="ansi-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="ansi-heading">
            Ansi
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAnsi />
          </div>
        </section>
        <section
          aria-labelledby="children-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="children-heading"
          >
            Children
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleChildren />
          </div>
        </section>
        <section aria-labelledby="icon-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="icon-heading">
            Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIcon />
          </div>
        </section>
        <section
          aria-labelledby="no-header-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="no-header-heading"
          >
            No Header
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNoHeader />
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
          aria-labelledby="with-action-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-action-heading"
          >
            With Action
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithAction />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default TerminalExamplePage;
