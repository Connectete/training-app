/*
  Warnings:

  - You are about to drop the column `time` on the `ExerciseRecords` table. All the data in the column will be lost.
  - Added the required column `timeCount` to the `ExerciseRecords` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExerciseRecords" DROP COLUMN "time",
ADD COLUMN     "timeCount" INTEGER NOT NULL;
