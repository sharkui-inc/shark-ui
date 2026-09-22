import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";
import { Tabs, TabsList, TabsTrigger } from "@/registry/react/components/tabs";

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] };

const fileTree: FileTreeItem[] = [
  {
    items: [
      {
        items: [
          { name: "button.tsx" },
          { name: "card.tsx" },
          { name: "dialog.tsx" },
          { name: "input.tsx" },
          { name: "select.tsx" },
          { name: "table.tsx" },
        ],
        name: "ui",
      },
      { name: "login-form.tsx" },
      { name: "register-form.tsx" },
    ],
    name: "components",
  },
  {
    items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }],
    name: "lib",
  },
  {
    items: [
      { name: "use-media-query.ts" },
      { name: "use-debounce.ts" },
      { name: "use-local-storage.ts" },
    ],
    name: "hooks",
  },
  {
    items: [{ name: "index.d.ts" }, { name: "api.d.ts" }],
    name: "types",
  },
  {
    items: [{ name: "favicon.ico" }, { name: "logo.svg" }, { name: "images" }],
    name: "public",
  },
  { name: "app.tsx" },
  { name: "layout.tsx" },
  { name: "globals.css" },
  { name: "package.json" },
  { name: "tsconfig.json" },
  { name: "README.md" },
  { name: ".gitignore" },
];

const CollapsibleFileTree = () => {
  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <CollapsibleTrigger asChild>
            <Button
              className="w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
              size="sm"
              variant="ghost"
            >
              <ChevronRightIcon
                aria-hidden
                className="transition-transform group-data-[state=open]/collapsible:rotate-90"
              />
              <FolderIcon aria-hidden data-icon="inline-start" />
              {fileItem.name}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-1 ml-5">
            <div className="flex flex-col gap-1">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      );
    }

    return (
      <Button
        className="w-full justify-start gap-2 text-foreground"
        key={fileItem.name}
        size="sm"
        variant="link"
      >
        <FileIcon aria-hidden data-icon="inline-start" />
        <span>{fileItem.name}</span>
      </Button>
    );
  };

  return (
    <Card className="mx-auto w-full max-w-64 gap-2">
      <CardHeader>
        <Tabs defaultValue="explorer">
          <TabsList className="w-full">
            <TabsTrigger value="explorer">Explorer</TabsTrigger>
            <TabsTrigger value="settings">Outline</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CollapsibleFileTree;
