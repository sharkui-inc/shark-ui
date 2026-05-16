import { AppleIcon } from "@/components/icons/apple";
import { ChatGptIcon } from "@/components/icons/chat-gpt";
import { ClaudeIcon } from "@/components/icons/claude";
import { GoogleIcon } from "@/components/icons/google";
import { NextIcon } from "@/components/icons/next";
import { ReactIcon } from "@/components/icons/react";
import { ViteIcon } from "@/components/icons/vite";
import { VueIcon } from "@/components/icons/vue";
import { Card, CardContent } from "@/registry/react/components/card";
import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/registry/react/components/marquee";

const Example = () => (
  <div className="flex w-full flex-col gap-6 overflow-hidden">
    <Marquee pauseOnInteraction showEdges={false}>
      <MarqueeContent>
        {items.map((Icon, index) => (
          <MarqueeItem key={index}>
            <Card>
              <CardContent>
                <Icon className="size-10" />
              </CardContent>
            </Card>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>

    <Marquee pauseOnInteraction reverse>
      <MarqueeContent>
        {items.map((Icon, index) => (
          <MarqueeItem key={index}>
            <Card>
              <CardContent>
                <Icon className="size-10" />
              </CardContent>
            </Card>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

const items = [
  GoogleIcon,
  AppleIcon,
  NextIcon,
  ChatGptIcon,
  ClaudeIcon,
  ViteIcon,
  VueIcon,
  ReactIcon,
];

export default Example;
