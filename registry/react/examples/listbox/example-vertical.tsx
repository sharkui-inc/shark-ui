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
    className="w-full max-w-xs"
    collection={collection}
    defaultValue={[collection.items[0].title]}
    orientation="vertical"
  >
    <ListboxContent className="gap-1.5">
      {collection.items.map((item) => (
        <ListboxItem className="gap-1.5 p-1.5" item={item} key={item.title}>
          <img
            alt=""
            className="size-10 rounded-md object-cover"
            height={40}
            src={item.artwork}
            width={40}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <ListboxItemText>{item.title}</ListboxItemText>
            <ListboxItemDescription>
              {item.artist} · {item.year}
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
      year: "1996",
    },
    {
      artist: "Charlie Brown Jr.",
      artwork:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=acustico-mtv&waveColor=1a6b5c",
      title: "Acústico MTV",
      year: "2003",
    },
  ],
  itemToString: (item) => item.title,
  itemToValue: (item) => item.title,
});

export default Example;
