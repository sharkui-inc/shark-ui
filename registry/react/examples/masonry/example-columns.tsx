import { Masonry, MasonryItem } from "@/registry/react/components/masonry";

const Example = () => (
  <Masonry className="columns-2 gap-4 p-4 sm:columns-3">
    {photos.map((photo) => (
      <MasonryItem key={photo.alt}>
        <figure className="overflow-hidden rounded-xl border bg-card shadow-xs/4">
          <img
            alt={photo.alt}
            className={`w-full object-cover ${photo.aspectRatio}`}
            height={800}
            src={photo.image}
            width={800}
          />
          <figcaption className="p-3 text-muted-foreground text-sm">
            {photo.label}
          </figcaption>
        </figure>
      </MasonryItem>
    ))}
  </Masonry>
);

const photos = [
  {
    alt: "Purple waves illustration",
    aspectRatio: "aspect-[4/3]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Morning+tide&waveColor=7c3aed",
    label: "Morning tide",
  },
  {
    alt: "Orange waves illustration",
    aspectRatio: "aspect-[3/4]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=Warm+light&waveColor=ea580c",
    label: "Warm light",
  },
  {
    alt: "Blue waves illustration",
    aspectRatio: "aspect-[16/10]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Open+water&waveColor=2b6cb0",
    label: "Open water",
  },
  {
    alt: "Rose waves illustration",
    aspectRatio: "aspect-square",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=Evening+bloom&waveColor=e11d48",
    label: "Evening bloom",
  },
  {
    alt: "Green waves illustration",
    aspectRatio: "aspect-[5/3]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=Garden+path&waveColor=1a6b5c",
    label: "Garden path",
  },
  {
    alt: "Amber waves illustration",
    aspectRatio: "aspect-[2/3]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=Golden+hour&waveColor=ca8a04",
    label: "Golden hour",
  },
];

export default Example;
