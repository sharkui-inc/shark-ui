import { createWavesAvatar } from "@/lib/dicebear";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Badge } from "@/registry/react/components/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/registry/react/components/card";
import { Masonry, MasonryItem } from "@/registry/react/components/masonry";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const MasonryDemo = () => (
  <ScrollArea
    className="h-[min(32rem,70vh)] rounded-xl border"
    orientation="vertical"
    scrollFade
  >
    <Masonry className="columns-1 p-4 sm:columns-2 lg:columns-3">
      {stories.map((story) => (
        <MasonryItem key={story.title}>
          <Card className="[--space:--spacing(4)]">
            <CardMedia className={story.aspectRatio} variant="image">
              <img
                alt={story.imageAlt}
                height={600}
                src={story.image}
                width={800}
              />
            </CardMedia>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <Badge size="sm" variant="outline">
                  {story.category}
                </Badge>
                <span className="text-muted-foreground text-xs">
                  {story.readTime}
                </span>
              </div>
              <CardTitle>{story.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-6">
              {story.excerpt}
            </CardContent>
            <CardFooter className="bg-transparent py-4">
              <Avatar size="sm">
                <AvatarImage alt={story.author} src={story.avatar} />
                <AvatarFallback>{story.initials}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-medium text-sm">{story.author}</p>
                <p className="text-muted-foreground text-xs">{story.role}</p>
              </div>
            </CardFooter>
          </Card>
        </MasonryItem>
      ))}
    </Masonry>
  </ScrollArea>
);

const stories = [
  {
    aspectRatio: "aspect-[4/3]",
    author: "Maya Chen",
    avatar: createWavesAvatar("Maya Chen", "purple"),
    category: "Field notes",
    excerpt:
      "A small collection of rituals that help a distributed team turn scattered observations into useful product decisions.",
    image: createWavesAvatar("Field notes", "purple"),
    imageAlt: "Purple waves illustration for Field notes",
    initials: "MC",
    readTime: "6 min read",
    role: "Design researcher",
    title: "What we noticed when the room got quiet",
  },
  {
    aspectRatio: "aspect-[3/4]",
    author: "Noah Williams",
    avatar: createWavesAvatar("Noah Williams", "orange"),
    category: "People",
    excerpt:
      "The teams we admire make space for unfinished thoughts. Here is how Onda hosts critique without making it feel like a performance.",
    image: createWavesAvatar("People and critique", "orange"),
    imageAlt: "Orange waves illustration for People",
    initials: "NW",
    readTime: "4 min read",
    role: "Product designer",
    title: "Make room for the unfinished idea",
  },
  {
    aspectRatio: "aspect-[16/10]",
    author: "Iris Okafor",
    avatar: createWavesAvatar("Iris Okafor", "blue"),
    category: "Practice",
    excerpt:
      "A gentle approach to building a visual library that gives product teams more room to focus on the work itself.",
    image: createWavesAvatar("Visual library", "blue"),
    imageAlt: "Blue waves illustration for Practice",
    initials: "IO",
    readTime: "8 min read",
    role: "Design systems lead",
    title: "The library is a conversation, not a shelf",
  },
  {
    aspectRatio: "aspect-square",
    author: "Sofia Alvarez",
    avatar: createWavesAvatar("Sofia Alvarez", "rose"),
    category: "Community",
    excerpt:
      "Notes from an evening of shared prototypes, generous questions, and the kinds of introductions that last beyond the event.",
    image: createWavesAvatar("Community session", "rose"),
    imageAlt: "Rose waves illustration for Community",
    initials: "SA",
    readTime: "5 min read",
    role: "Community editor",
    title: "A table for people who make things",
  },
  {
    aspectRatio: "aspect-[5/3]",
    author: "Jon Bell",
    avatar: createWavesAvatar("Jon Bell", "green-dark"),
    category: "Tools",
    excerpt:
      "The most useful tools disappear into a working day. We look at the small interactions that make that possible.",
    image: createWavesAvatar("Quiet tools", "green-dark"),
    imageAlt: "Green waves illustration for Tools",
    initials: "JB",
    readTime: "3 min read",
    role: "Product writer",
    title: "A quieter kind of productivity",
  },
];

export default MasonryDemo;
