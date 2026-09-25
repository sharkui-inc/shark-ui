import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

/** Same Dicebear waves covers as `app/templates/music/_data/music.ts`. */
export const DEMO_MUSIC_ART = [
  "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=Mira+Vale&waveColor=1a6b5c",
  "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Northbound&waveColor=2b6cb0",
  "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Juniper+Club&waveColor=7c3aed",
  "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=Morrow&waveColor=ea580c",
  "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=Kite+Theory&waveColor=e11d48",
  "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=Lumen&waveColor=ca8a04",
  "https://api.dicebear.com/10.x/waves/svg?backgroundColor=ecfdf5&scale=1.2&seed=Relay&waveColor=047857",
  "https://api.dicebear.com/10.x/waves/svg?backgroundColor=ecfeff&scale=1.2&seed=Coast+FM&waveColor=0e7490",
] as const;

const USER_AVATAR =
  "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Maya+Chen&waveColor=2b6cb0";

export interface DemoAppContentLabels {
  avatarSrc: string;
  greeting: string;
  jumpBackIn: string;
  name: string;
  playlists: readonly {
    image: string;
    title: string;
  }[];
  recentlyPlayed: string;
  tracks: readonly {
    artist: string;
    image: string;
    title: string;
  }[];
}

const defaultLabels: DemoAppContentLabels = {
  avatarSrc: USER_AVATAR,
  greeting: "Home",
  jumpBackIn: "Jump back in",
  name: "Maya Chen",
  playlists: [
    { image: DEMO_MUSIC_ART[4], title: "Reframed" },
    { image: DEMO_MUSIC_ART[5], title: "Radar" },
    { image: DEMO_MUSIC_ART[1], title: "Deep Current" },
    { image: DEMO_MUSIC_ART[2], title: "Soft Circuits" },
    { image: DEMO_MUSIC_ART[0], title: "Afterglow" },
    { image: DEMO_MUSIC_ART[3], title: "Safe Harbor" },
    { image: DEMO_MUSIC_ART[6], title: "Night Bus" },
    { image: DEMO_MUSIC_ART[7], title: "Coast FM" },
  ],
  recentlyPlayed: "Recently played",
  tracks: [
    {
      artist: "Mira Vale",
      image: DEMO_MUSIC_ART[0],
      title: "Afterglow",
    },
    {
      artist: "Northbound",
      image: DEMO_MUSIC_ART[1],
      title: "Night Drive",
    },
    {
      artist: "Juniper Club",
      image: DEMO_MUSIC_ART[2],
      title: "Velvet Static",
    },
    {
      artist: "Morrow",
      image: DEMO_MUSIC_ART[3],
      title: "Safe Harbor",
    },
    {
      artist: "Kite Theory",
      image: DEMO_MUSIC_ART[4],
      title: "Paper Planets",
    },
    {
      artist: "Lumen",
      image: DEMO_MUSIC_ART[5],
      title: "Bloom in Reverse",
    },
    {
      artist: "Relay",
      image: DEMO_MUSIC_ART[6],
      title: "Last Stop",
    },
    {
      artist: "Coast FM",
      image: DEMO_MUSIC_ART[7],
      title: "Salt Air",
    },
    {
      artist: "Mira Vale",
      image: DEMO_MUSIC_ART[0],
      title: "Signal Bloom",
    },
    {
      artist: "Northbound",
      image: DEMO_MUSIC_ART[1],
      title: "New Frequency",
    },
  ],
};

interface DemoAppContentProps {
  className?: string;
  labels?: DemoAppContentLabels;
}

export const DemoAppContent = (props: DemoAppContentProps) => {
  const { className, labels = defaultLabels } = props;

  return (
    <div
      className={cn(
        "relative min-h-full bg-background text-foreground",
        // Recess the fake app so Bottom Navigation reads first.
        "opacity-72",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none sticky top-0 z-10 -mb-[100px] h-[100px] bg-linear-to-t from-transparent via-background/64 to-background"
      />
      <header className="relative flex items-center justify-between gap-3 px-4 pt-12 pb-3">
        <div className="min-w-0">
          <p className="font-heading font-semibold text-base leading-tight">
            {labels.greeting}
          </p>
          <p className="truncate text-muted-foreground text-xs">
            {labels.name}
          </p>
        </div>
        <Avatar size="sm">
          <AvatarImage alt={labels.name} src={labels.avatarSrc} />
          <AvatarFallback>
            {labels.name
              .split(" ")
              .map((part) => part.charAt(0))
              .join("")
              .slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      </header>

      <section className="pb-4">
        <p className="mb-2 px-4 text-muted-foreground text-xs">
          {labels.jumpBackIn}
        </p>
        <div className="scrollbar-none flex gap-2.5 overflow-x-auto px-4">
          {labels.playlists.map((playlist) => (
            <div
              className="flex w-14 shrink-0 flex-col gap-1.5"
              key={playlist.title}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten">
                <img
                  alt=""
                  className="size-full object-cover"
                  height={56}
                  src={playlist.image}
                  width={56}
                />
              </div>
              <span className="truncate text-center text-xs leading-snug">
                {playlist.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-1 pb-2">
        <p className="mb-0.5 px-3 text-muted-foreground text-xs">
          {labels.recentlyPlayed}
        </p>
        <ItemGroup className="gap-0">
          {labels.tracks.map((track) => (
            <Item
              className="px-3 py-2 hover:bg-transparent"
              key={track.title}
              variant="default"
            >
              <ItemMedia variant="image">
                <img alt="" height={40} src={track.image} width={40} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="w-full min-w-0 font-normal">
                  <span className="truncate">{track.title}</span>
                </ItemTitle>
                <ItemDescription className="line-clamp-1 text-xs">
                  {track.artist}
                </ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      </section>
    </div>
  );
};
