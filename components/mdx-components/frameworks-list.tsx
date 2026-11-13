import { FRAMEWORK_ICONS } from "@/components/mdx-components/framework-icons";
import { NavLink } from "@/components/nav-link";
import { INSTALLATION_FRAMEWORKS } from "@/lib/installation-frameworks";
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

export const FrameworksList = () => (
  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {INSTALLATION_FRAMEWORKS.map((framework) => (
      <Item
        asChild
        className="border-input [--space:--spacing(4)]"
        key={framework.id}
        variant="muted"
      >
        <NavLink href={framework.href}>
          <ItemMedia variant="image">{FRAMEWORK_ICONS[framework.id]}</ItemMedia>
          <ItemContent>
            <ItemTitle>{framework.name}</ItemTitle>
          </ItemContent>
        </NavLink>
      </Item>
    ))}
  </div>
);
