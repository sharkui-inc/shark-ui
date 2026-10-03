"use client";

import { createListCollection } from "@ark-ui/react";
import { Field } from "@/registry/react/components/field";
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
} from "@/registry/react/components/listbox";

const Example = () => (
  <Field className="w-full">
    <Listbox
      className="w-full"
      collection={collection}
      defaultValue={[collection.items[0].title]}
      orientation="horizontal"
    >
      <ListboxContent className="gap-3">
        {collection.items.map((item) => (
          <ListboxItem
            className="group/album w-44 shrink-0 flex-col items-stretch gap-0 rounded-2xl p-1.5 data-[state=checked]:bg-accent"
            item={item}
            key={item.title}
            showIndicator={false}
          >
            <div className="flex w-full min-w-0 flex-col gap-2.5">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
                <img
                  alt=""
                  className="size-full object-cover"
                  height={352}
                  src={item.artwork}
                  width={352}
                />
                <span className="absolute inset-s-2 bottom-2 inline-flex h-7 items-center rounded-full bg-background/96 px-2.5 font-medium text-foreground text-xs">
                  {item.year}
                </span>
                <ListboxItemIndicator className="inset-e-2 top-2 size-7 translate-y-0 rounded-full bg-background/96 opacity-0 group-data-[state=checked]/album:opacity-100 [&_svg]:size-3.5 [&_svg]:text-foreground" />
              </div>
              <div className="min-w-0 px-1 pb-1">
                <ListboxItemText className="block w-full truncate font-medium">
                  {item.title}
                </ListboxItemText>
                <p className="truncate text-muted-foreground text-sm">
                  {item.artist}
                </p>
              </div>
            </div>
          </ListboxItem>
        ))}
      </ListboxContent>
    </Listbox>
  </Field>
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
    {
      artist: "Michael Jackson",
      artwork:
        "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=thriller&waveColor=7c3aed",
      title: "Thriller",
      year: "1982",
    },
  ],
  itemToString: (item) => item.title,
  itemToValue: (item) => item.title,
});

export default Example;
