import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react";
import type React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/react/components/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    href: "#",
    title: "Alert Dialog",
  },
  {
    description:
      "For sighted users to preview content available behind a link.",
    href: "#",
    title: "Hover Card",
  },
  {
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    href: "#",
    title: "Progress",
  },
  {
    description: "Visually or semantically separates content.",
    href: "#",
    title: "Scroll-area",
  },
  {
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    href: "#",
    title: "Tabs",
  },
  {
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    href: "#",
    title: "Tooltip",
  },
];

const NavigationMenuDemo = () => (
  <div className="flex min-h-80 w-full justify-center pt-2">
    <NavigationMenu aria-label="Example navigation">
      <NavigationMenuList>
        <NavigationMenuItem value="getting-started">
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="#" title="Introduction">
                Re-usable components built with Tailwind CSS.
              </ListItem>
              <ListItem href="#" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="#" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="components">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  href={component.href}
                  key={component.title}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="with-icon">
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px]">
              <li>
                <NavigationMenuLink
                  className="flex-row items-center gap-2"
                  href="#"
                >
                  <CircleAlertIcon />
                  Backlog
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="flex-row items-center gap-2"
                  href="#"
                >
                  <CircleDashedIcon />
                  To Do
                </NavigationMenuLink>
                <NavigationMenuLink
                  className="flex-row items-center gap-2"
                  href="#"
                >
                  <CircleCheckIcon />
                  Done
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem value="docs">
          <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

const ListItem = ({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) => (
  <li {...props}>
    <NavigationMenuLink className="h-auto items-start" href={href}>
      <div className="flex flex-col gap-1 text-sm">
        <div className="font-medium leading-none">{title}</div>
        <div className="line-clamp-2 text-muted-foreground">{children}</div>
      </div>
    </NavigationMenuLink>
  </li>
);

export default NavigationMenuDemo;
