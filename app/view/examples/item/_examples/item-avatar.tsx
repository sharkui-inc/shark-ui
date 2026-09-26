import { PlusIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const ItemAvatar = () => (
  <div className="flex w-full max-w-lg flex-col gap-6">
    <Item variant="outline">
      <ItemMedia>
        <Avatar className="size-10">
          <AvatarImage src="https://github.com/vinihvc.png" />
          <AvatarFallback>VV</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Vinihvc</ItemTitle>
        <ItemDescription>Last seen 5 months ago</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button
          aria-label="Invite"
          className="rounded-full"
          size="icon-sm"
          variant="outline"
        >
          <PlusIcon />
        </Button>
      </ItemActions>
    </Item>
    <Item variant="outline">
      <ItemMedia>
        <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
          <Avatar className="hidden sm:flex">
            <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
            <AvatarFallback>VV</AvatarFallback>
          </Avatar>
          <Avatar className="hidden sm:flex">
            <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              alt="@segunadebayo"
              src="https://github.com/segunadebayo.png"
            />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </div>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>No Team Members</ItemTitle>
        <ItemDescription>
          Invite your team to collaborate on this project.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button size="sm" variant="outline">
          Invite
        </Button>
      </ItemActions>
    </Item>
  </div>
);

export default ItemAvatar;
