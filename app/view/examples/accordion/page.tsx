import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleControlled from "@/registry/react/examples/accordion/example-controlled";
import ExampleDefault from "@/registry/react/examples/accordion/example-default";
import ExampleDisabled from "@/registry/react/examples/accordion/example-disabled";
import ExampleMultiple from "@/registry/react/examples/accordion/example-multiple";
import ExampleNonCollapsible from "@/registry/react/examples/accordion/example-non-collapsible";
import ExampleRtl from "@/registry/react/examples/accordion/example-rtl";
import AccordionWithBorders from "./_examples/accordion-with-borders";

const AccordionExamplePage = () => (
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
          aria-labelledby="multiple-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="multiple-heading"
          >
            Multiple
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMultiple />
          </div>
        </section>
        <section
          aria-labelledby="non-collapsible-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="non-collapsible-heading"
          >
            Non Collapsible
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNonCollapsible />
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
          aria-labelledby="local-with-borders-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-with-borders-heading"
          >
            With Borders
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <AccordionWithBorders />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default AccordionExamplePage;
