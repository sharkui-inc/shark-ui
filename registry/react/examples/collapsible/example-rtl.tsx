"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { Badge } from "@/registry/react/components/badge";
import { Button } from "@/registry/react/components/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
} from "@/registry/react/components/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/registry/react/components/collapsible";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <Card className="w-96">
      <Collapsible>
        <CardHeader title={values.totalVisits}>
          <CardDescription className="pt-2">
            <div className="flex items-center gap-1">
              <Badge variant="success">{values.topGoogle}</Badge>
              <Badge variant="info">{values.topFacebook}</Badge>
              <Badge variant="warning">{values.topTiktok}</Badge>
              <Badge variant="destructive">{values.topInstagram}</Badge>
            </div>
          </CardDescription>

          <CardAction>
            <CollapsibleTrigger asChild>
              <Button clickEffect={false} size="sm" variant="outline">
                {values.details}
                <CollapsibleIndicator />
              </Button>
            </CollapsibleTrigger>
          </CardAction>
        </CardHeader>

        <CollapsibleContent className="text-sm">
          <div className="mt-(--space) grid gap-3 px-(--space)">
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="col-span-2 text-muted-foreground">
                {values.google}
              </div>
              <div className="place-self-end">
                <Badge variant="success">{values.googlePercent}</Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="col-span-2 text-muted-foreground">
                {values.facebook}
              </div>
              <div className="place-self-end">
                <Badge variant="destructive">{values.facebookPercent}</Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="col-span-2 text-muted-foreground">
                {values.tiktok}
              </div>
              <div className="place-self-end">
                <Badge variant="warning">{values.tiktokPercent}</Badge>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <div className="col-span-2 text-muted-foreground">
                {values.instagram}
              </div>
              <div className="place-self-end">
                <Badge variant="info">{values.instagramPercent}</Badge>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

const translations = {
  ar: {
    values: {
      details: "التفاصيل",
      facebook: "Facebook",
      facebookPercent: "-١٠٫١٪",
      google: "Google",
      googlePercent: "٢٢٫٣٪",
      instagram: "Instagram",
      instagramPercent: "١٫٤٪",
      tiktok: "TikTok",
      tiktokPercent: "٦٫٨٪",
      topFacebook: "١٠٫١٪",
      topGoogle: "٢٢٫٣٪",
      topInstagram: "١٫٤٪",
      topTiktok: "٦٫٨٪",
      totalVisits: "إجمالي الزيارات",
    },
  },
  en: {
    values: {
      details: "Details",
      facebook: "Facebook",
      facebookPercent: "-10.1%",
      google: "Google",
      googlePercent: "22.3%",
      instagram: "Instagram",
      instagramPercent: "1.4%",
      tiktok: "TikTok",
      tiktokPercent: "6.8%",
      topFacebook: "10.1%",
      topGoogle: "22.3%",
      topInstagram: "1.4%",
      topTiktok: "6.8%",
      totalVisits: "Total visits",
    },
  },
  he: {
    values: {
      details: "פרטים",
      facebook: "Facebook",
      facebookPercent: "-10.1%",
      google: "Google",
      googlePercent: "22.3%",
      instagram: "Instagram",
      instagramPercent: "1.4%",
      tiktok: "TikTok",
      tiktokPercent: "6.8%",
      topFacebook: "10.1%",
      topGoogle: "22.3%",
      topInstagram: "1.4%",
      topTiktok: "6.8%",
      totalVisits: "סך הביקורים",
    },
  },
};

export default Example;
