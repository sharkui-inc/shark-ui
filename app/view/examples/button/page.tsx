import ButtonAsLink from "./_examples/button-as-link";
import ButtonDefault from "./_examples/button-default";
import ButtonDestructive from "./_examples/button-destructive";
import ButtonGhost from "./_examples/button-ghost";
import ButtonIcon from "./_examples/button-icon";
import ButtonLink from "./_examples/button-link";
import ButtonOutline from "./_examples/button-outline";
import ButtonRounded from "./_examples/button-rounded";
import ButtonRtl from "./_examples/button-rtl";
import ButtonSecondary from "./_examples/button-secondary";
import ButtonSize from "./_examples/button-size";
import ButtonSpinner from "./_examples/button-spinner";
import ButtonWithIcon from "./_examples/button-with-icon";

const ButtonExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="size-heading" className="flex flex-col gap-5">
        <h1 className="text-muted-foreground font-medium" id="size-heading">
          Size
        </h1>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <ButtonSize />
        </div>
      </section>

      <section
        aria-labelledby="default-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="default-heading">
          Default
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ButtonDefault />
        </div>
      </section>

      <section
        aria-labelledby="outline-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="outline-heading">
          Outline
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <ButtonOutline />
        </div>
      </section>

      <section
        aria-labelledby="secondary-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="secondary-heading"
        >
          Secondary
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ButtonSecondary />
        </div>
      </section>

      <section aria-labelledby="ghost-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="ghost-heading">
          Ghost
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <ButtonGhost />
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
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ButtonDestructive />
        </div>
      </section>

      <section aria-labelledby="link-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="link-heading">
          Link
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <ButtonLink />
        </div>
      </section>

      <section aria-labelledby="icon-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="icon-heading">
          Icon
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ButtonIcon />
        </div>
      </section>

      <section
        aria-labelledby="with-icon-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="text-muted-foreground font-medium"
          id="with-icon-heading"
        >
          With Icon
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <ButtonWithIcon />
        </div>
      </section>

      <section
        aria-labelledby="rounded-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="rounded-heading">
          Rounded
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ButtonRounded />
        </div>
      </section>

      <section
        aria-labelledby="spinner-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="spinner-heading">
          Spinner
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <ButtonSpinner />
        </div>
      </section>

      <section
        aria-labelledby="as-link-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="text-muted-foreground font-medium" id="as-link-heading">
          As Link
        </h2>
        <div className="bg-card rounded-3xl border p-6 sm:p-10">
          <ButtonAsLink />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="text-muted-foreground font-medium" id="rtl-heading">
          RTL
        </h2>
        <div className="bg-muted rounded-3xl p-6 sm:p-10">
          <ButtonRtl />
        </div>
      </section>
    </div>
  </div>
);

export default ButtonExamplePage;
