import { Badge } from "@registry/react/components/badge";
import { ArrowRightIcon, BotIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Announcement,
  AnnouncementTitle,
} from "@/registry/react/components/announcement";
import { Button } from "@/registry/react/components/button";
import { Highlight } from "@/registry/react/components/highlight";

interface HeroSectionProps extends React.ComponentProps<"section"> {
  count: number;
}

export const HeroSection = (props: HeroSectionProps) => {
  const { count, className, ...rest } = props;

  return (
    <section className={cn("relative", className)} {...rest}>
      <div className="flex w-full max-w-5xl flex-col items-start gap-6">
        <Announcement asChild className="bg-background">
          <Link href="/docs/changelog">
            <Badge>
              <BotIcon aria-hidden="true" />
            </Badge>
            <AnnouncementTitle>
              New AI components and a blocks catalog
            </AnnouncementTitle>
            <ArrowRightIcon aria-hidden="true" />
          </Link>
        </Announcement>

        <h1 className="max-w-5xl font-heading font-semibold text-5xl leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-8xl">
          <span className="block">Build your own</span>
          <span className="block lg:whitespace-nowrap">component library</span>
        </h1>

        <p className="max-w-xl text-base text-muted-foreground leading-relaxed sm:text-xl lg:max-w-3xl">
          <span className="block lg:whitespace-nowrap">
            <Highlight
              className="mx-1.5"
              query={`${count}+ components`}
              text={`An accessible set of ${count}+ components`}
            />
          </span>
          <span className="block lg:whitespace-nowrap">
            built on Ark UI. Copy the source into your project.
          </span>
        </p>

        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-4">
          <Button asChild className="w-full sm:w-auto" size="xl">
            <Link href="/docs">Get Started</Link>
          </Button>

          <Button
            asChild
            className="w-full sm:w-auto"
            size="xl"
            variant="outline"
          >
            <Link href="/docs/components">
              View components
              <ArrowRightIcon aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
