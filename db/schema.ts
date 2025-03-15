import { sql } from 'drizzle-orm'
import { sqliteTable, text, integer, real, blob } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
    id: integer('id').notNull().primaryKey({ autoIncrement: true }),
    firstName: text('firstName').notNull(),
    lastName: text('lastName').notNull(),
    businessName: text('businessName').notNull(),
    location: text('location').notNull(),
    createdAt: text('createdAt').default(sql`(CURRENT_TIMESTAMP)`),
})

export const categories = sqliteTable('categories', {
    id: integer('id').notNull().primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    createdAt: text('createdAt').default(sql`(CURRENT_TIMESTAMP)`),
})

export const products = sqliteTable('products', {
    id: integer('id').notNull().primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    price: real('price').notNull(),
    stock: real('stock').notNull().default(0),
    image: text('image'),
    status: text('status').notNull().default('out-of-stock'),
    description: text('description').default('description'),
    categoryId: integer('categoryId')
        .notNull()
        .references(() => categories.id),
    createdAt: text('createdAt').default(sql`(CURRENT_TIMESTAMP)`),
})

export const sales = sqliteTable('sales', {
    id: integer('id').notNull().primaryKey({ autoIncrement: true }),
    products: text({ mode: 'json' }),
    status: text('status').notNull().default('incomplete'),
    createdAt: text('createdAt').default(sql`(CURRENT_TIMESTAMP)`),
})
