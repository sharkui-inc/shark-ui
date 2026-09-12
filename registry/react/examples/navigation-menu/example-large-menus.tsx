import { ChevronDownIcon } from "lucide-react";
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
        <NavigationMenuItem value="components">
          <NavigationMenuTrigger>
            Components
            <span className="text-muted-foreground">
              <ChevronDownIcon aria-hidden="true" className="size-3.5" />
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="max-h-64">
            {componentLinks.map((item) => (
              <NavigationMenuLink href={item.href} key={item.href}>
                {item.title}
              </NavigationMenuLink>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="docs">
          <NavigationMenuLink className="font-medium" href="/docs">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

const componentLinks = [
  { href: "/docs/components/accordion", title: "Accordion" },
  { href: "/docs/components/alert", title: "Alert" },
  { href: "/docs/components/avatar", title: "Avatar" },
  { href: "/docs/components/badge", title: "Badge" },
  { href: "/docs/components/button", title: "Button" },
  { href: "/docs/components/card", title: "Card" },
  { href: "/docs/components/checkbox", title: "Checkbox" },
  { href: "/docs/components/combobox", title: "Combobox" },
  { href: "/docs/components/dialog", title: "Dialog" },
  { href: "/docs/components/drawer", title: "Drawer" },
  { href: "/docs/components/field", title: "Field" },
  { href: "/docs/components/hover-card", title: "Hover Card" },
  { href: "/docs/components/input", title: "Input" },
  { href: "/docs/components/menu", title: "Menu" },
  { href: "/docs/components/popover", title: "Popover" },
  { href: "/docs/components/select", title: "Select" },
  { href: "/docs/components/sheet", title: "Sheet" },
  { href: "/docs/components/switch", title: "Switch" },
  { href: "/docs/components/tabs", title: "Tabs" },
  { href: "/docs/components/tooltip", title: "Tooltip" },
];

export default Example;
