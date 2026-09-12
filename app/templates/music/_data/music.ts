import { CompassIcon, HomeIcon, LibraryIcon, SearchIcon } from "lucide-react";

export const NAV_ITEMS = [
  { group: "Browse", icon: HomeIcon, label: "Home" },
  { group: "Browse", icon: SearchIcon, label: "Discover" },
  { group: "Browse", icon: CompassIcon, label: "Made for you" },
  { group: "Collection", icon: LibraryIcon, label: "Your Library" },
] as const;

const ART = [
  "/images/gradients/green-dark.svg",
  "/images/gradients/blue.svg",
  "/images/gradients/purple.svg",
  "/images/gradients/orange.svg",
  "/images/gradients/rose.svg",
  "/images/gradients/amber.svg",
] as const;

export const TRACKS = [
  { artist: "Mira Vale", duration: "3:41", image: ART[0], title: "Afterglow" },
  {
    artist: "Northbound",
    duration: "3:08",
    image: ART[1],
    title: "Night Drive",
  },
  {
    artist: "Juniper Club",
    duration: "4:14",
    image: ART[2],
    title: "Velvet Static",
  },
  { artist: "Morrow", duration: "2:57", image: ART[3], title: "Safe Harbor" },
  {
    artist: "Kite Theory",
    duration: "3:29",
    image: ART[4],
    title: "Paper Planets",
  },
  {
    artist: "Lumen",
    duration: "3:52",
    image: ART[5],
    title: "Bloom in Reverse",
  },
] as const;

export const FEATURED_CHARTS = [
  { artist: "Mira Vale", image: ART[0], title: "Signal Bloom" },
  { artist: "Northbound", image: ART[1], title: "New Frequency" },
  { artist: "Juniper Club", image: ART[2], title: "Soft Focus" },
  { artist: "Morrow", image: ART[3], title: "Motion Studies" },
  { artist: "Kite Theory", image: ART[4], title: "Paper Planets" },
  { artist: "Lumen", image: ART[5], title: "Bloom in Reverse" },
] as const;

export const PLAYLISTS = [
  {
    image: ART[4],
    subtitle: "Juniper Club, Lumen, and more",
    title: "Reframed",
  },
  {
    image: ART[5],
    subtitle: "New music from your favourite corners",
    title: "Release Radar",
  },
  {
    image: ART[1],
    subtitle: "An unbroken current of electronic calm",
    title: "Deep Current",
  },
  {
    image: ART[2],
    subtitle: "Bright synths for a slower afternoon",
    title: "Soft Circuits",
  },
  {
    image: ART[0],
    subtitle: "Warm vocal hooks and late-night glow",
    title: "Afterglow Archive",
  },
] as const;

export const PODCASTS = [
  {
    episode: "The craft of the midnight mix",
    image: ART[2],
    show: "Signal / Noise",
    time: "38 min",
  },
  {
    episode: "Listening rooms and small venues",
    image: ART[3],
    show: "Side B",
    time: "46 min",
  },
  {
    episode: "The sound of new beginnings",
    image: ART[0],
    show: "First Light",
    time: "31 min",
  },
  {
    episode: "A guide to soft machines",
    image: ART[4],
    show: "Future Tense",
    time: "52 min",
  },
] as const;

export type NavigationItem = (typeof NAV_ITEMS)[number]["label"];
export type Track = (typeof TRACKS)[number];
