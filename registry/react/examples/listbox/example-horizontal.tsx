"use client";

import { createListCollection } from "@ark-ui/react";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemDescription,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Listbox
    className="w-full"
    collection={collection}
    defaultValue={[collection.items[0].title]}
    orientation="horizontal"
  >
    <ListboxContent className="justify-center gap-1.5">
      {collection.items.map((item) => (
        <ListboxItem
          className="data-[state=checked]:bg-accent w-36 shrink-0 gap-1.5 p-1.5"
          item={item}
          key={item.title}
          showIndicator={false}
        >
          <div className="flex w-full flex-col gap-1.5">
            <img
              alt=""
              className="aspect-square w-full rounded-lg object-cover"
              height={144}
              src={item.artwork}
              width={144}
            />
            <ListboxItemText className="truncate">{item.title}</ListboxItemText>
            <ListboxItemDescription className="truncate">
              {item.artist}
            </ListboxItemDescription>
          </div>
        </ListboxItem>
      ))}
    </ListboxContent>
  </Listbox>
);

const collection = createListCollection({
  items: [
    {
      artist: "O Rappa",
      artwork:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=rappa-mundi&waveColor=ea580c",
      title: "Rappa Mundi",
    },
    {
      artist: "Charlie Brown Jr.",
      artwork:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=acustico-mtv&waveColor=1a6b5c",
      title: "Acústico MTV",
    },
    {
      artist: "Michael Jackson",
      artwork:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=thriller&waveColor=7c3aed",
      title: "Thriller",
    },
  ],
  itemToString: (item) => item.title,
  itemToValue: (item) => item.title,
});

export default Example;
