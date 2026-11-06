interface DocSeoSource {
  aliases?: readonly string[];
  description?: string;
  seo?: {
    description: string;
  };
}

export interface DocSeo {
  description: string;
}

const citesAlias = (text: string, alias: string) =>
  text.toLowerCase().includes(alias.toLowerCase());

export const formatAlsoKnownAs = (aliases: readonly string[]) => {
  const [first, second, ...rest] = aliases;

  if (!first) {
    return "";
  }

  if (!second) {
    return `Also known as ${first}.`;
  }

  const last = rest.at(-1);

  if (rest.length === 0 || !last) {
    return `Also known as ${first} and ${second}.`;
  }

  const leading = [first, second, ...rest.slice(0, -1)].join(", ");

  return `Also known as ${leading}, and ${last}.`;
};

export const formatAliasDescription = (
  description: string,
  aliases: readonly string[]
) => {
  const missing = aliases.filter((alias) => !citesAlias(description, alias));
  const phrase = formatAlsoKnownAs(missing);

  if (!phrase) {
    return description;
  }

  if (!description) {
    return phrase;
  }

  return `${description} ${phrase}`;
};

export const getDocSeo = (doc: DocSeoSource): DocSeo => {
  const aliases = [...(doc.aliases ?? [])];

  return {
    description: formatAliasDescription(
      doc.seo?.description ?? doc.description ?? "",
      aliases
    ),
  };
};
