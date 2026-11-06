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
  ContextMenuList,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/react/components/context-menu";

const ContextMenuDemo = () => (
  <ContextMenu>
    <ContextMenuTrigger
      aria-label="Right click here or long press here to open context menu"
      className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm pointer-coarse:select-none"
    >
      <span className="hidden pointer-fine:inline-block">Right click here</span>
      <span className="hidden pointer-coarse:inline-block">
        Long press here
      </span>
    </ContextMenuTrigger>
    <ContextMenuContent className="min-w-40">
      <ContextMenuList>
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
              <ContextMenuList>
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

              </ContextMenuList>
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

      </ContextMenuList>
    </ContextMenuContent>
  </ContextMenu>
);

export default ContextMenuDemo;
