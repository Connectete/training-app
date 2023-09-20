/*
  Warnings:

  - The primary key for the `Diets` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[user_id,date_time,type]` on the table `Diets` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Diets" DROP CONSTRAINT "Diets_pkey",
ADD CONSTRAINT "Diets_pkey" PRIMARY KEY ("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Diets_user_id_date_time_type_key" ON "Diets"("user_id", "date_time", "type");
