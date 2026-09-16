"use client";

import React from "react";
import type { ComponentPreviewItem } from "@/lib/component-previews";
import { cn } from "@/lib/utils";
import { Spinner } from "@/registry/react/components/spinner";
import { COMPONENTS_SLUG, getThemeTemplate } from "../_lib/theme-templates";
import { ExamplePreview } from "./example-preview";

interface TemplatePreviewHostProps {
  activeSlug: string | null;
  className?: string;
  selectedComponent: ComponentPreviewItem | null;
}

interface PreviewFrame {
  id: string;
  label: string;
  src: string;
}

const getPreviewFrame = (
  slug: string,
  selectedComponent: ComponentPreviewItem | null
): PreviewFrame | null => {
  if (slug === "preview") {
    return selectedComponent
      ? {
          id: `preview:${selectedComponent.slug}`,
          label: selectedComponent.title,
          src: `/view/examples/${selectedComponent.slug}`,
        }
      : null;
  }

  if (slug === COMPONENTS_SLUG) {
    return {
      id: slug,
      label: "Components",
      src: "/templates/components",
    };
  }

  const template = getThemeTemplate(slug);

  if (!template) {
    return null;
  }

  return {
    id: slug,
    label: template.label,
    src: `/templates/${slug}`,
  };
};

export const TemplatePreviewHost = (props: TemplatePreviewHostProps) => {
  const { activeSlug, className, selectedComponent } = props;
  const [visitedFrames, setVisitedFrames] = React.useState<PreviewFrame[]>([]);
  const [loadedFrameIds, setLoadedFrameIds] = React.useState(
    () => new Set<string>()
  );
  const activeFrame = React.useMemo(
    () => (activeSlug ? getPreviewFrame(activeSlug, selectedComponent) : null),
    [activeSlug, selectedComponent]
  );

  React.useEffect(() => {
    if (!activeFrame) {
      return;
    }

    setVisitedFrames((current) =>
      current.some((frame) => frame.id === activeFrame.id)
        ? current
        : [...current, activeFrame]
    );
  }, [activeFrame]);

  const isHostActive = activeFrame !== null;
  const isLoading = activeFrame !== null && !loadedFrameIds.has(activeFrame.id);

  if (visitedFrames.length === 0) {
    return null;
  }

  return (
    <ExamplePreview
      aria-hidden={!isHostActive}
      className={cn(
        !isHostActive && "pointer-events-none invisible absolute inset-0",
        className
      )}
      inert={!isHostActive}
    >
      {isLoading ? <PreviewLoading /> : null}
      {visitedFrames.map((frame) => {
        const isFrameActive = frame.id === activeFrame?.id;
        const loaded = loadedFrameIds.has(frame.id);
        const canInteract = isFrameActive && loaded;

        return (
          // biome-ignore lint/a11y/noNoninteractiveElementInteractions: load reports the iframe resource state
          <iframe
            className={cn(
              "absolute inset-0 size-full bg-background",
              canInteract ? null : "pointer-events-none",
              isFrameActive && loaded ? null : "invisible"
            )}
            inert={!canInteract}
            key={frame.id}
            onLoad={() => {
              setLoadedFrameIds((current) => {
                if (current.has(frame.id)) {
                  return current;
                }

                const next = new Set(current);
                next.add(frame.id);
                return next;
              });
            }}
            src={frame.src}
            title={`${frame.label} preview`}
          />
        );
      })}
    </ExamplePreview>
  );
};

const PreviewLoading = () => (
  <div className="absolute inset-0 z-10 grid place-items-center bg-background">
    <Spinner className="size-8" />
  </div>
);
