ALTER TABLE `categories` ADD `userId` integer NOT NULL REFERENCES users(id);--> statement-breakpoint
ALTER TABLE `checkoutItems` ADD `userId` integer NOT NULL REFERENCES users(id);--> statement-breakpoint
ALTER TABLE `products` ADD `userId` integer NOT NULL REFERENCES users(id);--> statement-breakpoint
ALTER TABLE `sales` ADD `userId` integer NOT NULL REFERENCES users(id);--> statement-breakpoint
ALTER TABLE `sales` ADD `status` text DEFAULT 'pending' NOT NULL;