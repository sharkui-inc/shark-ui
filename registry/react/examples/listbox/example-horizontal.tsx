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
      className="mx-auto w-full max-w-5xl gap-5 px-4 sm:px-6 lg:px-8"
      collection={collection}
      defaultValue={[collection.items[0].title]}
      orientation="horizontal"
    >
      <ListboxContent>
        <div className="flex min-w-max gap-3 pb-2 sm:gap-4">
          {collection.items.map((item) => (
            <ListboxItem
              className="group/album relative w-40 shrink-0 flex-col gap-3 rounded-2xl border border-transparent bg-transparent p-0 text-start transition-[border-color,box-shadow,transform] duration-150 ease-out sm:w-48"
              item={item}
              key={item.title}
              showIndicator={false}
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted shadow-xs/4">
                <img
                  alt=""
                  className="size-full object-cover transition-transform duration-150 ease-out motion-reduce:transition-none"
                  height={384}
                  src={item.artwork}
                  width={384}
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-foreground/64 to-transparent" />
                <span className="absolute inset-s-3 bottom-3 inline-flex h-7 items-center rounded-full bg-background/96 px-2.5 font-medium text-foreground text-xs shadow-xs/4">
                  {item.year}
                </span>
              </div>
              <div className="min-w-0 px-3 pb-3">
                <ListboxItemText className="block truncate font-medium text-base">
                  {item.title}
                </ListboxItemText>
                <p className="truncate text-muted-foreground text-sm">
                  {item.artist}
                </p>
              </div>
              <ListboxItemIndicator className="absolute inset-e-3 top-3 flex size-7 shrink-0 items-center justify-center rounded-full border border-transparent bg-background/96 opacity-0 shadow-xs/4 transition-opacity duration-150 ease-out group-data-[state=checked]/album:opacity-100 motion-reduce:transition-none [&_svg]:size-3.5 [&_svg]:text-foreground" />
            </ListboxItem>
          ))}
        </div>
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
