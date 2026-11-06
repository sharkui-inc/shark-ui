import { PreviewLocaleProvider } from "@/hooks/use-preview-locale";
import ExampleCheckboxTree from "@/registry/react/examples/tree-view/example-checkbox-tree";
import ExampleContextMenu from "@/registry/react/examples/tree-view/example-context-menu";
import ExampleControlled from "@/registry/react/examples/tree-view/example-controlled";
import ExampleCustomIcons from "@/registry/react/examples/tree-view/example-custom-icons";
import ExampleCustomIconsFolder from "@/registry/react/examples/tree-view/example-custom-icons-folder";
import ExampleCustomIconsItem from "@/registry/react/examples/tree-view/example-custom-icons-item";
import ExampleDefault from "@/registry/react/examples/tree-view/example-default";
import ExampleEditor from "@/registry/react/examples/tree-view/example-editor";
import ExampleLinks from "@/registry/react/examples/tree-view/example-links";
import ExampleMultipleSelection from "@/registry/react/examples/tree-view/example-multiple-selection";
import ExampleRename from "@/registry/react/examples/tree-view/example-rename";
import ExampleRtl from "@/registry/react/examples/tree-view/example-rtl";

const TreeViewExamplePage = () => (
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
          aria-labelledby="checkbox-tree-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="checkbox-tree-heading"
          >
            Checkbox Tree
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCheckboxTree />
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
          aria-labelledby="controlled-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="controlled-heading"
          >
            Controlled
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleControlled />
          </div>
        </section>
        <section
          aria-labelledby="custom-icons-folder-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-icons-folder-heading"
          >
            Custom Icons Folder
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomIconsFolder />
          </div>
        </section>
        <section
          aria-labelledby="custom-icons-item-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-icons-item-heading"
          >
            Custom Icons Item
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomIconsItem />
          </div>
        </section>
        <section
          aria-labelledby="custom-icons-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="custom-icons-heading"
          >
            Custom Icons
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleCustomIcons />
          </div>
        </section>
        <section
          aria-labelledby="editor-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="editor-heading">
            Editor
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleEditor />
          </div>
        </section>
        <section
          aria-labelledby="links-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="links-heading">
            Links
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleLinks />
          </div>
        </section>
        <section
          aria-labelledby="multiple-selection-heading"
          className="flex flex-col gap-5"
        >
          <h2
            className="text-muted-foreground font-medium"
            id="multiple-selection-heading"
          >
            Multiple Selection
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleMultipleSelection />
          </div>
        </section>
        <section
          aria-labelledby="rename-heading"
          className="flex flex-col gap-5"
        >
          <h2 className="text-muted-foreground font-medium" id="rename-heading">
            Rename
          </h2>
          <div className="bg-card rounded-3xl border p-6 sm:p-10">
            <ExampleRename />
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

export default TreeViewExamplePage;
