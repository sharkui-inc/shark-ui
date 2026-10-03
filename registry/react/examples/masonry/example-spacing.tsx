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
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Clear+sky&waveColor=2b6cb0",
    label: "Clear sky",
  },
  {
    alt: "Purple waves illustration",
    aspectRatio: "aspect-[3/4]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Night+swim&waveColor=7c3aed",
    label: "Night swim",
  },
  {
    alt: "Green waves illustration",
    aspectRatio: "aspect-[16/10]",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=Still+garden&waveColor=1a6b5c",
    label: "Still garden",
  },
  {
    alt: "Orange waves illustration",
    aspectRatio: "aspect-square",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=Late+sun&waveColor=ea580c",
    label: "Late sun",
  },
];

export default Example;
