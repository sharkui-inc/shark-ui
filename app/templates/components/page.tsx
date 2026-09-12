import type { Metadata } from "next";
import { PreviewGallery } from "@/components/examples/preview-tiles";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Components Preview",
};

const ComponentsTemplatePage = () => (
  <div className="bg-background p-4 sm:p-6">
    <PreviewGallery />
  </div>
);

export default ComponentsTemplatePage;
