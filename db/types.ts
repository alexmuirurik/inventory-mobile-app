import { cartItems, categories, products, sales, users } from './schema'
export * as schema from './schema'

export type User = typeof users.$inferSelect

export type Category = typeof categories.$inferSelect

export type Product = typeof products.$inferInsert

export type Sale = typeof sales.$inferInsert

export type CheckoutItem = typeof cartItems.$inferInsert
