/*
  Warnings:

  - The primary key for the `Goals` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Goals" DROP CONSTRAINT "Goals_pkey",
ADD CONSTRAINT "Goals_pkey" PRIMARY KEY ("user_id");
