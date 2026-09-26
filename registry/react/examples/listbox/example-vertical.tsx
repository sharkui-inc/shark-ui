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
      className="mx-auto w-full max-w-lg gap-5 px-4 sm:px-6"
      collection={collection}
      defaultValue={[collection.items[0].title]}
      orientation="vertical"
    >
      <ListboxContent>
        <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
          {collection.items.map((item) => (
            <ListboxItem
              className="group/album relative flex min-w-0 flex-1 flex-row items-center gap-3 rounded-2xl border border-transparent bg-transparent p-1.5 pe-3 text-start transition-[border-color,box-shadow,transform] duration-150 ease-out"
              item={item}
              key={item.title}
              showIndicator={false}
            >
              <div className="relative size-14 shrink-0 overflow-hidden rounded-xl bg-muted shadow-xs/4 sm:size-16">
                <img
                  alt=""
                  className="size-full object-cover transition-transform duration-150 ease-out motion-reduce:transition-none"
                  height={128}
                  src={item.artwork}
                  width={128}
                />
              </div>
              <div className="min-w-0 flex-1 py-0.5">
                <ListboxItemText className="block truncate font-medium text-sm">
                  {item.title}
                </ListboxItemText>
                <p className="truncate text-muted-foreground text-xs">
                  {item.artist}
                  <span aria-hidden className="text-muted-foreground/64">
                    {" "}
                    ·{" "}
                  </span>
                  <span dir="ltr">{item.year}</span>
                </p>
              </div>
              <ListboxItemIndicator className="ms-auto flex size-7 shrink-0 items-center justify-center rounded-full border border-transparent bg-muted opacity-0 shadow-xs/4 transition-opacity duration-150 ease-out group-data-[state=checked]/album:opacity-100 motion-reduce:transition-none [&_svg]:size-3.5 [&_svg]:text-foreground" />
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
  ],
  itemToString: (item) => item.title,
  itemToValue: (item) => item.title,
});

export default Example;
