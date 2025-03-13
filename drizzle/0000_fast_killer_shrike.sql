CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`price` real NOT NULL,
	`stock` real DEFAULT 0 NOT NULL,
	`image` blob DEFAULT 'null',
	`status` text DEFAULT 'out-of-stock' NOT NULL,
	`categoryId` integer NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `sales` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`products` text,
	`status` text DEFAULT 'incomplete' NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`firstName` text NOT NULL,
	`lastName` text NOT NULL,
	`businessName` text NOT NULL,
	`location` text NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP)
);
