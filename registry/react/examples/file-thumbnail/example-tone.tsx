import { FileThumbnail } from "@/registry/react/components/file-thumbnail";

const Example = () => (
  <div className="flex flex-wrap items-end gap-5">
    <FileThumbnail format="pdf" tone="default" />
    <FileThumbnail format="pdf" tone="primary" />
    <FileThumbnail format="pdf" tone="destructive" />
    <FileThumbnail format="pdf" tone="info" />
    <FileThumbnail format="zip" tone="success" />
    <FileThumbnail format="pdf" tone="warning" />
  </div>
);

export default Example;
