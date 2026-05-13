# Shark File Upload

## When to use

- Drag-and-drop zones, browse triggers, and file lists with previews.
- Constraining MIME types, max files, and clearing selections.

## When NOT to use

- If you only need a single hidden `<input type="file">` without drop UX → use native input + button.
- If uploads should go straight to cloud without listing → consider a minimal custom flow.

## Install

```bash
npx shadcn@latest add @shark/file-upload
```

Manual deps from docs:

```bash
npm install @ark-ui/react lucide-react
```

## Canonical imports

```tsx
import {
  FileUpload,
  FileUploadClearTrigger,
  FileUploadDescription,
  FileUploadDropzone,
  FileUploadDropzoneIcon,
  FileUploadHelper,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSize,
  FileUploadList,
  FileUploadTitle,
  FileUploadTrigger,
  useFileUpload,
} from "@/components/ui/file-upload"
```

## Minimal pattern

```tsx
<FileUpload className="w-full max-w-xs">
  <FileUploadDropzone>
    <FileUploadDropzoneIcon />
    <FileUploadTitle>Drop files here</FileUploadTitle>
    <FileUploadDescription>or</FileUploadDescription>
    <FileUploadTrigger asChild>
      <Button>Browse files</Button>
    </FileUploadTrigger>
    <FileUploadHelper>Up to 2 files.</FileUploadHelper>
  </FileUploadDropzone>
  <FileUploadList />
</FileUpload>
```

Import `Button` from `@/components/ui/button` when using `FileUploadTrigger asChild` with a button.

### Key patterns

`accept`, `maxFiles`, and `directory` props on `FileUpload` root; `FileUploadItemPreviewImage` for image thumbs; `FileUploadClearTrigger` to reset; pair with `Field` via `example-with-field`.

## Common pitfalls

- Forgetting `asChild` on `FileUploadTrigger` when composing with `Button`.
- Missing client boundary (`"use client"`) in consumer files that call upload callbacks.
- Listing files without rendering `FileUploadList` / item components—root alone does not show picks.

## Registry example files

- [`example-accepted-file-types.tsx`](/registry/react/examples/file-upload/example-accepted-file-types.tsx)
- [`example-clear-trigger.tsx`](/registry/react/examples/file-upload/example-clear-trigger.tsx)
- [`example-custom-preview.tsx`](/registry/react/examples/file-upload/example-custom-preview.tsx)
- [`example-custom-spacing.tsx`](/registry/react/examples/file-upload/example-custom-spacing.tsx)
- [`example-default.tsx`](/registry/react/examples/file-upload/example-default.tsx)
- [`example-directory-upload.tsx`](/registry/react/examples/file-upload/example-directory-upload.tsx)
- [`example-dropzone.tsx`](/registry/react/examples/file-upload/example-dropzone.tsx)
- [`example-media-capture.tsx`](/registry/react/examples/file-upload/example-media-capture.tsx)
- [`example-multiple-files.tsx`](/registry/react/examples/file-upload/example-multiple-files.tsx)
- [`example-trigger.tsx`](/registry/react/examples/file-upload/example-trigger.tsx)
- [`example-with-field.tsx`](/registry/react/examples/file-upload/example-with-field.tsx)
