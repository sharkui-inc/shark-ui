"use client";

import { MoreHorizontalIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from "@/registry/react/components/menu";
import { TRACKS } from "../_data/music";

export const MusicRecommended = () => {
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
    <section aria-labelledby="recommended-tracks-heading">
      <h2
        className="font-heading font-semibold text-xl tracking-[-0.02em]"
        id="recommended-tracks-heading"
      >
        Recommended new tracks
      </h2>
      <div className="mt-5 grid gap-x-10 gap-y-2 lg:grid-cols-3">
        {TRACKS.map((track) => {
          const isFavorite = favoriteTitles.includes(track.title);

          return (
            <Item className="hover:bg-muted" key={track.title}>
              <ItemMedia variant="image">
                <img alt="" height={56} src={track.image} width={56} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{track.title}</ItemTitle>
                <ItemDescription>{track.artist}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Menu>
                  <MenuTrigger asChild>
                    <Button
                      aria-label={`More options for ${track.title}`}
                      size="icon-sm"
                      variant="ghost"
                    >
                      <MoreHorizontalIcon aria-hidden="true" />
                    </Button>
                  </MenuTrigger>
                  <MenuContent>
                    <MenuItem value={`${track.title}-play`}>Play now</MenuItem>
                    <MenuItem
                      onClick={() => toggleFavorite(track.title)}
                      value={`${track.title}-favorite`}
                    >
                      {isFavorite
                        ? "Remove from favorites"
                        : "Add to favorites"}
                    </MenuItem>
                  </MenuContent>
                </Menu>
              </ItemActions>
            </Item>
          );
        })}
      </div>
    </section>
  );
};
