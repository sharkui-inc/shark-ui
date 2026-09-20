import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-4">
    {images.map((image) => (
      <Item key={image.src} variant="outline">
        <ItemMedia variant="image">
          <img
            alt={image.alt}
            className="aspect-square w-full object-cover grayscale"
            height={80}
            src={image.src}
            width={80}
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{image.alt}</ItemTitle>
          <ItemDescription>{image.description}</ItemDescription>
        </ItemContent>
      </Item>
    ))}
  </div>
);

const images = [
  {
    alt: "Midnight City Lights",
    description: "Electric Nights · Neon Dreams · 3:45",
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Midnight+City+Lights&waveColor=2b6cb0",
  },
  {
    alt: "Coffee Shop Conversations",
    description: "Urban Stories · The Morning Brew · 4:05",
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=Coffee+Shop+Conversations&waveColor=ea580c",
  },
  {
    alt: "Digital Rain",
    description: "Binary Beats · Cyber Symphony · 3:30",
    src: "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Digital+Rain&waveColor=7c3aed",
  },
];

export default Example;
