import DialogCloseButton from "./_examples/dialog-close-button";
import DialogDemo from "./_examples/dialog-demo";
import DialogNoCloseButton from "./_examples/dialog-no-close-button";
import DialogRtl from "./_examples/dialog-rtl";
import DialogScrollableContent from "./_examples/dialog-scrollable-content";
import DialogStickyFooter from "./_examples/dialog-sticky-footer";

const DialogExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <DialogDemo />
        </div>
      </section>

      <section
        aria-labelledby="close-button-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="close-button-heading"
        >
          Close Button
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <DialogCloseButton />
        </div>
      </section>

      <section
        aria-labelledby="no-close-button-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="no-close-button-heading"
        >
          No Close Button
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <DialogNoCloseButton />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <DialogRtl />
        </div>
      </section>

      <section
        aria-labelledby="scrollable-content-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="scrollable-content-heading"
        >
          Scrollable Content
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <DialogScrollableContent />
        </div>
      </section>

      <section
        aria-labelledby="sticky-footer-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="sticky-footer-heading"
        >
          Sticky Footer
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <DialogStickyFooter />
        </div>
      </section>
    </div>
  </div>
);

export default DialogExamplePage;
