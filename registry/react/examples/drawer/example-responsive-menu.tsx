"use client";

import {
  Archive,
  ArchiveX,
  Bell,
  CirclePlus,
  FolderInput,
  MailX,
  Reply,
  Send,
  SquarePen,
  Trash,
  Trash2,
} from "lucide-react";
import { Button } from "@/registry/react/components/button";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerMenu,
  DrawerMenuCheckboxItem,
  DrawerMenuGroup,
  DrawerMenuGroupLabel,
  DrawerMenuItem,
  DrawerMenuRadioGroup,
  DrawerMenuRadioItem,
  DrawerMenuSeparator,
  DrawerMenuTrigger,
  DrawerTrigger,
} from "@/registry/react/components/drawer";
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/react/components/menu";
import { useIsMobile } from "@/registry/react/hooks/use-is-mobile";

const Example = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileMenu />;
  }

  return <DesktopMenu />;
};

const MobileMenu = () => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button variant="outline">Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader className="sr-only" title="Menu" />
      <DrawerBody className="p-0!">
        <DrawerMenu>
          <DrawerMenuGroup>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <Send /> Forward
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <Reply /> Reply
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <Archive /> Archive
              </DrawerMenuItem>
            </DrawerClose>
            <MoveToDrawer />
            <DrawerMenuSeparator />
            <DrawerMenuGroupLabel>Priority</DrawerMenuGroupLabel>
            <DrawerMenuRadioGroup value="medium">
              <DrawerMenuRadioItem value="low">Low</DrawerMenuRadioItem>
              <DrawerMenuRadioItem value="medium">Medium</DrawerMenuRadioItem>
              <DrawerMenuRadioItem value="high">High</DrawerMenuRadioItem>
            </DrawerMenuRadioGroup>
            <DrawerMenuSeparator />
            <DrawerMenuCheckboxItem checked>
              Block sender
            </DrawerMenuCheckboxItem>
            <DrawerMenuSeparator />
            <DrawerClose asChild>
              <DrawerMenuItem variant="destructive">
                <Trash2 /> Delete
              </DrawerMenuItem>
            </DrawerClose>
          </DrawerMenuGroup>
        </DrawerMenu>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const MoveToDrawer = () => (
  <Drawer>
    <DrawerMenuTrigger>
      <FolderInput /> Move to
    </DrawerMenuTrigger>
    <DrawerContent>
      <DrawerHeader className="sr-only" title="Move to" />
      <DrawerBody className="p-0!">
        <DrawerMenu>
          <DrawerMenuGroup>
            <DrawerMenuGroupLabel>Move to</DrawerMenuGroupLabel>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <ArchiveX /> Junk
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <Trash /> Trash
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <Bell /> Reminders
              </DrawerMenuItem>
            </DrawerClose>
            <MoreDrawer />
          </DrawerMenuGroup>
        </DrawerMenu>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const MoreDrawer = () => (
  <Drawer>
    <DrawerMenuTrigger>
      <CirclePlus />
      More
    </DrawerMenuTrigger>
    <DrawerContent>
      <DrawerHeader className="sr-only" title="More" />
      <DrawerBody className="p-0!">
        <DrawerMenu>
          <DrawerMenuGroup>
            <DrawerMenuGroupLabel>More</DrawerMenuGroupLabel>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <SquarePen />
                Drafts
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <MailX />
                Spam
              </DrawerMenuItem>
            </DrawerClose>
          </DrawerMenuGroup>
        </DrawerMenu>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
);

const DesktopMenu = () => (
  <Menu>
    <MenuTrigger asChild>
      <Button variant="outline">Open</Button>
    </MenuTrigger>
    <MenuContent className="w-40">
      <MenuGroup>
        <MenuItem value="forward">
          <Send /> Forward
          <MenuShortcut>⌘F</MenuShortcut>
        </MenuItem>
        <MenuItem value="reply">
          <Reply /> Reply
          <MenuShortcut>⌘R</MenuShortcut>
        </MenuItem>
        <MenuItem value="archive">
          <Archive /> Archive
          <MenuShortcut>⌘Z</MenuShortcut>
        </MenuItem>
        <MenuSub>
          <MenuSubTrigger>
            <FolderInput /> Move to
          </MenuSubTrigger>
          <MenuSubContent>
            <MenuItem value="move-to-folder-1">
              <ArchiveX /> Junk
            </MenuItem>
            <MenuItem value="move-to-folder-2">
              <Trash /> Trash
            </MenuItem>
            <MenuItem value="move-to-folder-3">
              <Bell /> Reminders
            </MenuItem>
            <MenuSub>
              <MenuSubTrigger>
                <CirclePlus />
                More
              </MenuSubTrigger>
              <MenuSubContent>
                <MenuItem value="move-to-folder-4">
                  <SquarePen />
                  Drafts
                </MenuItem>
                <MenuItem value="move-to-folder-6">
                  <MailX />
                  Spam
                </MenuItem>
              </MenuSubContent>
            </MenuSub>
          </MenuSubContent>
        </MenuSub>
        <MenuSeparator />
        <MenuRadioGroup heading="Priority" value="medium">
          <MenuRadioItem value="low">Low</MenuRadioItem>
          <MenuRadioItem value="medium">Medium</MenuRadioItem>
          <MenuRadioItem value="high">High</MenuRadioItem>
        </MenuRadioGroup>
        <MenuSeparator />
        <MenuCheckboxItem checked value="block">
          Block sender
        </MenuCheckboxItem>
        <MenuSeparator />
        <MenuItem value="delete" variant="destructive">
          <Trash2 /> Delete
          <MenuShortcut>⌘ ⌫</MenuShortcut>
        </MenuItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);

export default Example;
