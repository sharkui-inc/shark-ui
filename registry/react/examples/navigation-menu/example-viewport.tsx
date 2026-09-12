import {
  AccessibilityIcon,
  ChevronDownIcon,
  ClapperboardIcon,
  LayersIcon,
  ListChecksIcon,
  PaletteIcon,
  RocketIcon,
  SparklesIcon,
} from "lucide-react";
import { IconTile } from "@/registry/react/components/icon-tile";
import {
  NavigationMenu,
  NavigationMenuArrow,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuViewportPositioner,
} from "@/registry/react/components/navigation-menu";

const Example = () => (
  <div className="flex min-h-80 w-full justify-center pt-2">
    <NavigationMenu
      aria-label="Example navigation"
      lazyMount={false}
      unmountOnExit={false}
    >
      <NavigationMenuList>
        <NavigationMenuItem value="overview">
          <NavigationMenuTrigger>
            Overview
            <span className="text-muted-foreground">
              <ChevronDownIcon aria-hidden="true" className="size-3.5" />
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-2 p-2 sm:grid-cols-2">
              {overviewSections.map((section) => (
                <div
                  className="flex min-w-48 flex-col gap-1 p-1"
                  key={section.label}
                >
                  <span className="px-3 py-2 font-medium text-muted-foreground text-xs">
                    {section.label}
                  </span>
                  {section.links.map((item) => (
                    <NavigationMenuLink
                      className="h-auto items-start"
                      href={item.href}
                      key={item.href}
                    >
                      <IconTile aria-hidden="true" size="sm">
                        <item.icon />
                      </IconTile>
                      <span className="flex flex-col gap-0.5 text-start">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-muted-foreground text-xs">
                          {item.description}
                        </span>
                      </span>
                    </NavigationMenuLink>
                  ))}
                </div>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="guides">
          <NavigationMenuTrigger>
            Guides
            <span className="text-muted-foreground">
              <ChevronDownIcon aria-hidden="true" className="size-3.5" />
            </span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex min-w-48 flex-col gap-1 p-1">
              <span className="px-3 py-2 font-medium text-muted-foreground text-xs">
                Guides
              </span>
              {guideLinks.map((item) => (
                <NavigationMenuLink
                  className="h-auto items-start"
                  href={item.href}
                  key={item.href}
                >
                  <IconTile aria-hidden="true" size="sm">
                    <item.icon />
                  </IconTile>
                  <span className="flex flex-col gap-0.5 text-start">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-muted-foreground text-xs">
                      {item.description}
                    </span>
                  </span>
                </NavigationMenuLink>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="docs">
          <NavigationMenuLink className="font-medium" href="/docs">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuIndicator>
          <NavigationMenuArrow />
        </NavigationMenuIndicator>
      </NavigationMenuList>

      <NavigationMenuViewportPositioner>
        <NavigationMenuViewport />
      </NavigationMenuViewportPositioner>
    </NavigationMenu>
  </div>
);

const overviewSections = [
  {
    label: "Get started",
    links: [
      {
        description: "Install and assemble",
        href: "/docs/installation",
        icon: RocketIcon,
        title: "Quick Start",
      },
      {
        description: "CSS, CSS-in-JS, or utilities",
        href: "/docs/styling",
        icon: PaletteIcon,
        title: "Styling",
      },
    ],
  },
  {
    label: "Learn",
    links: [
      {
        description: "Keyboard and ARIA support",
        href: "/docs/components/field",
        icon: AccessibilityIcon,
        title: "Accessibility",
      },
      {
        description: "What's new in Shark UI",
        href: "/docs/changelog",
        icon: SparklesIcon,
        title: "Releases",
      },
    ],
  },
];

const guideLinks = [
  {
    description: "CSS or JavaScript",
    href: "/docs/utilities/presence",
    icon: ClapperboardIcon,
    title: "Animation",
  },
  {
    description: "Replace and compose parts",
    href: "/docs/components/menu",
    icon: LayersIcon,
    title: "Composition",
  },
  {
    description: "Native and library forms",
    href: "/docs/forms",
    icon: ListChecksIcon,
    title: "Forms",
  },
];

export default Example;
