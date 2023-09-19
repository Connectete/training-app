/*
  Warnings:

  - You are about to drop the column `time` on the `ExerciseRecords` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ExerciseRecords" DROP COLUMN "time",
ADD COLUMN     "timeCount" INTEGER NOT NULL DEFAULT 0;
