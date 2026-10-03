import { BellIcon } from "lucide-react";
import { FormatRelativeTime } from "@/registry/react/components/format";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <ItemGroup className="w-full max-w-sm gap-2">
    {styles.map((style) => (
      <Item key={style} variant="outline">
        <ItemMedia variant="icon">
          <BellIcon aria-hidden />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="capitalize">{style}</ItemTitle>
          <ItemDescription>
            Deploy finished{" "}
            <FormatRelativeTime style={style} value={finishedAt} />
          </ItemDescription>
        </ItemContent>
      </Item>
    ))}
  </ItemGroup>
);

const finishedAt = new Date("2025-05-05");
const styles = ["long", "short", "narrow"] as const;

export default Example;
