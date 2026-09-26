"use client";

import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Alert, AlertDescription } from "@/registry/react/components/alert";
import { Button } from "@/registry/react/components/button";
import { FormatNumber } from "@/registry/react/components/format";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import { Skeleton, SkeletonText } from "@/registry/react/components/skeleton";
import { useAsyncList } from "@/registry/react/hooks/use-async-list";

interface Product {
  id: number;
  image: string;
  price: number;
  title: string;
}

const UseAsyncListDemo = () => {
  const list = useAsyncList<Product>({
    autoReload: true,
    initialSortDescriptor: { column: "id", direction: "ascending" },
    async load({ sortDescriptor, signal }) {
      const url = new URL("https://fakestoreapi.com/products");
      url.searchParams.set("limit", String(LIMIT));
      url.searchParams.set(
        "sort",
        sortDescriptor?.direction === "descending" ? "desc" : "asc"
      );
      const response = await fetch(url, { signal });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const items: Product[] = await response.json();
      return { items };
    },
  });
  const descending = list.sortDescriptor?.direction === "descending";
  const handleSort = () =>
    list.sort({
      column: "id",
      direction: descending ? "ascending" : "descending",
    });

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex w-full items-center justify-between gap-3">
        <output className="text-muted-foreground text-sm">
          Order: {descending ? "Descending" : "Ascending"}
        </output>
        <Button disabled={list.loading} onClick={handleSort} variant="outline">
          Sort products
          {descending ? (
            <ArrowDownIcon aria-hidden data-icon="inline-end" />
          ) : (
            <ArrowUpIcon aria-hidden data-icon="inline-end" />
          )}
        </Button>
      </div>
      {!!list.error && (
        <Alert role="alert" variant="destructive">
          <AlertDescription>{list.error.message}</AlertDescription>
        </Alert>
      )}
      <ItemGroup aria-busy={list.loading} className="gap-2">
        {list.loading
          ? skeletons.map((key) => (
              <Item
                aria-hidden
                className="[--space:--spacing(2)]"
                key={key}
                variant="outline"
              >
                <ItemMedia variant="image">
                  <Skeleton className="size-10 rounded-xl" />
                </ItemMedia>
                <ItemContent>
                  <SkeletonText
                    className="gap-1.5 **:[div]:h-[1.125rem]"
                    lines={2}
                  />
                </ItemContent>
              </Item>
            ))
          : list.items.map((product) => (
              <Item
                className="[--space:--spacing(2)]"
                key={product.id}
                role="listitem"
                variant="outline"
              >
                <ItemMedia variant="image">
                  <img
                    alt={product.title}
                    className="object-contain"
                    height={40}
                    loading="lazy"
                    src={product.image}
                    width={40}
                  />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{product.title}</ItemTitle>
                  <ItemDescription>
                    <FormatNumber
                      currency="USD"
                      style="currency"
                      value={product.price}
                    />
                  </ItemDescription>
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

const LIMIT = 4;

const skeletons = ["product-a", "product-b", "product-c", "product-d"] as const;

export default UseAsyncListDemo;
