"use client";

import { createWavesAvatar } from "@/lib/dicebear";
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
        `https://dummyjson.com/quotes?limit=3&skip=${skip}`,
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
      <ItemGroup className="gap-2">
        {list.items.map((quote) => (
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
                  src={createWavesAvatar(quote.author, "blue")}
                />
                <AvatarFallback>{quote.author.charAt(0)}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemDescription>“{quote.quote}”</ItemDescription>
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

export default UseAsyncListDemo;
