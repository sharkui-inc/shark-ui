import { BadgeCheckIcon, ChevronRightIcon, EllipsisIcon } from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const ItemDemo = () => (
  <div className="flex w-full max-w-md flex-col gap-6">
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Basic Item</ItemTitle>
        <ItemDescription>
          A simple item with title and description.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button aria-label="More item actions" size="icon-sm" variant="outline">
          <EllipsisIcon />
        </Button>
      </ItemActions>
    </Item>
    <Item variant="outline">
      <ItemMedia>
        <BadgeCheckIcon className="size-5" />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Your profile has been verified.</ItemTitle>
      </ItemContent>
      <ItemActions>
        <ChevronRightIcon className="size-4" />
      </ItemActions>
    </Item>
  </div>
);

export default ItemDemo;
