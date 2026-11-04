import { Separator } from "@/registry/react/components/separator";

const SeparatorRtl = () => (
  <div className="flex max-w-sm flex-col gap-4 text-sm">
    <div className="flex flex-col gap-1.5">
      <div className="leading-none font-medium">Shark UI</div>
      <div className="text-muted-foreground">{translations.subtitle}</div>
    </div>
    <Separator />
    <div className="flex h-5 items-center gap-4">
      <span>{translations.components}</span>
      <Separator orientation="vertical" />
      <span>{translations.blocks}</span>
      <Separator orientation="vertical" />
      <span>{translations.themes}</span>
    </div>
  </div>
);

const translations = {
  blocks: "كتل",
  components: "مكونات",
  subtitle: "مجموعة من المكونات الأساسية لبناء الواجهات.",
  themes: "سمات",
} as const;

export default SeparatorRtl;
