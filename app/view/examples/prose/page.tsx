import ExampleA from "@/registry/react/examples/prose/example-a";
import ExampleBlockquote from "@/registry/react/examples/prose/example-blockquote";
import ExampleDefault from "@/registry/react/examples/prose/example-default";
import ExampleDetails from "@/registry/react/examples/prose/example-details";
import ExampleDl from "@/registry/react/examples/prose/example-dl";
import ExampleH1 from "@/registry/react/examples/prose/example-h1";
import ExampleH2 from "@/registry/react/examples/prose/example-h2";
import ExampleH3 from "@/registry/react/examples/prose/example-h3";
import ExampleH4 from "@/registry/react/examples/prose/example-h4";
import ExampleH5 from "@/registry/react/examples/prose/example-h5";
import ExampleH6 from "@/registry/react/examples/prose/example-h6";
import ExampleInlineCode from "@/registry/react/examples/prose/example-inline-code";
import ExampleKbd from "@/registry/react/examples/prose/example-kbd";
import ExampleList from "@/registry/react/examples/prose/example-list";
import ExampleMark from "@/registry/react/examples/prose/example-mark";
import ExampleMedia from "@/registry/react/examples/prose/example-media";
import ExampleNotProse from "@/registry/react/examples/prose/example-not-prose";
import ExampleOl from "@/registry/react/examples/prose/example-ol";
import ExampleP from "@/registry/react/examples/prose/example-p";
import ExampleRtl from "@/registry/react/examples/prose/example-rtl";
import ExampleSeparator from "@/registry/react/examples/prose/example-separator";
import ExampleSmall from "@/registry/react/examples/prose/example-small";
import ExampleTable from "@/registry/react/examples/prose/example-table";
import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";

const ProseExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section
        aria-labelledby="default-heading"
        className="flex flex-col gap-5"
      >
        <h1 className="font-medium text-muted-foreground" id="default-heading">
          Default
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleDefault />
        </div>
      </section>
      <section aria-labelledby="h1-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="h1-heading">
          H1
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleH1 />
        </div>
      </section>
      <section aria-labelledby="h2-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="h2-heading">
          H2
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleH2 />
        </div>
      </section>
      <section aria-labelledby="h3-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="h3-heading">
          H3
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleH3 />
        </div>
      </section>
      <section aria-labelledby="h4-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="h4-heading">
          H4
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleH4 />
        </div>
      </section>
      <section aria-labelledby="h5-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="h5-heading">
          H5
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleH5 />
        </div>
      </section>
      <section aria-labelledby="h6-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="h6-heading">
          H6
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleH6 />
        </div>
      </section>
      <section aria-labelledby="p-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="p-heading">
          P
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleP />
        </div>
      </section>
      <section aria-labelledby="a-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="a-heading">
          A
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleA />
        </div>
      </section>
      <section
        aria-labelledby="blockquote-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="blockquote-heading"
        >
          Blockquote
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleBlockquote />
        </div>
      </section>
      <section aria-labelledby="list-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="list-heading">
          List
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleList />
        </div>
      </section>
      <section aria-labelledby="ol-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="ol-heading">
          OL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleOl />
        </div>
      </section>
      <section aria-labelledby="small-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="small-heading">
          Small
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleSmall />
        </div>
      </section>
      <section aria-labelledby="mark-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="mark-heading">
          Mark
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleMark />
        </div>
      </section>
      <section
        aria-labelledby="inline-code-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="inline-code-heading"
        >
          Inline Code
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleInlineCode />
        </div>
      </section>
      <section aria-labelledby="kbd-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="kbd-heading">
          Kbd
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleKbd />
        </div>
      </section>
      <section
        aria-labelledby="details-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="details-heading">
          Details
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleDetails />
        </div>
      </section>
      <section aria-labelledby="dl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="dl-heading">
          DL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleDl />
        </div>
      </section>
      <section aria-labelledby="table-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="table-heading">
          Table
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleTable />
        </div>
      </section>
      <section aria-labelledby="media-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="media-heading">
          Media
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleMedia />
        </div>
      </section>
      <section
        aria-labelledby="separator-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="separator-heading"
        >
          Separator
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ExampleSeparator />
        </div>
      </section>
      <section
        aria-labelledby="not-prose-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="not-prose-heading"
        >
          Not Prose
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ExampleNotProse />
        </div>
      </section>
      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <PreviewLocaleProvider>
            <ExampleRtl />
          </PreviewLocaleProvider>
        </div>
      </section>
    </div>
  </div>
);

export default ProseExamplePage;
