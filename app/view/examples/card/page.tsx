import CardDemo from "./_examples/card-demo";
import CardEdgeToEdge from "./_examples/card-edge-to-edge";
import CardImage from "./_examples/card-image";
import CardRtl from "./_examples/card-rtl";
import CardSmall from "./_examples/card-small";
import CardSpacing from "./_examples/card-spacing";

const CardExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CardDemo />
        </div>
      </section>

      <section
        aria-labelledby="edge-to-edge-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="edge-to-edge-heading"
        >
          Edge to Edge
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CardEdgeToEdge />
        </div>
      </section>

      <section aria-labelledby="image-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="image-heading">
          Image
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CardImage />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CardRtl />
        </div>
      </section>

      <section aria-labelledby="small-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="small-heading">
          Small
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <CardSmall />
        </div>
      </section>

      <section
        aria-labelledby="spacing-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="spacing-heading">
          Spacing
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <CardSpacing />
        </div>
      </section>
    </div>
  </div>
);

export default CardExamplePage;
