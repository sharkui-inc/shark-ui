import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopy,
  CodeBlockHeader,
} from "@/registry/react/components/code-block";

const Example = () => (
  <CodeBlock className="w-full max-w-lg" code={CODE} language="tsx">
    <CodeBlockHeader title="query.ts">
      <CodeBlockActions>
        <CodeBlockCopy />
      </CodeBlockActions>
    </CodeBlockHeader>
    <CodeBlockContent showLineNumbers />
  </CodeBlock>
);

const CODE = `export const sql = \`
  SELECT users.id, users.email, profiles.display_name, profiles.avatar_url, subscriptions.plan, subscriptions.status, subscriptions.renews_at
  FROM users
  INNER JOIN profiles ON profiles.user_id = users.id
  LEFT JOIN subscriptions ON subscriptions.user_id = users.id AND subscriptions.status = 'active'
  WHERE users.created_at >= $1 AND users.email LIKE $2
  ORDER BY users.created_at DESC, users.email ASC
  LIMIT 50 OFFSET $3
\`;

export function buildQuery(filters: QueryFilters) {
  return sql.replace("$1", filters.since).replace("$2", filters.email).replace("$3", String(filters.offset));
}`;

export default Example;
