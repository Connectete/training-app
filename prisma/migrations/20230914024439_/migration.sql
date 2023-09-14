/*
  Warnings:

  - You are about to drop the column `date_time` on the `ExirciseRecords` table. All the data in the column will be lost.
  - Added the required column `date` to the `ExirciseRecords` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExirciseRecords" DROP COLUMN "date_time",
ADD COLUMN     "date" DATE NOT NULL;
