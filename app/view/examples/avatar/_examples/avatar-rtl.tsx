import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/react/components/avatar";
import { LocaleProvider } from "@/registry/react/components/locale";

const AvatarRtl = () => (
  <div dir="rtl">
    <LocaleProvider locale="ar-SA">
      <div className="flex flex-row flex-wrap items-center gap-6 md:gap-12">
        <Avatar>
          <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
          <AvatarFallback>VV</AvatarFallback>
        </Avatar>

        <Avatar>
          <AvatarImage alt="@shadcn" src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
          <AvatarBadge variant="success" />
        </Avatar>

        <AvatarGroup className="grayscale">
          <Avatar>
            <AvatarImage alt="@vinihvc" src="https://github.com/vinihvc.png" />
            <AvatarFallback>VV</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              alt="@segunadebayo"
              src="https://github.com/segunadebayo.png"
            />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              alt="@pasqualevitiello"
              src="https://github.com/pasqualevitiello.png"
            />
            <AvatarFallback>PV</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+2</AvatarGroupCount>
        </AvatarGroup>
      </div>
    </LocaleProvider>
  </div>
);

export default AvatarRtl;
