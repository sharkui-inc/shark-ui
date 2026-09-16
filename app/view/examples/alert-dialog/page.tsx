import AlertDialogBasic from "./_examples/alert-dialog-basic";
import AlertDialogDestructive from "./_examples/alert-dialog-destructive";
import AlertDialogMedia from "./_examples/alert-dialog-media";
import AlertDialogRtl from "./_examples/alert-dialog-rtl";
import AlertDialogSmall from "./_examples/alert-dialog-small";
import AlertDialogSmallWithMedia from "./_examples/alert-dialog-small-with-media";

const AlertDialogExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <AlertDialogBasic />
        </div>
      </section>

      <section aria-labelledby="small-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="small-heading">
          Small
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <AlertDialogSmall />
        </div>
      </section>

      <section aria-labelledby="media-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="media-heading">
          Media
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <AlertDialogMedia />
        </div>
      </section>

      <section
        aria-labelledby="small-with-media-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="small-with-media-heading"
        >
          Small with Media
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <AlertDialogSmallWithMedia />
        </div>
      </section>

      <section
        aria-labelledby="destructive-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="destructive-heading"
        >
          Destructive
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <AlertDialogDestructive />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <AlertDialogRtl />
        </div>
      </section>
    </div>
  </div>
);

export default AlertDialogExamplePage;
