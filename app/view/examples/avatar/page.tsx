import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleBadgeWithIcon from "@/registry/react/examples/avatar/example-badge-with-icon";
import ExampleCustomRadius from "@/registry/react/examples/avatar/example-custom-radius";
import ExampleDefault from "@/registry/react/examples/avatar/example-default";
import ExampleFallbackIcon from "@/registry/react/examples/avatar/example-fallback-icon";
import ExampleGroup from "@/registry/react/examples/avatar/example-group";
import ExampleGroupCount from "@/registry/react/examples/avatar/example-group-count";
import ExampleGroupCountIcon from "@/registry/react/examples/avatar/example-group-count-icon";
import ExampleGroupPopover from "@/registry/react/examples/avatar/example-group-popover";
import ExampleHoverCard from "@/registry/react/examples/avatar/example-hover-card";
import ExampleRtl from "@/registry/react/examples/avatar/example-rtl";
import ExampleSizeCustom from "@/registry/react/examples/avatar/example-size-custom";
import ExampleSizeLg from "@/registry/react/examples/avatar/example-size-lg";
import ExampleSizeMd from "@/registry/react/examples/avatar/example-size-md";
import ExampleSizeSm from "@/registry/react/examples/avatar/example-size-sm";
import ExampleWithStatus from "@/registry/react/examples/avatar/example-with-status";
import AvatarBadgeCustom from "./_examples/avatar-badge-custom";
import AvatarMenu from "./_examples/avatar-menu";
import AvatarSizes from "./_examples/avatar-sizes";

const AvatarExamplePage = () => (
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
          aria-labelledby="badge-with-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="badge-with-icon-heading"
          >
            Badge With Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleBadgeWithIcon />
          </div>
        </section>
        <section
          aria-labelledby="custom-radius-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-radius-heading"
          >
            Custom Radius
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomRadius />
          </div>
        </section>
        <section
          aria-labelledby="fallback-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="fallback-icon-heading"
          >
            Fallback Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleFallbackIcon />
          </div>
        </section>
        <section
          aria-labelledby="group-count-icon-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="group-count-icon-heading"
          >
            Group Count Icon
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGroupCountIcon />
          </div>
        </section>
        <section
          aria-labelledby="group-count-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="group-count-heading"
          >
            Group Count
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGroupCount />
          </div>
        </section>
        <section
          aria-labelledby="group-popover-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="group-popover-heading"
          >
            Group Popover
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleGroupPopover />
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
          aria-labelledby="hover-card-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="hover-card-heading"
          >
            Hover Card
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHoverCard />
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
          aria-labelledby="size-custom-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="size-custom-heading"
          >
            Size Custom
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleSizeCustom />
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
          aria-labelledby="with-status-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="with-status-heading"
          >
            With Status
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleWithStatus />
          </div>
        </section>
        <section
          aria-labelledby="local-badge-custom-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-badge-custom-heading"
          >
            Badge Custom
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <AvatarBadgeCustom />
          </div>
        </section>
        <section
          aria-labelledby="local-menu-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="local-menu-heading"
          >
            Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <AvatarMenu />
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
            <AvatarSizes />
          </div>
        </section>
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default AvatarExamplePage;
