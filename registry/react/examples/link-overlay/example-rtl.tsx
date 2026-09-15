"use client";

import { usePreviewLocale } from "@/hooks/use-preview-locale";
import { createWavesAvatar } from "@/lib/dicebear";
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
} from "@/registry/react/components/card";
import { LinkBox, LinkOverlay } from "@/registry/react/components/link-overlay";

const Example = () => {
  const { locale } = usePreviewLocale();

  const { values } = translations[locale];

  return (
    <LinkBox asChild>
      <Card className="w-full max-w-xs">
        <CardMedia className="h-32 bg-muted" variant="image">
          <img
            alt={values.alt}
            height={128}
            src={createWavesAvatar("Living room Sofa", "green-dark")}
            width={500}
          />
        </CardMedia>
        <CardHeader description={values.description}>
          <CardTitle asChild>
            <h2>
              <LinkOverlay href="#">{values.title}</LinkOverlay>
            </h2>
          </CardTitle>
        </CardHeader>
      </Card>
    </LinkBox>
  );
};

const translations = {
  ar: {
    values: {
      alt: "تدرج شبكي أخضر",
      description:
        "هذه الأريكة مثالية للمساحات الاستوائية الحديثة والمساحات المستوحاة من الطراز الباروكي.",
      title: "أريكة غرفة المعيشة",
    },
  },
  en: {
    values: {
      alt: "Green mesh gradient",
      description:
        "This sofa is perfect for modern tropical spaces, baroque inspired spaces.",
      title: "Living room Sofa",
    },
  },
  he: {
    values: {
      alt: "גרדיאנט רשת ירוק",
      description:
        "ספה זו מושלמת לחללים טרופיים מודרניים ולחללים בהשראת בארוק.",
      title: "ספה לסלון",
    },
  },
};

export default Example;
