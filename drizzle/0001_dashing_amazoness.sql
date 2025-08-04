PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_cartItems` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`productId` integer NOT NULL,
	`noOfItems` integer DEFAULT 0 NOT NULL,
	`totalAmount` real DEFAULT 0 NOT NULL,
	`status` text DEFAULT 'incomplete' NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`productId`) REFERENCES `products`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_cartItems`("id", "productId", "noOfItems", "totalAmount", "status", "createdAt") SELECT "id", "productId", "noOfItems", "totalAmount", "status", "createdAt" FROM `cartItems`;--> statement-breakpoint
DROP TABLE `cartItems`;--> statement-breakpoint
ALTER TABLE `__new_cartItems` RENAME TO `cartItems`;--> statement-breakpoint
PRAGMA foreign_keys=ON;