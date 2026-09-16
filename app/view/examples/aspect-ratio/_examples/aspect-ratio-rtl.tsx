import { AspectRatio } from "@/registry/react/components/aspect-ratio";
import { LocaleProvider } from "@/registry/react/components/locale";

const AspectRatioRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <AspectRatio className="w-full max-w-56 rounded-xl border bg-muted [--ratio:16/9]">
        <div className="flex size-full items-center justify-center">
          <span className="select-none text-muted-foreground text-xs">
            منظر طبيعي جميل
          </span>
        </div>
      </AspectRatio>
    </LocaleProvider>
  </div>
);

export default AspectRatioRtl;
