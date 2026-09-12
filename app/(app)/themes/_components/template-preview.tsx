"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "@/registry/react/components/spinner";
import { COMPONENTS_SLUG, getThemeTemplate } from "../_lib/theme-templates";
import { ExamplePreview } from "./example-preview";

interface TemplatePreviewHostProps {
  activeSlug: string | null;
  className?: string;
}

const getPreviewFrame = (slug: string) => {
  if (slug === COMPONENTS_SLUG) {
    return {
      label: "Components",
      src: "/templates/components",
    };
  }

  const template = getThemeTemplate(slug);

  if (!template) {
    return null;
  }

  return {
    label: template.label,
    src: `/templates/${slug}`,
  };
};

export const TemplatePreviewHost = (props: TemplatePreviewHostProps) => {
  const { activeSlug, className } = props;
  const [visitedSlugs, setVisitedSlugs] = useState<string[]>([]);
  const [loadedSlugs, setLoadedSlugs] = useState(() => new Set<string>());

  let slugs = visitedSlugs;

  if (activeSlug && !visitedSlugs.includes(activeSlug)) {
    slugs = [...visitedSlugs, activeSlug];
    setVisitedSlugs(slugs);
  }

  const isHostActive = activeSlug !== null;
  const isLoading = activeSlug !== null && !loadedSlugs.has(activeSlug);

  if (slugs.length === 0) {
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
      {slugs.map((slug) => {
        const frame = getPreviewFrame(slug);

        if (!frame) {
          return null;
        }

        const isSlugActive = slug === activeSlug;
        const loaded = loadedSlugs.has(slug);
        const canInteract = isSlugActive && loaded;

        return (
          // biome-ignore lint/a11y/noNoninteractiveElementInteractions: load reports the iframe resource state
          <iframe
            className={cn(
              "absolute inset-0 size-full bg-background",
              canInteract ? null : "pointer-events-none",
              isSlugActive && loaded ? null : "invisible"
            )}
            inert={!canInteract}
            key={slug}
            onLoad={() => {
              setLoadedSlugs((current) => {
                if (current.has(slug)) {
                  return current;
                }

                const next = new Set(current);
                next.add(slug);
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
