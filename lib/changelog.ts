import { source } from "@/lib/fumadocs";

export interface ChangelogPageData {
  /**
   * The description of the changelog page
   */
  description?: string;
  /**
   * The title of the changelog page
   */
  title: string;
}

export type ChangelogPage = ReturnType<typeof source.getPages>[number] & {
  date: Date | null;
};

const toChangelogDate = (date: string | undefined) =>
  date ? new Date(date) : null;

// Gets all changelog pages sorted by date descending.
export const getChangelogPages = () =>
  source
    .getPages()
    .filter((page) => page.slugs[0] === "changelog" && page.slugs.length > 1)
    .map((page) => ({
      ...page,
      date: toChangelogDate(page.data.date),
    }))
    .sort((a, b) => {
      const dateA = a.date?.getTime() ?? 0;
      const dateB = b.date?.getTime() ?? 0;
      return dateB - dateA;
    });
