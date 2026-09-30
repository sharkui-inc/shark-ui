"use client";

import {
  ArchiveIcon,
  FolderInputIcon,
  ReplyIcon,
  SendIcon,
  Trash2Icon,
} from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
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

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex aspect-video pointer-coarse:select-none items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        {values.hint}
      </ContextMenuTrigger>
      <ContextMenuContent className="min-w-40">
        <ContextMenuGroup>
          <ContextMenuItem value="forward">
            <SendIcon />
            {values.forward}
            <ContextMenuShortcut className="hidden sm:inline-flex">
              {values.shortcutForward}
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem value="reply">
            <ReplyIcon />
            {values.reply}
            <ContextMenuShortcut className="hidden sm:inline-flex">
              {values.shortcutReply}
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem value="archive">
            <ArchiveIcon />
            {values.archive}
            <ContextMenuShortcut className="hidden sm:inline-flex">
              {values.shortcutArchive}
            </ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <FolderInputIcon />
              {values.moveTo}
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem value="junk">{values.junk}</ContextMenuItem>
              <ContextMenuItem value="trash">{values.trash}</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem value="delete" variant="destructive">
            <Trash2Icon />
            {values.delete}
            <ContextMenuShortcut className="hidden sm:inline-flex">
              {values.shortcutDelete}
            </ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
};

const translations = {
  ar: {
    values: {
      archive: "أرشفة",
      delete: "حذف",
      forward: "إعادة توجيه",
      hint: "انقر بزر الفأرة الأيمن هنا",
      junk: "غير هام",
      moveTo: "نقل إلى",
      reply: "رد",
      shortcutArchive: "⌘ز",
      shortcutDelete: "⌘ ⌫",
      shortcutForward: "⌘ف",
      shortcutReply: "⌘ر",
      trash: "سلة المهملات",
    },
  },
  en: {
    values: {
      archive: "Archive",
      delete: "Delete",
      forward: "Forward",
      hint: "Right click here",
      junk: "Junk",
      moveTo: "Move to",
      reply: "Reply",
      shortcutArchive: "⌘Z",
      shortcutDelete: "⌘ ⌫",
      shortcutForward: "⌘F",
      shortcutReply: "⌘R",
      trash: "Trash",
    },
  },
  he: {
    values: {
      archive: "העברה לארכיון",
      delete: "מחיקה",
      forward: "העבר",
      hint: "לחץ כאן באמצעות הכפתור הימני",
      junk: "דואר זבל",
      moveTo: "העבר אל",
      reply: "השב",
      shortcutArchive: "⌘ז",
      shortcutDelete: "⌘ ⌫",
      shortcutForward: "⌘פ",
      shortcutReply: "⌘ר",
      trash: "אשפה",
    },
  },
};

export default Example;
