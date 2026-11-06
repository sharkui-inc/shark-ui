"use client";

import { CloudUploadIcon } from "lucide-react";
import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Button } from "@/registry/react/components/button";
import {
  FileUpload,
  FileUploadDropzone,
  FileUploadHelper,
  FileUploadList,
  FileUploadTitle,
  FileUploadTrigger,
} from "@/registry/react/components/file-upload";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <FileUpload className="mx-auto w-full max-w-sm" maxFiles={2}>
      <FileUploadDropzone className="gap-4 py-10" disableClick>
        <CloudUploadIcon
          aria-hidden="true"
          className="text-muted-foreground group-data-dragging/file-upload:text-primary size-8"
          strokeWidth={1.5}
        />
        <div className="flex flex-col gap-0.5">
          <FileUploadTitle>{values.title}</FileUploadTitle>
          <FileUploadHelper>{values.helper}</FileUploadHelper>
        </div>
        <FileUploadTrigger asChild>
          <Button size="sm">{values.select}</Button>
        </FileUploadTrigger>
      </FileUploadDropzone>
      <FileUploadList />
    </FileUpload>
  );
};

const translations = {
  ar: {
    values: {
      helper: "حتى ملفين في المرة الواحدة",
      select: "اختر الملفات",
      title: "اسحب ملفاتك وأفلتها هنا",
    },
  },
  en: {
    values: {
      helper: "Up to 2 files at a time",
      select: "Select files",
      title: "Drag and drop your files",
    },
  },
  he: {
    values: {
      helper: "עד 2 קבצים בכל פעם",
      select: "בחירת קבצים",
      title: "גררו ושחררו את הקבצים",
    },
  },
};

export default Example;
