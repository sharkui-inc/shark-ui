import { cn } from "@/lib/utils";
import { Masonry, MasonryItem } from "@/registry/react/components/masonry";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const Example = () => (
  <ScrollArea
    className="h-[min(32rem,70vh)] min-w-0 rounded-xl border"
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
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Morning+tide&waveColor=7c3aed",
  },
  {
    alt: "Orange waves illustration",
    aspectRatio: "aspect-[3/4]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=Warm+light&waveColor=ea580c",
  },
  {
    alt: "Blue waves illustration",
    aspectRatio: "aspect-[16/10]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Open+water&waveColor=2b6cb0",
  },
  {
    alt: "Rose waves illustration",
    aspectRatio: "aspect-square",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=Evening+bloom&waveColor=e11d48",
  },
  {
    alt: "Green waves illustration",
    aspectRatio: "aspect-[5/3]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=Garden+path&waveColor=1a6b5c",
  },
  {
    alt: "Amber waves illustration",
    aspectRatio: "aspect-[2/3]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=Golden+hour&waveColor=ca8a04",
  },
  {
    alt: "Blue waves illustration at dusk",
    aspectRatio: "aspect-[4/3]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Blue+hour&waveColor=2b6cb0",
  },
];

export default Example;
