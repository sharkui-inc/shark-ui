import type { Metadata } from "next";
import { PreviewGallery } from "@/components/examples/preview-tiles";
import { ScrollArea } from "@/registry/react/components/scroll-area";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Components Preview",
};

const ComponentsTemplatePage = () => (
  <div className="absolute inset-0 overflow-hidden">
    <ScrollArea className="bg-background">
      <div className="p-4 sm:p-6">
        <PreviewGallery />
      </div>
    </ScrollArea>
  </div>
);

export default ComponentsTemplatePage;
