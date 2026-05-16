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

const MarqueeDemo = () => (
  <Marquee>
    <MarqueeContent>
      {items.map((Icon, index) => (
        <MarqueeItem key={index}>
          <Card className="[--space:--spacing(8)]">
            <CardContent>
              <Icon className="size-10" />
            </CardContent>
          </Card>
        </MarqueeItem>
      ))}
    </MarqueeContent>
  </Marquee>
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

export default MarqueeDemo;
