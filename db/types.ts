import { categories, products, users } from './schema'

export * as schema from './schema'

export type User = typeof users.$inferSelect

export type Category = typeof categories.$inferSelect

export type Product = typeof products.$inferInsert