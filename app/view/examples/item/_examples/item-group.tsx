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
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";

const people = [
  {
    avatar: "https://github.com/vinihvc.png",
    email: "vinihvc@vercel.com",
    username: "vinihvc",
  },
  {
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
    username: "shadcn",
  },
  {
    avatar: "https://github.com/segunadebayo.png",
    email: "segunadebayo@vercel.com",
    username: "segunadebayo",
  },
];

const ItemGroupExample = () => (
  <ItemGroup className="max-w-sm">
    {people.map((person) => (
      <Item key={person.username} variant="outline">
        <ItemMedia>
          <Avatar>
            <AvatarImage className="grayscale" src={person.avatar} />
            <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent className="gap-1">
          <ItemTitle>{person.username}</ItemTitle>
          <ItemDescription>{person.email}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button className="rounded-full" size="icon-md" variant="ghost">
            <PlusIcon />
          </Button>
        </ItemActions>
      </Item>
    ))}
  </ItemGroup>
);

export default ItemGroupExample;
