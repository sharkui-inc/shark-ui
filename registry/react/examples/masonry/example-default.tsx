import { cn } from "@/lib/utils";
import { Masonry, MasonryItem } from "@/registry/react/components/masonry";
import { ScrollArea } from "@/registry/react/components/scroll-area";

const MasonryDemo = () => (
  <div className="w-full p-4 sm:p-6">
    <ScrollArea
      className="h-[min(32rem,70vh)] min-w-0 rounded-xl border"
      orientation="vertical"
      scrollFade
    >
      <Masonry className="columns-1 gap-x-4 gap-y-6 p-4 sm:columns-2 lg:columns-3">
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
  </div>
);

const photos = [
  {
    alt: "Tall coastal waves at dawn",
    aspectRatio: "aspect-[9/16]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Coast+dawn&waveColor=7c3aed",
  },
  {
    alt: "Wide open water horizon",
    aspectRatio: "aspect-[21/9]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Open+horizon&waveColor=2b6cb0",
  },
  {
    alt: "Studio desk moodboard tile",
    aspectRatio: "aspect-[4/5]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=Studio+desk&waveColor=ea580c",
  },
  {
    alt: "Square evening bloom study",
    aspectRatio: "aspect-square",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=Evening+bloom&waveColor=e11d48",
  },
  {
    alt: "Portrait garden path light",
    aspectRatio: "aspect-[2/3]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=Garden+path&waveColor=1a6b5c",
  },
  {
    alt: "Landscape golden hour wash",
    aspectRatio: "aspect-[16/9]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=Golden+hour&waveColor=ca8a04",
  },
  {
    alt: "Compact warm light sample",
    aspectRatio: "aspect-[5/4]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=Warm+light&waveColor=ea580c",
  },
  {
    alt: "Tall blue hour panel",
    aspectRatio: "aspect-[3/4]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Blue+hour&waveColor=2b6cb0",
  },
  {
    alt: "Wide morning tide strip",
    aspectRatio: "aspect-[16/10]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Morning+tide&waveColor=7c3aed",
  },
];

export default MasonryDemo;
