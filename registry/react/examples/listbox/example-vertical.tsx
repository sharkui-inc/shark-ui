"use client";

import { createListCollection } from "@ark-ui/react";
import { createWavesAvatar } from "@/lib/dicebear";
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
      className="mx-auto w-full max-w-xs gap-5 px-4 sm:px-6"
      collection={collection}
      defaultValue={[collection.items[0].title]}
      orientation="vertical"
    >
      <ListboxContent>
        <div className="flex flex-col gap-3 sm:gap-4">
          {collection.items.map((item) => (
            <ListboxItem
              className="group/album relative w-full flex-col gap-3 rounded-2xl border border-transparent bg-transparent p-0 text-start transition-[border-color,box-shadow,transform] duration-150 ease-out"
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
      artwork: createWavesAvatar("rappa-mundi", "orange"),
      title: "Rappa Mundi",
      year: "1996",
    },
    {
      artist: "Charlie Brown Jr.",
      artwork: createWavesAvatar("acustico-mtv", "green-dark"),
      title: "Acústico MTV",
      year: "2003",
    },
    {
      artist: "Michael Jackson",
      artwork: createWavesAvatar("thriller", "purple"),
      title: "Thriller",
      year: "1982",
    },
  ],
  itemToString: (item) => item.title,
  itemToValue: (item) => item.title,
});

export default Example;
