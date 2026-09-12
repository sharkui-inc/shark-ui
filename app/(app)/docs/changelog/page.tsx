import { RssIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { DocsTableOfContents } from "@/components/layout/docs-toc";
import { type ChangelogPageData, getChangelogPages } from "@/lib/changelog";
import { createMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import { SkipNavContent } from "@/registry/react/components/skip-nav";

export const revalidate = false;
export const dynamic = "force-static";

export const generateMetadata = (): Metadata => {
  const title = "Changelog";
  const description = "Latest updates and announcements.";

  return createMetadata({
    description,
    title,
    url: "/docs/changelog",
  });
};

const formatReleaseDate = (date: Date) =>
  new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(date);

const ChangelogPage = () => {
  const pages = getChangelogPages();
  const latestPages = pages.slice(0, 5);
  const olderPages = pages.slice(5);

  return (
    <div className="size-full">
      <div className="flex items-stretch xl:w-full" data-slot="docs">
        <div className="relative flex w-full min-w-0 flex-1 flex-col lg:me-4 lg:mt-8">
          <div className="relative mb-8 flex w-full flex-col border bg-white text-card-foreground shadow-lg/5 max-lg:border-none lg:rounded-2xl dark:bg-card">
            <div className="flex-1 px-4 py-6 sm:px-6 lg:p-8">
              <div
                className={cn("mx-auto w-full", {
                  "max-w-3xl": pages.length > 0,
                })}
              >
                <div className="flex min-w-0 flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <h1
                        className="scroll-m-20 font-heading font-semibold text-3xl"
                        id="page-title"
                      >
                        Changelog
                      </h1>

                      <Button asChild size="sm" variant="outline">
                        <Link
                          href="/rss.xml"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          RSS
                          <RssIcon aria-hidden />
                        </Link>
                      </Button>
                    </div>

                    <p className="text-[1.05rem] text-muted-foreground sm:text-base md:max-w-[80%]">
                      Latest updates and announcements.
                    </p>
                  </div>

                  <SkipNavContent className="w-full flex-1">
                    {latestPages.map((page) => {
                      const data = page.data as ChangelogPageData;
                      const date =
                        page.date && !Number.isNaN(page.date.getTime())
                          ? page.date
                          : null;

                      return (
                        <article
                          className="mb-12 border-b pb-12"
                          key={page.url}
                        >
                          <div className="flex flex-col gap-2">
                            <h2 className="font-heading font-semibold text-xl tracking-tight">
                              <Link className="hover:underline" href={page.url}>
                                {data.title}
                              </Link>
                            </h2>
                            {date ? (
                              <time
                                className="text-muted-foreground text-sm"
                                dateTime={date.toISOString().slice(0, 10)}
                              >
                                {formatReleaseDate(date)}
                              </time>
                            ) : null}
                            {data.description ? (
                              <p className="max-w-2xl text-muted-foreground">
                                {data.description}
                              </p>
                            ) : null}
                          </div>
                        </article>
                      );
                    })}
                    {olderPages.length > 0 && (
                      <div className="scroll-mt-24">
                        <h2 className="mb-6 font-heading font-semibold text-xl tracking-tight">
                          More Updates
                        </h2>
                        <ul className="flex flex-col gap-4">
                          {olderPages.map((page) => {
                            const data = page.data as ChangelogPageData;

                            return (
                              <li
                                className="flex items-center gap-3"
                                key={page.url}
                              >
                                <Link
                                  className="font-medium hover:underline"
                                  href={page.url}
                                >
                                  {data.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </SkipNavContent>
                </div>
              </div>
            </div>
          </div>
        </div>

        {(latestPages.length > 0 || olderPages.length > 0) && (
          <div className="sticky top-(--header-height) z-30 ms-auto hidden h-[calc(100svh-var(--header-height))] w-64 flex-col overflow-hidden xl:flex">
            <ScrollArea
              className="[--fade-size:3rem] **:data-[slot=scroll-area-scrollbar]:hidden"
              scrollFade
            >
              <div className="flex min-h-0 flex-col gap-2 overflow-auto py-2">
                <div className="h-(--top-spacing) shrink-0" />
                {latestPages.length > 0 && (
                  <DocsTableOfContents
                    data={latestPages.map((page) => ({
                      depth: 1,
                      title: page.data.title,
                      url: page.url,
                    }))}
                  />
                )}
                {olderPages.length > 0 && (
                  <DocsTableOfContents
                    data={olderPages.map((page) => ({
                      depth: 1,
                      title: page.data.title,
                      url: page.url,
                    }))}
                  />
                )}
              </div>
            </ScrollArea>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangelogPage;
