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
      className="mx-auto w-full max-w-md"
      collection={collection}
      defaultValue={[collection.items[0].title]}
      orientation="vertical"
    >
      <ListboxContent className="gap-1">
        {collection.items.map((item) => (
          <ListboxItem
            className="group/album rounded-xl data-[state=checked]:bg-accent"
            item={item}
            key={item.title}
            showIndicator={false}
          >
            <div className="flex w-full min-w-0 items-center gap-3">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                <img
                  alt=""
                  className="size-full object-cover"
                  height={112}
                  src={item.artwork}
                  width={112}
                />
              </div>
              <div className="min-w-0 flex-1">
                <ListboxItemText className="block font-medium">
                  {item.title}
                </ListboxItemText>
                <p className="truncate text-muted-foreground text-sm">
                  {item.artist}
                  <span aria-hidden className="text-muted-foreground/64">
                    {" "}
                    ·{" "}
                  </span>
                  <span dir="ltr">{item.year}</span>
                </p>
              </div>
              <ListboxItemIndicator className="relative inset-auto top-auto size-7 translate-y-0 rounded-full bg-background opacity-0 group-data-[state=checked]/album:opacity-100 [&_svg]:size-3.5 [&_svg]:text-foreground" />
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
  ],
  itemToString: (item) => item.title,
  itemToValue: (item) => item.title,
});

export default Example;
