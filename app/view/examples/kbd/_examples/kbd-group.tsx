import { Kbd, KbdGroup } from "@/registry/react/components/kbd";

const KbdGroupExample = () => (
  <div className="flex flex-col items-center gap-4">
    <p className="text-muted-foreground text-sm">
      Use{" "}
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>{" "}
      or{" "}
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>K</Kbd>
      </KbdGroup>{" "}
      to open the command palette
    </p>
  </div>
);

export default KbdGroupExample;
