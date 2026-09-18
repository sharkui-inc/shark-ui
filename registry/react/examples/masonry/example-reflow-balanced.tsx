import { createWavesAvatar } from "@/lib/dicebear";
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
  <ScrollArea
    className="h-[min(32rem,70vh)] w-full min-w-0 rounded-xl border"
    orientation="vertical"
    scrollFade
  >
    <Masonry
      className="columns-1 gap-x-4 gap-y-6 p-4 sm:columns-2"
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
);

const tiles = [
  {
    author: "Maya Chen",
    avatar: createWavesAvatar("Maya Chen", "purple"),
    body: "A brief signal from the field.",
    initials: "MC",
    title: "Morning note",
  },
  {
    author: "Noah Williams",
    avatar: createWavesAvatar("Noah Williams", "orange"),
    body: "Balanced reflow clears column assignments on every layout pass, so uneven static cards settle into more even columns when heights differ a lot.",
    initials: "NW",
    title: "Even columns matter",
  },
  {
    author: "Iris Okafor",
    avatar: createWavesAvatar("Iris Okafor", "blue"),
    body: "A short practice line.",
    initials: "IO",
    title: "Shared language",
  },
  {
    author: "Sofia Alvarez",
    avatar: createWavesAvatar("Sofia Alvarez", "rose"),
    body: "Use this mode for mostly static collections where packing density is more important than retaining each item's previous column after a resize or content update.",
    initials: "SA",
    title: "Static collections",
  },
  {
    author: "Jon Bell",
    avatar: createWavesAvatar("Jon Bell", "green-dark"),
    body: "Existing items may move when the layout recalculates.",
    initials: "JB",
    title: "Expect movement",
  },
];

export default Example;
