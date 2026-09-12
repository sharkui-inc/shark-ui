import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/react/components/navigation-menu";

const Example = () => (
  <div className="flex min-h-80 w-full justify-center pt-2">
    <NavigationMenu aria-label="Example navigation">
      <NavigationMenuList>
        <NavigationMenuItem value="products">
          <NavigationMenuTrigger>
            Products
            <span className="text-muted-foreground">
              <ChevronDownIcon aria-hidden="true" className="size-3.5" />
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink asChild>
              <Link href="/docs/components/chart">Analytics</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/docs/components/card">Commerce</Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a
                href="https://github.com/sharkui-inc/shark-ui"
                rel="noopener noreferrer"
                target="_blank"
              >
                External
              </a>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="docs">
          <NavigationMenuLink asChild className="font-medium">
            <Link href="/docs">Documentation</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

export default Example;
