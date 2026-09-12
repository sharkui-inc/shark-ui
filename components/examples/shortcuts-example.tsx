import { Fragment } from "react";
import {
  Item,
  ItemActions,
  ItemGroup,
  ItemHeader,
  ItemSeparator,
  ItemTitle,
} from "@/registry/react/components/item";
import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

export const ShortcutsExample = (props: React.ComponentProps<"div">) => (
  <ItemGroup className="gap-2" {...props}>
    {shortcuts.map(({ keys, label }, index) => (
      <Fragment key={label}>
        {index > 0 && <ItemSeparator className="my-0" />}
        <Item className="px-0 py-0">
          <ItemHeader>
            <ItemTitle>{label}</ItemTitle>
            <ItemActions>
              <KbdGroup>
                {keys.map((key) => (
                  <Kbd key={key}>{key}</Kbd>
                ))}
              </KbdGroup>
            </ItemActions>
          </ItemHeader>
        </Item>
      </Fragment>
    ))}
  </ItemGroup>
);

const shortcuts = [
  { keys: ["⌘", "K"], label: "Search" },
  { keys: ["⌘", "J"], label: "Quick Actions" },
  { keys: ["⌘", "N"], label: "New File" },
  { keys: ["⌘", "S"], label: "Save" },
  { keys: ["⌘", "B"], label: "Toggle Sidebar" },
] as const;
