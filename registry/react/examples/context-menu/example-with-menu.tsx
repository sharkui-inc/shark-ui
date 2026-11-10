import {
  EllipsisVerticalIcon,
  PencilIcon,
  ShareIcon,
  Trash2Icon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { Button } from "@/registry/react/components/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/react/components/item";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuList,
  MenuTrigger,
} from "@/registry/react/components/menu";

const Example = () => (
  <Item className="w-full max-w-sm" variant="outline">
    <ContextMenu id="item-context-menu">
      <ContextMenuTrigger asChild>
        <div className="flex min-w-0 flex-1 items-center gap-(--space)">
          <ItemMedia>
            <Avatar>
              <AvatarImage
                alt="@vinihvc"
                className="grayscale"
                src="https://github.com/vinihvc.png"
              />
              <AvatarFallback>V</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>vinihvc</ItemTitle>
            <ItemDescription>vinihvc@example.com</ItemDescription>
          </ItemContent>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-40">
        <Content />
      </ContextMenuContent>
    </ContextMenu>
    <ItemActions>
      <Menu id="item-actions-menu" positioning={{ placement: "bottom-end" }}>
        <MenuTrigger asChild>
          <Button
            aria-label="Actions for vinihvc"
            size="icon-sm"
            variant="ghost"
          >
            <EllipsisVerticalIcon aria-hidden="true" />
          </Button>
        </MenuTrigger>
        <MenuContent className="min-w-40">
          <Content />
        </MenuContent>
      </Menu>
    </ItemActions>
  </Item>
);

const Content = () => (
  <MenuList>
    <MenuItem value="edit">
      <PencilIcon />
      Edit
    </MenuItem>
    <MenuItem value="share">
      <ShareIcon />
      Share
    </MenuItem>
    <MenuItem value="delete" variant="destructive">
      <Trash2Icon />
      Delete
    </MenuItem>
  </MenuList>
);

export default Example;
