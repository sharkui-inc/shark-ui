import { createWavesAvatar } from "@/lib/dicebear";
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
    image: createWavesAvatar("Morning tide", "purple"),
    label: "Morning tide",
  },
  {
    alt: "Orange waves illustration",
    aspectRatio: "aspect-[3/4]",
    image: createWavesAvatar("Warm light", "orange"),
    label: "Warm light",
  },
  {
    alt: "Blue waves illustration",
    aspectRatio: "aspect-[16/10]",
    image: createWavesAvatar("Open water", "blue"),
    label: "Open water",
  },
  {
    alt: "Rose waves illustration",
    aspectRatio: "aspect-square",
    image: createWavesAvatar("Evening bloom", "rose"),
    label: "Evening bloom",
  },
  {
    alt: "Green waves illustration",
    aspectRatio: "aspect-[5/3]",
    image: createWavesAvatar("Garden path", "green-dark"),
    label: "Garden path",
  },
  {
    alt: "Amber waves illustration",
    aspectRatio: "aspect-[2/3]",
    image: createWavesAvatar("Golden hour", "amber"),
    label: "Golden hour",
  },
];

export default Example;
