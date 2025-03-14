import { categories, users } from "./schema";

export type User = typeof users.$inferSelect

export type Category = typeof categories.$inferSelect