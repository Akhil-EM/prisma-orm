/*
  Warnings:

  - Added the required column `test_title` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `posts` ADD COLUMN `test_title` VARCHAR(191) NOT NULL;
