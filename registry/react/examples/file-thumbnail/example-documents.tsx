import { FileThumbnail } from "@/registry/react/components/file-thumbnail";

const Example = () => (
  <div className="flex flex-wrap items-end gap-5">
    {formats.map((format) => (
      <FileThumbnail format={format} key={format} />
    ))}
  </div>
);

const formats = ["doc", "docx", "epub", "md", "txt"] as const;

export default Example;
