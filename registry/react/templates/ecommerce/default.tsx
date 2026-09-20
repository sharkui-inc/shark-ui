import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Ecommerce Template",
  url: "/templates/ecommerce",
});

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardMedia,
} from "@/registry/react/components/card";
import { Input } from "@/registry/react/components/input";
import { Separator } from "@/registry/react/components/separator";

const PRODUCTS = [
  {
    id: "1",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=eef4e6&scale=1.2&seed=Wireless+Headphones&waveColor=1a6b5c",
    name: "Wireless Headphones",
    price: "$99",
  },
  {
    id: "2",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=e8f1fb&scale=1.2&seed=Smart+Watch&waveColor=2b6cb0",
    name: "Smart Watch",
    price: "$249",
  },
  {
    id: "3",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f3e8fb&scale=1.2&seed=Portable+Speaker&waveColor=7c3aed",
    name: "Portable Speaker",
    price: "$79",
  },
  {
    id: "4",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf0e4&scale=1.2&seed=USB-C+Hub&waveColor=ea580c",
    name: "USB-C Hub",
    price: "$45",
  },
  {
    id: "5",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=f8e8ee&scale=1.2&seed=Mechanical+Keyboard&waveColor=e11d48",
    name: "Mechanical Keyboard",
    price: "$149",
  },
  {
    id: "6",
    image:
      "https://api.dicebear.com/10.x/waves/svg?backgroundColor=faf6e0&scale=1.2&seed=Ergonomic+Mouse&waveColor=ca8a04",
    name: "Ergonomic Mouse",
    price: "$59",
  },
];

const EcommerceTemplate = () => (
  <div className="flex min-h-svh flex-col">
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="container flex h-16 items-center gap-6">
        <Link className="font-semibold" href="#">
          Store
        </Link>
        <div className="relative max-w-sm flex-1">
          <SearchIcon
            aria-hidden
            className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            className="pl-9"
            placeholder="Search products..."
            type="search"
          />
        </div>
        <Button asChild size="icon-md" variant="ghost">
          <Link aria-label="Shopping cart" href="#">
            <ShoppingCartIcon aria-hidden className="size-5" />
          </Link>
        </Button>
      </div>
    </header>

    <main className="container flex flex-1 flex-col gap-8 py-8">
      <div>
        <h1 className="font-bold text-2xl tracking-tight">Products</h1>
        <p className="mt-1 text-muted-foreground">
          Browse our collection of premium products.
        </p>
      </div>

      <Separator />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <Card key={product.id}>
            <CardMedia variant="image">
              <div className="relative aspect-square">
                <Image
                  alt={product.name}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={product.image}
                />
              </div>
            </CardMedia>
            <CardContent className="flex flex-col gap-2 pt-4">
              <h3 className="font-semibold">{product.name}</h3>
              <span className="font-medium text-primary">{product.price}</span>
            </CardContent>
            <CardFooter className="pt-0">
              <Button asChild className="w-full">
                <Link href="#">Add to cart</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>

    <footer className="border-t">
      <div className="container flex h-16 items-center justify-between">
        <span className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Store. All rights reserved.
        </span>
      </div>
    </footer>
  </div>
);

export default EcommerceTemplate;
