import AvatarBadgeCustom from "./_examples/avatar-badge-custom";
import AvatarBadgeWithIcon from "./_examples/avatar-badge-with-icon";
import AvatarBasic from "./_examples/avatar-basic";
import AvatarCustomRadius from "./_examples/avatar-custom-radius";
import AvatarFallbackIcon from "./_examples/avatar-fallback-icon";
import AvatarGroupExample from "./_examples/avatar-group";
import AvatarGroupCountExample from "./_examples/avatar-group-count";
import AvatarGroupCountIcon from "./_examples/avatar-group-count-icon";
import AvatarGroupPopover from "./_examples/avatar-group-popover";
import AvatarHoverCard from "./_examples/avatar-hover-card";
import AvatarMenu from "./_examples/avatar-menu";
import AvatarRtl from "./_examples/avatar-rtl";
import AvatarSizeCustom from "./_examples/avatar-size-custom";
import AvatarSizes from "./_examples/avatar-sizes";
import AvatarWithStatus from "./_examples/avatar-with-status";

const AvatarExamplePage = () => (
  <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
    <div className="grid gap-16 sm:grid-cols-2">
      <section aria-labelledby="basic-heading" className="flex flex-col gap-5">
        <h1 className="font-medium text-muted-foreground" id="basic-heading">
          Basic
        </h1>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <AvatarBasic />
        </div>
      </section>

      <section aria-labelledby="sizes-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="sizes-heading">
          Sizes
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <AvatarSizes />
        </div>
      </section>

      <section aria-labelledby="badge-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="badge-heading">
          Badge
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <AvatarWithStatus />
        </div>
      </section>

      <section
        aria-labelledby="badge-custom-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="badge-custom-heading"
        >
          Badge with Custom Style
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <AvatarBadgeCustom />
        </div>
      </section>

      <section
        aria-labelledby="badge-with-icon-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="badge-with-icon-heading"
        >
          Badge with Icon
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <AvatarBadgeWithIcon />
        </div>
      </section>

      <section aria-labelledby="group-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="group-heading">
          Avatar Group
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <AvatarGroupExample />
        </div>
      </section>

      <section
        aria-labelledby="group-count-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="group-count-heading"
        >
          Avatar Group Count
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <AvatarGroupCountExample />
        </div>
      </section>

      <section
        aria-labelledby="group-with-icon-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="group-with-icon-heading"
        >
          Avatar Group with Icon
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <AvatarGroupCountIcon />
        </div>
      </section>

      <section aria-labelledby="menu-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="menu-heading">
          Menu
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <AvatarMenu />
        </div>
      </section>

      <section
        aria-labelledby="size-custom-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="size-custom-heading"
        >
          Custom Size
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <AvatarSizeCustom />
        </div>
      </section>

      <section
        aria-labelledby="custom-radius-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="custom-radius-heading"
        >
          Custom Radius
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <AvatarCustomRadius />
        </div>
      </section>

      <section
        aria-labelledby="fallback-icon-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="fallback-icon-heading"
        >
          Fallback with Icon
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <AvatarFallbackIcon />
        </div>
      </section>

      <section
        aria-labelledby="group-popover-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="group-popover-heading"
        >
          Avatar with Popover
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <AvatarGroupPopover />
        </div>
      </section>

      <section
        aria-labelledby="hover-card-heading"
        className="flex flex-col gap-5"
      >
        <h2
          className="font-medium text-muted-foreground"
          id="hover-card-heading"
        >
          Avatar with Hover Card
        </h2>
        <div className="rounded-3xl border bg-card p-6 sm:p-10">
          <AvatarHoverCard />
        </div>
      </section>

      <section aria-labelledby="rtl-heading" className="flex flex-col gap-5">
        <h2 className="font-medium text-muted-foreground" id="rtl-heading">
          RTL
        </h2>
        <div className="rounded-3xl bg-muted p-6 sm:p-10">
          <AvatarRtl />
        </div>
      </section>
    </div>
  </div>
);

export default AvatarExamplePage;
