/*
  Warnings:

  - A unique constraint covering the columns `[user_id,date,exercise_id]` on the table `ExerciseRecords` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "ExerciseRecords_user_id_date_key";

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseRecords_user_id_date_exercise_id_key" ON "ExerciseRecords"("user_id", "date", "exercise_id");
