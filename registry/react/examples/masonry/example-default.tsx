import { createWavesAvatar } from "@/lib/dicebear";
import { cn } from "@/lib/utils";
import { Masonry, MasonryItem } from "@/registry/react/components/masonry";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const MasonryDemo = () => (
  <ScrollArea
    className="h-[min(32rem,70vh)] w-full min-w-0 rounded-xl border"
    orientation="vertical"
    scrollFade
  >
    <Masonry className="columns-1 gap-x-4 gap-y-6 p-4 sm:columns-2">
      {photos.map((photo) => (
        <MasonryItem key={photo.alt}>
          <img
            alt={photo.alt}
            className={cn(
              "w-full rounded-xl border object-cover",
              photo.aspectRatio
            )}
            height={800}
            src={photo.image}
            width={800}
          />
        </MasonryItem>
      ))}
    </Masonry>
  </ScrollArea>
);

const photos = [
  {
    alt: "Purple waves illustration",
    aspectRatio: "aspect-[4/3]",
    image: createWavesAvatar("Morning tide", "purple"),
  },
  {
    alt: "Orange waves illustration",
    aspectRatio: "aspect-[3/4]",
    image: createWavesAvatar("Warm light", "orange"),
  },
  {
    alt: "Blue waves illustration",
    aspectRatio: "aspect-[16/10]",
    image: createWavesAvatar("Open water", "blue"),
  },
  {
    alt: "Rose waves illustration",
    aspectRatio: "aspect-square",
    image: createWavesAvatar("Evening bloom", "rose"),
  },
  {
    alt: "Green waves illustration",
    aspectRatio: "aspect-[5/3]",
    image: createWavesAvatar("Garden path", "green-dark"),
  },
  {
    alt: "Amber waves illustration",
    aspectRatio: "aspect-[2/3]",
    image: createWavesAvatar("Golden hour", "amber"),
  },
  {
    alt: "Blue waves illustration at dusk",
    aspectRatio: "aspect-[4/3]",
    image: createWavesAvatar("Blue hour", "blue"),
  },
];

export default MasonryDemo;
