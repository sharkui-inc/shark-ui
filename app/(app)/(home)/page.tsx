import { PreviewGallery } from "@/components/examples/preview-tiles";
import { Footer } from "@/components/layout/footer";
import { SITE_CONFIG } from "@/config/site";
import { source } from "@/lib/fumadocs";
import type { LLMPage } from "@/lib/llms";
import { createMetadata } from "@/lib/metadata";
import { HeroSection } from "./_components/hero";
import { HeroAtmosphere } from "./_components/hero-atmosphere";
import { HomeShowcase } from "./_components/home-showcase";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = createMetadata({
  description: SITE_CONFIG.description,
  url: "/",
});

const rawCount = source
  .getPages()
  .filter(
    (p: LLMPage) =>
      p.slugs[0] === "components" ||
      p.slugs[0] === "helpers" ||
      p.slugs[0] === "utilities"
  ).length;

const HomePage = () => {
  const componentsCount = rawCount - (rawCount % 10);

  return (
    <main className="relative w-full min-w-0 overflow-x-clip">
      <HeroAtmosphere />
      <div className="container flex flex-col gap-8 pt-12 pb-10 sm:gap-10 sm:pt-16 lg:pt-20">
        <HeroSection count={componentsCount} />
      </div>

      <section
        aria-label="Component examples"
        className="container pb-8 sm:pb-10"
      >
        <HomeShowcase>
          <PreviewGallery />
        </HomeShowcase>
      </section>

      <Footer />
    </main>
  );
};

export default HomePage;
