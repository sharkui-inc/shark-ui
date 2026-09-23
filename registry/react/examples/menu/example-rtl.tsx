"use client";

import { Archive, FolderInput, Reply, Send, Trash2 } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
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

const Example = () => {
  const { locale } = usePreviewLocale();
  const { values } = translations[locale];
  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">{values.open}</Button>
      </MenuTrigger>
      <MenuContent className="w-40">
        <MenuGroup>
          <MenuItem value="forward">
            <Send />
            {values.forward}
            <MenuShortcut>{values.shortcutForward}</MenuShortcut>
          </MenuItem>
          <MenuItem value="reply">
            <Reply />
            {values.reply}
            <MenuShortcut>{values.shortcutReply}</MenuShortcut>
          </MenuItem>
          <MenuItem value="archive">
            <Archive />
            {values.archive}
            <MenuShortcut>{values.shortcutArchive}</MenuShortcut>
          </MenuItem>
          <MenuSub>
            <MenuSubTrigger>
              <FolderInput />
              {values.moveTo}
            </MenuSubTrigger>
            <MenuSubContent>
              <MenuItem value="junk">{values.junk}</MenuItem>
              <MenuItem value="trash">{values.trash}</MenuItem>
            </MenuSubContent>
          </MenuSub>
          <MenuSeparator />
          <MenuRadioGroup heading={values.priority} value="medium">
            <MenuRadioItem value="low">{values.low}</MenuRadioItem>
            <MenuRadioItem value="medium">{values.medium}</MenuRadioItem>
            <MenuRadioItem value="high">{values.high}</MenuRadioItem>
          </MenuRadioGroup>
          <MenuSeparator />
          <MenuCheckboxItem checked value="block">
            {values.block}
          </MenuCheckboxItem>
          <MenuSeparator />
          <MenuItem value="delete" variant="destructive">
            <Trash2 />
            {values.delete}
            <MenuShortcut>{values.shortcutDelete}</MenuShortcut>
          </MenuItem>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};

const translations = {
  ar: {
    values: {
      archive: "أرشفة",
      block: "حظر المرسل",
      delete: "حذف",
      forward: "إعادة توجيه",
      high: "مرتفع",
      junk: "غير هام",
      low: "منخفض",
      medium: "متوسط",
      moveTo: "نقل إلى",
      open: "فتح",
      priority: "الأولوية",
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
      block: "Block sender",
      delete: "Delete",
      forward: "Forward",
      high: "High",
      junk: "Junk",
      low: "Low",
      medium: "Medium",
      moveTo: "Move to",
      open: "Open",
      priority: "Priority",
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
      block: "חסימת שולח",
      delete: "מחיקה",
      forward: "העבר",
      high: "גבוהה",
      junk: "דואר זבל",
      low: "נמוכה",
      medium: "בינונית",
      moveTo: "העבר אל",
      open: "פתיחה",
      priority: "עדיפות",
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
