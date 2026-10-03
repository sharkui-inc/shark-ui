import { ClockIcon } from "lucide-react";
import { FormatTime } from "@/registry/react/components/format";
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
    <Item variant="outline">
      <ItemMedia variant="icon">
        <ClockIcon aria-hidden />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>24-hour</ItemTitle>
        <ItemDescription>
          Design review · <FormatTime value={startsAt} />
        </ItemDescription>
      </ItemContent>
    </Item>
    <Item variant="outline">
      <ItemMedia variant="icon">
        <ClockIcon aria-hidden />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>12-hour</ItemTitle>
        <ItemDescription>
          Design review ·{" "}
          <FormatTime
            amLabel="a.m."
            format="12h"
            pmLabel="p.m."
            value={startsAt}
          />
        </ItemDescription>
      </ItemContent>
    </Item>
  </ItemGroup>
);

const startsAt = new Date("2026-08-24T14:30:00");

export default Example;
