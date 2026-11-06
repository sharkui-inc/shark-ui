import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAvatar from "@/registry/react/examples/item/example-avatar";
import ExampleBasic from "@/registry/react/examples/item/example-basic";
import ExampleCustomSpacing from "@/registry/react/examples/item/example-custom-spacing";
import ExampleDefault from "@/registry/react/examples/item/example-default";
import ExampleGroup from "@/registry/react/examples/item/example-group";
import ExampleHeader from "@/registry/react/examples/item/example-header";
import ExampleIcon from "@/registry/react/examples/item/example-icon";
import ExampleImage from "@/registry/react/examples/item/example-image";
import ExampleLink from "@/registry/react/examples/item/example-link";
import ExampleMenu from "@/registry/react/examples/item/example-menu";
import ExampleRtl from "@/registry/react/examples/item/example-rtl";
import ExampleVariantDefault from "@/registry/react/examples/item/example-variant-default";
import ExampleVariantMuted from "@/registry/react/examples/item/example-variant-muted";
import ExampleVariantOutline from "@/registry/react/examples/item/example-variant-outline";
import ItemDropdown from "./_examples/item-dropdown";
import ItemSize from "./_examples/item-size";
import ItemVariant from "./_examples/item-variant";

const ItemExamplePage = () => (
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
          aria-labelledby="avatar-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="avatar-heading">
            Avatar
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAvatar />
          </div>
        </section>
        <section
          aria-labelledby="basic-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="basic-heading">
            Basic
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleBasic />
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
        <section
          aria-labelledby="group-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="group-heading">
            Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGroup />
          </div>
        </section>
        <section
          aria-labelledby="header-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="header-heading">
            Header
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHeader />
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
          aria-labelledby="image-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="image-heading">
            Image
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleImage />
          </div>
        </section>
        <section aria-labelledby="link-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="link-heading">
            Link
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLink />
          </div>
        </section>
        <section aria-labelledby="menu-heading" className="flex flex-col gap-5">
          <h2 className="text-muted-foreground font-medium" id="menu-heading">
            Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMenu />
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
          aria-labelledby="variant-muted-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="variant-muted-heading"
          >
            Variant Muted
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleVariantMuted />
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
          aria-labelledby="local-dropdown-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-dropdown-heading"
          >
            Dropdown
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ItemDropdown />
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
            <ItemSize />
          </div>
        </section>
        <section
          aria-labelledby="local-variant-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-variant-heading"
          >
            Variant
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ItemVariant />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default ItemExamplePage;
