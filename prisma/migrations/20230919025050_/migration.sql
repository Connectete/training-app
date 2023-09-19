/*
  Warnings:

  - A unique constraint covering the columns `[user_id,date]` on the table `ExerciseRecords` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ExerciseRecords_user_id_date_key" ON "ExerciseRecords"("user_id", "date");
