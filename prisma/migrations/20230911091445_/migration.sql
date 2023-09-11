/*
  Warnings:

  - You are about to drop the column `value` on the `Diaries` table. All the data in the column will be lost.
  - Added the required column `contents` to the `Diaries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Diaries" DROP COLUMN "value",
ADD COLUMN     "contents" TEXT NOT NULL;
