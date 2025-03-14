import { categories, users } from './schema'

export * as schema from './schema'

export type User = typeof users.$inferSelect

export type Category = typeof categories.$inferSelect
