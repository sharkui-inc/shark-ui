import SheetDemo from "./_examples/sheet-demo";
import SheetNoCloseButton from "./_examples/sheet-no-close-button";
import SheetRtl from "./_examples/sheet-rtl";
import SheetSide from "./_examples/sheet-side";

const SheetExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="text-muted-foreground font-medium" id="demo-heading">
          Demo
        </h1>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <SheetDemo />
        </div>
      </section>

      <section
        aria-labelledby="no-close-button-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="no-close-button-heading"
        >
          No Close Button
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <SheetNoCloseButton />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rtl-heading">
          RTL
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <SheetRtl />
        </div>
      </section>

      <section aria-labelledby="side-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="side-heading">
          Side
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <SheetSide />
        </div>
      </section>
    </div>
  </div>
);

export default SheetExamplePage;
