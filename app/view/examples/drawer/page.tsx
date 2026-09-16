import DrawerDemo from "./_examples/drawer-demo";
import DrawerDialog from "./_examples/drawer-dialog";
import DrawerNested from "./_examples/drawer-nested";
import DrawerNonModal from "./_examples/drawer-non-modal";
import DrawerRtl from "./_examples/drawer-rtl";
import DrawerSides from "./_examples/drawer-sides";
import DrawerSnapPoints from "./_examples/drawer-snap-points";
import DrawerSwipeHandle from "./_examples/drawer-swipe-handle";

const DrawerExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <DrawerDemo />
        </div>
      </section>

      <section aria-labelledby="dialog-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="dialog-heading">
          Dialog
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <DrawerDialog />
        </div>
      </section>

      <section aria-labelledby="nested-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="nested-heading">
          Nested
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <DrawerNested />
        </div>
      </section>

      <section
        aria-labelledby="non-modal-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="non-modal-heading"
        >
          Non Modal
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <DrawerNonModal />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <DrawerRtl />
        </div>
      </section>

      <section aria-labelledby="sides-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="sides-heading">
          Sides
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <DrawerSides />
        </div>
      </section>

      <section
        aria-labelledby="snap-points-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="snap-points-heading"
        >
          Snap Points
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <DrawerSnapPoints />
        </div>
      </section>

      <section
        aria-labelledby="swipe-handle-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="swipe-handle-heading"
        >
          Swipe Handle
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <DrawerSwipeHandle />
        </div>
      </section>
    </div>
  </div>
);

export default DrawerExamplePage;
