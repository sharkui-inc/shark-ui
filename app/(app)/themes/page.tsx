import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = createMetadata({
  description: "Hand-picked color themes for Shark UI.",
  title: "Themes",
  url: "/themes",
});

const ThemesPage = () => null;

export default ThemesPage;
