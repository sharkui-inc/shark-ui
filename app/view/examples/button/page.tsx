import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCustomColor from "@/registry/react/examples/button/example-custom-color";
import ExampleDefault from "@/registry/react/examples/button/example-default";
import ExampleDisabled from "@/registry/react/examples/button/example-disabled";
import ExampleHitbox from "@/registry/react/examples/button/example-hitbox";
import ExampleIcon from "@/registry/react/examples/button/example-icon";
import ExampleLoading from "@/registry/react/examples/button/example-loading";
import ExampleNoClickEffect from "@/registry/react/examples/button/example-no-click-effect";
import ExamplePill from "@/registry/react/examples/button/example-pill";
import ExampleRtl from "@/registry/react/examples/button/example-rtl";
import ExampleSizeLg from "@/registry/react/examples/button/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/button/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/button/example-size-sm";
import ExampleSizeXl from "@/registry/react/examples/button/example-size-xl";
import ExampleSizeXs from "@/registry/react/examples/button/example-size-xs";
import ExampleStateAsChild from "@/registry/react/examples/button/example-state-as-child";
import ExampleVariantDefault from "@/registry/react/examples/button/example-variant-default";
import ExampleVariantDestructive from "@/registry/react/examples/button/example-variant-destructive";
import ExampleVariantGhost from "@/registry/react/examples/button/example-variant-ghost";
import ExampleVariantLink from "@/registry/react/examples/button/example-variant-link";
import ExampleVariantOutline from "@/registry/react/examples/button/example-variant-outline";
import ExampleVariantSecondary from "@/registry/react/examples/button/example-variant-secondary";
import ExampleWithIcon from "@/registry/react/examples/button/example-with-icon";
import ButtonAsLink from "./_examples/button-as-link";
import ButtonRounded from "./_examples/button-rounded";
import ButtonSize from "./_examples/button-size";
import ButtonSpinner from "./_examples/button-spinner";

const ButtonExamplePage = () => (
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
            <ExampleCustomColor />
          </div>
        </section>
        <section
          aria-labelledby="disabled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="disabled-heading"
          >
            Disabled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleDisabled />
          </div>
        </section>
        <section
          aria-labelledby="hitbox-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="hitbox-heading">
            Hitbox
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHitbox />
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
          aria-labelledby="loading-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="loading-heading"
          >
            Loading
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLoading />
          </div>
        </section>
        <section
          aria-labelledby="no-click-effect-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="no-click-effect-heading"
          >
            No Click Effect
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleNoClickEffect />
          </div>
        </section>
        <section aria-labelledby="pill-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="pill-heading">
            Pill
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExamplePill />
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
          aria-labelledby="size-lg-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-lg-heading"
          >
            Size LG
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeLg />
          </div>
        </section>
        <section
          aria-labelledby="size-md-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-md-heading"
          >
            Size MD
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeMd />
          </div>
        </section>
        <section
          aria-labelledby="size-sm-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-sm-heading"
          >
            Size SM
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeSm />
          </div>
        </section>
        <section
          aria-labelledby="size-xl-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-xl-heading"
          >
            Size XL
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeXl />
          </div>
        </section>
        <section
          aria-labelledby="size-xs-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-xs-heading"
          >
            Size XS
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeXs />
          </div>
        </section>
        <section
          aria-labelledby="state-as-child-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="state-as-child-heading"
          >
            State As Child
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleStateAsChild />
          </div>
        </section>
        <section
          aria-labelledby="variant-default-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-default-heading"
          >
            Variant Default
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantDefault />
          </div>
        </section>
        <section
          aria-labelledby="variant-destructive-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-destructive-heading"
          >
            Variant Destructive
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantDestructive />
          </div>
        </section>
        <section
          aria-labelledby="variant-ghost-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-ghost-heading"
          >
            Variant Ghost
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantGhost />
          </div>
        </section>
        <section
          aria-labelledby="variant-link-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-link-heading"
          >
            Variant Link
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantLink />
          </div>
        </section>
        <section
          aria-labelledby="variant-outline-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-outline-heading"
          >
            Variant Outline
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantOutline />
          </div>
        </section>
        <section
          aria-labelledby="variant-secondary-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-secondary-heading"
          >
            Variant Secondary
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantSecondary />
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
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithIcon />
          </div>
        </section>
        <section
          aria-labelledby="local-as-link-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-as-link-heading"
          >
            As Link
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ButtonAsLink />
          </div>
        </section>
        <section
          aria-labelledby="local-rounded-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-rounded-heading"
          >
            Rounded
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ButtonRounded />
          </div>
        </section>
        <section
          aria-labelledby="local-size-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-size-heading"
          >
            Size
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ButtonSize />
          </div>
        </section>
        <section
          aria-labelledby="local-spinner-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-spinner-heading"
          >
            Spinner
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ButtonSpinner />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ButtonExamplePage;
