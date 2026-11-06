import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleArticle from "@/registry/react/examples/link-overlay/example-article";
import ExampleDefault from "@/registry/react/examples/link-overlay/example-default";
import ExampleRtl from "@/registry/react/examples/link-overlay/example-rtl";
import ExampleWithLink from "@/registry/react/examples/link-overlay/example-with-link";

const LinkOverlayExamplePage = () => (
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
          aria-labelledby="article-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="article-heading"
          >
            Article
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleArticle />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default LinkOverlayExamplePage;
