import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { PreviewIframe } from "@/components/preview-iframe";
import { createMetadata } from "@/lib/metadata";
import { SkipNavContent } from "@/registry/react/components/skip-nav";
import { AiComponentsFeatures } from "./_components/ai-components-features";
import { AiComponentsHero } from "./_components/ai-components-hero";

export const revalidate = false;
export const dynamic = "force-static";

export const generateMetadata = (): Metadata =>
  createMetadata({
    description:
      "Building blocks for chat threads and agent UIs. Reasoning, tool calls, approvals, and streaming. Copy the source into your project and customize it there.",
    title: "AI Components",
    url: "/ai",
  });

const AiPage = () => (
  <SkipNavContent asChild>
    <main className="relative w-full min-w-0 overflow-x-clip">
      <div className="container flex flex-col gap-12 pt-8 pb-10 sm:gap-14 sm:pt-10 lg:gap-16 lg:pt-16">
        <AiComponentsHero />
        {/*
          Fixed radii on purpose — theme --radius must not reshape this marketing
          frame. Inline borderRadius avoids Tailwind IntelliSense
          suggestCanonicalClasses (rounded-[…] → rounded-*).
        */}
        <div
          className="isolate overflow-hidden border bg-cover bg-center p-8 sm:p-12 lg:p-16"
          style={{
            backgroundImage: "url(/images/ai-preview-wallpaper.webp)",
            borderRadius: "1.5rem",
          }}
        >
          <div
            className={
              "border border-white/24 bg-linear-to-br from-white/48 via-white/24 to-white/8 p-1.5 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.48),inset_0_-1px_0_0_rgb(255_255_255/0.08),0_10px_28px_rgb(0_0_0/0.08)] ring-1 ring-white/24 ring-inset"
            }
            style={{ borderRadius: "1.125rem" }}
          >
            <div
              className="overflow-hidden"
              style={{ borderRadius: "0.75rem" }}
            >
              <PreviewIframe
                className="h-[min(74vh,56rem)] rounded-none border-0 shadow-none"
                height={896}
                src="/view/ai-components/ide"
                title="AI Components preview"
              />
            </div>
          </div>
        </div>
        <AiComponentsFeatures />
      </div>
      <Footer />
    </main>
  </SkipNavContent>
);

export default AiPage;
