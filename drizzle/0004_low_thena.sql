PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
INSERT INTO `__new_categories`("id", "name", "createdAt") SELECT "id", "name", "createdAt" FROM `categories`;--> statement-breakpoint
DROP TABLE `categories`;--> statement-breakpoint
ALTER TABLE `__new_categories` RENAME TO `categories`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_checkoutItems` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`saleId` integer NOT NULL,
	`productId` integer NOT NULL,
	`noOfItems` integer DEFAULT 0 NOT NULL,
	`totalAmount` real DEFAULT 0 NOT NULL,
	`status` text DEFAULT 'incomplete' NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`saleId`) REFERENCES `sales`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_checkoutItems`("id", "saleId", "productId", "noOfItems", "totalAmount", "status", "createdAt") SELECT "id", "saleId", "productId", "noOfItems", "totalAmount", "status", "createdAt" FROM `checkoutItems`;--> statement-breakpoint
DROP TABLE `checkoutItems`;--> statement-breakpoint
ALTER TABLE `__new_checkoutItems` RENAME TO `checkoutItems`;--> statement-breakpoint
CREATE TABLE `__new_products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`price` real NOT NULL,
	`stock` real DEFAULT 0 NOT NULL,
	`image` text,
	`status` text DEFAULT 'out-of-stock' NOT NULL,
	`description` text DEFAULT 'description',
	`categoryId` integer NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_products`("id", "name", "price", "stock", "image", "status", "description", "categoryId", "createdAt") SELECT "id", "name", "price", "stock", "image", "status", "description", "categoryId", "createdAt" FROM `products`;--> statement-breakpoint
DROP TABLE `products`;--> statement-breakpoint
ALTER TABLE `__new_products` RENAME TO `products`;--> statement-breakpoint
CREATE TABLE `__new_sales` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
INSERT INTO `__new_sales`("id", "status", "createdAt") SELECT "id", "status", "createdAt" FROM `sales`;--> statement-breakpoint
DROP TABLE `sales`;--> statement-breakpoint
ALTER TABLE `__new_sales` RENAME TO `sales`;