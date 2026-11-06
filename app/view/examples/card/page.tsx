import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCustomSpacing from "@/registry/react/examples/card/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/card/example-default";
import ExampleIcon from "@/registry/react/examples/card/example-icon";
import ExampleMediaDefault from "@/registry/react/examples/card/example-media-default";
import ExampleProduct from "@/registry/react/examples/card/example-product";
import ExampleRtl from "@/registry/react/examples/card/example-rtl";
import CardEdgeToEdge from "./_examples/card-edge-to-edge";
import CardImage from "./_examples/card-image";
import CardSmall from "./_examples/card-small";
import CardSpacing from "./_examples/card-spacing";

const CardExamplePage = () => (
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
        <section aria-labelledby="icon-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="icon-heading">
            Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleIcon />
          </div>
        </section>
        <section
          aria-labelledby="media-default-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="media-default-heading"
          >
            Media Default
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMediaDefault />
          </div>
        </section>
        <section
          aria-labelledby="product-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="product-heading"
          >
            Product
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleProduct />
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
          aria-labelledby="local-edge-to-edge-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-edge-to-edge-heading"
          >
            Edge To Edge
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CardEdgeToEdge />
          </div>
        </section>
        <section
          aria-labelledby="local-image-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-image-heading"
          >
            Image
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CardImage />
          </div>
        </section>
        <section
          aria-labelledby="local-small-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-small-heading"
          >
            Small
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CardSmall />
          </div>
        </section>
        <section
          aria-labelledby="local-spacing-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-spacing-heading"
          >
            Spacing
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <CardSpacing />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default CardExamplePage;
