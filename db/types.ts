import { categories, checkoutItems, products, sales, users } from './zodSchemas'

export * as schema from './zodSchemas'

export type User = typeof users.$inferSelect

export type Category = typeof categories.$inferSelect

export type Product = typeof products.$inferInsert

export type Sale = typeof sales.$inferInsert

export type CheckoutItem = typeof checkoutItems.$inferInsert
