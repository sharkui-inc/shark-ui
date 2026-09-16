import { Kbd, KbdGroup } from "@/registry/react/components/kbd";
import { LocaleProvider } from "@/registry/react/components/locale";

const KbdRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <div className="flex flex-col items-center gap-4">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>⌃</Kbd>
        </KbdGroup>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>B</Kbd>
        </KbdGroup>
      </div>
    </LocaleProvider>
  </div>
);

export default KbdRtl;
