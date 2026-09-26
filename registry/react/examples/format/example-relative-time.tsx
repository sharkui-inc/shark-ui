import { FileTextIcon } from "lucide-react";
import { FormatRelativeTime } from "@/registry/react/components/format";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const Example = () => (
  <Item className="w-full max-w-sm" variant="outline">
    <ItemMedia variant="icon">
      <FileTextIcon aria-hidden />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Q3 roadmap.md</ItemTitle>
      <ItemDescription>
        Updated <FormatRelativeTime value={updatedAt} />
      </ItemDescription>
    </ItemContent>
  </Item>
);

const updatedAt = new Date("2025-05-05");

export default Example;
