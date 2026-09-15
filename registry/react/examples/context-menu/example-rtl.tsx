"use client";

import { Archive, FolderInput, Reply, Send, Trash2 } from "lucide-react";
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
      <ContextMenuTrigger className="flex aspect-video items-center justify-center rounded-2xl border border-dashed p-20 text-sm">
        {values.hint}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-40">
        <ContextMenuGroup>
          <ContextMenuItem value="forward">
            <Send />
            {values.forward}
            <ContextMenuShortcut>⌘F</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem value="reply">
            <Reply />
            {values.reply}
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem value="archive">
            <Archive />
            {values.archive}
            <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <FolderInput />
              {values.moveTo}
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem value="junk">{values.junk}</ContextMenuItem>
              <ContextMenuItem value="trash">{values.trash}</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem value="delete" variant="destructive">
            <Trash2 />
            {values.delete}
            <ContextMenuShortcut>⌘ ⌫</ContextMenuShortcut>
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
      trash: "אשפה",
    },
  },
};

export default Example;
