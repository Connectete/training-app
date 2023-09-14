/*
  Warnings:

  - You are about to drop the column `calorie` on the `Exercises` table. All the data in the column will be lost.
  - Added the required column `calorie` to the `ExirciseRecords` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exercises" DROP COLUMN "calorie";

-- AlterTable
ALTER TABLE "ExirciseRecords" ADD COLUMN     "calorie" INTEGER NOT NULL;
