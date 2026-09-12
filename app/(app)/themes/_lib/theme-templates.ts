export const COMPONENTS_SLUG = "components";

export const THEME_TEMPLATES = [
  {
    description: "A task manager preview built with Shark UI.",
    label: "Tasks",
    slug: "tasks",
    title: "Tasks theme",
  },
  {
    description: "A mail client preview built with Shark UI.",
    label: "Mail",
    slug: "mail",
    title: "Mail theme",
  },
  {
    description: "A music player preview built with Shark UI.",
    label: "Music",
    slug: "music",
    title: "Music theme",
  },
  {
    description: "An AI chat workspace preview built with Shark UI.",
    label: "Chat",
    slug: "chat",
    title: "Chat theme",
  },
  {
    description: "A business dashboard preview built with Shark UI.",
    label: "Dashboard",
    slug: "dashboard",
    title: "Dashboard theme",
  },
] as const;

export const getThemeTemplate = (slug: string) =>
  THEME_TEMPLATES.find((template) => template.slug === slug);
