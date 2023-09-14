/*
  Warnings:

  - You are about to drop the `ExirciseRecords` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ExirciseRecords" DROP CONSTRAINT "ExirciseRecords_exercise_id_fkey";

-- DropForeignKey
ALTER TABLE "ExirciseRecords" DROP CONSTRAINT "ExirciseRecords_user_id_fkey";

-- DropTable
DROP TABLE "ExirciseRecords";

-- CreateTable
CREATE TABLE "ExerciseRecords" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "exercise_id" INTEGER NOT NULL,
    "date" DATE NOT NULL,
    "time" INTEGER NOT NULL,
    "calorie" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "ExerciseRecords_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ExerciseRecords" ADD CONSTRAINT "ExerciseRecords_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseRecords" ADD CONSTRAINT "ExerciseRecords_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "Exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
