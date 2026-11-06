import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleAvatar from "@/registry/react/examples/state/example-avatar";
import ExampleAvatarGroup from "@/registry/react/examples/state/example-avatar-group";
import ExampleBackground from "@/registry/react/examples/state/example-background";
import ExampleDefault from "@/registry/react/examples/state/example-default";
import ExampleIcon from "@/registry/react/examples/state/example-icon";
import ExampleInputGroup from "@/registry/react/examples/state/example-input-group";
import ExampleOutline from "@/registry/react/examples/state/example-outline";
import ExampleRtl from "@/registry/react/examples/state/example-rtl";

const StateExamplePage = () => (
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
          aria-labelledby="avatar-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="avatar-group-heading"
          >
            Avatar Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAvatarGroup />
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
          aria-labelledby="background-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="background-heading"
          >
            Background
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleBackground />
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
          aria-labelledby="input-group-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="input-group-heading"
          >
            Input Group
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleInputGroup />
          </div>
        </section>
        <section
          aria-labelledby="outline-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="outline-heading"
          >
            Outline
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOutline />
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
      </div>
    </div>
  </PreviewLocaleProvider>
);

export default StateExamplePage;
