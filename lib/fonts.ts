import {
  JetBrains_Mono as FontMono,
  Hanken_Grotesk as FontSans,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontHeading = FontSans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
