import { Masonry, MasonryItem } from "@/registry/react/components/masonry";

const Example = () => (
  <div className="w-full p-4 sm:p-6">
    <Masonry className="columns-1 gap-x-8 gap-y-2 p-4 sm:columns-2 lg:columns-3">
      {photos.map((photo) => (
        <MasonryItem key={photo.alt}>
          <figure className="bg-card overflow-hidden rounded-xl border shadow-xs/4">
            <img
              alt={photo.alt}
              className={`w-full object-cover ${photo.aspectRatio}`}
              height={800}
              src={photo.image}
              width={800}
            />
            <figcaption className="text-muted-foreground p-3 text-sm">
              {photo.label}
            </figcaption>
          </figure>
        </MasonryItem>
      ))}
    </Masonry>
  </div>
);

const photos = [
  {
    alt: "Tall coastal waves at dawn",
    aspectRatio: "aspect-9/16",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Coast+dawn&waveColor=7c3aed",
    label: "Coast dawn",
  },
  {
    alt: "Wide open water horizon",
    aspectRatio: "aspect-21/9",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Open+horizon&waveColor=2b6cb0",
    label: "Open horizon",
  },
  {
    alt: "Studio desk moodboard tile",
    aspectRatio: "aspect-4/5",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=Studio+desk&waveColor=ea580c",
    label: "Studio desk",
  },
  {
    alt: "Square evening bloom study",
    aspectRatio: "aspect-square",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=Evening+bloom&waveColor=e11d48",
    label: "Evening bloom",
  },
  {
    alt: "Portrait garden path light",
    aspectRatio: "aspect-2/3",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=Garden+path&waveColor=1a6b5c",
    label: "Garden path",
  },
  {
    alt: "Landscape golden hour wash",
    aspectRatio: "aspect-video",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=Golden+hour&waveColor=ca8a04",
    label: "Golden hour",
  },
  {
    alt: "Compact warm light sample",
    aspectRatio: "aspect-5/4",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=Warm+light&waveColor=ea580c",
    label: "Warm light",
  },
  {
    alt: "Tall blue hour panel",
    aspectRatio: "aspect-3/4",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Blue+hour&waveColor=2b6cb0",
    label: "Blue hour",
  },
  {
    alt: "Wide morning tide strip",
    aspectRatio: "aspect-16/10",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Morning+tide&waveColor=7c3aed",
    label: "Morning tide",
  },
];

export default Example;
