CREATE TABLE `checkoutItems` (
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
ALTER TABLE `sales` DROP COLUMN `products`;--> statement-breakpoint
ALTER TABLE `sales` DROP COLUMN `status`;