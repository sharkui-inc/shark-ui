import { DownloadIcon } from "lucide-react";
import { FormatNumber } from "@/registry/react/components/format";
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
      <DownloadIcon aria-hidden />
    </ItemMedia>
    <ItemContent>
      <ItemTitle>onda</ItemTitle>
      <ItemDescription>
        <FormatNumber value={1_234_567} /> downloads this month
      </ItemDescription>
    </ItemContent>
  </Item>
);

export default Example;
