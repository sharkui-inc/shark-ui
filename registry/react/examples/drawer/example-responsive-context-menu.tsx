"use client";

import {
  Archive,
  ArchiveX,
  Bell,
  CirclePlus,
  FolderInput,
  MailX,
  Reply,
  ReplyAll,
  Send,
  SquarePen,
  Trash,
  Trash2,
} from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";
import {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerMenu,
  DrawerMenuGroup,
  DrawerMenuGroupLabel,
  DrawerMenuItem,
  DrawerMenuSeparator,
  DrawerMenuTrigger,
  DrawerTrigger,
} from "@/registry/react/components/drawer";
import { useIsMobile } from "@/registry/react/hooks/use-media-query";

const Example = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileContextMenu />;
  }

  return <DesktopContextMenu />;
};

const MobileContextMenu = () => (
  <Drawer>
    <DrawerTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
      <span className="pointer-fine:inline-block hidden">Right click here</span>
      <span className="pointer-coarse:inline-block hidden">
        Long press here
      </span>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader className="sr-only" title="Context menu" />
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
                <ReplyAll /> Reply all
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <Archive /> Archive
              </DrawerMenuItem>
            </DrawerClose>
            <MoveToDrawer />
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

const DesktopContextMenu = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
      <span className="pointer-fine:inline-block hidden">Right click here</span>
      <span className="pointer-coarse:inline-block hidden">
        Long press here
      </span>
    </ContextMenuTrigger>
    <ContextMenuContent className="w-40">
      <ContextMenuGroup>
        <ContextMenuItem value="forward">
          <Send /> Forward
          <ContextMenuShortcut>⌘F</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem value="reply">
          <Reply /> Reply
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem value="reply-all">
          <ReplyAll /> Reply all
          <ContextMenuShortcut>⌘A</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem value="archive">
          <Archive /> Archive
          <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <FolderInput /> Move to
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem value="move-to-folder-1">
              <ArchiveX /> Junk
            </ContextMenuItem>
            <ContextMenuItem value="move-to-folder-2">
              <Trash /> Trash
            </ContextMenuItem>
            <ContextMenuItem value="move-to-folder-3">
              <Bell /> Reminders
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <CirclePlus />
                More
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem value="move-to-folder-4">
                  <SquarePen />
                  Drafts
                </ContextMenuItem>
                <ContextMenuItem value="move-to-folder-6">
                  <MailX />
                  Spam
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem value="delete" variant="destructive">
          <Trash2 /> Delete
          <ContextMenuShortcut>⌘ ⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
