"use client";

import {
  ArchiveIcon,
  ArchiveXIcon,
  BellIcon,
  CirclePlusIcon,
  FolderInputIcon,
  MailXIcon,
  ReplyAllIcon,
  ReplyIcon,
  SendIcon,
  SquarePenIcon,
  Trash2Icon,
  TrashIcon,
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
    <DrawerTrigger className="flex aspect-video pointer-coarse:select-none items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
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
                <ReplyAllIcon /> Reply all
              </DrawerMenuItem>
            </DrawerClose>
            <DrawerClose asChild>
              <DrawerMenuItem>
                <ArchiveIcon /> Archive
              </DrawerMenuItem>
            </DrawerClose>
            <MoveToDrawer />
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

const DesktopContextMenu = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex aspect-video pointer-coarse:select-none items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
      <span className="pointer-fine:inline-block hidden">Right click here</span>
      <span className="pointer-coarse:inline-block hidden">
        Long press here
      </span>
    </ContextMenuTrigger>
    <ContextMenuContent className="min-w-40">
      <ContextMenuGroup>
        <ContextMenuItem value="forward">
          <SendIcon /> Forward
          <ContextMenuShortcut className="hidden sm:inline-flex">
            ⌘F
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem value="reply">
          <ReplyIcon /> Reply
          <ContextMenuShortcut className="hidden sm:inline-flex">
            ⌘R
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem value="reply-all">
          <ReplyAllIcon /> Reply all
          <ContextMenuShortcut className="hidden sm:inline-flex">
            ⌘A
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem value="archive">
          <ArchiveIcon /> Archive
          <ContextMenuShortcut className="hidden sm:inline-flex">
            ⌘Z
          </ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <FolderInputIcon /> Move to
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem value="move-to-folder-1">
              <ArchiveXIcon /> Junk
            </ContextMenuItem>
            <ContextMenuItem value="move-to-folder-2">
              <TrashIcon /> Trash
            </ContextMenuItem>
            <ContextMenuItem value="move-to-folder-3">
              <BellIcon /> Reminders
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <CirclePlusIcon />
                More
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem value="move-to-folder-4">
                  <SquarePenIcon />
                  Drafts
                </ContextMenuItem>
                <ContextMenuItem value="move-to-folder-6">
                  <MailXIcon />
                  Spam
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem value="delete" variant="destructive">
          <Trash2Icon /> Delete
          <ContextMenuShortcut className="hidden sm:inline-flex">
            ⌘ ⌫
          </ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuGroup>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
