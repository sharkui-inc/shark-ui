import AlertBasic from "./_examples/alert-basic";
import AlertCustomColor from "./_examples/alert-custom-color";
import AlertRtl from "./_examples/alert-rtl";
import AlertVariantDefault from "./_examples/alert-variant-default";
import AlertVariantDestructive from "./_examples/alert-variant-destructive";
import AlertVariantInfo from "./_examples/alert-variant-info";
import AlertVariantSuccess from "./_examples/alert-variant-success";
import AlertVariantWarning from "./_examples/alert-variant-warning";
import AlertWithAction from "./_examples/alert-with-action";
import AlertWithIcon from "./_examples/alert-with-icon";

const AlertExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
      <h1 className="text-muted-foreground font-medium" id="basic-heading">
        Basic
      </h1>
      <div className="bg-muted rounded-3xl p-6 sm:p-10">
        <AlertBasic />
      </div>
    </section>

    <section aria-labelledby="icon-heading" className="flex flex-col gap-5">
      <h2 className="text-muted-foreground font-medium" id="icon-heading">
        With Icon
      </h2>
      <div className="bg-card rounded-3xl border p-6 sm:p-10">
        <AlertWithIcon />
      </div>
    </section>

    <section
      aria-labelledby="destructive-heading"
      className="flex flex-col gap-5"
    >
      <h2
        className="text-muted-foreground font-medium"
        id="destructive-heading"
      >
        Destructive
      </h2>
      <div className="bg-muted rounded-3xl p-6 sm:p-10">
        <AlertVariantDestructive />
      </div>
    </section>

    <section aria-labelledby="action-heading" className="flex flex-col gap-5">
      <h2 className="text-muted-foreground font-medium" id="action-heading">
        With Action
      </h2>
      <div className="bg-card rounded-3xl border p-6 sm:p-10">
        <AlertWithAction />
      </div>
    </section>

    <section aria-labelledby="variants-heading" className="flex flex-col gap-5">
      <h2 className="text-muted-foreground font-medium" id="variants-heading">
        Variants
      </h2>
      <div className="bg-muted flex flex-col gap-4 rounded-3xl p-6 sm:p-10">
        <AlertVariantDefault />
        <AlertVariantInfo />
        <AlertVariantWarning />
        <AlertVariantSuccess />
      </div>
    </section>

    <section
      aria-labelledby="custom-color-heading"
      className="flex flex-col gap-5"
    >
      <h2
        className="text-muted-foreground font-medium"
        id="custom-color-heading"
      >
        Custom Color
      </h2>
      <div className="bg-card rounded-3xl border p-6 sm:p-10">
        <AlertCustomColor />
      </div>
    </section>

    <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
      <h2 className="text-muted-foreground font-medium" id="rtl-heading">
        RTL
      </h2>
      <div className="bg-muted rounded-3xl p-6 sm:p-10">
        <AlertRtl />
      </div>
    </section>
  </div>
);

export default AlertExamplePage;
