import { type Config } from "drizzle-kit";

import { env } from "app/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["radshare_*"],
} satisfies Config;
