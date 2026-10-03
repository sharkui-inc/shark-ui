import ItemAvatar from "./_examples/item-avatar";
import ItemDemo from "./_examples/item-demo";
import ItemDropdown from "./_examples/item-dropdown";
import ItemGroup from "./_examples/item-group";
import ItemHeader from "./_examples/item-header";
import ItemIcon from "./_examples/item-icon";
import ItemImage from "./_examples/item-image";
import ItemLink from "./_examples/item-link";
import ItemRtl from "./_examples/item-rtl";
import ItemSize from "./_examples/item-size";
import ItemVariant from "./_examples/item-variant";

const ItemExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid min-w-0 grid-cols-1 gap-16 sm:grid-cols-2 [&>section]:min-w-0">
      <section aria-labelledby="demo-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="demo-heading">
          Demo
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ItemDemo />
        </div>
      </section>

      <section aria-labelledby="avatar-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="avatar-heading">
          Avatar
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ItemAvatar />
        </div>
      </section>

      <section
        aria-labelledby="dropdown-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="dropdown-heading">
          Dropdown
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ItemDropdown />
        </div>
      </section>

      <section aria-labelledby="group-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="group-heading">
          Group
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ItemGroup />
        </div>
      </section>

      <section aria-labelledby="header-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="header-heading">
          Header
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ItemHeader />
        </div>
      </section>

      <section aria-labelledby="icon-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="icon-heading">
          Icon
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ItemIcon />
        </div>
      </section>

      <section aria-labelledby="image-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="image-heading">
          Image
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ItemImage />
        </div>
      </section>

      <section aria-labelledby="link-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="link-heading">
          Link
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ItemLink />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ItemRtl />
        </div>
      </section>

      <section aria-labelledby="size-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="size-heading">
          Size
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <ItemSize />
        </div>
      </section>

      <section
        aria-labelledby="variant-heading"
        className="flex flex-col gap-5"
      >
        <h2 className="font-medium text-muted-foreground" id="variant-heading">
          Variant
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <ItemVariant />
        </div>
      </section>
    </div>
  </div>
);

export default ItemExamplePage;
