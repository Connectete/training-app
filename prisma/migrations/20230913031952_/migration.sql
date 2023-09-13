/*
  Warnings:

  - The primary key for the `Diaries` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `date_time` on the `Diaries` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Diaries` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id,date]` on the table `Diaries` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `Diaries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Diaries" DROP CONSTRAINT "Diaries_pkey",
DROP COLUMN "date_time",
DROP COLUMN "id",
ADD COLUMN     "date" DATE NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Diaries_user_id_date_key" ON "Diaries"("user_id", "date");
