import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <div className="flex w-full max-w-xl flex-col gap-6">
    <ItemGroup className="grid grid-cols-3 gap-4">
      {models.map((model) => (
        <Item key={model.name} variant="outline">
          <ItemHeader>
            <img
              alt={model.name}
              className="aspect-square grayscale"
              height={128}
              src={model.image}
              width={128}
            />
          </ItemHeader>
          <ItemContent>
            <ItemTitle>{model.name}</ItemTitle>
            <ItemDescription>{model.description}</ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  </div>
);

const models = [
  {
    description: "Everyday tasks and UI generation.",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=v0-1.5-sm&waveColor=1a6b5c",
    name: "v0-1.5-sm",
  },
  {
    description: "Advanced thinking or reasoning.",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=v0-1.5-lg&waveColor=e11d48",
    name: "v0-1.5-lg",
  },
  {
    description: "Open Source model for everyone.",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=v0-2.0-mini&waveColor=ca8a04",
    name: "v0-2.0-mini",
  },
];

export default Example;
