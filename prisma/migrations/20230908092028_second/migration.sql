/*
  Warnings:

  - Added the required column `age` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `age` INTEGER NOT NULL;
