"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadDescription,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadHelper,
  FileUploadList,
  FileUploadTitle,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";
import { Separator } from "@/registry/react/components/separator";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <FileUpload className="mx-auto w-full max-w-xs">
      <FileUploadDropzone>
        <FileUploadDropzoneIcon />
        <FileUploadTitle>{values.title}</FileUploadTitle>
        <div className="flex items-center justify-center gap-2">
          <Separator />
          <FileUploadDescription>{values.or}</FileUploadDescription>
          <Separator />
        </div>
        <FileUploadTrigger asChild>
          <Button>{values.browse}</Button>
        </FileUploadTrigger>
        <FileUploadHelper>{values.helper}</FileUploadHelper>
      </FileUploadDropzone>
      <FileUploadList />
    </FileUpload>
  );
};

const translations = {
  ar: {
    values: {
      browse: "تصفح الملفات",
      helper: "يمكنك رفع حتى ملفين في المرة الواحدة.",
      or: "أو",
      title: "أسقط الملفات هنا",
    },
  },
  en: {
    values: {
      browse: "Browse files",
      helper: "You can upload up to 2 files at a time.",
      or: "or",
      title: "Drop files here",
    },
  },
  he: {
    values: {
      browse: "עיון בקבצים",
      helper: "ניתן להעלות עד 2 קבצים בכל פעם.",
      or: "או",
      title: "גרור ושחרר קבצים כאן",
    },
  },
};

export default Example;
