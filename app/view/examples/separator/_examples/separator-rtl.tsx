import { LocaleProvider } from "@/registry/react/components/locale";
import { Separator } from "@/registry/react/components/separator";

const translations = {
  description:
    "مجموعة من المكونات المصممة بشكل جميل يمكنك تخصيصها وتوسيعها والبناء عليها.",
  subtitle: "الأساس لنظام التصميم الخاص بك",
  title: "shadcn/ui",
} as const;

const SeparatorRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <div className="flex max-w-sm flex-col gap-4 text-sm">
        <div className="flex flex-col gap-1.5">
          <div className="font-medium leading-none">{translations.title}</div>
          <div className="text-muted-foreground">{translations.subtitle}</div>
        </div>
        <Separator />
        <div>{translations.description}</div>
      </div>
    </LocaleProvider>
  </div>
);

export default SeparatorRtl;
