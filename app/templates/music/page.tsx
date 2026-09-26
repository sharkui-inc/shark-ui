import type { Metadata } from "next";
import { ScrollArea } from "@/registry/react/components/scroll-area";
import {
  SidebarInset,
  SidebarProvider,
} from "@/registry/react/components/sidebar";
import { MusicAlbums } from "./_components/music-albums";
import { MusicControls } from "./_components/music-controls";
import { MusicHeader } from "./_components/music-header";
import { MusicLibrary } from "./_components/music-library";
import { MusicRecommended } from "./_components/music-recommended";
import { MusicSidebar } from "./_components/music-sidebar";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  robots: { follow: false, index: false },
  title: "Music Preview",
};

const MusicTemplatePage = () => (
  <div className="absolute inset-0 overflow-hidden">
    <SidebarProvider className="h-full min-h-0">
      <MusicSidebar />
      <SidebarInset className="flex min-w-0 flex-col">
        <MusicHeader />
        <ScrollArea className="flex-1">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-3 sm:px-6 lg:px-8">
            <MusicAlbums />
            <MusicRecommended />
            <MusicLibrary />
          </div>
        </ScrollArea>
        <MusicControls />
      </SidebarInset>
    </SidebarProvider>
  </div>
);

export default MusicTemplatePage;
