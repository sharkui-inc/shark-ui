import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/react/components/card";
import { Masonry, MasonryItem } from "@/registry/react/components/masonry";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <div className="w-full p-4 sm:p-6">
    <ScrollArea
      className="h-[min(32rem,70vh)] min-w-0 rounded-xl border"
      orientation="vertical"
      scrollFade
    >
      <Masonry
        className="columns-1 gap-x-4 gap-y-6 p-4 sm:columns-2 lg:columns-3"
        reflow="balanced"
      >
        {tiles.map((tile) => (
          <MasonryItem key={tile.title}>
            <Card className="[--space:--spacing(4)]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarImage alt={tile.author} src={tile.avatar} />
                    <AvatarFallback>{tile.initials}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-base">{tile.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm leading-6">
                {tile.body}
              </CardContent>
            </Card>
          </MasonryItem>
        ))}
      </Masonry>
    </ScrollArea>
  </div>
);

const tiles = [
  {
    author: "Maya Chen",
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Maya+Chen&waveColor=7c3aed",
    body: "Shipped.",
    initials: "MC",
    title: "Morning note",
  },
  {
    author: "Noah Williams",
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=Noah+Williams&waveColor=ea580c",
    body: "Balanced reflow clears column assignments on every layout pass, so uneven static cards settle into more even columns when heights differ a lot. Use it for mostly static collections where packing density matters more than keeping each card in the same column after a resize.",
    initials: "NW",
    title: "Even columns matter",
  },
  {
    author: "Iris Okafor",
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Iris+Okafor&waveColor=2b6cb0",
    body: "A short practice line.",
    initials: "IO",
    title: "Shared language",
  },
  {
    author: "Sofia Alvarez",
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=Sofia+Alvarez&waveColor=e11d48",
    body: "The critique board for Onda Sessions needs denser packing when we drop in seven long write-ups and two one-liners. Balanced mode reshuffles so the tallest notes do not leave a sparse column.",
    initials: "SA",
    title: "Static collections",
  },
  {
    author: "Jon Bell",
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=Jon+Bell&waveColor=1a6b5c",
    body: "Existing items may move when the layout recalculates.",
    initials: "JB",
    title: "Expect movement",
  },
  {
    author: "Mara Kim",
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=Mara+Kim&waveColor=ca8a04",
    body: "Ok.",
    initials: "MK",
    title: "Quick ping",
  },
  {
    author: "Ravi Singh",
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Ravi+Singh&waveColor=2b6cb0",
    body: "We compared three packing passes on the moodboard. The shortest column always took the next note, which kept the board from drifting into a single tall stack on the start edge.",
    initials: "RS",
    title: "Packing notes",
  },
  {
    author: "Amina Cole",
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=Amina+Cole&waveColor=e11d48",
    body: "Hold the invitation copy until Friday.",
    initials: "AC",
    title: "Invite copy",
  },
  {
    author: "Leo Martin",
    avatar:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=Leo+Martin&waveColor=1a6b5c",
    body: "Focus kit landed. Next: empty states for teams with no rituals yet, plus a short path back to the welcome flow when someone joins mid-week.",
    initials: "LM",
    title: "Focus kit update",
  },
];

export default Example;
