"use client";

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/react/components/tabs";
import { TRACKS } from "../_data/music";
import { MusicLibraryPlaylists } from "./music-library-playlists";
import { MusicLibraryPodcasts } from "./music-library-podcasts";
import { MusicLibrarySongs } from "./music-library-songs";

export const MusicLibrary = () => {
  const [favoriteTitles, setFavoriteTitles] = useState<string[]>([
    TRACKS[0].title,
  ]);

  const toggleFavorite = (title: string) => {
    setFavoriteTitles((titles) =>
      titles.includes(title)
        ? titles.filter((item) => item !== title)
        : [...titles, title]
    );
  };

  return (
    <section aria-labelledby="library-heading">
      <Tabs defaultValue="songs">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2
            className="font-heading font-semibold text-2xl tracking-[-0.02em]"
            id="library-heading"
          >
            Your library, in focus
          </h2>
          <TabsList>
            <TabsTrigger value="songs">Songs</TabsTrigger>
            <TabsTrigger value="playlists">Playlists</TabsTrigger>
            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent className="mt-5" value="songs">
          <MusicLibrarySongs
            favoriteTitles={favoriteTitles}
            onToggleFavorite={toggleFavorite}
          />
        </TabsContent>
        <TabsContent className="mt-5" value="playlists">
          <MusicLibraryPlaylists />
        </TabsContent>
        <TabsContent className="mt-5" value="podcasts">
          <MusicLibraryPodcasts />
        </TabsContent>
      </Tabs>
    </section>
  );
};
