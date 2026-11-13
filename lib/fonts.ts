import {
  Figtree as FontHeading,
  JetBrains_Mono as FontMono,
  Hanken_Grotesk as FontSans,
} from "next/font/google";

export const fontSans = FontSans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontHeading = FontHeading({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const fontMono = FontMono({
  display: "swap",
  preload: false,
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});
