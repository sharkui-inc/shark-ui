import {
  Diff,
  DiffContent,
  DiffHeader,
  DiffLine,
  DiffStats,
} from "@/registry/react/components/diff";

const Example = () => (
  <Diff className="max-w-lg">
    <DiffHeader title="src/lib/build-query.ts">
      <DiffStats added={2} removed={1} />
    </DiffHeader>
    <DiffContent>
      <DiffLine line={4} type="context">
        {"export function buildQuery(filters: QueryFilters) {"}
      </DiffLine>
      <DiffLine line={5} type="delete">
        {
          "  return `SELECT users.id, users.email, profiles.display_name FROM users JOIN profiles ON profiles.user_id = users.id WHERE users.email LIKE $1`;"
        }
      </DiffLine>
      <DiffLine line={5} type="add">
        {
          "  return `SELECT users.id, users.email, profiles.display_name, profiles.avatar_url, subscriptions.plan, subscriptions.status FROM users INNER JOIN profiles ON profiles.user_id = users.id LEFT JOIN subscriptions ON subscriptions.user_id = users.id WHERE users.created_at >= $1 AND users.email LIKE $2 ORDER BY users.created_at DESC LIMIT 50`;"
        }
      </DiffLine>
      <DiffLine line={6} type="add">
        {
          "  // Keep the generated SQL on one line so logs and tracers stay easy to grep."
        }
      </DiffLine>
      <DiffLine line={7} type="context">
        {"}"}
      </DiffLine>
    </DiffContent>
  </Diff>
);

export default Example;
