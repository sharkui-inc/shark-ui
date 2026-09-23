import { ArrowDownIcon, ArrowRightIcon, RocketIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { CompositionViewer } from "@/components/registry-compositions/composition-viewer";
import {
  getFileTree,
  getPublishedCompositions,
} from "@/lib/composition-catalog";
import { createMetadata } from "@/lib/metadata";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import { Skeleton } from "@/registry/react/components/skeleton";
import { SkipNavContent } from "@/registry/react/components/skip-nav";

export const revalidate = false;
export const dynamic = "force-static";

export const metadata: Metadata = createMetadata({
  title: "Templates",
  url: "/templates",
});

const TemplatesPage = async () => {
  const templates = await getPublishedCompositions("templates");

  return (
    <SkipNavContent>
      <main>
        <section className="overflow-hidden border-b">
          <div className="container px-0">
            <div className="flex min-h-[calc(100svh-var(--header-height)-5rem)] flex-col items-center justify-center border-x px-4 py-16 text-center sm:min-h-[42rem] sm:px-8 sm:py-20 lg:min-h-[46rem]">
              <h1
                aria-label="Start with a complete product, not a blank page."
                className="max-w-5xl text-balance font-heading font-semibold text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-8xl"
              >
                Start with a complete product,
                <span className="text-muted-foreground">
                  {" "}
                  not a blank page.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-balance text-base text-muted-foreground leading-relaxed sm:text-xl">
                Shark UI starters with live previews and copy-ready files.
              </p>

              <div className="mt-8 flex w-full max-w-sm flex-col justify-center gap-2 sm:w-auto sm:max-w-none sm:flex-row">
                <Button asChild size="xl">
                  <Link href="#ai-chat-01">
                    Explore AI Chat
                    <ArrowDownIcon aria-hidden />
                  </Link>
                </Button>
              </div>

              <Announcement className="mt-6 bg-background p-0 shadow-sm/4">
                <Link
                  className="inline-flex min-w-0 max-w-full items-center gap-2 rounded-2xl border border-transparent py-0.5 ps-0.5 pe-3 outline-hidden transition-colors hover:bg-input/8 focus-visible:border-ring/64 focus-visible:ring-2 focus-visible:ring-ring/24 motion-reduce:transition-none"
                  href="#ai-chat-01"
                >
                  <Badge pill size="sm" variant="secondary">
                    <RocketIcon aria-hidden />
                    New
                  </Badge>
                  <AnnouncementTitle>
                    AI Chat template is now available
                  </AnnouncementTitle>
                  <ArrowRightIcon aria-hidden />
                </Link>
              </Announcement>
            </div>
          </div>
        </section>

        <section className="bg-muted/24" id="templates-catalog">
          <div className="container border-x px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="flex flex-col gap-16">
              {templates.map((item) => (
                <React.Suspense
                  fallback={<Skeleton className="h-[820px] w-full" />}
                  key={item.name}
                >
                  <CompositionViewer
                    item={item}
                    kind="templates"
                    tree={getFileTree(item.files)}
                  />
                </React.Suspense>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SkipNavContent>
  );
};

export default TemplatesPage;
