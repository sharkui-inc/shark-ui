import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleActions from "@/registry/react/examples/message/example-actions";
import ExampleAlign from "@/registry/react/examples/message/example-align";
import ExampleAttachment from "@/registry/react/examples/message/example-attachment";
import ExampleAvatar from "@/registry/react/examples/message/example-avatar";
import ExampleContextMenu from "@/registry/react/examples/message/example-context-menu";
import ExampleDefault from "@/registry/react/examples/message/example-default";
import ExampleGroup from "@/registry/react/examples/message/example-group";
import ExampleHeaderFooter from "@/registry/react/examples/message/example-header-footer";
import ExampleOpenGraph from "@/registry/react/examples/message/example-open-graph";
import ExampleRtl from "@/registry/react/examples/message/example-rtl";

const MessageExamplePage = () => (
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
          aria-labelledby="actions-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="actions-heading"
          >
            Actions
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleActions />
          </div>
        </section>
        <section
          aria-labelledby="align-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="align-heading">
            Align
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAlign />
          </div>
        </section>
        <section
          aria-labelledby="attachment-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="attachment-heading"
          >
            Attachment
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleAttachment />
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
          aria-labelledby="context-menu-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="context-menu-heading"
          >
            Context Menu
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleContextMenu />
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
          aria-labelledby="header-footer-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="header-footer-heading"
          >
            Header Footer
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleHeaderFooter />
          </div>
        </section>
        <section
          aria-labelledby="open-graph-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="open-graph-heading"
          >
            Open Graph
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleOpenGraph />
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

export default MessageExamplePage;
