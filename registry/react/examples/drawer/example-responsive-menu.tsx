"use client";

import {
  ArchiveIcon,
  ArchiveXIcon,
  BellIcon,
  CirclePlusIcon,
  FolderInputIcon,
  MailXIcon,
  ReplyIcon,
  SendIcon,
  SquarePenIcon,
  Trash2Icon,
  TrashIcon,
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
import { useIsMobile } from "@/registry/react/hooks/use-media-query";

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
                <SendIcon /> Forward
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <ReplyIcon /> Reply
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <ArchiveIcon /> Archive
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
                <Trash2Icon /> Delete
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
      <FolderInputIcon /> Move to
    </DrawerMenuTrigger>
    <DrawerContent>
      <DrawerHeader className="sr-only" title="Move to" />
      <DrawerBody className="p-0!">
        <DrawerMenu>
          <DrawerMenuGroup>
            <DrawerMenuGroupLabel>Move to</DrawerMenuGroupLabel>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <ArchiveXIcon /> Junk
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <TrashIcon /> Trash
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <BellIcon /> Reminders
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
      <CirclePlusIcon />
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
                <SquarePenIcon />
                Drafts
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <MailXIcon />
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
    <MenuContent className="min-w-40">
      <MenuGroup>
        <MenuItem value="forward">
          <SendIcon /> Forward
          <MenuShortcut className="hidden sm:inline-flex">⌘F</MenuShortcut>
        </MenuItem>
        <MenuItem value="reply">
          <ReplyIcon /> Reply
          <MenuShortcut className="hidden sm:inline-flex">⌘R</MenuShortcut>
        </MenuItem>
        <MenuItem value="archive">
          <ArchiveIcon /> Archive
          <MenuShortcut className="hidden sm:inline-flex">⌘Z</MenuShortcut>
        </MenuItem>
        <MenuSub>
          <MenuSubTrigger>
            <FolderInputIcon /> Move to
          </MenuSubTrigger>
          <MenuSubContent>
            <MenuItem value="move-to-folder-1">
              <ArchiveXIcon /> Junk
            </MenuItem>
            <MenuItem value="move-to-folder-2">
              <TrashIcon /> Trash
            </MenuItem>
            <MenuItem value="move-to-folder-3">
              <BellIcon /> Reminders
            </MenuItem>
            <MenuSub>
              <MenuSubTrigger>
                <CirclePlusIcon />
                More
              </MenuSubTrigger>
              <MenuSubContent>
                <MenuItem value="move-to-folder-4">
                  <SquarePenIcon />
                  Drafts
                </MenuItem>
                <MenuItem value="move-to-folder-6">
                  <MailXIcon />
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
          <Trash2Icon /> Delete
          <MenuShortcut className="hidden sm:inline-flex">⌘ ⌫</MenuShortcut>
        </MenuItem>
      </MenuGroup>
    </MenuContent>
  </Menu>
);

export default Example;
