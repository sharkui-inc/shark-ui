"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  SkeletonCircle,
  SkeletonText,
} from "@/registry/react/components/skeleton";
import { Spinner } from "@/registry/react/components/spinner";
import { useAsyncList } from "@/registry/react/hooks/use-async-list";

interface Quote {
  author: string;
  id: number;
  quote: string;
}

const UseAsyncListDemo = () => {
  const list = useAsyncList<Quote>({
    autoReload: true,
    async load({ signal }) {
      const skip = Math.floor(Math.random() * 50);
      const response = await fetch(
        `https://dummyjson.com/quotes?limit=${LIMIT}&skip=${skip}`,
        { signal }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch quotes");
      }
      const data: { quotes: Quote[] } = await response.json();
      return { items: data.quotes };
    },
  });

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Button
        className="self-end"
        disabled={list.loading}
        onClick={list.reload}
        variant="outline"
      >
        {!!list.loading && <Spinner data-icon="inline-start" />}
        {list.loading ? "Loading" : "Reload quotes"}
      </Button>
      <ItemGroup aria-busy={list.loading} className="gap-2">
        {list.loading
          ? skeletons.map((key) => (
              <Item
                aria-hidden
                className="[--space:--spacing(2)]"
                key={key}
                variant="outline"
              >
                <ItemMedia>
                  <SkeletonCircle className="size-8" />
                </ItemMedia>
                <ItemContent>
                  <SkeletonText
                    className="gap-1.5 **:[div]:h-[1.125rem]"
                    lines={2}
                  />
                </ItemContent>
              </Item>
            ))
          : list.items.map((quote) => (
              <Item
                className="[--space:--spacing(2)]"
                key={quote.id}
                role="listitem"
                variant="outline"
              >
                <ItemMedia>
                  <Avatar>
                    <AvatarImage
                      alt={quote.author}
                      src={`https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=${encodeURIComponent(quote.author)}&waveColor=2b6cb0`}
                    />
                    <AvatarFallback>{quote.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemDescription className="line-clamp-1">
                    “{quote.quote}”
                  </ItemDescription>
                  <ItemTitle>By {quote.author}</ItemTitle>
                </ItemContent>
              </Item>
            ))}
      </ItemGroup>
      {!(list.loading || list.error) && !!list.empty && (
        <p className="text-muted-foreground text-sm">No results found.</p>
      )}
    </div>
  );
};

const LIMIT = 3;

const skeletons = ["quote-a", "quote-b", "quote-c"] as const;

export default UseAsyncListDemo;
