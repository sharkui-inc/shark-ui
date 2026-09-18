import { createWavesAvatar } from "@/lib/dicebear";
import { Masonry, MasonryItem } from "@/registry/react/components/masonry";

const Example = () => (
  <Masonry className="columns-2 gap-x-8 gap-y-2 p-4">
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
    alt: "Blue waves illustration",
    aspectRatio: "aspect-[4/3]",
    image: createWavesAvatar("Clear sky", "blue"),
    label: "Clear sky",
  },
  {
    alt: "Purple waves illustration",
    aspectRatio: "aspect-[3/4]",
    image: createWavesAvatar("Night swim", "purple"),
    label: "Night swim",
  },
  {
    alt: "Green waves illustration",
    aspectRatio: "aspect-[16/10]",
    image: createWavesAvatar("Still garden", "green-dark"),
    label: "Still garden",
  },
  {
    alt: "Orange waves illustration",
    aspectRatio: "aspect-square",
    image: createWavesAvatar("Late sun", "orange"),
    label: "Late sun",
  },
];

export default Example;
