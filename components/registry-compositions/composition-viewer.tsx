"use client";

import { Separator } from "@registry/react/components/separator";
import {
  ArrowUpRight,
  MonitorIcon,
  RefreshCwIcon,
  SmartphoneIcon,
  TabletIcon,
} from "lucide-react";
import React from "react";
import { packageManagerIcons } from "@/components/icons/package-managers";
import { CompositionCodeViewer } from "@/components/registry-compositions/composition-code-viewer";
import {
  Snippet,
  SnippetCode,
  SnippetCopy,
  SnippetSelect,
} from "@/components/ui/snippet";
import type {
  CompositionFileTreeNode,
  PublishedComposition,
} from "@/lib/registry";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Skeleton } from "@/registry/react/components/skeleton";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";
import {
  type PackageManager,
  useConfig,
  useUpdateConfig,
} from "@/store/config";

interface CompositionViewerProps {
  compact?: boolean;
  headingLevel?: "h1" | "h2";
  item: PublishedComposition;
  kind: "blocks" | "templates";
  showDescription?: boolean;
  tree: CompositionFileTreeNode[];
}

type Viewport = "desktop" | "tablet" | "mobile";

const viewportWidths: Record<Viewport, number | "100%"> = {
  desktop: "100%",
  mobile: 390,
  tablet: 768,
};

const installCommandBody = (name: string) => `shadcn@latest add @shark/${name}`;

const installCopyCommands = {
  bun: (name: string) => `bunx --bun ${installCommandBody(name)}`,
  npm: (name: string) => `npx ${installCommandBody(name)}`,
  pnpm: (name: string) => `pnpm dlx ${installCommandBody(name)}`,
  yarn: (name: string) => `yarn dlx ${installCommandBody(name)}`,
} as const;

const packageManagers = [
  "pnpm",
  "npm",
  "yarn",
  "bun",
] as const satisfies readonly PackageManager[];

