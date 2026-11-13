"use client";

import { useFilter, useListCollection } from "@ark-ui/react";
import {
  Command,
  CommandContent,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/react/components/command";

const Example = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    filter: contains,
    groupBy: (item) => item.group,
    initialItems,
  });

  return (
    <Command
      className="w-full max-w-md"
      collection={collection}
      onInputValueChange={({ inputValue }) => filter(inputValue)}
    >
      <CommandInput autoFocus={false} placeholder="Search frameworks..." />
      <CommandContent>
        <CommandEmpty />
        <CommandList>
          {collection.group().map(([group, items]) => (
            <CommandGroup heading={group} key={group}>
              {items.map((item) => (
                <CommandItem item={item} key={item.value}>
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandContent>
    </Command>
  );
};

const initialItems = [
  { group: "Frameworks", label: "Angular", value: "angular" },
  { group: "Frameworks", label: "Astro", value: "astro" },
  { group: "Frameworks", label: "Ember", value: "ember" },
  { group: "Frameworks", label: "Gatsby", value: "gatsby" },
  { group: "Frameworks", label: "Next.js", value: "nextjs" },
  { group: "Frameworks", label: "Nuxt.js", value: "nuxtjs" },
  { group: "Frameworks", label: "React", value: "react" },
  { group: "Frameworks", label: "Remix", value: "remix" },
  { group: "Frameworks", label: "Solid", value: "solid" },
  { group: "Frameworks", label: "Svelte", value: "svelte" },
  { group: "Frameworks", label: "Vue.js", value: "vuejs" },
  { group: "Frameworks", label: "Qwik City", value: "qwik-city" },
  { group: "Frameworks", label: "Fresh", value: "fresh" },
  { group: "Frameworks", label: "Hydrogen", value: "hydrogen" },
  { group: "Frameworks", label: "Marko", value: "marko" },
  { group: "Libraries", label: "Alpine.js", value: "alpinejs" },
  { group: "Libraries", label: "jQuery", value: "jquery" },
  { group: "Libraries", label: "Lit", value: "lit" },
  { group: "Libraries", label: "Preact", value: "preact" },
  { group: "Libraries", label: "Qwik", value: "qwik" },
  { group: "Libraries", label: "Stencil", value: "stencil" },
  { group: "Libraries", label: "HTMX", value: "htmx" },
  { group: "Libraries", label: "Mithril", value: "mithril" },
  { group: "Libraries", label: "Inferno", value: "inferno" },
  { group: "Libraries", label: "Riot.js", value: "riotjs" },
  { group: "Libraries", label: "Stimulus", value: "stimulus" },
  { group: "Libraries", label: "Petite-Vue", value: "petite-vue" },
  { group: "Libraries", label: "SvelteKit UI", value: "sveltekit-ui" },
  { group: "Meta-frameworks", label: "Blitz.js", value: "blitzjs" },
  { group: "Meta-frameworks", label: "Redwood", value: "redwood" },
  { group: "Meta-frameworks", label: "T3 Stack", value: "t3" },
  {
    group: "Meta-frameworks",
    label: "TanStack Start",
    value: "tanstack-start",
  },
  { group: "Meta-frameworks", label: "Wasp", value: "wasp" },
  { group: "Meta-frameworks", label: "Analog", value: "analog" },
  { group: "Meta-frameworks", label: "Create T3 Turbo", value: "t3-turbo" },
  { group: "Meta-frameworks", label: "Vike", value: "vike" },
  { group: "Meta-frameworks", label: "Nitro", value: "nitro" },
  { group: "Build tools", label: "Vite", value: "vite" },
  { group: "Build tools", label: "Webpack", value: "webpack" },
  { group: "Build tools", label: "Turbopack", value: "turbopack" },
  { group: "Build tools", label: "esbuild", value: "esbuild" },
  { group: "Build tools", label: "Rollup", value: "rollup" },
  { group: "Build tools", label: "Parcel", value: "parcel" },
  { group: "Build tools", label: "Rspack", value: "rspack" },
  { group: "Build tools", label: "Bun bundler", value: "bun-bundler" },
  { group: "Runtimes", label: "Node.js", value: "nodejs" },
  { group: "Runtimes", label: "Deno", value: "deno" },
  { group: "Runtimes", label: "Bun", value: "bun" },
  { group: "Runtimes", label: "Cloudflare Workers", value: "cloudflare" },
  { group: "Runtimes", label: "Edge Runtime", value: "edge-runtime" },
];

export default Example;