export const CompositionViewer = ({
  compact = false,
  headingLevel = "h2",
  item,
  kind,
  showDescription = false,
  tree,
}: CompositionViewerProps) => {
  const config = useConfig();
  const updateConfig = useUpdateConfig();

  const containerRef = React.useRef<HTMLDivElement>(null);

  const [viewport, setViewport] = React.useState<Viewport>("desktop");
  const [shouldLoad, setShouldLoad] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [frameKey, setFrameKey] = React.useState(0);

  const previewUrl = `/view/${kind}/${item.category}/${item.name}`;

  const installDisplayCommand = installCommandBody(item.name);

  const installCopyCommand = React.useMemo(
    () => installCopyCommands[config.packageManager](item.name),
    [config.packageManager, item.name]
  );

  const installItems = React.useMemo(
    () =>
      packageManagers.map((manager) => {
        const Icon = packageManagerIcons[manager];

        return {
          code: installDisplayCommand,
          icon: <Icon className="size-3.5 shrink-0" />,
          label: manager,
          value: manager,
        };
      }),
    [installDisplayCommand]
  );
  const label = kind === "blocks" ? "Block" : "Template";
  const Heading = headingLevel;
  let description: React.ReactNode = null;
  if (showDescription) {
    description = (
      <p className="w-full text-muted-foreground text-sm">{item.description}</p>
    );
  } else if (!compact) {
    description = <p className="sr-only">{item.description}</p>;
  }

  React.useEffect(() => {
    const container = containerRef.current;
    // biome-ignore lint/suspicious/noUnnecessaryConditions: React refs remain nullable at runtime before the element mounts.
    if (!container) {
      return;
    }
    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!(shouldLoad && !loaded && !failed)) {
      return;
    }
    const timeout = window.setTimeout(() => setFailed(true), 15_000);
    return () => window.clearTimeout(timeout);
  }, [failed, loaded, shouldLoad]);

  const reload = () => {
    setFailed(false);
    setLoaded(false);
    setFrameKey((key) => key + 1);
  };

  return (
    <article className="scroll-mt-36" id={item.name}>
      <Tabs className="gap-3" defaultValue="preview" unmountOnExit={false}>
        <div className="flex min-w-0 flex-wrap items-center gap-2">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <Separator className="hidden h-4 sm:block" orientation="vertical" />
          <Heading className="min-w-0 flex-1 basis-32 truncate font-medium text-sm">
            <a
              className="outline-none hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/32"
              href={`#${item.name}`}
            >
              {item.title}
            </a>
          </Heading>
          {description}
          <div className="flex min-w-0 items-center gap-2 sm:ms-auto">
            <Snippet
              className="min-w-0 max-w-80 text-xs"
              copyText={installCopyCommand}
              items={installItems}
              onValueChange={(value) => {
                updateConfig({
                  packageManager: value as PackageManager,
                });
              }}
              value={config.packageManager}
            >
              <SnippetSelect triggerLabel="Choose package manager" />
              <SnippetCode />
              <SnippetCopy />
            </Snippet>
            <Separator className="hidden h-4 sm:block" orientation="vertical" />
            <div className="flex items-center gap-1 rounded-lg border p-0.5">
              <ToggleGroup
                aria-label="Preview width"
                className="hidden md:flex"
                deselectable={false}
                multiple={false}
                onValueChange={({ value }) => {
                  const next = value[0] as Viewport | undefined;

                  if (next) {
                    setViewport(next);
                  }
                }}
                size="sm"
                value={[viewport]}
                variant="ghost"
              >
                <ToggleGroupItem
                  aria-label="Desktop preview"
                  className="size-7 px-0 data-[state=on]:bg-secondary"
                  value="desktop"
                >
                  <MonitorIcon aria-hidden="true" className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem
                  aria-label="Tablet preview"
                  className="size-7 px-0 data-[state=on]:bg-secondary"
                  value="tablet"
                >
                  <TabletIcon aria-hidden="true" className="size-4" />
                </ToggleGroupItem>
                <ToggleGroupItem
                  aria-label="Mobile preview"
                  className="size-7 px-0 data-[state=on]:bg-secondary"
                  value="mobile"
                >
                  <SmartphoneIcon aria-hidden="true" className="size-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <Separator
                className="hidden h-4 md:block"
                orientation="vertical"
              />
              <Button
                aria-label="Reload preview"
                onClick={reload}
                size="icon-sm"
                variant="ghost"
              >
                <RefreshCwIcon aria-hidden="true" className="size-4" />
              </Button>
              <Button asChild size="icon-sm" variant="ghost">
                <a
                  aria-label="Open preview in a new tab"
                  href={previewUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <TabsContent className="m-0" value="preview">
          <div
            className="relative flex w-full justify-center overflow-auto"
            ref={containerRef}
          >
            <div
              className={cn(
                "relative max-w-full overflow-hidden rounded-lg border bg-background shadow-sm",
                "lg:resize-x"
              )}
              style={{
                height: item.meta.previewHeight,
                width: viewportWidths[viewport],
              }}
            >
              {(!loaded || failed) && (
                <div className="absolute inset-0 z-10 grid place-items-center bg-background">
                  {failed ? (
                    <div className="max-w-sm px-6 text-center">
                      <p className="font-medium">Preview did not load</p>
                      <p className="mt-1 text-muted-foreground text-sm">
                        Retry the preview or open it in a new tab.
                      </p>
                      <Button
                        className="mt-4"
                        onClick={reload}
                        variant="outline"
                      >
                        <RefreshCwIcon aria-hidden="true" className="size-4" />
                        Retry preview
                      </Button>
                    </div>
                  ) : (
                    <div
                      className="flex w-full flex-col gap-3 px-6"
                      role="status"
                    >
                      <span className="sr-only">Loading preview</span>
                      <Skeleton className="h-10 w-48" />
                      <Skeleton className="h-48 w-full" />
                      <div className="grid gap-3 sm:grid-cols-3">
                        <Skeleton className="h-24" />
                        <Skeleton className="h-24" />
                        <Skeleton className="h-24" />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {shouldLoad ? (
                // biome-ignore lint/a11y/noNoninteractiveElementInteractions: load reports the iframe resource state
                <iframe
                  className="size-full bg-background"
                  key={frameKey}
                  loading="lazy"
                  onLoad={() => {
                    setFailed(false);
                    setLoaded(true);
                  }}
                  src={previewUrl}
                  title={`${item.title} ${label.toLowerCase()} preview`}
                />
              ) : null}
            </div>
          </div>
        </TabsContent>

        <TabsContent
          className="m-0 overflow-hidden rounded-lg border"
          value="code"
        >
          <CompositionCodeViewer files={item.files} label={label} tree={tree} />
        </TabsContent>
      </Tabs>
    </article>
  );
};
